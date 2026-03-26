# 06 - Freelancer & Agency Templates

> 25+ Notion AI templates for client management, proposals, time tracking, billing, deliverables, and portfolio showcase.
> Every template includes database structures AND AI prompts that work with Notion AI or ChatGPT.

---

## Table of Contents

1. [Client Portal Template](#1-client-portal-template)
2. [Client Database (Master CRM)](#2-client-database)
3. [Project Proposal Generator](#3-project-proposal-generator)
4. [AI Proposal Writer](#4-ai-proposal-writer)
5. [Time Tracking Database](#5-time-tracking-database)
6. [Billing & Invoice Manager](#6-billing--invoice-manager)
7. [Deliverables Tracker](#7-deliverables-tracker)
8. [Client Communication Log](#8-client-communication-log)
9. [AI Client Communication Generator](#9-ai-client-communication-generator)
10. [Portfolio Showcase Template](#10-portfolio-showcase-template)
11. [Service Packages Page](#11-service-packages-page)
12. [Project Kickoff Template](#12-project-kickoff-template)
13. [Scope of Work Generator](#13-scope-of-work-generator)
14. [Client Feedback System](#14-client-feedback-system)
15. [Contract & Agreement Tracker](#15-contract--agreement-tracker)
16. [Freelance Income Dashboard](#16-freelance-income-dashboard)
17. [Lead Pipeline for Freelancers](#17-lead-pipeline-for-freelancers)
18. [Testimonial Collector](#18-testimonial-collector)
19. [Rate Calculator](#19-rate-calculator)
20. [Project Post-Mortem](#20-project-post-mortem)
21. [Subcontractor Management](#21-subcontractor-management)
22. [Weekly Client Report Template](#22-weekly-client-report-template)
23. [AI Case Study Writer](#23-ai-case-study-writer)
24. [Tax & Expense Tracker](#24-tax--expense-tracker)
25. [Retainer Management Board](#25-retainer-management-board)
26. [Client Offboarding Template](#26-client-offboarding-template)

---

## 1. Client Portal Template

**Type:** Page Template (Duplicate per client)
**Difficulty:** Intermediate
**AI Prompts:** 1

### Page Structure

```
# [Client Name] - Client Portal

## Welcome
Welcome to your project hub, [Client Name]. Everything about our work together lives here.

**Your Account Manager:** [Name] | [Email] | [Phone]
**Project Start Date:** [Date]
**Current Phase:** [Phase name]

---

## Project Overview
**What We're Building:** [1-2 sentence project description]
**Timeline:** [Start] to [End]
**Investment:** $[Amount]

---

## Current Status

### Progress Bar
[X]% Complete

### What's Happening Now
[2-3 sentences about current work]

### This Week's Focus
- [Task 1]
- [Task 2]
- [Task 3]

### Upcoming Milestones
| Milestone | Date | Status |
|-----------|------|--------|
| [Milestone 1] | [Date] | Complete |
| [Milestone 2] | [Date] | In Progress |
| [Milestone 3] | [Date] | Upcoming |

---

## Deliverables
[Linked database view: Deliverables filtered to this client]

## Communication Log
[Linked database view: Communications filtered to this client]

## Files & Assets
[Folder with all project files organized by phase]

## Invoices
[Linked database view: Invoices filtered to this client]

## Feedback & Approvals
[Where the client can leave feedback on deliverables]

---

## Need Something?
- **Quick question:** Message me on [Slack/Email]
- **Meeting needed:** [Calendly link]
- **Emergency:** [Phone number]
```

### AI Prompt: Client Portal Updater

```
Write a client-facing project status update for their portal.

Client: [Client name]
Project: [Project name]
Current phase: [Phase]
Completed this week:
- [Task 1]
- [Task 2]
- [Task 3]
In progress:
- [Task 4]
- [Task 5]
Blockers:
- [Anything waiting on the client]
Next steps:
- [What happens next]
Overall progress: [X]%

Write a professional status update that:
1. Opens with the most exciting progress made
2. Lists completions clearly
3. Flags anything that needs the client's input (without nagging)
4. Previews what's coming next
5. Ends with a positive, forward-looking note

Tone: Professional, confident, transparent. Under 200 words.
The client should feel their project is in capable hands.
```

---

## 2. Client Database

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Client Name | Title | -- |
| Company | Text | -- |
| Contact Email | Email | -- |
| Contact Phone | Phone | -- |
| Status | Select | Lead, Active, Paused, Completed, Churned |
| Service Type | Multi-select | [Your services: e.g., Web Design, Branding, Content, SEO, Development] |
| Monthly Retainer | Number | If on retainer |
| Project Value | Number | Total project value |
| Lifetime Value | Rollup | Sum of all project values |
| Source | Select | Referral, Website, Social, Cold Outreach, Upwork, Event |
| Referred By | Text | -- |
| Start Date | Date | -- |
| Timezone | Select | PST, MST, CST, EST, GMT, CET, etc. |
| Communication Pref | Select | Email, Slack, WhatsApp, Zoom |
| Projects | Relation | Links to Projects database |
| Invoices | Relation | Links to Invoices database |
| Portal | URL | Link to their client portal page |
| NPS Score | Number | -- |
| Notes | Text | -- |

### AI Prompt: Client Relationship Summary

```
Generate a relationship summary for this client before our quarterly review.

Client: [Name] at [Company]
Working together since: [Start date]
Services we provide: [List services]
Total revenue from this client: $[Amount]
Projects completed: [Number]
Current project: [Name and status]
Communication style: [How they prefer to work with us]
Their satisfaction level: [NPS score or informal read]
Last feedback: [What they said]
Upsell potential: [Other services they might need]

Generate:
1. Relationship health score (1-10) with reasoning
2. Value delivered summary (what we've accomplished for them)
3. Opportunities for deeper partnership
4. Risks to the relationship (anything we should address)
5. Talking points for quarterly review (celebrate, propose, discuss)
6. Personalized gift or gesture idea (based on what we know about them)
```

---

## 3. Project Proposal Generator

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### Proposal Template

```
# Project Proposal: [Project Name]
**Prepared for:** [Client Name], [Company]
**Prepared by:** [Your Name], [Your Company]
**Date:** [Date]
**Valid until:** [Date + 30 days]

---

## Executive Summary
[2-3 sentences: the problem, your solution, the expected outcome]

---

## Understanding Your Needs
[Show the client you listened. Restate their goals and challenges in THEIR words. 3-4 paragraphs.]

## Proposed Solution
### Phase 1: [Phase Name] ([Duration])
- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]

### Phase 2: [Phase Name] ([Duration])
- [Deliverable 4]
- [Deliverable 5]
- [Deliverable 6]

### Phase 3: [Phase Name] ([Duration])
- [Deliverable 7]
- [Deliverable 8]

## Timeline
| Phase | Deliverables | Duration | Start | End |
|-------|-------------|----------|-------|-----|
| Phase 1 | [List] | [X weeks] | [Date] | [Date] |
| Phase 2 | [List] | [X weeks] | [Date] | [Date] |
| Phase 3 | [List] | [X weeks] | [Date] | [Date] |

## Investment

### Option A: [Package Name]
$[Amount]
Includes: [List what's included]

### Option B: [Package Name] (Recommended)
$[Amount]
Includes: [Everything in A plus...]

### Option C: [Package Name]
$[Amount]
Includes: [Everything in B plus...]

**Payment Terms:** [50% upfront, 50% on completion / Monthly billing / etc.]

## Why [Your Company]
1. [Differentiator 1 with evidence]
2. [Differentiator 2 with evidence]
3. [Differentiator 3 with evidence]

## Similar Work
[Link to 2-3 relevant case studies or portfolio pieces]

## What Happens Next
1. You choose your package and sign this proposal
2. We schedule a kickoff call within [X] business days
3. Work begins immediately

## Terms & Conditions
[Link to or summarize key terms: revisions, IP ownership, cancellation, etc.]

---

**Ready to get started?**
[CTA: Sign this proposal / Reply to confirm / Book a call to discuss]
```

### AI Prompt: Proposal Generator

```
Write a project proposal based on our discovery call.

My business: [Your company and services]
Client: [Their name and company]
Their problem: [What they need solved, in detail]
What we discussed on the call:
- [Key point 1]
- [Key point 2]
- [Key point 3]
- [Key point 4]
Their budget range: [If discussed]
Their timeline: [When they need it]
Competition: [Other agencies they're considering, if known]

Generate a complete proposal with:
1. Executive summary that makes them feel understood
2. "Understanding Your Needs" section (prove we listened)
3. Proposed solution broken into phases
4. Timeline with milestones
5. Three pricing options (good/better/best -- anchor to the middle)
6. Why choose us (3 specific differentiators relevant to THIS client)
7. What happens next (make it easy to say yes)

Tone: Confident, specific to their situation, not salesy. Show expertise through understanding, not bragging.
```

---

## 4. AI Proposal Writer

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 2

### AI Prompt: Proposal Pricing Strategy

```
Help me price this project and create tiered options.

Project type: [e.g., website redesign, brand identity, content strategy]
Estimated hours: [Your estimate]
My hourly rate: $[Rate]
Value to the client: [What this is worth to their business]
Client's budget: $[Range, if known]
Market rate for this work: $[Range]
My experience level: [Junior / Mid / Senior / Expert]

Generate:
1. Three pricing tiers:
   - Good: Minimum viable scope (what can you cut and still deliver value?)
   - Better: Full scope as discussed
   - Best: Premium scope with extras that wow them
2. For each tier: name, price, included deliverables, timeline
3. Pricing justification (how to explain the investment, not the cost)
4. Value framing (help me articulate the ROI)
5. Discount strategy (if they push back, what can I offer without devaluing my work)
6. Payment schedule recommendation
```

### AI Prompt: Proposal Follow-Up Sequence

```
Write a follow-up sequence after sending a proposal.

Client: [Name]
Proposal sent: [Date]
Project value: $[Amount]
Key selling point: [The #1 thing they seemed most excited about]
Main concern: [The #1 thing that might make them hesitate]

Write 4 follow-up touchpoints:

**Day 2: Casual check-in email**
Not "did you read it?" -- add value (share a relevant resource or insight)

**Day 5: Address the objection proactively (email)**
Tackle their likely concern before they bring it up

**Day 10: Social proof nudge (email)**
Share a brief case study or testimonial from a similar client

**Day 14: Decision catalyst (email or call)**
Create gentle urgency without pressure (schedule availability, timeline impact, etc.)

Each message: Under 100 words. Conversational. Never desperate.
```

---

## 5. Time Tracking Database

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Task | Title | What you worked on |
| Client | Relation | Links to Client database |
| Project | Relation | Links to Project database |
| Date | Date | -- |
| Hours | Number | Decimal (e.g., 1.5) |
| Rate | Number | Hourly rate for this client |
| Amount | Formula | Hours * Rate |
| Category | Select | Design, Development, Writing, Meeting, Admin, Research, Revisions |
| Billable | Checkbox | -- |
| Invoiced | Checkbox | Has this been billed? |
| Invoice | Relation | Links to Invoice database |
| Notes | Text | -- |

### Views

**By Client:** Group by Client, sum Hours and Amount
**By Date:** Calendar view for seeing daily allocation
**Uninvoiced:** Filter where Billable = true AND Invoiced = false
**This Week:** Filter to current week, group by Client

### AI Prompt: Time Tracking Analyzer

```
Analyze my time tracking data and provide business insights.

Time log for [period]:
Client A: [X] hours ([Y] billable, [Z] non-billable) - Rate: $[R]/hr
Client B: [X] hours ([Y] billable, [Z] non-billable) - Rate: $[R]/hr
Client C: [X] hours ([Y] billable, [Z] non-billable) - Rate: $[R]/hr

Total hours worked: [X]
Total billable hours: [Y]
Total revenue: $[Z]

Breakdown by activity:
- Design: [X] hours
- Development: [X] hours
- Meetings: [X] hours
- Admin: [X] hours
- Revisions: [X] hours

Analyze:
1. Effective hourly rate (total revenue / total hours worked): $[X]
2. Billable utilization rate (billable hours / total hours)
3. Which clients are most/least profitable?
4. Am I spending too much time on low-value activities?
5. Revision rate by client (who creates the most rework?)
6. Recommendations to increase revenue without working more hours
7. Clients I should consider raising rates for (and by how much)
8. Activities I should delegate, automate, or eliminate
```

---

## 6. Billing & Invoice Manager

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Invoice # | Title | Format: INV-2026-001 |
| Client | Relation | Links to Client database |
| Project | Relation | Links to Project database |
| Date Issued | Date | -- |
| Date Due | Date | -- |
| Amount | Number | Currency |
| Tax | Number | -- |
| Total | Formula | Amount + Tax |
| Status | Select | Draft, Sent, Viewed, Paid, Overdue, Cancelled |
| Payment Method | Select | Stripe, Bank Transfer, PayPal, Check |
| Payment Date | Date | When paid |
| Days to Pay | Formula | Payment Date - Date Issued |
| Time Entries | Relation | Links to Time Tracking entries |
| Line Items | Text | Description of work |
| Notes | Text | -- |

### AI Prompt: Invoice Summary Writer

```
Write professional invoice line items for this billing period.

Client: [Client name]
Billing period: [Start date] to [End date]
Project: [Project name]

Work completed:
- [Task 1]: [X hours]
- [Task 2]: [X hours]
- [Task 3]: [X hours]
- [Task 4]: [X hours]

Rate: $[X]/hour OR project phase: $[X]

Generate:
1. Professional line items for the invoice (clear descriptions that justify the cost)
2. A brief summary paragraph for the invoice email (what was delivered this period)
3. A highlight of value delivered (not just time spent, but outcomes)

Frame the invoice around value delivered, not just hours worked.
```

### AI Prompt: Late Payment Follow-Up Sequence

```
Write a 3-email sequence for a client with a late payment.

Client: [Name]
Relationship health: [Good / Okay / Strained]
Invoice: $[Amount]
Due date: [Date]
Days overdue: [Number]
Is this the first time they've been late? [Yes / No]
Other active projects with them: [Yes / No]

Write 3 emails:

**Email 1 (Friendly reminder, send now):**
Assume it slipped their mind. Brief, warm, includes invoice link.

**Email 2 (Firm follow-up, send 5 days later):**
Direct but professional. Reference the previous reminder. Mention your payment terms.

**Email 3 (Final notice, send 10 days later):**
Clear consequences (pausing work, no new projects until paid). But offer a payment plan option.

Critical: Maintain the relationship. These emails should be firm but never burn a bridge.
Each email under 100 words with a subject line.
```

---

## 7. Deliverables Tracker

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Deliverable | Title | -- |
| Client | Relation | Links to Client database |
| Project | Relation | Links to Project database |
| Phase | Select | [Your project phases] |
| Status | Select | Not Started, In Progress, Internal Review, Client Review, Revisions, Approved, Delivered |
| Due Date | Date | -- |
| Delivered Date | Date | -- |
| On Time | Formula | If Delivered Date <= Due Date, "Yes", else "No" |
| Revision Count | Number | -- |
| Assigned To | Person | -- |
| File | Files | Deliverable file |
| Client Feedback | Text | -- |
| Approval | Select | Pending, Approved, Changes Requested |

### Board View: Group by Status
### Table View: Group by Client, sort by Due Date

### AI Prompt: Deliverable Handoff Message

```
Write a professional deliverable handoff message for my client.

Client: [Name]
Deliverable: [What you're delivering]
Context: [Where this fits in the project]
What I want them to review: [Specific things to look at]
Decision needed: [What they need to approve or provide feedback on]
Deadline for feedback: [Date]

Write a handoff message that:
1. Presents the deliverable with confidence
2. Explains what they're looking at and how it addresses their goals
3. Provides specific review guidelines (what to focus on, what NOT to worry about yet)
4. Makes the feedback process easy (specific questions, not "what do you think?")
5. States the deadline for feedback and why it matters for the timeline
6. Includes a "what happens next" preview

Tone: Professional, organized, makes the client feel guided through the review.
Under 250 words.
```

---

## 8. Client Communication Log

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Subject | Title | -- |
| Client | Relation | Links to Client database |
| Date | Date | -- |
| Type | Select | Email, Call, Meeting, Slack, Text |
| Direction | Select | Sent, Received |
| Summary | Text | Brief summary of communication |
| Action Items | Text | -- |
| Follow-Up Date | Date | -- |
| Mood | Select | Positive, Neutral, Concerned, Frustrated |
| Attachments | Files | -- |

### AI Prompt: Communication Summary Writer

```
Summarize this client communication for my log.

Communication type: [Email / Call / Meeting]
With: [Client name]
Date: [Date]
Duration: [If call/meeting]

Raw notes or message:
[Paste the email, call notes, or meeting notes]

Generate:
1. One-line summary (for the database title field)
2. Key points discussed (3-5 bullets)
3. Client's mood/sentiment (Positive / Neutral / Concerned / Frustrated)
4. Action items for me (with deadlines)
5. Action items for the client (with deadlines)
6. Follow-up date recommendation
7. Anything between the lines (what they might be thinking but not saying)
```

---

## 9. AI Client Communication Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 4

### AI Prompt: Project Update Email

```
Write a weekly project update email for my client.

Client: [Name]
Project: [Project name]
This week's progress:
- [Completed task 1]
- [Completed task 2]
- [Completed task 3]
Next week's plan:
- [Planned task 1]
- [Planned task 2]
Anything blocked or needing their input:
- [Item waiting on them, if any]
Overall project status: [On track / Slightly behind / Ahead of schedule]

Write a professional, confident update that:
1. Leads with progress (what they care about)
2. Clearly states what needs their attention (if anything)
3. Previews next steps
4. Keeps them excited about the project
Under 150 words. Include subject line.
```

### AI Prompt: Scope Change Communication

```
Help me communicate a scope change to my client.

Original scope: [What was agreed upon]
Requested change: [What they want to add/change]
Impact on timeline: [How many extra days/weeks]
Impact on budget: [Additional cost]
Why this changes things: [Brief explanation]

Write a message that:
1. Acknowledges their request positively (don't make them feel bad for asking)
2. Explains the impact honestly and clearly
3. Presents options:
   - Option A: Add the change with extended timeline and cost
   - Option B: Replace something from original scope with this
   - Option C: Add it as a Phase 2 after the current project
4. Makes a recommendation
5. Asks for their preference

Tone: Helpful and transparent. They should feel informed, not punished.
Under 200 words.
```

### AI Prompt: Difficult Client Message

```
Help me craft a message for a difficult client situation.

Situation: [Describe what's happening -- e.g., they want unlimited revisions, they're behind on payments, they keep changing requirements, they're being rude to my team]

What I want to communicate: [Your key message]
What I want the outcome to be: [Your desired result]
Relationship status: [Want to keep them / Open to parting ways]
Contract says: [Relevant contract terms]

Write a message that:
1. Stays calm and professional (even if I'm frustrated)
2. States the facts without accusation
3. References the agreement/contract where relevant
4. Proposes a path forward
5. Sets clear boundaries without being adversarial
6. Gives them a face-saving way to agree

Under 200 words. Firm but fair. I want to resolve this, not escalate it.
```

### AI Prompt: Client Win/Thank You Message

```
Write a message to celebrate a project win with my client.

Client: [Name]
What we delivered: [Project/deliverable]
The result: [Metrics, outcomes, or impact if known]
Our working relationship: [How long, how it's been]

Write a message that:
1. Celebrates the achievement (make it about THEM and THEIR success)
2. Highlights the specific results or impact
3. Thanks them for being a great partner
4. Opens the door for future work (subtly, not salesy)
5. Asks for a testimonial or referral (naturally, not awkwardly)

Tone: Genuine, warm, specific. Not a form letter.
Under 150 words.
```

---

## 10. Portfolio Showcase Template

**Type:** Database + Page Templates
**Difficulty:** Intermediate
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Project Name | Title | -- |
| Client | Text | Client name (public-facing) |
| Service Type | Multi-select | [Your services] |
| Industry | Select | [Client industries] |
| Year | Select | 2024, 2025, 2026 |
| Featured | Checkbox | Show on main portfolio page |
| Cover Image | Files | Main project image |
| Result | Text | Key metric or outcome |
| Testimonial | Text | Client quote |
| Case Study | URL | Link to full case study |
| Tags | Multi-select | For filtering |

### Portfolio Case Study Template

```
# [Project Name] - [Client Name]

## The Challenge
[2-3 paragraphs: What problem did the client have? Why did they come to you?]

## The Approach
[2-3 paragraphs: What did you do? What was your strategy?]

## The Solution
[Show the work. Include images, screenshots, or descriptions of deliverables.]

### Deliverable 1: [Name]
[Image/description]

### Deliverable 2: [Name]
[Image/description]

## The Results
| Metric | Before | After | Change |
|--------|--------|-------|--------|
| [Metric 1] | [X] | [Y] | [+/- Z%] |
| [Metric 2] | [X] | [Y] | [+/- Z%] |

## Client Testimonial
> "[Client quote about working with you]"
> -- [Client Name], [Title], [Company]

## Key Takeaways
1. [Lesson 1]
2. [Lesson 2]
3. [Lesson 3]
```

### AI Prompt: Case Study Writer

```
Write a compelling portfolio case study from my project notes.

Client: [Name/Industry (anonymize if needed)]
Project type: [What you delivered]
Their challenge: [What they were struggling with before you]
What I did: [List your deliverables and process, even rough notes are fine]
Results: [Metrics, outcomes, client feedback]
Timeline: [How long the project took]
My role: [What specifically I contributed]

Write a case study with:
1. Compelling headline (result-focused, not "Client X Website Redesign")
2. The Challenge (tell their story, make the reader relate)
3. The Approach (show strategic thinking, not just execution)
4. The Solution (describe deliverables with enough detail to impress prospects)
5. The Results (metrics front and center, before/after if possible)
6. Testimonial placeholder (suggest what to ask the client for a quote)
7. Key takeaway (the universal lesson from this project)

Write for a potential client who has a similar problem. Show them what working with me looks like.
```

---

## 11. Service Packages Page

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### Template

```
# Services & Pricing

## [Service Category 1: e.g., Web Design]

### Starter - $[X]
Best for: [Who this is for]
Includes:
- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]
Timeline: [X weeks]
Revisions: [X rounds]

### Professional - $[X] (Most Popular)
Best for: [Who this is for]
Everything in Starter, plus:
- [Additional deliverable]
- [Additional deliverable]
- [Additional deliverable]
Timeline: [X weeks]
Revisions: [X rounds]

### Premium - $[X]
Best for: [Who this is for]
Everything in Professional, plus:
- [Additional deliverable]
- [Additional deliverable]
Timeline: [X weeks]
Revisions: [Unlimited]
Includes: [Extra perks -- priority support, strategy session, etc.]

## Add-Ons
- [Add-on 1]: $[X]
- [Add-on 2]: $[X]
- [Add-on 3]: $[X]

## Retainer Packages
- [X hours/month]: $[Amount] (save [X]% vs hourly)
- [X hours/month]: $[Amount] (save [X]% vs hourly)

## FAQ
[Common pricing questions]
```

### AI Prompt: Service Package Designer

```
Help me design tiered service packages.

My services: [What I offer]
My hourly rate: $[Rate]
My typical projects: [Describe 2-3 common project types]
My target clients: [Who I serve -- small business, startup, enterprise]
Average project value: $[Current average]
What competitors charge: $[Range, if known]

Design 3 tiered packages for my primary service:

For each tier:
1. Package name (not just Good/Better/Best -- something memorable)
2. Price (with pricing psychology rationale)
3. Who it's for (specific client type)
4. Included deliverables (be specific)
5. Timeline
6. Number of revisions
7. What's NOT included (to set clear expectations)

Also suggest:
- 3-5 add-ons with pricing
- A retainer option
- Pricing for the anchor effect (make the middle tier the obvious choice)
- How to present this to clients (verbally and in writing)
```

---

## 12. Project Kickoff Template

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### Template

```
# Project Kickoff: [Project Name]
**Client:** [Client Name]
**Date:** [Kickoff Date]
**Attendees:** [Names]

## Project Summary
- **Objective:** [One sentence]
- **Deliverables:** [List]
- **Timeline:** [Start] to [End]
- **Budget:** $[Amount]

## Kickoff Agenda
1. Introductions (5 min)
2. Project goals and success criteria (10 min)
3. Scope review and confirmation (10 min)
4. Timeline and milestones (10 min)
5. Communication plan (5 min)
6. Questions and next steps (10 min)

## Communication Plan
| What | How | Frequency | Who |
|------|-----|-----------|-----|
| Status updates | Email | Weekly (Fridays) | Me to Client |
| Quick questions | [Slack/Email] | As needed | Both |
| Review meetings | Zoom | [Bi-weekly] | Both |
| Deliverable review | Client portal | Per milestone | Client |

## Client Responsibilities
- [ ] [What they need to provide -- content, assets, access, etc.]
- [ ] [Feedback turnaround time: X business days]
- [ ] [Approval process: who approves what]

## Our Responsibilities
- [ ] [What we'll deliver and when]
- [ ] [Communication commitments]
- [ ] [Quality standards]

## Success Criteria
How we'll know this project is a success:
1. [Criterion 1]
2. [Criterion 2]
3. [Criterion 3]

## Action Items from Kickoff
| Action | Owner | Due |
|--------|-------|-----|
| [Action 1] | [Name] | [Date] |
| [Action 2] | [Name] | [Date] |
```

### AI Prompt: Kickoff Agenda Generator

```
Create a project kickoff agenda and talking points.

Project: [Project name and description]
Client: [Client name, company, attendees]
Project value: $[Amount]
Timeline: [Duration]
Key concerns from sales process: [Any worries the client expressed]
My team attending: [Names and roles]

Generate:
1. Customized kickoff agenda with time allocations
2. Talking points for each agenda item
3. Questions to ask the client during kickoff
4. Expectations to set (deadlines, communication, feedback)
5. Potential concerns to address proactively
6. Kickoff follow-up email template (send same day)
```

---

## 13. Scope of Work Generator

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### AI Prompt: SOW Writer

```
Write a Scope of Work (SOW) document.

Project: [Project name]
Client: [Client name]
Services: [What we're providing]
Our discussion notes: [Key points from discovery/sales]
Timeline: [Project duration]
Budget: $[Amount]
Payment terms: [How payments are structured]

Generate a professional SOW with:
1. Project overview and objectives
2. Detailed scope (what IS included, specific deliverables with quantities)
3. Out of scope (what is NOT included -- be explicit)
4. Project phases and milestones with dates
5. Client responsibilities (what we need from them and when)
6. Revision and feedback process (number of rounds, turnaround time)
7. Acceptance criteria (how deliverables are approved)
8. Timeline (visual if possible, or table format)
9. Payment schedule tied to milestones
10. Change order process (how scope changes are handled and billed)
11. Termination clause (how either party can end the project)

This should protect both parties while keeping the relationship collaborative.
```

---

## 14-20: Client Management Templates

### 14. Client Feedback System
Database collecting per-deliverable and per-project feedback with ratings, comments, and AI sentiment analysis.

### 15. Contract & Agreement Tracker
Database managing contracts: client, type (project/retainer), value, start/end dates, renewal dates, key terms, and document files.

### 16. Freelance Income Dashboard

**Dashboard Layout:**
```
# Freelance Income Dashboard - [Year]

## Year at a Glance
- Total Revenue YTD: $[X]
- Monthly Average: $[X]
- Best Month: [Month] - $[X]
- Active Clients: [X]
- Effective Hourly Rate: $[X]
- Income Goal Progress: [X]% of $[Target]

## Monthly Revenue (Linked View)
[Revenue by month, bar chart mental model]
| Month | Revenue | Target | Status |
|-------|---------|--------|--------|
| Jan | $X | $Y | [Met/Missed] |
| Feb | $X | $Y | [Met/Missed] |
...

## Revenue by Client (Linked View)
[Pie chart mental model -- which clients generate most revenue]

## Revenue by Service Type
[Which services are most profitable]

## Accounts Receivable
[Unpaid invoices -- total outstanding]

## Pipeline
[Proposals sent -- potential future revenue]
```

### 17. Lead Pipeline for Freelancers
Simplified CRM board: Inquiry, Discovery Call, Proposal Sent, Negotiating, Won, Lost.

### 18. Testimonial Collector

**AI Prompt: Testimonial Request Email**
```
Write an email requesting a testimonial from a happy client.

Client: [Name]
Project we completed: [What we delivered]
Results they achieved: [Metrics or outcomes]
How long we've worked together: [Duration]
Where I'll use the testimonial: [Website, LinkedIn, proposals]

Write a request that:
1. Thanks them for the partnership
2. Mentions the specific results as a reminder of the value
3. Makes it EASY to say yes (provide guiding questions, not an open-ended ask)
4. Offers to draft something they can edit (reduces their effort to near zero)
5. Asks permission to use their name, title, and company

Include 3-5 guiding questions they can answer:
- What was your challenge before working with me?
- What results did you see?
- What would you say to someone considering hiring me?
- Was there anything that exceeded your expectations?

Under 200 words. Warm, not transactional.
```

### 19. Rate Calculator

**Template:**
```
# Rate Calculator

## Your Numbers
- Annual income goal: $[X]
- Annual business expenses: $[X]
- Annual taxes (estimated %): [X]%
- Vacation weeks: [X]
- Sick/personal days: [X]
- Non-billable time (%): [X]% (admin, marketing, etc.)

## Calculation
- Working weeks per year: 52 - [vacation] - [sick] = [X]
- Billable hours per week: 40 * (1 - non-billable %) = [X]
- Annual billable hours: [X weeks] * [X hours] = [X]
- Revenue needed: (Income goal + Expenses) / (1 - Tax rate) = $[X]
- Hourly rate: Revenue needed / Annual billable hours = $[X]/hr

## Rate Card
- Hourly rate: $[X]
- Half-day rate (4 hours): $[X]
- Full-day rate (8 hours): $[X] (10% discount)
- Weekly rate: $[X] (15% discount)
- Monthly retainer (20 hrs): $[X] (20% discount)

## Project Pricing Guide
- Small project (under 20 hours): $[X minimum]
- Medium project (20-60 hours): $[X-Y range]
- Large project (60+ hours): $[X-Y range]
```

### 20. Project Post-Mortem

**AI Prompt: Project Retrospective**
```
Help me conduct a project post-mortem.

Project: [Project name]
Client: [Client name]
Project value: $[Amount]
Timeline: Planned [X weeks], Actual [Y weeks]
Budget: Planned $[X], Actual $[Y]
Deliverables: [List what was delivered]
Client satisfaction: [Rating or feedback]

What went well:
- [Item 1]
- [Item 2]
- [Item 3]

What went wrong:
- [Item 1]
- [Item 2]

Surprises:
- [Unexpected things that happened]

Generate:
1. Project scorecard (timeline, budget, scope, quality, client satisfaction)
2. Root cause analysis for things that went wrong
3. What to repeat on future projects
4. What to change on future projects
5. Process improvements to implement
6. Was this project profitable? (Revenue vs actual time spent)
7. Should I take on this type of project again? Why or why not?
8. Template or SOP updates needed based on this experience
```

---

## 21-26: Advanced Freelancer Templates

### 21. Subcontractor Management
Database for managing subcontractors: name, skills, rate, availability, projects assigned, performance rating, and payment tracking.

### 22. Weekly Client Report Template

**AI Prompt: Client Report Writer**
```
Write this week's client report.

Client: [Name]
Project: [Project name]
Report period: [Week dates]

Hours logged: [X hours]
Tasks completed:
- [Task 1]
- [Task 2]
- [Task 3]

Tasks in progress:
- [Task 4] ([X]% complete)
- [Task 5] ([X]% complete)

Blockers or items waiting on client:
- [Item, if any]

Write a professional weekly report (under 200 words) that includes:
1. Summary of progress (what they care about)
2. Key metrics or deliverables
3. Anything that needs their attention
4. Next week's plan
5. Milestone/timeline status (on track, adjusted, etc.)

Tone: Confident, clear, proactive.
```

### 23. AI Case Study Writer
Dedicated AI prompt template for turning project notes into polished case studies with results, testimonials, and visual descriptions.

### 24. Tax & Expense Tracker
Database for categorizing business expenses for tax purposes with categories matching tax deduction categories (home office, software, travel, education, etc.).

### 25. Retainer Management Board

**Database Properties:**
| Property | Type | Options |
|----------|------|---------|
| Client | Title | -- |
| Monthly Hours | Number | Contracted hours |
| Hours Used | Number | This month |
| Hours Remaining | Formula | Monthly Hours - Hours Used |
| Rollover | Checkbox | Do unused hours roll over? |
| Retainer Amount | Number | Monthly fee |
| Start Date | Date | -- |
| Renewal Date | Date | -- |
| Status | Select | Active, Paused, Cancelled |
| Utilization | Formula | Hours Used / Monthly Hours * 100 |

**AI Prompt: Retainer Review**
```
Analyze this retainer client and recommend next steps.

Client: [Name]
Monthly retainer: $[Amount] for [X] hours
Months on retainer: [Number]
Average monthly utilization: [X]%
Months where they exceeded hours: [X out of Y]
Months where they used less than 50%: [X out of Y]
Work quality/satisfaction: [Good / Mixed / Declining]

Analyze:
1. Is this retainer profitable for me? (Effective hourly rate)
2. Is this retainer valuable for them? (Are they getting enough value?)
3. Utilization pattern (trending up, down, or stable)
4. Recommendation: Keep as-is / Adjust hours / Adjust rate / Convert to project-based / End retainer
5. How to have the conversation (what to say, whether adjusting or ending)
6. If renewing: suggested new terms
```

### 26. Client Offboarding Template

**Template:**
```
# Client Offboarding: [Client Name]

**Project End Date:** [Date]
**Final Invoice Sent:** [Date]
**Final Invoice Paid:** [ ] Yes / [ ] No

## Deliverable Handoff
- [ ] All final files delivered in requested formats
- [ ] Source files transferred (if contracted)
- [ ] Assets organized in shared folder
- [ ] Login credentials transferred (if applicable)
- [ ] Documentation/guides delivered
- [ ] Training completed (if applicable)

## Account Closure
- [ ] Final invoice sent and paid
- [ ] Remove client from active tools/subscriptions
- [ ] Archive project files (keep for [X years])
- [ ] Archive communication history
- [ ] Update CRM status to "Completed"

## Relationship Maintenance
- [ ] Send thank-you note/gift
- [ ] Request testimonial
- [ ] Ask for referral
- [ ] Connect on LinkedIn (if not already)
- [ ] Schedule 3-month check-in (future upsell opportunity)
- [ ] Add to newsletter/alumni list (with permission)

## Internal Review
- [ ] Complete project post-mortem
- [ ] Update portfolio with this project
- [ ] Document lessons learned
- [ ] Update templates/SOPs based on experience
- [ ] Calculate final project profitability
```

**AI Prompt: Client Thank-You + Offboarding Email**
```
Write a professional offboarding email to close out this project.

Client: [Name]
Project: [What we delivered]
Working together for: [Duration]
Key results: [Outcomes achieved]
Relationship quality: [Great / Good / Okay]
Want to work together again: [Yes / Maybe / No]

Write an email that:
1. Thanks them genuinely for the partnership
2. Summarizes what was accomplished (celebrate the results)
3. Lists what they're receiving (final deliverables)
4. Explains next steps (support period, how to reach you)
5. Opens the door for future work (if desired)
6. Asks for a testimonial (naturally embedded, not pushy)

Tone: Warm, professional, memorable. This is the last impression you make.
Under 250 words.
```

---

*End of Freelancer & Agency Templates. For the full kit overview, see README.md.*
