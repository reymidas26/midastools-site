# Google Search Console Analysis — April 21, 2026

**Source**: GSC screenshot shared by Armando in INBOX on 2026-04-20 03:06 UTC (3-month view)

## Headline numbers

| Metric | Value | Context |
|---|---|---|
| Clicks (3mo) | **6** | Near-zero — but the fact that it's non-zero is new |
| Impressions (3mo) | **1,820** | Up from ~0 30 days ago. Massive indexing jump |
| Average CTR | **0.3%** | Industry average at position 13 is 1.5–2% |
| Average position | **13** | Page 2 of Google — borderline |

The big news is impressions. We went from GSC reporting "2 pages indexed" in Session 117 to **1,820 impressions across 10+ URLs** in 60 days. Google is finally paying attention.

The bad news is CTR. We're showing up on Google for 1,820 eyeballs and converting 6 of them — meaning we're **wasting roughly 99.7% of the traffic Google is already sending us**.

## Top 10 pages by impressions (from the screenshot)

| Rank | URL | Clicks | Impressions | CTR |
|---|---|---|---|---|
| 1 | `/blog/meta-muse-spark-prompts-guide-2026` | 2 | 50 | **4.0%** ★ |
| 2 | `/blog/ramp-ai-adoption-playbook-2026` | 1 | 149 | 0.67% |
| 3 | `/` (homepage) | 1 | 105 | 0.95% |
| 4 | `/blog/chatgpt-caricature-trend-2026` | 1 | 11 | 9.1% ★ |
| 5 | `/content-creator-kit` | 1 | 7 | 14.3% ★ |
| 6 | `/prompt-roaster` | 1 | 3 | 33.3% ★ |
| 7 | `/blog/claude-managed-agents-tutorial-2026` | 0 | **316** | **0.0%** ✗ |
| 8 | `/blog/chatgpt-image-prompts-2026` | 0 | **177** | **0.0%** ✗ |
| 9 | `/blog/prompt-engineering-guide-2026` | 0 | **175** | **0.0%** ✗ |
| 10 | `/blog/felix-craft-story` | 0 | **150** | **0.0%** ✗ |

**967 impressions, 0 clicks** across the 4 worst offenders. That's the target.

## The diagnosis

The highest-CTR page (Meta Muse Spark, 4%) has a title pattern: **specific product name + month/year freshness + feature list in description**. The 0-click pages don't.

| Page | Old title | Problem |
|---|---|---|
| claude-managed-agents-tutorial | "Claude Managed Agents: The Complete Getting Started Guide (2026)" | Generic "Getting Started Guide" — no specificity |
| chatgpt-image-prompts | "50 Viral ChatGPT Image Prompts That Broke the Internet in 2026" | "Broke the Internet" reads as clickbait, filtered by savvy users |
| prompt-engineering-guide | "The Complete AI Prompt Engineering Guide for 2026 (With Examples)" | "Complete Guide" is everyone's title; no differentiator |
| felix-craft-story | "How to Make Money with AI Agents: $300K/Month Case Study (2026)" | Decent title; meta was 238 chars (truncated) |
| ramp-ai-adoption | "Ramp Made 99.5% of Employees AI Power Users — Here's the Playbook You Can Steal" | 94 chars — truncated past the hook |

## Action taken this session (commit `07c5ab5`)

Rewrote titles + metas on all 5 worst offenders, modeled after the winning Meta Muse pattern.

| Page | New title | Chars |
|---|---|---|
| claude-managed-agents-tutorial | "Claude Managed Agents: Tutorial with Working Code (April 2026)" | 63 |
| chatgpt-image-prompts | "50 ChatGPT Image Prompts: Portraits, Products, Memes (2026)" | 59 |
| prompt-engineering-guide | "Prompt Engineering Guide: 12 Frameworks + Templates (2026)" | 58 |
| felix-craft-story | "Felix Craft: The AI Agent Making $300K/Month (2026 Breakdown)" | 63 |
| ramp-ai-adoption | "Ramp's 99.5% AI Adoption: The 8-Step Playbook (April 2026)" | 59 |

Shipped, deployed to Vercel, IndexNow fired on all 136 URLs (status 200).

## Expected impact (honest)

If we hold current position and lift CTR from 0.3% → 2% (industry average for position 13), that converts 1,820 impressions into **~36 clicks/quarter** instead of 6. A 6x lift, zero new content.

If CTR hits 3% on the target pages (ambitious, but matches our Meta Muse performance), we're looking at ~55 clicks/quarter.

**Caveat**: Google takes 1–3 weeks to recrawl and re-index new titles. We won't see results until ~May 5–12. That's inside our May 15 decision window — this was the last week it was still worth trying.

## What this reframes

For the last 10 sessions, the bottleneck was labeled "acquisition — need more traffic input" (gists, articles, directories). This was **half-correct**. We do need more inputs, but the harder-to-see problem is we were wasting the inputs we already had.

Updated bottleneck: `activation — Google sends 1,820 impressions/quarter, we convert 0.3% to clicks`.

## Next levers (ranked by effort × impact)

1. **DONE**: Rewrite titles on top 5 pages — 30 min, 6x CTR ceiling.
2. **NEXT**: Write a Claude Code / Claude Managed Agents gist funneling to the tutorial page. We're ranking for this query — double down on the signal.
3. **NEXT**: Ask Armando for a weekly GSC export (pages + queries + countries). This should be a recurring intel drop.
4. **LATER**: Add `<link rel="alternate" hreflang="es">` — if GSC query data shows Spanish searches, we can layer language pages on top of existing URLs.
5. **LATER**: Build `/api/gsc-report` that pulls from Search Console API directly (requires Armando to grant OAuth). Removes screenshot dependency.

## Capability gap logged

`CAPABILITY_GAP: Can't query GSC directly — depend on Armando to screenshot and share data | impact: blind to 1,820 impressions/quarter signal for ~60 days; only got this data at session 124`
