# Broadcast — Mini-Audit Launch (Day 1, May 10)

**Status:** PRE-DRAFTED for May 10 ship-day. Hold until decision.
**Audience:** All 20-23 active subscribers (not just the 3 audit-pitch prospects).
**Send mechanism:** /api/nurture?broadcast=true OR `.founder/tools/send-pitches.py` adapted (1:many with template).
**Reply-to:** iam@armando.mx (same as audit pitches Apr 28).
**Send window:** Tuesday-Thursday 9am-11am buyer-local-time (highest open rates per Mailchimp 2025 industry benchmark).
**Tracking:** UTM-tagged Stripe link. utm_source=broadcast&utm_medium=email&utm_campaign=mini-audit-launch.

---

## Subject line — A/B test (split 10/10)

**Variant A (response-to-demand framing):**
`I built a $297 version of the audit a few of you asked about`

**Variant B (curiosity hook):**
`Are you using ChatGPT right? (5-page expert review, $297)`

**Variant C (price anchor framing):**
`The $997 audit, scoped down to $297 (async, 48 hours)`

> Pick the variant that wins reply rate at hour 24, send to remaining list.
> If all 3 underperform (≤1 reply or ≤1 click in 48h), cycle to Plan B (cold-outbound LinkedIn) per spec.

---

## Email body (variant A — primary)

```
Hey [FIRST NAME] —

Quick update from the Midas Tools desk.

Two weeks ago I shipped the $997 AI Clarity Assessment. Three of
you asked variations of: "love the idea, but $997 is more than I
need to spend on a sanity check — is there a smaller version?"

I built it.

The Mini-Audit is $297. Async (no call). 48-hour turnaround.
5-page personalized PDF telling you the three specific AI moves
to make THIS WEEK — with the exact tools, setup steps, and
ROI math.

Here's what's different from the $997:

  $997 Full Audit          $297 Mini-Audit
  ────────────────         ─────────────────
  60-min discovery call    12-question intake (5 min)
  15-25 page report        5 pages (every line earns it)
  30-min walkthrough       1 follow-up email at T+10 days
  7 days end-to-end        48 hours from intake → PDF
  Best for teams of 3+     Best for solo operators

Same analyst desk. Same methodology. Tighter scope.

If you upgrade to Implementation Lite ($1,500) within 30 days,
your $297 credits 100% toward it.

Get the Mini-Audit:
https://buy.stripe.com/PLACEHOLDER_PASTE_ON_SHIP_DAY?utm_source=broadcast&utm_medium=email&utm_campaign=mini-audit-launch

Page with full breakdown:
https://midastools.co/ai-mini-audit?utm_source=broadcast&utm_medium=email&utm_campaign=mini-audit-launch

Reply with one word ("send" or "questions") if you want me to
walk you through it before buying. Otherwise the page tells you
everything.

— Armando
Midas Tools | midastools.co
```

---

## Email body (variant B — curiosity hook)

```
Hey [FIRST NAME] —

Honest question: are you using ChatGPT right?

Most solo operators I talk to are doing 30% of what they could
be doing with AI — not because the tools are too complicated,
but because nobody's told them which 3 to set up FIRST and which
30 to ignore.

I just shipped a $297 Mini-Audit that fixes exactly that.

  → 12-question intake (5 minutes to complete)
  → 5-page personalized PDF in 48 hours
  → 3 specific AI moves you should make THIS WEEK
  → Tools, setup steps, and Year-1 ROI math
  → 30-day money-back if it's not specific to YOU

Same desk that does our $997 Clarity Assessment. Tighter scope.
For solo operators who want a clear answer fast.

Get it here:
https://buy.stripe.com/PLACEHOLDER_PASTE_ON_SHIP_DAY?utm_source=broadcast&utm_medium=email&utm_campaign=mini-audit-launch

Or read the page:
https://midastools.co/ai-mini-audit?utm_source=broadcast&utm_medium=email&utm_campaign=mini-audit-launch

If you'd rather chat first, just reply.

— Armando
Midas Tools | midastools.co
```

---

## Email body (variant C — price anchor)

```
Hey [FIRST NAME] —

Two weeks ago I launched a $997 AI Clarity Assessment for solo
coaches and consultants. It's working — but the most common
response was: "love the idea, smaller version?"

So I built one. Same desk, same methodology, scoped to $297.

What you get:
  ✓ 5-page personalized PDF (the format consultants charge $5K for)
  ✓ Top 3 AI moves for YOUR business — tools, steps, ROI math
  ✓ 12-question intake (no call)
  ✓ 48-hour turnaround from intake → PDF
  ✓ T+10-day follow-up nudge
  ✓ 30-day money-back

What you skip from the $997:
  − The 60-minute discovery call
  − 10 extra pages of context that don't change your decision
  − The 30-minute walkthrough call

If you decide later you want full implementation, your $297
credits 100% toward our $1,500 Implementation Lite tier.

Buy it:
https://buy.stripe.com/PLACEHOLDER_PASTE_ON_SHIP_DAY?utm_source=broadcast&utm_medium=email&utm_campaign=mini-audit-launch

Read the full breakdown:
https://midastools.co/ai-mini-audit?utm_source=broadcast&utm_medium=email&utm_campaign=mini-audit-launch

— Armando
Midas Tools | midastools.co

P.S. If you bought any of our prompt packs and felt "useful but
where do I start?", the Mini-Audit is the answer to that question.
```

