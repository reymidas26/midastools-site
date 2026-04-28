#!/usr/bin/env python3
"""Hourly metrics snapshot for the PMF tracking sprint.

Pulls:
  - Stripe payments (last 24h) + new customers (last 24h)
  - Subscriber count (from /api/status — currently fallback-cached at 20)
  - Site uptime (homepage + 3 high-traffic tool pages + tripwire page)

Compares to prior snapshot at .founder/state/metrics-last.json. Prints a
human-readable summary AND a one-line PING-WORTHY verdict.

Exit codes:
  0  = ran successfully, no signal worth pinging
  10 = SIGNAL: a new sale, new sub, or page down — worth Slacking Armando
  1  = error (script failed, don't trust output)

Hourly cron usage:
  python3 .founder/tools/metrics-snapshot.py
  if exit code == 10: read .founder/state/metrics-current.json + Slack the deltas

Manual usage:
  python3 .founder/tools/metrics-snapshot.py        # prints + writes snapshot
  python3 .founder/tools/metrics-snapshot.py --dry  # prints, doesn't update last
"""
from __future__ import annotations

import base64
import json
import sys
import time
import urllib.parse
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).parent.parent          # .founder/
STATE_DIR = ROOT / "state"
STATE_DIR.mkdir(exist_ok=True)
LAST_SNAP = STATE_DIR / "metrics-last.json"
CUR_SNAP = STATE_DIR / "metrics-current.json"

STATUS_URL = "https://www.midastools.co/api/status?key=mt-outreach-2026"
UPTIME_PAGES = [
    "https://www.midastools.co/",
    "https://www.midastools.co/tools",
    "https://www.midastools.co/starter-pack",
    "https://www.midastools.co/pet-portrait-generator",
    "https://www.midastools.co/ai-prompt-mega-pack",
]


def load_stripe_key() -> str:
    f = ROOT / ".stripe_key"
    if not f.exists():
        sys.exit("ERROR: .founder/.stripe_key not found")
    return f.read_text().strip()


