# Paid Distribution — Go/No-Go Memo
**Date:** 2026-04-22 (Session 131, Soul research analyst)
**Decision deadline:** 2026-04-24 (bottleneck-severity escalation trigger)
**Supersedes:** paid-ads section of `subscriber-audience-ads-analysis-2026-04-17.md`

---

## Executive Summary

- **Verdict: 🟡 Run one narrow $50 paid test on Apr 24 IF referrer-data refresh confirms gists are indexed-but-starved, or IF no DFY pitch replies by EOD Apr 23.**
- **Do NOT run broad Meta Advantage+ yet.** We still fail 2 of the 3 preconditions (>100 subs, any LTV number). The Apr 17 "not yet" remains valid for broad campaigns.
- **What CHANGED since Apr 17:** We now have 10+ indexed pages, 1,820 impressions/mo in GSC, 13 UTM-tagged gists, global Stripe client_reference_id attribution, and a $9 tripwire live end-to-end. The funnel is measurable in a way it wasn't 5 days ago.
- **What did NOT change:** Still 23 subscribers. Still $0 revenue. Still 0 sales data to compute LTV. Still no conversion-rate baseline from gist traffic.
- **The right test is tactical not strategic:** a $50 Reddit promoted-post pointed at the Opus 4.7 gist (not our domain). Uses Reddit's search demand for "claude opus prompts" without competing against Google SERP.

---

## What we know now that we didn't on Apr 17

| Signal | Apr 17 | Apr 22 |
|---|---|---|
| Indexed pages | 2 | **10+** |
| Search impressions/mo | ~0 tracked | **1,820** |
| Gists live | 0 | **13 (all UTM-tagged)** |
| Paid product pages with visible samples | 0 | **3** ($97 mega, $29 image, $29 video) |
| Stripe attribution wired | no | **yes** (client_reference_id global) |
| Indexed-page CTR (avg) | n/a | **0.3%** (industry ~1.5% at pos 13) |
| Winner-page CTR | n/a | **2.1%** (meta-muse-spark) |
| DFY warm pitches in market | 0 | 4 (reply window Apr 22-24) |
| Directory follow-ups in market | 0 | 12 (reply window Apr 22-24) |

**Interpretation:** We now have a cold-start funnel with measurable surface area. The bottleneck diagnosis also shifted — Apr 17 was "conversion," today is "acquisition/CTR." Paid distribution is now a LEGITIMATE hypothesis test, not a shot in the dark.

---

## The 3 preconditions for paid (from Apr 17)

| Precondition | Status | Verdict |
|---|---|---|
| Proven landing-page conversion rate | ❌ No sales data | Still fails |
| >100 subs for lookalike seeding | ❌ 23 subs | Still fails |
| Any LTV number at all | ❌ $0 revenue | Still fails |

All 3 still fail. **But** — the Apr 17 memo implicitly assumed "paid = Meta Advantage+ optimized for purchases." That requires lookalikes + LTV. A **cheap traffic-only test** on a different platform (Reddit, Quora, Dev.to promoted) doesn't need ANY of those. Different question, different answer.

---

## The 4-channel $50-budget shortlist (ranked)

### Option A — Reddit promoted post on r/ClaudeAI or r/ChatGPT (🟢 recommended)

- **Budget:** $50 CPC-bid at $0.25 = ~200 clicks
- **Destination:** `gist.github.com/manduks/ccef0727...` (Opus 4.7 gist, NOT midastools.co)
- **Why gist not site:** Reddit users are allergic to marketing domains; gists are seen as "native content." Gist has 13 UTM-tagged CTAs to site so conversion still happens.
- **Success signal:** ≥1 sub OR ≥1 Stripe sale in 48h. If zero of both → kill paid entirely.
- **Risk:** Reddit promoted posts can be downvoted into oblivion. Quality control: post from an account with prior karma, not brand new.
- **Reddit audience match:** r/ClaudeAI = 200K+ subs, exactly our ICP for Claude Code Kit $39 and Mega Pack $97.

### Option B — Dev.to boosted post ($25 minimum) 🟡

- **Budget:** $25 (not $50 — smaller test)
- **Destination:** Cross-post the Opus 4.7 blog to Dev.to, boost it
- **Why:** We already have 47+ Dev.to posts and the domain authority transfers. Audience = developers = wallet.
- **Caveat:** Dev.to's ad product is weaker than Reddit's. Organic Dev.to reach may beat paid.

### Option C — X/Twitter ad on "Claude Opus 4.7" trending 🟡

- **Budget:** $50 CPM bid
- **Destination:** Same Opus 4.7 gist
- **Why:** Opus 4.7 launched Apr 16, still in the 10-day trending window. Paid impressions on a trending topic are cheap.
- **Caveat:** X ads require a brand account with track record — cold accounts get throttled.

### Option D — Meta Advantage+ 🔴 NOT RECOMMENDED

- Still fails all 3 preconditions from Apr 17. Revisit at 100+ subs.

---

## Success criteria (binary, pre-committed)

The $50 test KILLS broad paid if it fails. It GREENLIGHTS scaling to $500 if it wins.

| Outcome in 72h | Action |
|---|---|
| ≥3 subs AND ≥1 sale | Scale to $500 same-channel, retain attribution |
| ≥3 subs, 0 sales | Test passed traffic but funnel broken. Fix checkout, don't scale yet |
| 0-2 subs | Kill this channel. Try 1 different channel OR give up on paid until 100 subs |

---

## Recommendation

**On Apr 24 morning, check two things:**

1. **Any DFY pitch reply yes?** → skip paid, focus on delivering sample + closing
2. **Armando shipped referrer data + it shows gist traction?** → skip paid, double down on best gist topic organically

**If BOTH are no:** fire **Option A — Reddit promoted post to r/ClaudeAI, $50, 48h, gist destination.** Use pre-committed success criteria above. Do NOT fire Meta Advantage+ until 100+ subs.

**Confidence:** 🟡 moderate. This is a genuine experiment — we could be right that Reddit ICP match is strong, or we could discover Reddit users don't click promoted posts at all. Either answer is valuable.

---

## What blocks this

1. Armando needs to create a Reddit Ads account + put $50 card on file (15 min one-time setup)
2. Needs to approve the promoted post copy
3. Reddit requires brand account karma — may need to use Armando's personal account if @midastools has none

**Time to fire if Armando green-lights Apr 24:** ~30 minutes.

---

## What this memo is NOT recommending

- ❌ Facebook/Meta ads (preconditions still fail)
- ❌ Google Search ads (CPC > $2 in AI prompt keywords, burn rate too high for $50)
- ❌ LinkedIn sponsored posts (target CPM $40+, can't hit statistical significance at $50)
- ❌ Buying a sponsorship on an AI newsletter (min buy $500+, too much for first test)

The $50 test is deliberately narrow. If it works we scale. If it fails we don't.
