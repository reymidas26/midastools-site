# Assessment Pitch Follow-Ups — Drafted 2026-05-01

**Status:** DRAFTED, not sent. Send only if no reply by May 6 (Hiedeh+Doug) or May 8 (Pham).
**Cadence basis:** outreach-followup-timing playbook (5-7 day window, fresh value hook, <6 sentences).

---

## Follow-up #1 — Hiedeh / Negar (Real Estate)

**Send via:** `.founder/tools/send-pitches.py` after editing PITCHES dict
**To:** hiedeh@tavassoli.com
**Send date:** 2026-05-06 (8 days after first send — gives Tuesday-after-weekend buffer)
**Subject:** Negar — quick follow-up + a free sample I made

```
Hi Hiedeh / Negar,

Following up on my note from last week about the AI Clarity Assessment.

I went ahead and rewrote one of your live MLS listings as a free sample so
you can see the "before/after" before deciding anything. It's a 1-page PDF —
takes 2 minutes to skim. Want me to send it?

If the timing's wrong, no worries — just say "later" and I'll quiet down.
If you want the sample, just reply with "send it" and it's in your inbox
within 4 hours.

— Armando
midastools.co/ai-audit
```

**Notes:**
- Specific concrete deliverable ("rewrote a live MLS listing") — not generic
- Asks for one-word reply (lowest friction)
- Time-bound delivery commitment (4 hours) signals seriousness
- "Later" exit ramp removes guilt

---

## Follow-up #2 — Doug Courter (Pastor/IT)

**To:** pastordoug@valleygrace.net
**Send date:** 2026-05-06
**Subject:** Doug — a sermon-prep AI workflow I built for you

```
Doug,

Following up on the assessment note from last week. I built a small
"sermon-prep AI workflow" using Claude that takes a passage reference +
your last 3 sermon transcripts and produces a 90% draft outline in your
voice — the kind of thing the assessment would normally surface.

Want me to send the workflow + a 5-min Loom showing how I'd run it on
this Sunday's sermon? Free, no strings.

Reply "send it" and I'll have it in your inbox before Friday.

— Armando
```

