# 05 - Business Operations Templates

> 25+ Notion AI templates for SOPs, employee onboarding, vendor management, knowledge bases, financial tracking, and KPI dashboards.
> Every template includes database structures AND AI prompts for documentation, reporting, and automation.

---

## Table of Contents

1. [SOP Documentation Hub](#1-sop-documentation-hub)
2. [AI SOP Writer](#2-ai-sop-writer)
3. [Employee Onboarding Wiki](#3-employee-onboarding-wiki)
4. [AI Onboarding Checklist Generator](#4-ai-onboarding-checklist-generator)
5. [Vendor Management Database](#5-vendor-management-database)
6. [Vendor Evaluation Scorecard](#6-vendor-evaluation-scorecard)
7. [Company Knowledge Base](#7-company-knowledge-base)
8. [AI Knowledge Base Article Writer](#8-ai-knowledge-base-article-writer)
9. [Financial Tracking Dashboard](#9-financial-tracking-dashboard)
10. [AI Financial Report Generator](#10-ai-financial-report-generator)
11. [KPI Dashboard Template](#11-kpi-dashboard-template)
12. [AI KPI Analysis](#12-ai-kpi-analysis)
13. [Meeting Cadence System](#13-meeting-cadence-system)
14. [Team Directory](#14-team-directory)
15. [Policy & Handbook Template](#15-policy--handbook-template)
16. [AI Policy Writer](#16-ai-policy-writer)
17. [Inventory Tracker](#17-inventory-tracker)
18. [Asset Management Database](#18-asset-management-database)
19. [Process Improvement Tracker](#19-process-improvement-tracker)
20. [Incident Response Playbook](#20-incident-response-playbook)
21. [Compliance Tracker](#21-compliance-tracker)
22. [Office/Workspace Management](#22-office-workspace-management)
23. [Company Goals & Strategy](#23-company-goals--strategy)
24. [Communication Hub](#24-communication-hub)
25. [Offboarding Checklist](#25-offboarding-checklist)
26. [AI Operations Report Generator](#26-ai-operations-report-generator)

---

## 1. SOP Documentation Hub

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| SOP Title | Title | -- |
| Department | Select | Engineering, Marketing, Sales, Operations, Finance, HR, Support |
| Category | Select | Process, Procedure, Guideline, Checklist, Policy |
| Status | Select | Draft, Under Review, Approved, Needs Update, Deprecated |
| Owner | Person | Who maintains this SOP |
| Last Updated | Date | -- |
| Review Date | Date | Next scheduled review |
| Version | Text | v1.0, v1.1, v2.0 |
| Complexity | Select | Simple, Moderate, Complex |
| Frequency | Select | Daily, Weekly, Monthly, Quarterly, As Needed |
| Related SOPs | Relation | Self-referencing |
| Tools Used | Multi-select | [Your company tools] |
| Audience | Multi-select | All Employees, Managers, New Hires, Specific Role |

### Page Template: SOP Document

```
# SOP: [Process Name]
**Version:** [X.X]
**Owner:** [Name]
**Department:** [Department]
**Last Updated:** [Date]
**Next Review:** [Date]

## Purpose
[Why this SOP exists. What problem it solves. 2-3 sentences.]

## Scope
**Applies to:** [Who should follow this SOP]
**Does NOT apply to:** [Exceptions]

## Prerequisites
- [What you need before starting]
- [Required access, tools, or knowledge]

## Definitions
| Term | Definition |
|------|-----------|
| [Term 1] | [Definition] |
| [Term 2] | [Definition] |

## Procedure

### Step 1: [Step Title]
**Who:** [Role responsible]
**When:** [Trigger or timing]
**How:**
1. [Substep 1]
2. [Substep 2]
3. [Substep 3]
**Expected Output:** [What this step produces]
**If Something Goes Wrong:** [Troubleshooting]

### Step 2: [Step Title]
[Same structure as above]

### Step 3: [Step Title]
[Same structure as above]

## Quality Checks
- [ ] [Verification step 1]
- [ ] [Verification step 2]
- [ ] [Verification step 3]

## Exceptions & Edge Cases
| Scenario | What to Do |
|----------|-----------|
| [Edge case 1] | [How to handle] |
| [Edge case 2] | [How to handle] |

## Related Documents
- [Link to related SOP 1]
- [Link to related SOP 2]

## Revision History
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial version |
```

### AI Prompt: SOP Outline Generator

```
Generate an SOP outline for this process.

Process name: [What the process is called]
Department: [Which team owns it]
What happens: [Describe the process informally in 3-5 sentences]
Who's involved: [Roles that participate]
Tools used: [Software, platforms, systems involved]
How often: [Daily, weekly, monthly, as needed]
Common mistakes: [What goes wrong when this isn't done correctly]

Generate a complete SOP outline with:
1. Purpose statement (why this SOP exists)
2. Scope (who it applies to and exceptions)
3. Prerequisites (what's needed before starting)
4. Step-by-step procedure (numbered, with who/when/how for each step)
5. Quality checks (how to verify it was done correctly)
6. Exception handling (3-5 common edge cases and how to handle them)
7. Troubleshooting guide (common problems and solutions)
8. Estimated time to complete the process
```

### AI Prompt: SOP Improver

```
Review and improve this existing SOP.

Current SOP:
[Paste your existing SOP content]

Known issues:
- [Issue 1: e.g., "people keep missing step 3"]
- [Issue 2: e.g., "takes too long"]
- [Issue 3: e.g., "new hires find it confusing"]

Improve the SOP by:
1. Identifying unclear or ambiguous steps
2. Finding missing steps or information
3. Simplifying overly complex steps (break them down)
4. Adding decision points ("If X, do Y; if Z, do W")
5. Adding time estimates for each step
6. Improving the formatting for scannability
7. Adding a quick-reference checklist version (for experienced users)
8. Suggesting automation opportunities (which steps could be automated?)
```

---

## 2. AI SOP Writer

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### AI Prompt: Full SOP Generator

```
Write a complete SOP document from scratch.

Process: [Process name]
I'll describe what happens: [Describe the entire process in detail, even if messy. Include every step you can think of, who does what, what tools are used, how long things take, and what the end result should be.]

Company context:
- Company type: [What kind of business]
- Team size: [Number of people]
- Tech stack: [Key tools]
- Formality level: [Startup casual / Corporate formal / Somewhere in between]

Write a production-ready SOP that includes:
1. Title and metadata (version, owner placeholder, review date)
2. Purpose and scope
3. Prerequisites and required access
4. Step-by-step procedure with substeps, screenshots placeholders, and time estimates
5. Quality checks
6. Edge cases and troubleshooting
7. FAQ section (5 questions a new person would ask)
8. Quick-reference checklist (condensed version for daily use)

Write for someone who has never done this process before. Assume nothing.
```

---

## 3. Employee Onboarding Wiki

**Type:** Page Structure + Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Wiki Structure

```
# Employee Onboarding Wiki

## Welcome to [Company Name]!
[Welcome message from founder/CEO -- 2-3 paragraphs]

## Your First Day
### Before You Arrive
- [ ] Accept calendar invites
- [ ] Set up password manager
- [ ] Review the employee handbook

### Day 1 Schedule
| Time | Activity | With | Location/Link |
|------|----------|------|---------------|
| 9:00 | Welcome & intro | Manager | [Room/Zoom] |
| 9:30 | IT setup | IT team | [Desk/Link] |
| 10:30 | Team introductions | Team | [Room/Zoom] |
| 11:30 | Product overview | Product | [Room/Zoom] |
| 12:00 | Lunch with buddy | Onboarding buddy | [Restaurant/Cafe] |
| 1:30 | Tool access setup | Self-guided | [Wiki link] |
| 3:00 | First task assignment | Manager | [Room/Zoom] |
| 4:30 | Day 1 check-in | Manager | [Room/Zoom] |

## Your First Week
- [ ] Complete all tool setups (see Tool Setup Guide)
- [ ] Read the company handbook
- [ ] Schedule 1:1s with team members
- [ ] Complete first small task/project
- [ ] Attend all team meetings
- [ ] Write "About Me" page for team wiki

## Your First 30 Days
- [ ] Complete all onboarding training
- [ ] Shadow team members on key processes
- [ ] Deliver first meaningful contribution
- [ ] 30-day check-in with manager

## Your First 90 Days
- [ ] Own a project or process independently
- [ ] Provide feedback on onboarding experience
- [ ] Set 6-month goals with manager
- [ ] 90-day performance conversation

## Guides & Resources
### Tool Setup Guides
- [Link: Email setup]
- [Link: Slack setup]
- [Link: Project management tool]
- [Link: Version control / dev environment]
- [Link: Design tools]

### Company Info
- [Link: Company handbook]
- [Link: Org chart]
- [Link: Company values]
- [Link: Product documentation]
- [Link: Brand guidelines]

### Team-Specific Guides
- [Link: Engineering onboarding]
- [Link: Marketing onboarding]
- [Link: Sales onboarding]
- [Link: Support onboarding]

## FAQ
[Link to FAQ page]

## Onboarding Feedback
[Link to feedback form]
```

### AI Prompt: Role-Specific Onboarding Plan

```
Create a role-specific onboarding plan for a new hire.

Role: [Job title]
Department: [Team]
Reports to: [Manager's role]
Company: [Company type and size]
Key tools they'll use: [List tools]
Main responsibilities: [List 3-5 key responsibilities]
Team members they'll work with: [Roles they interact with]

Generate a 90-day onboarding plan:

**Week 1: Orient**
- Day-by-day schedule with specific activities
- People to meet and why
- Tools and access to set up
- Reading/training to complete
- First small win to accomplish

**Weeks 2-4: Learn**
- Key processes to shadow
- Training to complete
- Gradual increase in responsibility
- Regular check-in schedule
- Milestones to hit by day 30

**Weeks 5-8: Contribute**
- First independent project
- Processes to own
- Cross-team connections to build
- Skills to develop
- Milestones to hit by day 60

**Weeks 9-12: Own**
- Full responsibility areas
- Performance expectations
- 90-day review criteria
- Goals for months 4-6
- Feedback collection on onboarding
```

### AI Prompt: Onboarding Email Sequence

```
Write the email sequence for onboarding a new employee.

New hire name: [Name]
Role: [Title]
Start date: [Date]
Manager: [Manager name]
Onboarding buddy: [Buddy name]
Team: [Team name]

Write 5 emails:

**Email 1: Offer accepted (send immediately)**
Congratulations, excitement, what to expect before Day 1

**Email 2: One week before start (logistics)**
First day details, what to bring, dress code, parking/remote setup

**Email 3: Day before start (personal touch from manager)**
Welcome from their direct manager, what Day 1 looks like

**Email 4: End of Week 1 (check-in)**
How's it going, resources reminder, feedback request

**Email 5: End of Month 1 (milestone)**
Celebrate 30 days, upcoming milestones, encourage questions

Each email: Warm, professional, under 200 words. Include subject lines.
```

---

## 4. AI Onboarding Checklist Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### AI Prompt: Custom Onboarding Checklist

```
Generate a comprehensive onboarding checklist for this role.

Role: [Job title]
Department: [Department]
Remote or in-office: [Remote / Hybrid / In-office]
Company size: [Number of employees]
Key tools: [List all tools they'll need access to]
Compliance requirements: [Any mandatory training, certifications, or legal requirements]

Generate checklists for:

**IT/Access Setup (before Day 1):**
- [ ] Every account, tool, and permission they need (be specific)

**HR/Admin (Day 1):**
- [ ] Paperwork, tax forms, benefits enrollment, handbook acknowledgment

**Role-Specific Training (Week 1-2):**
- [ ] Product knowledge, process training, tool training

**Social/Cultural (Week 1-4):**
- [ ] People to meet, events to attend, culture norms to learn

**Performance (Month 1-3):**
- [ ] Goals to set, milestones to hit, reviews to schedule

Include estimated time for each item and who's responsible (new hire, manager, IT, HR).
```

---

## 5. Vendor Management Database

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Vendor Name | Title | -- |
| Category | Select | SaaS, Services, Hardware, Marketing, Legal, Financial, Hosting |
| Status | Select | Active, Evaluating, On Hold, Terminated |
| Contract Value | Number | Annual cost |
| Billing Frequency | Select | Monthly, Quarterly, Annually |
| Contract Start | Date | -- |
| Contract End | Date | -- |
| Auto-Renewal | Checkbox | -- |
| Cancellation Notice | Text | e.g., "30 days before renewal" |
| Primary Contact | Text | Name, email, phone |
| Account Rep | Text | -- |
| Login/Access | Text | Who has admin access |
| Users | Number | Number of seats/licenses |
| Cost Per User | Formula | Contract Value / Users |
| Rating | Select | Excellent, Good, Fair, Poor |
| Alternatives | Text | Competing products evaluated |
| Notes | Text | -- |
| Invoices | Relation | Links to Invoice database |

### AI Prompt: Vendor Evaluation

```
Help me evaluate this vendor for our business.

Vendor: [Vendor name and product]
Category: [What it does]
Cost: $[Amount] per [month/year/user]
We currently use: [Current solution, if switching]
Our needs:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
- [Requirement 4]
Team size: [Number of users]
Budget: $[Annual budget for this category]

Evaluate:
1. Does it meet our stated requirements? (Check each requirement)
2. Cost analysis: Cost per user, annual total, comparison to alternatives
3. Switching costs: What it takes to migrate
4. Risks: Vendor lock-in, data portability, pricing stability
5. Questions to ask the vendor before signing
6. Contract negotiation tips (what discounts to ask for)
7. Red flags to watch for
8. Recommendation: Buy / Negotiate more / Look elsewhere
```

---

## 6. Vendor Evaluation Scorecard

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### Template

```
# Vendor Evaluation: [Vendor Name]
**Evaluation Date:** [Date]
**Evaluated By:** [Name]
**Category:** [What this tool/service is for]

## Scoring (1-5 per criterion)

| Criterion | Weight | Score | Weighted Score |
|-----------|--------|-------|----------------|
| Features match our needs | 25% | [1-5] | [Calculated] |
| Ease of use | 15% | [1-5] | [Calculated] |
| Price/value | 20% | [1-5] | [Calculated] |
| Customer support | 10% | [1-5] | [Calculated] |
| Integration capabilities | 15% | [1-5] | [Calculated] |
| Security & compliance | 10% | [1-5] | [Calculated] |
| Scalability | 5% | [1-5] | [Calculated] |
| **Total** | **100%** | -- | **[Total]** |

## Pros
-
-
-

## Cons
-
-
-

## Decision: [Approve / Reject / Need More Info]
**Reasoning:** [2-3 sentences]
```

### AI Prompt: Vendor Comparison

```
Compare these vendors and recommend one.

Our needs: [What we're trying to solve]
Budget: $[Max annual spend]
Team size: [Users]

Vendor A: [Name]
- Price: $[X]/month
- Key features: [List]
- Pros: [What you liked in demo/trial]
- Cons: [What concerned you]

Vendor B: [Name]
- Price: $[X]/month
- Key features: [List]
- Pros: [What you liked]
- Cons: [What concerned you]

Vendor C: [Name] (optional)
- Price: $[X]/month
- Key features: [List]
- Pros/Cons: [Brief]

Generate:
1. Feature comparison matrix (which vendor wins each feature)
2. Total cost analysis over 1 year and 3 years
3. Risk assessment for each vendor
4. Migration difficulty from current solution
5. Clear recommendation with reasoning
6. Negotiation leverage (what to push back on with the chosen vendor)
```

---

## 7. Company Knowledge Base

**Type:** Page Structure + Database
**Difficulty:** Intermediate
**AI Prompts:** 1

### Knowledge Base Structure

```
# Company Knowledge Base

## Getting Started
- [Company Overview]
- [Values & Culture]
- [Org Chart]
- [Communication Norms]

## Teams & Departments
### Engineering
- [Architecture Overview]
- [Development Workflow]
- [Code Review Process]
- [Deployment Guide]

### Marketing
- [Brand Guidelines]
- [Content Process]
- [Campaign Playbooks]
- [Analytics & Reporting]

### Sales
- [Sales Process]
- [Pricing & Packaging]
- [Competitive Info]
- [Demo Script]

### Support
- [Support Workflow]
- [Common Issues & Solutions]
- [Escalation Process]
- [Customer Communication Templates]

## How We Work
- [Meeting Cadence]
- [Communication Tools]
- [Decision-Making Process]
- [Expense Policy]
- [Time Off & Leave]

## Product
- [Product Overview]
- [Feature Documentation]
- [Roadmap]
- [Customer Personas]

## Tools & Systems
- [Tool List & Access Guide]
- [Security Practices]
- [Data Handling Policy]
```

### AI Prompt: Knowledge Base Article Writer

```
Write a knowledge base article for our company wiki.

Topic: [Article topic]
Audience: [Who will read this -- all employees, specific team, new hires]
Current state: [Is this documenting something new or capturing existing tribal knowledge?]
Key information to include:
- [Point 1]
- [Point 2]
- [Point 3]
- [Point 4]
Expert input: [Any details from the subject matter expert]

Write a clear, scannable knowledge base article with:
1. Overview (2-3 sentences: what this is and why it matters)
2. Key information organized with headers and subheaders
3. Step-by-step instructions (if it's a how-to)
4. Screenshots/visual placeholders (describe what screenshots to add)
5. FAQ section (5 common questions)
6. Related articles to link to
7. "Last updated" and "Owner" metadata

Write for someone encountering this topic for the first time. Avoid jargon or define it when used.
```

---

## 8. AI Knowledge Base Article Writer

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 2

### AI Prompt: Tribal Knowledge Capture

```
Help me capture tribal knowledge from a subject matter expert.

The expert explained this process/concept informally:
"[Paste the expert's explanation, even if rambling or disorganized]"

Topic: [What this knowledge is about]
Who needs this: [Audience]

Transform this into:
1. A clear, structured knowledge base article
2. Organized with logical headers
3. All implicit knowledge made explicit (fill in gaps the expert assumed)
4. Warnings and common mistakes highlighted in callout boxes
5. A decision tree if there are conditional paths
6. Glossary of terms used
7. A "Quick Reference" summary at the top for experienced users
```

### AI Prompt: FAQ Generator

```
Generate a FAQ section for this knowledge base topic.

Topic: [Topic]
Article content: [Paste the article or summarize it]
Who reads this: [Audience]
Common support tickets about this topic: [If known]

Generate 10-15 FAQ entries:
1. Basic questions (what newcomers ask)
2. Troubleshooting questions (what goes wrong)
3. Edge case questions (unusual situations)
4. Policy questions (what's allowed vs not)
5. "How do I..." questions (practical tasks)

For each FAQ:
- Question (phrased naturally, as someone would actually ask)
- Answer (clear, concise, actionable -- under 100 words each)
```

---

## 9. Financial Tracking Dashboard

**Type:** Database + Dashboard
**Difficulty:** Advanced
**AI Prompts:** 1

### Revenue Database

| Property | Type | Options/Details |
|----------|------|-----------------|
| Description | Title | -- |
| Date | Date | -- |
| Amount | Number | Currency |
| Type | Select | Product Sales, Service Revenue, Subscription, Other |
| Client | Relation | Links to Client database |
| Product | Select | [Your products] |
| Recurring | Checkbox | -- |
| MRR Impact | Number | Monthly recurring revenue change |

### Expense Database

| Property | Type | Options/Details |
|----------|------|-----------------|
| Description | Title | -- |
| Date | Date | -- |
| Amount | Number | Currency |
| Category | Select | Payroll, Software, Marketing, Office, Legal, Tax, Contractors, Other |
| Vendor | Relation | Links to Vendor database |
| Recurring | Checkbox | -- |
| Approved By | Person | -- |
| Receipt | Files | -- |

### Dashboard Layout

```
# Financial Dashboard - [Month Year]

## Key Metrics (Callout Blocks)
- Revenue MTD: $[X]
- Expenses MTD: $[X]
- Net Profit: $[X]
- MRR: $[X]
- Burn Rate: $[X]/month
- Runway: [X] months

## Revenue This Month
[Linked view: Revenue database, filtered to current month, summed]

## Expenses This Month
[Linked view: Expenses database, filtered to current month, grouped by category]

## MRR Trend
[Linked view: Revenue where Recurring = true, last 6 months]

## Budget vs Actual
| Category | Budget | Actual | Variance |
|----------|--------|--------|----------|
| [Cat 1] | $[X] | $[X] | [+/-]$[X] |
```

### AI Prompt: Monthly Financial Summary

```
Generate a monthly financial summary from this data.

Month: [Month Year]
Revenue: $[Total revenue]
- By product: [Breakdown]
- New vs recurring: [Breakdown]
Expenses: $[Total expenses]
- By category: [Breakdown]
Net profit: $[Amount]
MRR: $[Current MRR]
MRR change: [+/-] $[Amount]
Cash on hand: $[Amount]
Runway: [X months at current burn]

Previous month comparison:
- Revenue: $[Last month]
- Expenses: $[Last month]
- MRR: $[Last month]

Generate:
1. Executive financial summary (3-4 sentences)
2. Revenue analysis (trends, growth rate, top revenue sources)
3. Expense analysis (where money went, any unusual spending)
4. Margin analysis (gross and net margins)
5. MRR analysis (growth rate, churn impact)
6. Cash flow assessment (healthy, concerning, critical)
7. Top 3 financial risks
8. Recommendations for next month (where to invest, where to cut)
```

---

## 10. AI Financial Report Generator

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### AI Prompt: Board-Ready Financial Report

```
Transform this financial data into a board-ready report.

Period: [Quarter / Year]
Key financials:
- Revenue: $[X] (target was $[Y])
- Gross margin: [X]%
- Net income: $[X]
- Cash position: $[X]
- Headcount: [X] (planned: [Y])
- Customer count: [X] (target: [Y])
- MRR: $[X]
- Churn rate: [X]%
- CAC: $[X]
- LTV: $[X]
- LTV:CAC ratio: [X]

Key context:
- [Major event 1 that affected financials]
- [Major event 2]

Generate a board report with:
1. Financial highlights (3-4 key metrics in a summary box)
2. Revenue analysis with YoY and QoQ comparison
3. Profitability analysis
4. Unit economics assessment (CAC, LTV, payback period)
5. Cash and runway analysis
6. Headcount and efficiency metrics
7. Risks and mitigation
8. Outlook for next quarter
9. Asks/decisions needed from the board

Tone: Confident, data-driven, forward-looking. Be honest about misses.
```

---

## 11. KPI Dashboard Template

**Type:** Database + Dashboard
**Difficulty:** Intermediate
**AI Prompts:** 2

### KPI Database

| Property | Type | Options/Details |
|----------|------|-----------------|
| KPI Name | Title | -- |
| Department | Select | Company, Engineering, Marketing, Sales, Support, Product |
| Category | Select | Revenue, Growth, Efficiency, Quality, Customer, Team |
| Current Value | Number | -- |
| Target | Number | -- |
| Unit | Select | $, %, #, NPS, Hours, Days |
| Status | Formula | Green if >= Target, Yellow if >= 80%, Red if < 80% |
| Trend | Select | Up, Flat, Down |
| Owner | Person | -- |
| Frequency | Select | Daily, Weekly, Monthly, Quarterly |
| Last Updated | Date | -- |
| Notes | Text | Context for current value |

### Dashboard Layout

```
# KPI Dashboard - [Period]

## Company Health (Callout Blocks)
- Revenue: $[X] / $[Target] [Status Emoji]
- Active Users: [X] / [Target] [Status Emoji]
- NPS: [X] / [Target] [Status Emoji]
- Team Size: [X] / [Target] [Status Emoji]

## By Department
### Sales KPIs
[Linked view filtered to Department = Sales]

### Marketing KPIs
[Linked view filtered to Department = Marketing]

### Engineering KPIs
[Linked view filtered to Department = Engineering]

### Support KPIs
[Linked view filtered to Department = Support]

## Trend Summary
[Linked view showing all KPIs with Trend = Down -- the ones needing attention]
```

### AI Prompt: KPI Definition Helper

```
Help me define the right KPIs for my business.

Business type: [SaaS, e-commerce, agency, marketplace, etc.]
Stage: [Pre-revenue, Early, Growth, Mature]
Team size: [Number]
Current top priority: [Growth, profitability, product-market fit, fundraising]
Existing metrics we track: [If any]

Generate:
1. Top 5 company-level KPIs (the ones the CEO should check daily)
2. 3-5 KPIs per department:
   - Sales: [KPIs]
   - Marketing: [KPIs]
   - Product/Engineering: [KPIs]
   - Support: [KPIs]
3. For each KPI:
   - Definition (how to calculate it, exactly)
   - Why it matters
   - Benchmark (typical range for our business type)
   - Target recommendation
   - Frequency to measure
   - Leading vs lagging indicator
4. North Star Metric: The ONE number that best measures our success
```

### AI Prompt: KPI Review Analyzer

```
Analyze this period's KPIs and provide executive insights.

KPI results for [Period]:
- [KPI 1]: [Current] vs [Target] ([Status])
- [KPI 2]: [Current] vs [Target] ([Status])
- [KPI 3]: [Current] vs [Target] ([Status])
- [KPI 4]: [Current] vs [Target] ([Status])
- [KPI 5]: [Current] vs [Target] ([Status])
- [KPI 6]: [Current] vs [Target] ([Status])
- [KPI 7]: [Current] vs [Target] ([Status])
- [KPI 8]: [Current] vs [Target] ([Status])

Previous period for comparison:
[Same KPIs from last period]

Generate:
1. Overall business health score (1-10) with reasoning
2. Top 3 wins (KPIs that exceeded targets)
3. Top 3 concerns (KPIs below target)
4. Correlations between KPIs (e.g., "revenue growth linked to marketing spend increase")
5. Root cause hypothesis for underperforming KPIs
6. Recommended actions for next period (specific, prioritized)
7. KPI targets to adjust (any targets that were too easy or unrealistic)
```

---

## 12-15: Communication & Policy Templates

### 12. AI KPI Analysis
Dedicated page for weekly/monthly KPI deep dives with AI-generated insights, trend analysis, and forecasting.

### 13. Meeting Cadence System

**Template:**
```
# Meeting Cadence

## Weekly Meetings
| Meeting | Day/Time | Duration | Attendees | Purpose | Agenda Template |
|---------|----------|----------|-----------|---------|-----------------|
| All Hands | Mon 9am | 30 min | Everyone | Alignment | Wins, focus, announcements |
| Team Standup | Daily 10am | 15 min | Team | Sync | Yesterday, today, blockers |
| 1:1s | Varies | 30 min | Manager + report | Development | Check-in, feedback, growth |
| Sprint Review | Fri 3pm | 45 min | Product + Eng | Demo | Ship review, next sprint |

## Monthly Meetings
| Meeting | When | Duration | Attendees | Purpose |
|---------|------|----------|-----------|---------|
| Monthly Review | 1st Monday | 60 min | Leadership | Performance review |
| Town Hall | Last Friday | 45 min | Everyone | Transparency, Q&A |

## Quarterly Meetings
| Meeting | When | Duration | Attendees | Purpose |
|---------|------|----------|-----------|---------|
| Quarterly Planning | Month start | Half day | Leadership | Strategy + OKRs |
| Board Meeting | Mid-quarter | 2 hours | Board | Governance |

## Meeting Rules
1. No meeting without an agenda shared 24 hours in advance
2. All meetings end with clear action items and owners
3. Default to 25-minute or 50-minute meetings (buffer time)
4. "No meeting" blocks: [Tuesdays and Thursdays, 9am-12pm]
5. If it can be an email, it should be an email
```

### 14. Team Directory
Database of all team members with role, department, contact info, start date, skills, and fun facts.

### 15. Policy & Handbook Template
Structured page collection covering company policies: PTO, expenses, remote work, code of conduct, data security, etc.

### 16. AI Policy Writer

**AI Prompt:**
```
Write a company policy for [policy topic].

Company context:
- Type: [Startup, SMB, Enterprise]
- Size: [Number of employees]
- Industry: [Industry]
- Work arrangement: [Remote, hybrid, in-office]
- Culture: [Formal, casual, etc.]

Policy topic: [e.g., Remote Work, PTO, Expenses, Social Media, Data Security]

Write a clear, fair policy that includes:
1. Purpose (why this policy exists)
2. Scope (who it applies to)
3. Policy details (the actual rules, clearly stated)
4. Procedures (how to follow the policy -- step by step)
5. Examples (what's okay and what's not)
6. Exceptions (how to request exceptions)
7. Consequences (what happens if the policy is violated)
8. FAQ (5 common questions)

Tone: Professional but human. Clear rules without being overly rigid.
Write something people would actually read and understand.
```

---

## 17-22: Operations Management Templates

### 17. Inventory Tracker
Database for product inventory with SKU, quantity, reorder point, supplier, cost, and AI-generated reorder alerts.

### 18. Asset Management Database
Database tracking company assets (hardware, software licenses, equipment) with assignment, condition, and depreciation.

### 19. Process Improvement Tracker

**Database Properties:**
| Property | Type | Options |
|----------|------|---------|
| Process | Title | -- |
| Current State | Text | How it works now |
| Pain Points | Text | What's broken |
| Proposed Improvement | Text | What to change |
| Impact | Select | High, Medium, Low |
| Effort | Select | Easy, Medium, Hard |
| Status | Select | Identified, Analyzing, Implementing, Complete |
| Owner | Person | -- |
| Before Metrics | Text | Current performance |
| After Metrics | Text | Performance after change |

**AI Prompt: Process Improvement Finder**
```
Analyze this business process and suggest improvements.

Process: [Process name]
How it currently works:
[Describe the current process step by step]

Time it takes: [Duration]
People involved: [Roles and number of people]
Tools used: [Current tools]
Frequency: [How often this process runs]
Known pain points: [What people complain about]

Generate:
1. Process map (numbered steps showing the current flow)
2. Bottleneck identification (which steps take too long or fail most)
3. Waste identification (unnecessary steps, handoffs, or approvals)
4. 5 improvement suggestions ranked by impact/effort ratio
5. Automation opportunities (which steps could be automated and with what tools)
6. Estimated time savings per occurrence
7. Implementation plan for the top improvement
```

### 20. Incident Response Playbook
Template for documenting how to respond to different types of incidents (downtime, security breach, data loss, PR crisis).

### 21. Compliance Tracker
Database tracking regulatory requirements, compliance status, audit dates, and responsible parties.

### 22. Office/Workspace Management
Database for managing office supplies, equipment, room bookings, and maintenance requests.

---

## 23-26: Strategy & Reporting Templates

### 23. Company Goals & Strategy

**Page Template:**
```
# Company Strategy - [Year]

## Mission
[One sentence: why we exist]

## Vision
[One sentence: what the world looks like if we succeed]

## Values
1. [Value 1]: [What it means in practice]
2. [Value 2]: [What it means in practice]
3. [Value 3]: [What it means in practice]

## Strategic Priorities
1. [Priority 1]: [Why + success metric]
2. [Priority 2]: [Why + success metric]
3. [Priority 3]: [Why + success metric]

## Annual Goals
[Link to OKR tracker]

## What We're NOT Doing This Year
- [Anti-goal 1]: Why we're deliberately NOT pursuing this
- [Anti-goal 2]: Why we're deliberately NOT pursuing this

## Key Bets
- [Bet 1]: [Hypothesis + how we'll know if it works]
- [Bet 2]: [Hypothesis + how we'll know if it works]
```

### 24. Communication Hub
Central page with links to all communication channels, norms, and escalation paths.

### 25. Offboarding Checklist

**Template:**
```
# Offboarding Checklist - [Employee Name]

**Last Day:** [Date]
**Manager:** [Name]
**HR Contact:** [Name]

## IT & Access (Complete by last day)
- [ ] Revoke email access
- [ ] Remove from Slack/Teams
- [ ] Remove from all SaaS tools (list each one)
- [ ] Disable VPN access
- [ ] Collect hardware (laptop, phone, keys, badge)
- [ ] Transfer file ownership (Google Drive, Notion, etc.)
- [ ] Remove from GitHub/GitLab
- [ ] Change shared passwords they had access to
- [ ] Remove from password manager team vaults

## HR & Admin
- [ ] Final paycheck processed
- [ ] PTO payout calculated
- [ ] Benefits termination scheduled
- [ ] COBRA information sent
- [ ] NDA/non-compete reminder sent
- [ ] Exit interview scheduled
- [ ] Reference policy communicated

## Knowledge Transfer
- [ ] Documentation of their responsibilities updated
- [ ] Key contacts/relationships handed off
- [ ] In-progress work reassigned
- [ ] SOPs they owned reviewed and reassigned
- [ ] Training for replacement completed

## Communication
- [ ] Team informed appropriately
- [ ] External contacts notified (if client-facing)
- [ ] Out-of-office/email forwarding set up
- [ ] LinkedIn recommendation exchanged (if amicable)
```

### 26. AI Operations Report Generator

**AI Prompt: Monthly Operations Report**
```
Generate a monthly operations report for leadership.

Month: [Month Year]
Department updates:
- Engineering: [Key metrics and highlights]
- Marketing: [Key metrics and highlights]
- Sales: [Key metrics and highlights]
- Support: [Key metrics and highlights]
- HR: [Key metrics and highlights]

Operational metrics:
- Uptime: [X]%
- Support tickets: [X] (resolved: [Y])
- Employee count: [X] (new hires: [Y], departures: [Z])
- Major incidents: [X]
- Processes improved: [List]
- Cost savings achieved: $[Amount]

Generate:
1. Executive summary (4-5 sentences)
2. Department-by-department summary (3 bullets each)
3. Operational highlights (top 3 wins)
4. Operational concerns (top 3 issues)
5. Resource needs (hiring, tools, budget)
6. Process improvement update
7. Priorities for next month
8. Key decisions needed from leadership
```

---

*End of Business Operations Templates. For freelancer and agency templates, see 06-freelancer-agency-templates.md.*
