# AI Mini-Audit — 12-Question Intake Form

**Replaces:** the 60-min discovery call from the $997 Clarity Assessment
**Sent to buyer:** immediately on Stripe `checkout.session.completed` (via `/api/deliver-mini-audit`)
**Time to complete:** ~5-7 minutes
**Submission method:** plain reply to the delivery email; OR a Notion form if we build one (not blocking ship)
**Why 12 questions:** maps directly to the 5-page Mini-Audit template (Q1-Q3 → page 1 summary; Q4-Q6 → page 2 leverage points; Q7-Q9 → tool fit; Q10-Q12 → priorities + ROI math)

---

## EMAIL SUBJECT

`Your Mini-Audit intake — 5 minutes, please complete by [DATE+24h]`

## EMAIL BODY (intake delivery)

> Hey [NAME] —
>
> Thanks for buying the Mini-Audit. To deliver your 5-page report within 48 hours, I need you to spend 5-7 minutes on the 12 questions below. Be specific. The more concrete your answers, the more concrete my recommendations.
>
> Reply to this email with your answers (numbered 1-12). Or paste them into [Notion form] if you prefer.
>
> Optional but recommended:
> - Send 3 sample prompts you currently use with ChatGPT/Claude/etc.
> - Send 1 screenshot of a workflow you hate (no credentials — just the screen).
>
> 48-hour delivery clock starts when I receive your answers.
>
> — [Analyst name]
> Midas Tools | midastools.co/ai-mini-audit

---

## THE 12 QUESTIONS

### 1. Your business in one sentence
> *Imagine I'd never heard of you. Tell me what you do, who you do it for, and what they pay you.*

`<your answer>`

### 2. Your current revenue level
> *Pick one — we don't need exact numbers:*
- [ ] Pre-revenue / under $1K/mo
- [ ] $1K–$5K/mo
- [ ] $5K–$15K/mo
- [ ] $15K–$50K/mo
- [ ] $50K–$150K/mo
- [ ] $150K+/mo

### 3. The single biggest time-suck in your week
> *What activity, if it disappeared tomorrow, would give you the most relief? Be specific — "writing IG posts on Sunday night" beats "marketing." Bonus if you can give the rough weekly hour count.*

`<your answer>`

### 4. The expensive thing you're paying for that you suspect AI could replace
> *Could be a VA, contractor, software subscription, or even a habit. List as many as you want with rough monthly $.*

`<your answer>`

### 5. AI tools you've actually tried in the last 12 months
> *List them — even if you used the free tier once and never came back. Be honest about which ones stuck and which didn't.*

`<your answer>`

### 6. The thing that's been broken for 3+ months that you keep saying you'll fix
> *Every business has one. What's yours?*

`<your answer>`

### 7. Your honest hourly rate (or value-per-hour)
> *We use this for the Year-1 ROI math on page 5. Pick the number you'd pick if a contractor offered to do your work at that rate — would you take it?*

- [ ] $50/hr
- [ ] $75/hr
- [ ] $100/hr
- [ ] $150/hr
- [ ] $200/hr
- [ ] $300+/hr

### 8. Your current tool stack — name them
> *CRM, email tool, calendar, accounting/bookkeeping, project mgmt, design, writing. Just the names — we'll figure out the integrations.*

`<your answer>`

### 9. Team size — full-time or contract
> *Solo? Solo + VA? Solo + 2 contractors? Help us calibrate prescription complexity.*

`<your answer>`

### 10. Your Q3 priority — what's the next $50K of revenue going to come from?
> *Sales? More content? A new product? Retention? Helps us prioritize tools that move THAT needle, not generic productivity.*

`<your answer>`

### 11. Your honest AI fluency level (0–10)
- 0 = never used ChatGPT
- 5 = use ChatGPT regularly but never deployed an automation
- 10 = built and shipped an AI feature in production

> *No judgment — calibrates how prescriptive my recommendations need to be.*

`<your number>`

### 12. What would make this Mini-Audit a 10/10 for you?
> *In one paragraph: if you could design the perfect outcome from this report, what would you walk away with on Day 7 of implementing it?*

`<your answer>`

---

## OPTIONAL: 3 SAMPLE PROMPTS

> *Paste 3 prompts you currently use with ChatGPT/Claude/Gemini. Doesn't have to be your best — just representative. We'll use these to calibrate Tool #1's deep-dive on page 3.*

```
Prompt 1: <paste here>

Prompt 2: <paste here>

Prompt 3: <paste here>
```

---

## OPTIONAL: 1 WORKFLOW SCREENSHOT

> *Take a screenshot of one screen — your CRM dashboard, your calendar, your inbox, your project board — that represents a workflow you hate. No credentials, no client names. Just the shape of the friction. Attach to your reply.*

---

## ANALYST CHECKLIST (before drafting the report)

After buyer returns intake:

- [ ] Read all 12 answers + sample prompts + screenshot
- [ ] Visit the buyer's website + LinkedIn (5 min, just to verify scale + voice)
- [ ] Cross-check if they're an existing subscriber (`.founder/data/subscribers/`) — pull any prior intel
- [ ] Identify the 3 leverage points (one non-obvious, one obvious-in-hindsight, one strategic) — write them on a single piece of paper before opening the template
- [ ] Pick 3 tools (Tool #1 = highest hrs/wk-saved-per-hour-of-setup; Tools #2-3 = adjacencies)
- [ ] Verify each tool's pricing as of TODAY (web search — pricing pages change)
- [ ] Cap drafting time at 4 hours total (see template time-budget)
- [ ] If buyer's situation requires >4 hrs of analysis to do honestly, **refund** and offer the $997 instead

---

## SECURITY / PRIVACY

- We never ask for credentials, login info, payment data, or PHI
- Sample prompts and screenshots are reviewed by the analyst, not stored beyond report delivery
- After report is delivered + buyer accepts, intake form data is archived (read-only) for 90 days then deleted
- This applies regardless of buyer industry; for HIPAA/GDPR-sensitive industries we add explicit text in the report's footer