def stripe_get(path: str, params: dict | None = None) -> dict:
    """Single-page Stripe GET. Caller handles pagination if needed."""
    key = load_stripe_key()
    qs = ("?" + urllib.parse.urlencode(params)) if params else ""
    req = urllib.request.Request(
        f"https://api.stripe.com/v1{path}{qs}",
        headers={
            "Authorization": "Basic " + base64.b64encode(f"{key}:".encode()).decode(),
            "Stripe-Version": "2024-06-20",
            "User-Agent": "midastools-metrics/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read())


def fetch_stripe_24h() -> dict:
    """Last 24h: charges + customers. Sums revenue, counts conversions per product."""
    since = int(time.time()) - 24 * 3600
    out = {
        "charges_24h": 0,
        "succeeded_24h": 0,
        "revenue_24h_cents": 0,
        "new_customers_24h": 0,
        "by_product": {},
        "last_payment": None,
        "fetched_at": datetime.now(timezone.utc).isoformat(),
    }
    try:
        # Recent charges (Stripe lets us filter by created.gte)
        ch = stripe_get("/charges", {"limit": 100, "created[gte]": since})
        for c in ch.get("data", []):
            out["charges_24h"] += 1
            if c.get("status") == "succeeded" and not c.get("refunded"):
                out["succeeded_24h"] += 1
                out["revenue_24h_cents"] += c.get("amount", 0)
                desc = (c.get("description") or "")[:80]
                out["by_product"][desc] = out["by_product"].get(desc, 0) + c.get("amount", 0)
                if not out["last_payment"] or c.get("created", 0) > out["last_payment"]["created"]:
                    out["last_payment"] = {
                        "id": c.get("id"),
                        "amount": c.get("amount"),
                        "currency": c.get("currency"),
                        "description": desc,
                        "created": c.get("created"),
                    }
        # Recent customers
        cu = stripe_get("/customers", {"limit": 100, "created[gte]": since})
        out["new_customers_24h"] = len(cu.get("data", []))
    except urllib.error.HTTPError as e:
        out["error"] = f"HTTP {e.code}: {e.read().decode()[:200]}"
    except Exception as e:
        out["error"] = f"{type(e).__name__}: {e}"
    return out


def fetch_subs() -> dict:
    """Hit /api/status, extract nested metrics.subscribers + recent emails."""
    try:
        req = urllib.request.Request(
            STATUS_URL,
            headers={"User-Agent": "midastools-metrics/1.0"},
        )
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read())
        metrics = data.get("metrics") or {}
        recent = [s.get("email", "") for s in (data.get("recentSubscribers") or [])]
        return {
            "count": metrics.get("subscribers", 0),
            "revenue_dollars": metrics.get("revenue", 0),
            "recent_emails": recent,
            "verdict": data.get("verdict", ""),
        }
    except Exception as e:
        return {"count": -1, "error": f"{type(e).__name__}: {e}"}


def fetch_uptime() -> dict:
    """HEAD the key pages, return {url: status_code}."""
    out = {}
    for url in UPTIME_PAGES:
        try:
            req = urllib.request.Request(
                url,
                method="HEAD",
                headers={"User-Agent": "midastools-metrics/1.0"},
            )
            with urllib.request.urlopen(req, timeout=10) as r:
                out[url] = r.status
        except urllib.error.HTTPError as e:
            out[url] = e.code
        except Exception as e:
            out[url] = f"err:{type(e).__name__}"
    return out


def diff(prev: dict | None, cur: dict) -> list[str]:
    """Build a human list of meaningful changes vs prior snapshot."""
    deltas = []
    if not prev:
        deltas.append("first snapshot — no prior to compare")
        return deltas

    # Stripe: any new succeeded payment is signal
    p_paid = (prev.get("stripe", {}) or {}).get("succeeded_24h", 0)
    c_paid = (cur.get("stripe", {}) or {}).get("succeeded_24h", 0)
    if c_paid > p_paid:
        delta_cents = (cur["stripe"]["revenue_24h_cents"] - prev["stripe"]["revenue_24h_cents"])
        deltas.append(f"💰 NEW SALE — {c_paid - p_paid} new succeeded payment(s), +${delta_cents/100:.2f}")
    elif c_paid != p_paid:
        deltas.append(f"stripe succeeded_24h changed: {p_paid} → {c_paid}")

    # Subs
    p_subs = (prev.get("subs", {}) or {}).get("count", 0)
    c_subs = (cur.get("subs", {}) or {}).get("count", 0)
    if c_subs > p_subs:
        deltas.append(f"📧 NEW SUB(S) — {c_subs - p_subs} new ({p_subs} → {c_subs})")
    elif c_subs < p_subs and c_subs >= 0 and p_subs >= 0:
        deltas.append(f"⚠️ sub count dropped: {p_subs} → {c_subs} (jsonblob may have evicted)")

    # Uptime
    p_up = prev.get("uptime", {}) or {}
    c_up = cur.get("uptime", {}) or {}
    for url, status in c_up.items():
        if status != 200:
            deltas.append(f"🛑 PAGE DOWN — {url} returned {status}")

    return deltas


def is_pingworthy(deltas: list[str]) -> bool:
    """Worth Slacking Armando about?"""
    triggers = ("NEW SALE", "NEW SUB", "PAGE DOWN")
    return any(any(t in d for t in triggers) for d in deltas)


def main():
    dry = "--dry" in sys.argv
    cur = {
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "stripe": fetch_stripe_24h(),
        "subs": fetch_subs(),
        "uptime": fetch_uptime(),
    }

    prev = None
    if LAST_SNAP.exists():
        try:
            prev = json.loads(LAST_SNAP.read_text())
        except Exception:
            prev = None

    deltas = diff(prev, cur)

    print(f"\n=== Metrics snapshot @ {cur['captured_at']} ===")
    s = cur["stripe"]
    print(f"  Stripe 24h: {s.get('succeeded_24h', 0)} sale(s), "
          f"${s.get('revenue_24h_cents',0)/100:.2f}, "
          f"{s.get('new_customers_24h', 0)} new customer(s)")
    if s.get("error"):
        print(f"    stripe error: {s['error']}")
    print(f"  Subs:       {cur['subs'].get('count', 'err')}")
    bad_pages = [(u, c) for u, c in cur["uptime"].items() if c != 200]
    if bad_pages:
        print(f"  Uptime:     {len(bad_pages)} bad")
        for u, c in bad_pages: print(f"    {c} {u}")
    else:
        print(f"  Uptime:     all {len(cur['uptime'])} pages 200 OK")

    print(f"\n--- deltas vs prior snapshot ---")
    for d in deltas: print(f"  {d}")

    # Always write current; only update LAST when not dry
    CUR_SNAP.write_text(json.dumps(cur, indent=2))
    if not dry:
        LAST_SNAP.write_text(json.dumps(cur, indent=2))

    if is_pingworthy(deltas):
        print(f"\n>> PING-WORTHY: yes — Slack Armando")
        sys.exit(10)
    print(f"\n>> ping-worthy: no")
    sys.exit(0)


if __name__ == "__main__":
    main()