---

## What to do day-of-send

1. Pre-send checklist (5 min):
   - [ ] Confirm Stripe link in MINI_AUDIT_URL is real (not the PLACEHOLDER)
   - [ ] Confirm `/ai-mini-audit` page is live on midastools.co (curl check)
   - [ ] Pick the winning variant (run A/B on first 10 sends if any uncertainty)
   - [ ] Verify reply-to = iam@armando.mx
   - [ ] Verify FROM domain has DKIM/SPF green
   - [ ] Send a test to iam@armando.mx first — eyeball render in Gmail/Outlook

2. Send (30 min staged):
   - 9:00am ET: Send to first 5 (early-EDT subs)
   - 9:30am ET: Send to next 5 (Central + Mountain US)
   - 10:00am ET: Send to next 5 (Pacific US)
   - 10:30am ET: Send to remaining (Asia/EU — accept that timing is suboptimal for them)

3. Monitor (T+0 to T+48h):
   - [ ] Watch iam@armando.mx for replies — fire `Reply-Handling Playbook` for any
   - [ ] Watch Stripe dashboard for `checkout.session.completed` events
   - [ ] Log each reply + each sale in `.founder/sales/audit-replies-tracker.md`

4. T+24h reply rate check:
   - 0 replies + 0 sales → consider re-sending with variant B/C subject line to non-openers
   - 1+ reply OR 1+ sale → keep monitoring, no follow-up needed

5. T+48h final check:
   - 0 sales after 20 sends = expected outcome at low conversion. Hit the kill criteria? See `.founder/plans/297-mini-audit-spec.md` section 10.
   - 1+ sale → execute mini-audit delivery (48hr SLA from intake-form completion)

---

## Reply templates (preempt the most likely 4 types)

### Type 1: "Send me more info"
> Reply within 30 min:
>
> Sure — here's the page with everything:
> https://midastools.co/ai-mini-audit
>
> Specifically:
> - 12-question intake (5-7 min) — sample at .founder/plans/mini-audit-intake-form.md
> - 5-page deliverable — sample format on the page
> - 48-hour turnaround from intake-form-completion
> - 30-day money-back if it's not specific to you
>
> Want me to walk you through a sample report? Reply yes and
> I'll send a redacted PDF from a similar buyer.

### Type 2: "I'm interested but $297 is still too much for me"
> Reply within 30 min:
>
> Honest answer: if $297 is your ceiling, the Mini-Audit isn't
> the right product for you yet. I'd rather you DIY this with
> our free tools than spend money you'd regret.
>
> Two free starting points:
> - Audit Template — same 14 questions we run on every audit:
>   https://midastools.co/audit-template
> - Prompt Enhancer — fixes 80% of "ChatGPT keeps giving me
>   generic answers" issues:
>   https://midastools.co/prompt-enhancer
>
> If you run those and want a pro reading after, that's when
> the Mini-Audit makes sense. No rush.

### Type 3: "Already bought $997 audit"
> Reply within 30 min:
>
> Already on it — your audit is in queue. The Mini-Audit is for
> a different buyer profile (solo, no-call, async). You're
> getting the bigger version.
>
> [Then handle their actual audit per existing playbook.]

### Type 4: "What's in the $997 that's not in this $297?"
> Reply within 30 min:
>
> Quick differences:
>
>   $997 = 60-min discovery call + 15-25 page report + 30-min
>          walkthrough + 7-day delivery. For teams 3+, more nuance.
>
>   $297 = 12-question async intake + 5-page report + T+10-day
>          follow-up email + 48-hour delivery. For solo operators
>          who want a clear answer fast.
>
> Same desk, same methodology. The $997 has more depth; the $297
> has the highest-leverage 80%.
>
> If you upgrade to Implementation Lite ($1,500) within 30 days
> after the Mini-Audit, your $297 credits 100% toward it.
>
> Want me to send a sample of each?

---

## Post-launch metrics to track (Day 1-30)

| Metric | Target | Where to check |
|---|---|---|
| Open rate | >40% (warm list) | Resend dashboard |
| Reply rate | >10% on first 20 | iam@armando.mx |
| Click rate to /ai-mini-audit | >15% | UTM in GA |
| Click rate to Stripe link | >5% | UTM in Stripe + GA |
| First sale (from broadcast) | T+0 to T+7 days | Stripe `checkout.session.completed` |
| 30-day sales total | ≥1 (Plan A baseline) ≥3 (Plan A success) | Stripe |

If 30-day total = 0, execute kill criteria from spec section 10.