**Notes:**
- Concrete demo of WHAT the assessment would deliver, not abstract pitch
- "in your voice" hooks his sophistication (he's a tech-literate pastor, hates generic AI output)
- Friday delivery deadline = before next Sunday's sermon-prep cycle = practical urgency

---

## Follow-up #3 — Christopher Pham via C. Brannan (IP Law)

**To:** cbrannan@criterioncounsel.com
**Send date:** 2026-05-08 (10 days; legal/IP attorneys reply slower)
**Subject:** Christopher — sample demand letter we drafted

```
Hi —

Following up on the AI Operations Assessment note from April 28th.

I went ahead and drafted a sample demand letter using one of Criterion's
published takedown wins as the fact pattern (anonymized, of course). It's
the kind of artifact the assessment would help your firm produce at scale —
about 12 minutes of associate time replaced.

Happy to send it for review if you'd like to see the output before we
discuss the assessment itself. Reply "send it" and you'll have it within
a business day.

— Armando
midastools.co/ai-audit
```

**Notes:**
- Lower-touch, professional tone (matches IP litigation practice)
- "12 minutes of associate time" = concrete billable-rate math
- "Within a business day" = realistic for a senior-partner audience

---

# Reply-Handling Playbook

When ANY of the 3 pitches replies, response must go out within **30 minutes** if email arrives during waking hours, **<4 hours** if during my off-hours.

## Reply Type A: "Yes, I'm interested" / "Tell me more"

**Send within 30min:**
```
[NAME] — great to hear back.

The fastest path is a 20-minute discovery call to confirm the assessment
is the right shape for your specific workflows. Here's a calendar link:
[CALENDLY-OR-PLACEHOLDER]

If you'd rather skip the call and just buy:
midastools.co/ai-audit  → $997, 7 days, fully refundable until our
discovery call starts.

Either way, my next step.

— Armando
```

**Action:** Open `.founder/playbooks/discovery-call-script.md` + prep specific questions for their workflows.

---

## Reply Type B: "Send me the free sample first"

**Send within 30min:**
```
[NAME] — on it. You'll have the 1-page sample in your inbox within 4 hours
(I want to do this right, not fast).

— Armando
```

**Action:** Open `.founder/playbooks/ai-assessment-playbook.md` → execute the mini-assessment template below for ONE workflow they named. Cap at 4 hours total work. Deliver as PDF + email, link to /ai-audit at the bottom.

---

## Reply Type C: "Too expensive" / "$997 is too much"

**Send within 30min:**
```
[NAME] — fair. Two options:

1. The $997 covers a 7-day deep engagement + presentation-grade report. If
   that's overkill for your situation, I can do a focused $297 mini-audit
   on ONE workflow, delivered in 48 hours. Same priority-matrix + 4-day
   plan, narrower scope.

2. Or skip the paid path entirely and grab the free /audit-template — it
   has the 14 questions I run on every audit. DIY version, you do the work.

Either fine with me. Which fits?

— Armando
```

**Action:** If they take #1, I need to ship a $297 SKU on Stripe (not yet built — do it in <2h when they say yes). If #2, point them to /audit-template.

---

## Reply Type D: "Not now" / "Maybe later"

**Send within 30min:**
```
[NAME] — got it, no pressure. I'll keep you on the prompt-pack list and
quiet down on the assessment. If anything changes, my email's in the
header.

— Armando
```

**Action:** Mark prospect as "nurture" in tracking. Do NOT pitch again for 90 days.

---

## Reply Type E: Hostile / unsubscribe

**Send within 30min:**
```
Done — you're off all pitch lists. Apologies for the noise. The free tools
remain at midastools.co/tools if ever useful.

— Armando
```

**Action:** Add email to suppression list. Never pitch again.

---

# Free Mini-Assessment Template (4-hour delivery)

When Reply Type B fires, follow this template precisely. Cap effort at 4 hours.

## Page 1 (1 page max, designed in Pages or Notion-export-PDF):

### Header
> **AI Workflow Mini-Audit**
> [PROSPECT NAME] · [WORKFLOW THEY NAMED]
> Prepared by Armando, Midas Tools · [DATE]

### Section 1 — What I observed (3 bullets, 60 words)
- The workflow as you described it
- Where time is being spent (estimated hours/week)
- The handoff/decision point that's hardest to automate

### Section 2 — Recommended AI stack (table)
| Step | Current method | Recommended AI tool | Why this one | Setup time |
|---|---|---|---|---|
| 1 | ... | Claude / GPT-4o / Custom GPT / Zapier | ... | 15-60min |
| 2 | ... | ... | ... | ... |
| 3 | ... | ... | ... | ... |

### Section 3 — Quick-start (4 days)
- **Day 1:** Set up [tool], run on [specific input]
- **Day 2:** Refine prompt + add [verification step]
- **Day 3:** Test on 5 real cases, log time delta
- **Day 4:** Decide go/no-go on full automation

### Section 4 — The math
> If this saves you [N] hours/week × [their effective rate] × 50 weeks =
> **$[VALUE] of recovered annual capacity.**

### Footer
> The full $997 AI Clarity Assessment maps ALL your workflows like this,
> with a presentation-grade report, financial model, and 30 days of
> implementation support. → midastools.co/ai-audit
> Reply to this email if you want to talk about it.

---

## Mini-assessment delivery checklist (copy this into a TODO when triggered)

- [ ] Confirm specific workflow they named in their reply
- [ ] Research their public surface for 15 min (LinkedIn, site, recent posts) for context
- [ ] Draft Section 1 (what I observed)
- [ ] Pick 3 AI tools that ACTUALLY fit their tech-comfort level
- [ ] Compute the math using realistic effective rate (not aspirational)
- [ ] Export as PDF (not Google Doc — feels more professional)
- [ ] Send via email with subject: "[NAME] — your mini-audit (1 page)"
- [ ] Body: 2 sentences max + PDF attached
- [ ] Schedule a soft follow-up for 48 hours later asking "What landed? What didn't?"

**4-hour cap is non-negotiable.** Better a tight 1-page deliverable than a sprawling free audit that signals I have no paying customers.
