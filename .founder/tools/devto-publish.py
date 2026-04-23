#!/usr/bin/env python3
"""
Publish a markdown file to dev.to/@midastools via the Dev.to API.

Usage:
    python3 .founder/tools/devto-publish.py <path-to-md>

The markdown file MUST include Dev.to frontmatter:
    ---
    title: "..."
    published: true
    description: "..."
    tags: tag1, tag2, tag3, tag4
    canonical_url: https://www.midastools.co/...
    ---

After POSTing, the script flips the draft to published (2-step is needed
because Dev.to's API treats body_markdown frontmatter `published: true`
as advisory, not authoritative).

Appends a log line to .founder/content/devto/PUBLISHED.md.

Requires DEVTO_API_KEY env var or file at .founder/.devto_token.
Uses a browser-like User-Agent — Dev.to blocks Python's default UA with 403.
"""

import json, os, sys, urllib.request, datetime

UA = "Mozilla/5.0 (compatible; midastools-bot; +https://www.midastools.co)"


def load_key():
    k = os.environ.get("DEVTO_API_KEY")
    if k:
        return k
    try:
        with open(".founder/.devto_token") as f:
            return f.read().strip()
    except FileNotFoundError:
        print("ERROR: set DEVTO_API_KEY env var or write to .founder/.devto_token", file=sys.stderr)
        sys.exit(1)


def api(method, path, key, body=None):
    req = urllib.request.Request(
        f"https://dev.to/api{path}",
        data=json.dumps(body).encode() if body else None,
        headers={
            "api-key": key,
            "Content-Type": "application/json",
            "Accept": "application/vnd.forem.api-v1+json",
            "User-Agent": UA,
        },
        method=method,
    )
    with urllib.request.urlopen(req, timeout=45) as resp:
        return resp.status, json.load(resp)


def publish(md_path):
    key = load_key()
    with open(md_path) as f:
        body = f.read()

    status, created = api("POST", "/articles", key, {"article": {"body_markdown": body}})
    if status != 201:
        raise RuntimeError(f"POST failed: {status}")
    aid = created["id"]

    status, live = api("PUT", f"/articles/{aid}", key, {"article": {"published": True}})
    if status != 200:
        raise RuntimeError(f"PUT failed: {status}")

    url = live.get("url")
    title = live.get("title")
    now = datetime.datetime.utcnow().isoformat(timespec="seconds") + "Z"

    with open(".founder/content/devto/PUBLISHED.md", "a") as log:
        log.write(f"- {now} | [{title}]({url}) | source: `{os.path.basename(md_path)}`\n")

    print(f"✅ Published #{aid}")
    print(f"   URL: {url}")
    print(f"   Canonical: {live.get('canonical_url')}")
    print(f"   Tags: {live.get('tag_list')}")
    print(f"   Reading time: {live.get('reading_time_minutes')} min")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__, file=sys.stderr)
        sys.exit(1)
    publish(sys.argv[1])
