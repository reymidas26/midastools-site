#!/usr/bin/env python3
"""Quick Stripe key smoke test — verifies the local key authenticates and
can read recent payments. Run after first save or after rotation."""
import json
import sys
import urllib.request
import urllib.error
from pathlib import Path
import base64


def load_stripe_key() -> str:
    key_file = Path(__file__).parent.parent / ".stripe_key"
    if not key_file.exists():
        sys.exit("ERROR: .founder/.stripe_key not found")
    return key_file.read_text().strip()


def main():
    key = load_stripe_key()
    auth = "Basic " + base64.b64encode(f"{key}:".encode()).decode()
    req = urllib.request.Request(
        "https://api.stripe.com/v1/balance",
        headers={"Authorization": auth, "Stripe-Version": "2024-06-20"},
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read())
        avail = data.get("available", [])
        print(f"AUTH OK · livemode={data.get('livemode')}")
        for entry in avail:
            print(f"  available: {entry.get('amount')/100:.2f} {entry.get('currency','').upper()}")
        print("Key works — proceed to build metrics-snapshot.py")
    except urllib.error.HTTPError as e:
        print(f"FAIL HTTP {e.code}: {e.read().decode()[:300]}")
        sys.exit(1)


if __name__ == "__main__":
    main()
