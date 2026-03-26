# 03 - CRM & Sales Templates

> 25+ Notion AI templates for lead tracking, sales pipelines, client onboarding, invoicing, and customer feedback.
> Every template includes database structures AND AI prompts that work with Notion AI or ChatGPT.

---

## Table of Contents

1. [Lead Tracking Database](#1-lead-tracking-database)
2. [AI Lead Scoring System](#2-ai-lead-scoring-system)
3. [Sales Pipeline Kanban](#3-sales-pipeline-kanban)
4. [AI Follow-Up Email Generator](#4-ai-follow-up-email-generator)
5. [Client Onboarding Checklist](#5-client-onboarding-checklist)
6. [AI Onboarding Personalization](#6-ai-onboarding-personalization)
7. [Invoice Tracker](#7-invoice-tracker)
8. [AI Payment Reminder Generator](#8-ai-payment-reminder-generator)
9. [Customer Feedback Database](#9-customer-feedback-database)
10. [AI Sentiment Analysis](#10-ai-sentiment-analysis)
11. [Contact Database (CRM Core)](#11-contact-database)
12. [Company/Account Database](#12-company-account-database)
13. [Deal Room Template](#13-deal-room-template)
14. [Sales Call Notes](#14-sales-call-notes)
15. [Proposal Tracker](#15-proposal-tracker)
16. [AI Proposal Writer](#16-ai-proposal-writer)
17. [Referral Tracker](#17-referral-tracker)
18. [Upsell/Cross-sell Tracker](#18-upsell-cross-sell-tracker)
19. [Churn Risk Dashboard](#19-churn-risk-dashboard)
20. [Sales Playbook Template](#20-sales-playbook-template)
21. [Competitive Battle Cards](#21-competitive-battle-cards)
22. [Meeting Scheduler & Prep](#22-meeting-scheduler-prep)
23. [Contract Tracker](#23-contract-tracker)
24. [Customer Success Scoreboard](#24-customer-success-scoreboard)
25. [AI Cold Outreach Generator](#25-ai-cold-outreach-generator)
26. [Sales Reporting Dashboard](#26-sales-reporting-dashboard)

---

## 1. Lead Tracking Database

**Type:** Database (Table + Board View)
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Lead Name | Title | -- |
| Company | Text | -- |
| Email | Email | -- |
| Phone | Phone | -- |
| Source | Select | Website, Referral, Social Media, Cold Outreach, Event, Content, Ad |
| Status | Select | New, Contacted, Qualified, Proposal Sent, Negotiating, Won, Lost |
| Lead Score | Number | 1-100 (AI-assisted) |
| Deal Value | Number | Estimated deal size |
| Next Action | Text | What to do next |
| Next Action Date | Date | -- |
| Owner | Person | Assigned salesperson |
| Tags | Multi-select | Enterprise, SMB, Startup, Agency, Freelancer |
| First Contact Date | Date | -- |
| Last Contact Date | Date | -- |
| Days in Pipeline | Formula | Now() - First Contact Date |
| Notes | Text | -- |
| Interactions | Relation | Links to Interactions database |

### Board View Setup
- Group by: Status
- Sort by: Lead Score (descending)
- Filter: Status is not Won or Lost

### AI Prompt: Lead Research Summary

```
Research this lead and create a summary I can use before reaching out.

Lead name: [Name]
Company: [Company name]
Job title: [Their role]
How they found us: [Source -- website form, referral, etc.]
Information they provided: [Any form data or initial message]

Generate:
1. Company overview (2-3 sentences -- what they do, size, industry)
2. Likely pain points based on their role and company type
3. How our product/service specifically solves their problem
4. Personalization hooks (something specific to mention in outreach)
5. Suggested opening message (email or LinkedIn)
6. Qualification questions to ask in first conversation
7. Estimated deal size based on company type
8. Priority level (Hot / Warm / Cold) with reasoning
```

### AI Prompt: Lead Qualification Checklist

```
Help me qualify this lead using the BANT framework.

Lead: [Name] at [Company]
What I know so far:
- [Any information from the form, email, or initial call]

Generate qualification questions for each BANT criterion:

**Budget:**
- 3 tactful questions to understand their budget without being pushy

**Authority:**
- 3 questions to determine if they're the decision-maker

**Need:**
- 3 questions to uncover their specific pain points and urgency

**Timeline:**
- 3 questions to understand their buying timeline

For each question, provide:
- The question itself
- Why to ask it (what you're really trying to learn)
- A red flag answer (indicates they're not qualified)
- A green flag answer (indicates they're a strong lead)
```

---

## 2. AI Lead Scoring System

**Type:** Page Template + Formula
**Difficulty:** Advanced
**AI Prompts:** 2

### Scoring Framework

```
# Lead Scoring Model

## Demographic Scoring (0-40 points)
| Factor | Criteria | Points |
|--------|----------|--------|
| Company size | Enterprise (1000+) | 15 |
| Company size | Mid-market (100-999) | 10 |
| Company size | Small (10-99) | 5 |
| Company size | Solo/Micro (1-9) | 2 |
| Job title | C-Suite / VP | 15 |
| Job title | Director / Manager | 10 |
| Job title | Individual Contributor | 5 |
| Industry fit | Core ICP industry | 10 |
| Industry fit | Adjacent industry | 5 |

## Behavioral Scoring (0-40 points)
| Factor | Criteria | Points |
|--------|----------|--------|
| Website visits | 5+ pages in one session | 10 |
| Pricing page | Visited pricing page | 10 |
| Content downloads | Downloaded resource | 5 |
| Email engagement | Opened 3+ emails | 5 |
| Demo request | Requested demo | 15 |
| Free trial | Started free trial | 15 |
| Social engagement | Engaged on social media | 5 |

## Engagement Scoring (0-20 points)
| Factor | Criteria | Points |
|--------|----------|--------|
| Response time | Replied within 24 hours | 10 |
| Response time | Replied within 1 week | 5 |
| Questions asked | Asked detailed questions | 5 |
| Referral | Came through referral | 10 |

## Score Interpretation
- 80-100: Hot lead -- contact within 1 hour
- 60-79: Warm lead -- contact within 24 hours
- 40-59: Nurture -- add to email sequence
- Below 40: Low priority -- monitor for signals
```

### AI Prompt: Lead Score Calculator

```
Score this lead based on available information.

Lead: [Name]
Company: [Company], [Size], [Industry]
Title: [Job title]
Source: [How they found us]
Behavior:
- [List any known behaviors: pages visited, content downloaded, emails opened, etc.]
Engagement:
- [Response time, questions asked, referral source, etc.]

Using a 100-point scale across Demographic (40pts), Behavioral (40pts), and Engagement (20pts), provide:
1. Score for each category with justification
2. Total lead score
3. Score interpretation (Hot / Warm / Nurture / Low Priority)
4. Missing information that would change the score
5. Recommended next action based on the score
```

### AI Prompt: Lead Scoring Model Builder

```
Help me build a lead scoring model for my business.

My product/service: [What you sell]
Price point: [Typical deal size]
Sales cycle: [Average time from lead to close]
Best customers (describe 3): [Profile of your best customers]
Worst leads (describe 3): [Profile of leads that never convert]

Generate:
1. Ideal Customer Profile (ICP) with weighted criteria
2. Demographic scoring factors and points (total: 40 pts)
3. Behavioral scoring factors and points (total: 40 pts)
4. Engagement scoring factors and points (total: 20 pts)
5. Score thresholds and recommended actions for each tier
6. Notion formula suggestion for auto-calculating scores
```

---

## 3. Sales Pipeline Kanban

**Type:** Database (Board View)
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Deal Name | Title | -- |
| Company | Relation | Links to Company database |
| Contact | Relation | Links to Contact database |
| Stage | Select | Discovery, Qualification, Proposal, Negotiation, Closed Won, Closed Lost |
| Deal Value | Number | Currency |
| Probability | Number | Percentage (auto-set by stage) |
| Weighted Value | Formula | Deal Value * Probability |
| Expected Close | Date | -- |
| Owner | Person | -- |
| Product/Service | Select | [Your offerings] |
| Next Step | Text | -- |
| Days in Stage | Formula | Days since stage last changed |
| Stale | Formula | If Days in Stage > 14, "Stale" |
| Lost Reason | Select | Price, Timing, Competitor, No Budget, No Response, Bad Fit |
| Notes | Text | -- |

### Probability by Stage (use in formulas)
- Discovery: 10%
- Qualification: 25%
- Proposal: 50%
- Negotiation: 75%
- Closed Won: 100%
- Closed Lost: 0%

### AI Prompt: Deal Strategy Advisor

```
Help me develop a strategy to close this deal.

Deal: [Deal name]
Company: [Company and what they do]
Contact: [Name and title of main contact]
Current stage: [Pipeline stage]
Deal value: [Amount]
Days in pipeline: [Number]
What's happened so far: [Brief history of interactions]
Their main concerns: [What they've expressed]
Competition: [Any competitors they're evaluating]

Provide:
1. Assessment of deal health (Strong / At Risk / Unlikely)
2. Top 3 objections they likely have (based on the context)
3. Rebuttal for each objection (specific to this deal)
4. Recommended next 3 actions (in priority order)
5. Email/message to send that moves the deal forward
6. Timeline recommendation (when to close or walk away)
7. Red flags to watch for
```

### AI Prompt: Pipeline Review Summary

```
Analyze my sales pipeline and provide strategic recommendations.

Active deals:
1. [Deal name] - Stage: [X] - Value: $[Y] - Days: [Z] - Next step: [Action]
2. [Deal name] - Stage: [X] - Value: $[Y] - Days: [Z] - Next step: [Action]
3. [Deal name] - Stage: [X] - Value: $[Y] - Days: [Z] - Next step: [Action]
4. [Deal name] - Stage: [X] - Value: $[Y] - Days: [Z] - Next step: [Action]
5. [Deal name] - Stage: [X] - Value: $[Y] - Days: [Z] - Next step: [Action]

Monthly target: $[Target]
Currently closed this month: $[Closed amount]
Days left in month: [Days]

Provide:
1. Pipeline health score (1-10)
2. Weighted pipeline value (total expected revenue)
3. Likelihood of hitting monthly target
4. Deals most likely to close this month (and why)
5. Stale deals that need attention or should be dropped
6. Gaps in the pipeline (which stages are thin)
7. Top 3 actions to prioritize this week
```

---

## 4. AI Follow-Up Email Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 4

### AI Prompt: After Discovery Call Follow-Up

```
Write a follow-up email after a discovery call.

Their name: [Name]
Their company: [Company]
Their role: [Title]
Key pain points discussed: [What they shared on the call]
Solution we proposed: [What we suggested]
Next step agreed on: [What was decided]
Something personal mentioned: [Small talk topic for personalization]

Write a follow-up email that:
1. Thanks them for their time
2. Summarizes the key pain points (shows you listened)
3. Restates how your solution addresses each pain point
4. Confirms the next step with a specific date/time
5. Includes the personal touch

Tone: Professional but warm. Under 200 words. No hard sell.
```

### AI Prompt: No Response Follow-Up Sequence

```
Write a 3-email follow-up sequence for a lead who hasn't responded.

Context:
- Lead name: [Name]
- Last interaction: [What happened -- meeting, email, proposal sent]
- Days since last contact: [Number]
- Deal value: [Amount]

Write 3 emails:

**Email 1 (Gentle nudge - send now):**
- Casual check-in referencing last conversation
- Add new value (insight, resource, or relevant news)
- Soft CTA

**Email 2 (Value add - send 4 days later):**
- Don't mention the silence
- Share something useful (case study, article, data)
- Restate the benefit of moving forward

**Email 3 (Break-up email - send 7 days later):**
- Acknowledge they're busy
- Give them an easy out ("If timing isn't right, no worries")
- Leave the door open

Each email: Under 150 words. Conversational tone. No guilt-tripping.
```

### AI Prompt: Post-Proposal Follow-Up

```
Write a follow-up email after sending a proposal.

Client: [Name] at [Company]
Proposal sent: [Date]
Proposal value: $[Amount]
Key differentiators in our proposal: [What makes us stand out]
Their decision timeline: [If mentioned]

Write an email that:
1. Doesn't ask "Did you get my proposal?" (they got it)
2. Highlights the #1 most compelling part of the proposal
3. Addresses the most common objection proactively
4. Creates subtle urgency without being pushy
5. Makes it easy to say yes (clear next step)

Under 150 words. Confident but not arrogant tone.
```

### AI Prompt: Win-Back Email

```
Write an email to re-engage a lost deal or cold lead.

Lead: [Name] at [Company]
Original deal: [What they were interested in]
Reason they didn't buy: [Price / Timing / Competitor / Unknown]
Time since last contact: [Weeks/Months]
What's changed since then: [New features, pricing, case study, etc.]

Write a re-engagement email that:
1. Acknowledges the time gap naturally
2. Leads with what's new or changed (relevant to their original objection)
3. Shares a relevant success story or data point
4. Makes it easy to re-engage (no pressure)
5. Has a clear but low-commitment CTA (reply, 15-min call, not "sign up now")

Under 150 words. Tone: Respectful, not desperate.
```

---

## 5. Client Onboarding Checklist

**Type:** Database + Page Template
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Client Name | Title | -- |
| Onboarding Stage | Select | Setup, Kickoff, Training, Handoff, Complete |
| Start Date | Date | -- |
| Target Completion | Date | -- |
| Progress | Formula | Checked items / Total items * 100 |
| Account Manager | Person | -- |
| Client Contact | Text | -- |
| Package/Plan | Select | [Your product tiers] |
| Notes | Text | -- |
| Health | Select | On Track, At Risk, Delayed |

### Page Template: Client Onboarding

```
# Onboarding: [Client Name]
**Start Date:** [Date]
**Account Manager:** [Name]
**Package:** [Plan name]

## Pre-Kickoff (Before Day 1)
- [ ] Contract signed and payment received
- [ ] Welcome email sent
- [ ] Internal team briefed on client needs
- [ ] Client portal/workspace set up
- [ ] Access credentials created and shared
- [ ] Kickoff meeting scheduled

## Kickoff Meeting (Day 1)
- [ ] Introductions completed
- [ ] Client goals and KPIs confirmed
- [ ] Communication preferences established (email, Slack, etc.)
- [ ] Meeting cadence agreed upon
- [ ] Timeline and milestones reviewed
- [ ] Quick win identified and assigned

## Setup Phase (Week 1)
- [ ] Account configured per client requirements
- [ ] Data migration started (if applicable)
- [ ] Integrations connected
- [ ] Custom settings applied
- [ ] Test run completed
- [ ] Client reviews and approves setup

## Training Phase (Week 2)
- [ ] Training session 1: Core features
- [ ] Training session 2: Advanced features
- [ ] Training materials/documentation shared
- [ ] Client team members have individual logins
- [ ] FAQ document created for client

## Handoff Phase (Week 3)
- [ ] Quick win delivered and celebrated
- [ ] Support process explained
- [ ] Escalation path documented
- [ ] 30-day check-in scheduled
- [ ] Feedback collected
- [ ] Onboarding marked complete

## Client Details
| Detail | Value |
|--------|-------|
| Company | [Company] |
| Main contact | [Name, email] |
| Billing contact | [Name, email] |
| Technical contact | [Name, email] |
| Timezone | [TZ] |
| Preferred communication | [Email / Slack / Phone] |
```

### AI Prompt: Welcome Email Writer

```
Write a client welcome email for a new customer.

Client name: [First name]
Company: [Company name]
Product/plan they purchased: [Plan name]
Their main goal: [Why they bought]
Account manager: [Your name]
Kickoff date: [Date]

Write a welcome email that:
1. Congratulates them on their decision (briefly, not over the top)
2. Sets expectations for what happens next (3-step process)
3. Includes what they need to prepare before kickoff
4. Shares your contact details and availability
5. Feels warm and professional (they should feel they made the right choice)

Under 250 words. Include a P.S. with a helpful resource or tip.
```

### AI Prompt: Onboarding Checklist Generator

```
Generate a customized onboarding checklist for this client.

Client: [Company name]
Industry: [Their industry]
Product: [What they bought from you]
Team size: [How many users]
Integration needs: [Tools they need to connect]
Data migration: [Yes/No, and scale if yes]
Technical sophistication: [Low / Medium / High]
Urgency: [Standard / Accelerated]

Generate a phase-by-phase checklist with:
1. Pre-kickoff tasks (what to prepare before day 1)
2. Week 1 tasks (setup and configuration)
3. Week 2 tasks (training and testing)
4. Week 3 tasks (handoff and documentation)
5. Post-onboarding tasks (30/60/90 day check-ins)

For each task, include:
- Task description
- Owner (client team or our team)
- Estimated time
- Dependencies (what must be done first)
```

---

## 6. AI Onboarding Personalization

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### AI Prompt: Personalized Onboarding Plan

```
Create a personalized onboarding plan for this client.

Client profile:
- Company: [Name, size, industry]
- Their goals: [What they want to achieve]
- Pain points: [What problems they're solving]
- Decision maker: [Name, role]
- Champion: [Internal advocate, if different]
- Technical level: [Beginner / Intermediate / Advanced]
- Previous tools they used: [What they're migrating from]
- Budget: [Plan tier]
- Urgency: [When they need to be up and running]

Generate:
1. Personalized onboarding timeline (adjusted for their urgency and complexity)
2. Custom training agenda (focus on features relevant to their use case)
3. Quick win plan (first valuable outcome they can achieve in week 1)
4. Risk factors for this onboarding (what could go wrong)
5. Success metrics (how we'll measure successful onboarding)
6. Personalized resource list (docs, videos, templates specific to their use case)
```

---

## 7. Invoice Tracker

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Invoice Number | Title | Format: INV-YYYY-001 |
| Client | Relation | Links to Client database |
| Amount | Number | Currency |
| Status | Select | Draft, Sent, Viewed, Paid, Overdue, Cancelled |
| Issue Date | Date | -- |
| Due Date | Date | -- |
| Payment Date | Date | -- |
| Days Overdue | Formula | If Status = Overdue: Now() - Due Date, else 0 |
| Payment Method | Select | Stripe, Wire, PayPal, Check |
| Description | Text | What the invoice is for |
| Tax | Number | Percentage or amount |
| Total | Formula | Amount + (Amount * Tax) |
| Recurring | Checkbox | -- |
| Next Invoice Date | Date | If recurring |

### AI Prompt: Invoice Description Writer

```
Write professional invoice line items for this work.

Client: [Client name]
Project: [Project name]
Work performed this period:
- [Task 1 and approximate hours]
- [Task 2 and approximate hours]
- [Task 3 and approximate hours]
Rate: [Hourly rate or project rate]

Generate invoice line items with:
1. Clear, professional descriptions (clients should understand what they're paying for)
2. Quantity and rate for each line item
3. Subtotal for each line
4. Project total

Make descriptions specific enough to justify the cost but concise enough for a clean invoice.
```

---

## 8. AI Payment Reminder Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 3

### AI Prompt: Friendly First Reminder (3 days overdue)

```
Write a friendly payment reminder email.

Client: [Name]
Invoice number: [Number]
Amount due: $[Amount]
Due date: [Date]
Days overdue: [Number]
Services provided: [Brief description]

Write a gentle reminder that:
1. Assumes the best (they probably just forgot)
2. References the invoice number and amount
3. Includes payment instructions or link
4. Offers to answer questions about the invoice
5. Stays warm and professional

Under 100 words. Subject line included.
```

### AI Prompt: Second Reminder (10 days overdue)

```
Write a firmer payment reminder email.

Client: [Name]
Invoice number: [Number]
Amount due: $[Amount]
Due date: [Date]
Days overdue: [Number]
Previous reminder sent: [Date]
Payment terms: [Net 30, etc.]

Write a follow-up reminder that:
1. References the previous reminder
2. States the overdue amount and new urgency clearly
3. Asks if there's an issue with the invoice
4. Mentions your payment terms
5. Provides a specific deadline for payment
6. Remains professional but direct

Under 120 words. Subject line included.
```

### AI Prompt: Final Notice (30+ days overdue)

```
Write a final payment notice email.

Client: [Name]
Invoice number: [Number]
Amount due: $[Amount]
Due date: [Original date]
Days overdue: [Number]
Previous reminders sent: [Dates]
Total outstanding balance: $[If multiple invoices]
Late fee policy: [If applicable]

Write a final notice that:
1. Clearly states this is a final notice before further action
2. Summarizes the payment history (original due date, reminders sent)
3. States the total amount including any late fees
4. Gives a final deadline (7 days)
5. Mentions next steps if payment isn't received (pause services, collections, etc.)
6. Offers one last chance to arrange a payment plan

Firm but professional. Under 150 words. Subject line included.
```

---

## 9. Customer Feedback Database

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Feedback | Title | Brief summary |
| Client | Relation | Links to Client database |
| Date | Date | -- |
| Source | Select | Survey, Email, Call, Social Media, Review Site, Support Ticket |
| Type | Select | Praise, Suggestion, Complaint, Bug Report, Feature Request |
| Sentiment | Select | Positive, Neutral, Negative |
| Product Area | Select | [Your product areas] |
| Priority | Select | High, Medium, Low |
| Status | Select | New, Reviewed, In Progress, Resolved, Won't Do |
| Full Feedback | Text | Complete feedback text |
| Response | Text | What we said back |
| Action Taken | Text | What we did about it |
| NPS Score | Number | 1-10 |

### AI Prompt: Feedback Categorizer

```
Categorize and analyze these customer feedback items.

Feedback items:
1. "[Feedback text 1]"
2. "[Feedback text 2]"
3. "[Feedback text 3]"
4. "[Feedback text 4]"
5. "[Feedback text 5]"

For each item, determine:
1. Type (Praise / Suggestion / Complaint / Bug Report / Feature Request)
2. Sentiment (Positive / Neutral / Negative) with confidence score
3. Product area it relates to
4. Priority (High / Medium / Low) based on severity and frequency
5. Key theme (1-3 words)
6. Suggested response (professional, empathetic, 2-3 sentences)
7. Suggested action (what to do about it)
```

### AI Prompt: Feedback Trends Report

```
Analyze these customer feedback items and identify trends.

Feedback from the last [30/60/90] days:
- [Summarize or list feedback items with their types and sentiments]

Total feedback count: [Number]
Breakdown: [X] positive, [Y] neutral, [Z] negative

Generate:
1. Top 3 themes in positive feedback (what customers love)
2. Top 3 themes in negative feedback (what needs fixing)
3. Most requested features (ranked by frequency)
4. Sentiment trend (improving, declining, stable)
5. Urgent issues requiring immediate attention
6. Strategic recommendations (3-5 actions to improve customer satisfaction)
7. Suggested customer communication (address top concerns publicly)
```

---

## 10. AI Sentiment Analysis

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### AI Prompt: Deep Sentiment Analysis

```
Perform sentiment analysis on this customer communication.

Customer message:
"[Paste the full customer email, review, or message]"

Analyze:
1. Overall sentiment: Positive / Neutral / Negative (with confidence %)
2. Emotional tone: [e.g., frustrated, appreciative, confused, angry, hopeful]
3. Urgency level: Low / Medium / High / Critical
4. Key concerns (list each specific issue mentioned)
5. Implied needs (what they didn't say but clearly want)
6. Churn risk: Low / Medium / High (based on language used)
7. Recommended response strategy:
   - Tone to use in reply
   - Key points to address
   - What to apologize for vs. what to stand firm on
   - Suggested response draft (2-3 paragraphs)
```

---

## 11. Contact Database (CRM Core)

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Full Name | Title | -- |
| Email | Email | -- |
| Phone | Phone | -- |
| Company | Relation | Links to Company database |
| Role | Text | -- |
| Type | Select | Lead, Customer, Partner, Vendor, Investor |
| Source | Select | Website, Referral, Event, Cold Outreach, Social |
| Last Contact | Date | -- |
| Next Follow-Up | Date | -- |
| Lifetime Value | Number | Currency |
| Tags | Multi-select | VIP, Decision Maker, Technical, Champion, Influencer |
| LinkedIn | URL | -- |
| Notes | Text | -- |
| Deals | Relation | Links to Deals database |
| Interactions | Relation | Links to Interactions log |

### AI Prompt: Contact Summary Generator

```
Create a brief contact summary I can review before a meeting.

Contact: [Name]
Company: [Company], [Role]
History with us:
- [First interaction date and context]
- [Key interactions since then]
- [Current deal status or relationship status]

Their interests/needs: [What they care about]
Our last conversation: [Summary]
Their communication style: [If known -- formal, casual, data-driven, etc.]

Generate a 1-minute briefing that includes:
1. Who they are and why they matter (2 sentences)
2. Relationship history highlights (3 bullet points)
3. Their current needs or pain points
4. What to reference from previous conversations (personalization hooks)
5. Suggested talking points for the upcoming meeting
6. One thing to avoid (if any sensitive history)
```

---

## 12. Company/Account Database

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Company Name | Title | -- |
| Industry | Select | [Industries you serve] |
| Size | Select | 1-10, 11-50, 51-200, 201-1000, 1000+ |
| Website | URL | -- |
| Location | Text | -- |
| Contacts | Relation | Links to Contact database |
| Deals | Relation | Links to Deals database |
| Annual Revenue | Number | If known |
| Account Status | Select | Prospect, Active, Churned, Partner |
| Account Owner | Person | -- |
| Contract Value | Number | Annual contract value |
| Renewal Date | Date | -- |
| Health Score | Number | 1-100 |
| Notes | Text | -- |

### AI Prompt: Account Research

```
Research this company and prepare an account brief.

Company: [Company name]
Website: [URL]
What I already know: [Any existing information]

Generate:
1. Company overview (what they do, size, funding stage if startup)
2. Industry and market position
3. Likely tech stack
4. Key decision makers to target (typical roles)
5. Potential use cases for our product: [Your product]
6. Estimated account value
7. Competitive landscape (who else might be selling to them)
8. Conversation starters (recent news, company milestones, or industry trends)
```

---

## 13-20: Sales Process Templates

### 13. Deal Room Template
A shared page template for major deals with mutual action plan, decision criteria, stakeholder map, and timeline. AI prompt generates customized deal room content based on the prospect.

### 14. Sales Call Notes
Database for logging calls with call type, outcome, follow-up actions, and AI-generated call summaries.

**AI Prompt: Sales Call Summary**
```
Summarize this sales call and extract next steps.

Call with: [Name] at [Company]
Call date: [Date]
Call duration: [Minutes]
Call purpose: [Discovery / Demo / Negotiation / Check-in]

My notes (rough):
[Paste your raw call notes]

Generate:
1. Call summary (5-7 bullet points of key discussion items)
2. Client's stated needs (in their words)
3. Objections raised (and how they were addressed)
4. Buying signals (positive indicators)
5. Red flags (negative indicators)
6. Commitments made (by both sides)
7. Next steps with dates
8. Deal stage recommendation (should we advance, hold, or retreat?)
```

### 15. Proposal Tracker
Database tracking all sent proposals: client, amount, date sent, follow-up dates, status, and win/loss analysis.

### 16. AI Proposal Writer

**AI Prompt: Proposal Generator**
```
Generate a proposal outline for this prospect.

Client: [Company name]
Contact: [Name, title]
Their problem: [What they need solved]
Our solution: [What we're proposing]
Budget range: [If discussed]
Timeline: [When they need it]
Competition: [Who else they're evaluating]

Generate a proposal with these sections:
1. Executive summary (their problem + our solution in 3 sentences)
2. Understanding of their needs (show we listened)
3. Proposed solution (what we'll deliver, in phases if applicable)
4. Timeline and milestones
5. Investment (pricing with clear deliverables per tier if applicable)
6. Why us (3 differentiators relevant to THIS client)
7. Case study summary (similar client success story)
8. Next steps (make it easy to say yes)
9. Terms and conditions summary

Tone: Confident, specific, value-focused. Not generic.
```

### 17. Referral Tracker
Database tracking referral sources, referred leads, conversion status, and referral rewards/thank-yous.

### 18. Upsell/Cross-sell Tracker
Database identifying upsell opportunities with current plan, recommended upgrade, trigger signals, and outreach status.

### 19. Churn Risk Dashboard
Database scoring client health with usage data, NPS scores, support tickets, and AI-generated retention recommendations.

**AI Prompt: Churn Prevention Plan**
```
Analyze this at-risk account and create a retention plan.

Client: [Company name]
Current plan: $[Amount]/month
Time as customer: [Months/years]
Warning signs:
- [Signal 1: e.g., "usage dropped 40% last month"]
- [Signal 2: e.g., "filed 3 support tickets in a week"]
- [Signal 3: e.g., "asked about cancellation policy"]

Generate:
1. Churn risk assessment (1-10) with reasoning
2. Most likely reason for potential churn
3. Immediate action (what to do today)
4. 30-day retention plan (week by week)
5. Value reinforcement talking points
6. Offer/incentive to consider (discount, free month, upgrade)
7. Save conversation script (what to say if they try to cancel)
```

### 20. Sales Playbook Template
Page template with your sales process, qualification criteria, objection handling scripts, email templates, and competitive positioning.

---

## 21-26: Advanced Sales Templates

### 21. Competitive Battle Cards

**AI Prompt: Battle Card Creator**
```
Create a competitive battle card against this competitor.

Our product: [Your product and key strengths]
Competitor: [Competitor name]
What they do well: [Their strengths]
Where they fall short: [Their weaknesses]
Price comparison: [Their pricing vs ours]
Typical prospect considering both: [Profile]

Generate:
1. Competitor overview (2 sentences)
2. Feature comparison table (10 key features, who wins each)
3. Their strengths (be honest -- credibility matters)
4. Their weaknesses (where we clearly win)
5. Objection handling: When prospect says "[Competitor] has [feature]"
6. Discovery questions that expose competitor weaknesses
7. Win themes (our top 3 differentiators for this matchup)
8. Customer stories (framework for relevant case studies)
9. Landmines to plant early in the sales process
```

### 22. Meeting Scheduler & Prep
Template for scheduling prospect meetings with pre-meeting research, agenda, and AI-generated preparation notes.

### 23. Contract Tracker
Database managing contracts: client, start/end dates, value, auto-renewal dates, terms, and AI-generated renewal reminders.

### 24. Customer Success Scoreboard
Dashboard tracking NPS, usage metrics, support satisfaction, and upsell revenue per account.

### 25. AI Cold Outreach Generator

**AI Prompt: Cold Email Writer**
```
Write a cold outreach email to this prospect.

Prospect: [Name], [Title] at [Company]
Company does: [What the company does]
Industry: [Their industry]
My product: [What I sell and the core benefit]
Why them specifically: [What triggered this outreach -- recent funding, job posting, company news, etc.]

Write a cold email that:
1. Opens with something specific to THEM (not a generic intro)
2. States the problem we solve in one sentence
3. Provides brief social proof (one line -- client name, result)
4. Has a clear, low-commitment CTA (not "book a demo")
5. Is under 100 words total
6. Has a subject line under 40 characters

Also provide:
- Follow-up email for 3 days later (if no reply)
- LinkedIn connection request message (under 300 characters)
```

### 26. Sales Reporting Dashboard
Page template with monthly/quarterly sales metrics: revenue, deals closed, pipeline value, conversion rates, and AI-generated executive summary.

**AI Prompt: Monthly Sales Report**
```
Generate a monthly sales report summary.

Month: [Month Year]
Revenue closed: $[Amount] (target: $[Target])
Deals closed: [Number] (target: [Number])
Average deal size: $[Amount]
Win rate: [X]%
Pipeline created: $[Amount]
Pipeline value (end of month): $[Amount]
Top deal: [Deal name] - $[Amount]
Lost deals: [Number] totaling $[Amount]
Top loss reason: [Reason]

Generate:
1. Executive summary (3 sentences: performance, trends, outlook)
2. Wins to celebrate
3. Concerns to address
4. Month-over-month comparison (if you provide last month's data)
5. Top 3 priorities for next month
6. Pipeline forecast for next month
```

---

*End of CRM & Sales Templates. For personal productivity templates, see 04-personal-productivity-templates.md.*
