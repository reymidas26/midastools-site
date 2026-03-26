# 01 - Project Management Templates

> 25+ Notion AI templates for managing projects, sprints, meetings, roadmaps, OKRs, and bugs.
> Every template includes the database structure AND the AI prompts to power it.

---

## Table of Contents

1. [Sprint Planning Board](#1-sprint-planning-board)
2. [AI Task Breakdown Generator](#2-ai-task-breakdown-generator)
3. [Sprint Retrospective](#3-sprint-retrospective)
4. [Project Status Report](#4-project-status-report)
5. [Weekly Status Dashboard](#5-weekly-status-dashboard)
6. [Meeting Notes with Auto-Summary](#6-meeting-notes-with-auto-summary)
7. [1-on-1 Meeting Tracker](#7-1-on-1-meeting-tracker)
8. [Decision Log](#8-decision-log)
9. [Product Roadmap Board](#9-product-roadmap-board)
10. [Feature Prioritization Matrix](#10-feature-prioritization-matrix)
11. [OKR Tracker](#11-okr-tracker)
12. [Quarterly Planning Template](#12-quarterly-planning-template)
13. [Bug Tracking Database](#13-bug-tracking-database)
14. [QA Test Case Tracker](#14-qa-test-case-tracker)
15. [Release Notes Generator](#15-release-notes-generator)
16. [Project Risk Register](#16-project-risk-register)
17. [Resource Allocation Board](#17-resource-allocation-board)
18. [Project Brief Template](#18-project-brief-template)
19. [Dependency Tracker](#19-dependency-tracker)
20. [Team Capacity Planner](#20-team-capacity-planner)
21. [Stakeholder Communication Plan](#21-stakeholder-communication-plan)
22. [Post-Mortem Template](#22-post-mortem-template)
23. [Change Request Log](#23-change-request-log)
24. [Project Milestone Tracker](#24-project-milestone-tracker)
25. [AI Daily Standup Generator](#25-ai-daily-standup-generator)
26. [Sprint Velocity Calculator](#26-sprint-velocity-calculator)

---

## 1. Sprint Planning Board

**Type:** Database (Board View)
**Difficulty:** Beginner
**AI Prompts:** 3

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Task Name | Title | -- |
| Status | Select | Backlog, To Do, In Progress, Review, Done |
| Sprint | Select | Sprint 1, Sprint 2, Sprint 3... |
| Assignee | Person | -- |
| Story Points | Number | 1, 2, 3, 5, 8, 13 (Fibonacci) |
| Priority | Select | Critical, High, Medium, Low |
| Epic | Relation | Links to Roadmap database |
| Due Date | Date | -- |
| Tags | Multi-select | Frontend, Backend, Design, DevOps, Docs |
| Blocked By | Relation | Self-referencing relation |
| AI Summary | Text | AI-generated task summary |

### Board View Setup
- Group by: Status
- Sort by: Priority (Critical first), then Story Points (descending)
- Filter: Current Sprint

### AI Prompt: Sprint Task Breakdown

```
You are an experienced project manager. Break down the following feature into sprint-ready tasks.

Feature: [Describe the feature in 1-2 sentences]
Team size: [Number of developers]
Sprint length: [1 or 2 weeks]
Tech stack: [Your tech stack]

For each task, provide:
1. Task name (concise, action-oriented, starts with a verb)
2. Description (2-3 sentences explaining what needs to be done)
3. Story points estimate (using Fibonacci: 1, 2, 3, 5, 8, 13)
4. Priority (Critical / High / Medium / Low)
5. Tags (Frontend / Backend / Design / DevOps / Docs)
6. Dependencies (list any tasks that must be completed first)
7. Acceptance criteria (2-3 bullet points)

Format as a numbered list. Aim for tasks that can each be completed in 1-2 days.
```

### AI Prompt: Sprint Goal Generator

```
Based on the following backlog items for our upcoming sprint, write a clear sprint goal.

Backlog items:
- [Task 1]
- [Task 2]
- [Task 3]
- [Task 4]

The sprint goal should:
1. Be one sentence
2. Focus on the user/business value delivered
3. Be measurable
4. Not just list the tasks

Format: "By the end of this sprint, we will [outcome] so that [value]."
```

### AI Prompt: Story Point Estimator

```
You are a senior software engineer. Estimate story points for each task below using the Fibonacci scale (1, 2, 3, 5, 8, 13).

Consider:
- Complexity of implementation
- Uncertainty/unknowns
- Amount of work
- Testing effort needed

Tasks:
1. [Task 1 with brief description]
2. [Task 2 with brief description]
3. [Task 3 with brief description]

For each task, provide:
- Story point estimate
- One-line justification
- Any risks that could increase the estimate
```

---

## 2. AI Task Breakdown Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 2

### Page Structure

```
# [Feature Name] - Task Breakdown

## Feature Overview
[1-2 paragraph description of the feature]

## User Story
As a [user type], I want to [action] so that [benefit].

## Tasks
[AI-generated task list goes here]

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Technical Notes
[Any architecture decisions, API contracts, or constraints]

## Open Questions
- [ ] [Question 1]
- [ ] [Question 2]
```

### AI Prompt: Feature to Tasks

```
Break down this feature into implementation tasks for a development team.

Feature: [Feature name and description]
Context: [Any relevant context about the product or codebase]

Generate:
1. A list of 5-15 discrete tasks, each completable in under 2 days
2. For each task: name, description, estimated hours, and dependencies
3. A suggested implementation order
4. Any technical risks or unknowns to investigate first

Group tasks by: Backend, Frontend, Design, Testing, Documentation.
```

### AI Prompt: Acceptance Criteria Writer

```
Write detailed acceptance criteria for this user story.

User Story: As a [user type], I want to [action] so that [benefit].

Feature details: [Describe the feature behavior]

Write acceptance criteria using the Given/When/Then format:
- Given [precondition]
- When [action]
- Then [expected result]

Include:
- Happy path scenarios (3-5)
- Edge cases (2-3)
- Error handling scenarios (2-3)
```

---

## 3. Sprint Retrospective

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 2

### Page Structure

```
# Sprint [Number] Retrospective
**Date:** [Date]
**Facilitator:** [Name]
**Attendees:** [Names]

## Sprint Stats
- Planned story points: [X]
- Completed story points: [Y]
- Velocity: [Y/X as percentage]
- Bugs found: [N]
- Bugs fixed: [N]

## What Went Well
- [Item 1]
- [Item 2]
- [Item 3]

## What Didn't Go Well
- [Item 1]
- [Item 2]
- [Item 3]

## What We Learned
- [Insight 1]
- [Insight 2]

## Action Items
| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| [Action 1] | [Name] | [Date] | To Do |
| [Action 2] | [Name] | [Date] | To Do |

## AI Analysis
[Paste AI-generated analysis below]
```

### AI Prompt: Retro Analysis

```
Analyze our sprint retrospective and suggest improvements.

What went well:
- [List items]

What didn't go well:
- [List items]

Sprint metrics:
- Planned: [X] story points
- Completed: [Y] story points
- Carryover: [Z] items

Provide:
1. Pattern analysis: Are there recurring themes in what went wrong?
2. Root cause analysis: What's the underlying cause of each problem?
3. Three specific, actionable improvements we can implement next sprint
4. One process change that would have the highest impact
5. A suggested team commitment (one sentence) for next sprint
```

### AI Prompt: Action Item Generator

```
Based on these retrospective themes, generate specific action items.

Themes:
- [Theme 1: e.g., "too many meetings disrupting flow"]
- [Theme 2: e.g., "unclear requirements causing rework"]
- [Theme 3: e.g., "deployment process too slow"]

For each theme, provide:
1. Root cause (one sentence)
2. Action item (specific, measurable, assignable)
3. Success metric (how we'll know it worked)
4. Timeline (when to implement and when to evaluate)
```

---

## 4. Project Status Report

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 2

### Page Structure

```
# Project Status Report - [Project Name]
**Reporting Period:** [Start Date] to [End Date]
**Report Date:** [Date]
**Project Manager:** [Name]
**Overall Status:** [Green / Yellow / Red]

## Executive Summary
[2-3 sentences - AI generated]

## Progress This Period
| Milestone | Status | % Complete | Notes |
|-----------|--------|------------|-------|
| [Milestone 1] | On Track | 80% | [Note] |
| [Milestone 2] | At Risk | 45% | [Note] |

## Key Accomplishments
- [Accomplishment 1]
- [Accomplishment 2]
- [Accomplishment 3]

## Risks and Issues
| Risk/Issue | Impact | Likelihood | Mitigation |
|------------|--------|------------|------------|
| [Risk 1] | High | Medium | [Action] |

## Upcoming Work (Next Period)
- [ ] [Task 1]
- [ ] [Task 2]
- [ ] [Task 3]

## Resource Needs
- [Need 1]
- [Need 2]

## Budget Status
- Budget: $[X]
- Spent: $[Y]
- Remaining: $[Z]
- Forecast: [On budget / Over by X%]
```

### AI Prompt: Executive Summary Generator

```
Write a concise executive summary for a project status report.

Project: [Project name]
Overall status: [Green/Yellow/Red]
Key accomplishments this period:
- [List 3-5 accomplishments]

Current risks:
- [List 1-3 risks]

Milestones:
- [Milestone 1]: [% complete]
- [Milestone 2]: [% complete]

Write a 3-sentence executive summary that:
1. States the overall project health
2. Highlights the most important progress
3. Calls out any blockers or risks requiring attention

Tone: Professional, factual, direct. No fluff.
```

### AI Prompt: Risk Mitigation Planner

```
For each project risk below, generate a mitigation plan.

Risks:
1. [Risk description, impact level, likelihood]
2. [Risk description, impact level, likelihood]
3. [Risk description, impact level, likelihood]

For each risk, provide:
- Mitigation strategy (2-3 sentences)
- Contingency plan if the risk materializes
- Early warning indicators to watch for
- Owner recommendation (role, not person)
```

---

## 5. Weekly Status Dashboard

**Type:** Dashboard Page
**Difficulty:** Intermediate
**AI Prompts:** 1

### Page Structure

```
# Weekly Status Dashboard - Week of [Date]

## Quick Stats (Callout Blocks)
| This Week | Last Week | Trend |
|-----------|-----------|-------|
| [X] tasks completed | [Y] tasks completed | [Up/Down] |
| [X] bugs open | [Y] bugs open | [Up/Down] |
| [X] PRs merged | [Y] PRs merged | [Up/Down] |

## Linked Database Views

### Tasks Completed This Week
[Linked view of Sprint Board filtered to: Status = Done, Last Edited = This Week]

### In Progress
[Linked view of Sprint Board filtered to: Status = In Progress]

### Blocked Items
[Linked view of Sprint Board filtered to: Blocked By is not empty, Status != Done]

### Upcoming Deadlines
[Linked view filtered to: Due Date = Next 7 days]
```

### AI Prompt: Weekly Summary Writer

```
Write a weekly team status update based on these metrics.

Completed this week:
- [List completed tasks/features]

In progress:
- [List items in progress]

Blocked:
- [List blocked items and why]

Metrics:
- Tasks completed: [X]
- Story points delivered: [Y]
- Bugs resolved: [Z]

Write a 5-7 sentence update suitable for sharing with stakeholders. Highlight wins, flag concerns, and state next week's priorities. Keep it under 150 words.
```

---

## 6. Meeting Notes with Auto-Summary

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 3

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Meeting Title | Title | -- |
| Date | Date | -- |
| Type | Select | Standup, Planning, Review, Retro, 1:1, All Hands, Ad Hoc |
| Attendees | Person | Multi-person |
| Project | Relation | Links to Projects database |
| Duration | Number | Minutes |
| AI Summary | Text | AI-generated summary |
| Action Items Count | Formula | Count of unchecked items |

### Page Template

```
# [Meeting Title]
**Date:** [Auto-fill]
**Attendees:** [Auto-fill]
**Duration:** [X] minutes

## Agenda
1. [Topic 1]
2. [Topic 2]
3. [Topic 3]

## Notes
[Raw meeting notes go here -- type freely during the meeting]

## AI Summary
[Generated after meeting]

## Decisions Made
- [Decision 1]
- [Decision 2]

## Action Items
- [ ] [Action 1] - @[Owner] - Due: [Date]
- [ ] [Action 2] - @[Owner] - Due: [Date]

## Parking Lot
- [Item to discuss later]
```

### AI Prompt: Meeting Notes Summarizer

```
Summarize these meeting notes into a concise, actionable format.

Raw meeting notes:
[Paste your raw meeting notes here]

Generate:
1. **Summary** (3-5 bullet points of key discussions)
2. **Decisions** (list every decision made, who approved it)
3. **Action items** (task, owner, deadline -- format as checklist)
4. **Open questions** (anything unresolved)
5. **Key takeaway** (one sentence: the single most important thing from this meeting)

Keep the summary under 200 words. Use plain language.
```

### AI Prompt: Pre-Meeting Agenda Generator

```
Generate a meeting agenda based on the following context.

Meeting type: [standup / planning / review / 1:1 / brainstorm]
Duration: [X] minutes
Attendees: [List roles/names]
Context: [What's happening in the project right now]
Goal of meeting: [What should we accomplish]

Create an agenda with:
1. Time allocations for each item (must total to meeting duration)
2. A clear owner for each agenda item
3. Expected outcome for each item (decision, information sharing, brainstorm)
4. 2-3 pre-read items attendees should review before the meeting
```

### AI Prompt: Action Item Extractor

```
Extract all action items from these meeting notes.

Notes:
[Paste meeting notes]

For each action item found, provide:
- Task description (clear, starts with a verb)
- Assigned to (if mentioned)
- Deadline (if mentioned, otherwise suggest one)
- Priority (based on context: High / Medium / Low)
- Related decision or discussion point

Format as a markdown checklist.
```

---

## 7. 1-on-1 Meeting Tracker

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Date | Title | Format: YYYY-MM-DD |
| With | Person | -- |
| Mood | Select | Great, Good, Neutral, Struggling |
| Topics Discussed | Multi-select | Career Growth, Blockers, Feedback, Goals, Personal |
| Follow-up Needed | Checkbox | -- |
| Next Meeting | Date | -- |

### Page Template

```
# 1:1 with [Name] - [Date]

## Check-in
- How are you doing? (1-10): [Score]
- Energy level: [High / Medium / Low]
- One word to describe your week: [Word]

## Discussion Topics
### Topic 1: [Topic]
- Notes:
- Action:

### Topic 2: [Topic]
- Notes:
- Action:

## Feedback
- From me to them: [Feedback given]
- From them to me: [Feedback received]

## Career Development
- Progress on goals: [Update]
- Support needed: [What they need]

## Action Items
- [ ] [Action 1]
- [ ] [Action 2]
```

### AI Prompt: 1:1 Conversation Starter

```
Generate thoughtful 1:1 conversation starters for a manager meeting with a team member.

Context:
- Team member's role: [Role]
- Recent work: [What they've been working on]
- Previous 1:1 notes: [Brief summary of last meeting's topics]
- Any known concerns: [Optional]

Generate:
1. Three check-in questions (beyond "how are you?")
2. Two career development questions
3. One feedback question to ask them about your management
4. One forward-looking question about next quarter
```

### AI Prompt: 1:1 Pattern Analyzer

```
Analyze the last 4-6 weeks of 1:1 notes and identify patterns.

Meeting summaries:
- [Date]: [Key topics and mood]
- [Date]: [Key topics and mood]
- [Date]: [Key topics and mood]
- [Date]: [Key topics and mood]

Identify:
1. Recurring themes or concerns
2. Mood trends (improving, declining, stable)
3. Unresolved action items that keep coming up
4. Potential risks (burnout, disengagement, skill gaps)
5. Suggested topics to prioritize in the next 1:1
```

---

## 8. Decision Log

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Decision | Title | -- |
| Date | Date | -- |
| Status | Select | Proposed, Decided, Revisit, Reversed |
| Impact | Select | High, Medium, Low |
| Decider | Person | -- |
| Context | Text | Why this decision was needed |
| Alternatives Considered | Text | Other options evaluated |
| Outcome | Text | Results after implementation |

### AI Prompt: Decision Documentation

```
Help me document a technical/business decision for our decision log.

Decision: [What was decided]
Context: [Why this decision was needed]
Options considered: [List 2-4 alternatives]
Chosen option: [Which one we picked]

Generate a structured decision record with:
1. **Context:** Why this decision was necessary (2-3 sentences)
2. **Options evaluated:** Pros and cons for each option (table format)
3. **Decision:** What was chosen and why (2-3 sentences)
4. **Consequences:** Expected positive and negative outcomes
5. **Review date:** When we should revisit this decision
```

---

## 9. Product Roadmap Board

**Type:** Database (Timeline View)
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Feature | Title | -- |
| Quarter | Select | Q1, Q2, Q3, Q4 |
| Status | Select | Idea, Planned, In Progress, Shipped |
| Priority | Select | P0, P1, P2, P3 |
| Effort | Select | XS, S, M, L, XL |
| Impact | Select | High, Medium, Low |
| Owner | Person | -- |
| Start Date | Date | -- |
| End Date | Date | -- |
| RICE Score | Formula | (Reach * Impact * Confidence) / Effort |
| Linked Tasks | Relation | Links to Sprint Board |

### Timeline View Setup
- Timeline by: Start Date to End Date
- Group by: Quarter
- Color by: Status

### AI Prompt: Feature Prioritization

```
Help me prioritize these features using the RICE framework.

Features:
1. [Feature 1]: [Brief description]
2. [Feature 2]: [Brief description]
3. [Feature 3]: [Brief description]
4. [Feature 4]: [Brief description]
5. [Feature 5]: [Brief description]

For each feature, estimate:
- Reach: How many users will this affect per quarter? (number)
- Impact: How much will this move the needle? (3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal)
- Confidence: How sure are we about these estimates? (100%, 80%, 50%)
- Effort: Person-months to implement (number)

Calculate RICE score: (Reach * Impact * Confidence) / Effort

Return a ranked table from highest to lowest RICE score with a recommendation on what to build first and why.
```

### AI Prompt: Quarterly Roadmap Planner

```
Help me plan next quarter's product roadmap.

Company goals for next quarter:
- [Goal 1]
- [Goal 2]
- [Goal 3]

Available capacity: [X] developers, [Y] designers for [Z] weeks.
Current backlog (ranked by priority):
- [Feature 1] - Effort: [S/M/L]
- [Feature 2] - Effort: [S/M/L]
- [Feature 3] - Effort: [S/M/L]
- [Feature 4] - Effort: [S/M/L]
- [Feature 5] - Effort: [S/M/L]

Generate:
1. Recommended features for the quarter (based on capacity and goals alignment)
2. Suggested timeline/ordering
3. Features to defer and why
4. Key risks to the plan
5. One "stretch goal" if the team ships faster than expected
```

---

## 10. Feature Prioritization Matrix

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### Page Structure

```
# Feature Prioritization - [Quarter/Period]

## Impact vs. Effort Matrix

### High Impact, Low Effort (DO FIRST)
- [Feature A]
- [Feature B]

### High Impact, High Effort (PLAN FOR)
- [Feature C]
- [Feature D]

### Low Impact, Low Effort (FILL GAPS)
- [Feature E]

### Low Impact, High Effort (AVOID)
- [Feature F]
```

### AI Prompt: Impact Assessment

```
Assess the impact and effort of these proposed features.

Product: [Your product description]
Target users: [Who uses it]
Current biggest pain points: [Top 3 user complaints]

Features to assess:
1. [Feature with description]
2. [Feature with description]
3. [Feature with description]

For each feature, rate:
- User impact (1-10): How much does this improve the user experience?
- Business impact (1-10): How much does this drive revenue/growth?
- Implementation effort (1-10): How hard is this to build?
- Risk (1-10): How likely is this to fail or cause issues?

Place each feature in the 2x2 matrix (Impact vs Effort) and explain your reasoning.
```

---

## 11. OKR Tracker

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 3

### Database Properties (Objectives)

| Property | Type | Options/Details |
|----------|------|-----------------|
| Objective | Title | -- |
| Quarter | Select | Q1, Q2, Q3, Q4 |
| Owner | Person | -- |
| Status | Select | On Track, At Risk, Off Track, Achieved |
| Progress | Number | 0-100% |
| Key Results | Relation | Links to Key Results database |

### Database Properties (Key Results)

| Property | Type | Options/Details |
|----------|------|-----------------|
| Key Result | Title | -- |
| Objective | Relation | Links to Objectives |
| Target | Number | -- |
| Current | Number | -- |
| Progress | Formula | Current / Target * 100 |
| Unit | Select | %, $, #, NPS, etc. |
| Owner | Person | -- |

### AI Prompt: OKR Writer

```
Help me write OKRs for next quarter.

Role/Team: [Your role or team]
Company priorities: [Top 2-3 company goals]
Last quarter's results: [Brief summary of what was achieved]
Biggest challenges: [What's holding you back]

Generate 3 Objectives, each with 3-4 Key Results.

Rules:
- Objectives should be ambitious and inspirational (not metrics)
- Key Results must be measurable with a specific number
- Key Results should be outcomes, not tasks
- Aim for 70% achievement = good (stretch goals)
- Use this format:

**Objective 1:** [Inspirational statement]
- KR1: [Increase/Decrease/Achieve] [metric] from [X] to [Y]
- KR2: [Increase/Decrease/Achieve] [metric] from [X] to [Y]
- KR3: [Increase/Decrease/Achieve] [metric] from [X] to [Y]
```

### AI Prompt: OKR Check-in Summary

```
Generate a mid-quarter OKR check-in summary.

Objective: [Objective statement]
Key Results:
1. [KR1]: Target [X], Current [Y], [Z]% complete
2. [KR2]: Target [X], Current [Y], [Z]% complete
3. [KR3]: Target [X], Current [Y], [Z]% complete

What we've done so far: [Brief list of initiatives]

Generate:
1. Overall assessment (On Track / At Risk / Off Track) with reasoning
2. What's working and should continue
3. What's not working and needs to change
4. Specific recommendations to close the gap on any lagging KRs
5. Confidence level for achieving each KR by end of quarter (High/Medium/Low)
```

### AI Prompt: OKR Grading

```
Grade our OKRs from last quarter and extract learnings.

Objective: [Objective]
Key Results:
1. [KR1]: Target [X], Achieved [Y] ([Z]%)
2. [KR2]: Target [X], Achieved [Y] ([Z]%)
3. [KR3]: Target [X], Achieved [Y] ([Z]%)

Context on results: [What happened during the quarter]

Provide:
1. Score for each KR (0.0 to 1.0)
2. Overall objective score (average of KRs)
3. Assessment: Were these good OKRs? (Well-scoped, measurable, ambitious enough?)
4. What to carry forward vs. what to drop
5. Suggested OKR improvements for next quarter
```

---

## 12. Quarterly Planning Template

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### Page Structure

```
# Q[X] [Year] Planning

## Quarter Theme
[One sentence describing the quarter's focus]

## Goals (Link to OKRs)
1. [Goal 1]
2. [Goal 2]
3. [Goal 3]

## Key Initiatives
| Initiative | Owner | Timeline | Dependencies | Status |
|------------|-------|----------|--------------|--------|
| [Init 1] | [Name] | [Weeks] | [Deps] | Planned |

## Capacity Planning
- Available dev weeks: [X]
- Allocated to features: [Y]
- Allocated to tech debt: [Z]
- Buffer: [W]

## Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | [H/M/L] | [H/M/L] | [Plan] |

## Success Criteria
By the end of Q[X], we will have:
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
```

### AI Prompt: Quarterly Plan Generator

```
Help me create a quarterly plan for my team.

Team: [Team name and size]
Company goals this quarter: [List goals]
Last quarter results: [What was accomplished and what fell short]
Known constraints: [Budget, headcount, dependencies]
Tech debt priorities: [Any maintenance work needed]

Generate a quarterly plan that includes:
1. A quarter theme (one memorable phrase)
2. Top 3-5 initiatives ranked by impact
3. Rough timeline (which month for each initiative)
4. Capacity allocation recommendation (features vs tech debt vs buffer %)
5. Top 3 risks and mitigations
6. Definition of success (3 measurable criteria)
```

---

## 13. Bug Tracking Database

**Type:** Database (Table + Board View)
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Bug Title | Title | -- |
| Status | Select | New, Triaged, In Progress, Fixed, Verified, Closed, Won't Fix |
| Severity | Select | Critical, High, Medium, Low |
| Priority | Select | P0, P1, P2, P3 |
| Reported By | Person | -- |
| Assigned To | Person | -- |
| Environment | Select | Production, Staging, Development |
| Component | Multi-select | [Your app components] |
| Steps to Reproduce | Text | -- |
| Expected Behavior | Text | -- |
| Actual Behavior | Text | -- |
| Screenshot | Files | -- |
| Fix Version | Select | v1.1, v1.2, v2.0 |
| Date Reported | Date | Created time |
| Date Resolved | Date | -- |
| Resolution Time | Formula | Date Resolved - Date Reported |

### AI Prompt: Bug Report Writer

```
Help me write a clear bug report based on this description.

What happened: [Describe the bug informally]
Where: [Which page/feature/component]
When: [When did you notice it]
Browser/Device: [If relevant]

Generate a structured bug report with:
1. **Title:** Clear, searchable bug title (under 80 characters)
2. **Steps to Reproduce:** Numbered steps anyone can follow
3. **Expected Behavior:** What should happen
4. **Actual Behavior:** What actually happens
5. **Severity Assessment:** Critical/High/Medium/Low with reasoning
6. **Possible Causes:** 2-3 potential technical causes to investigate
7. **Suggested Fix:** If obvious, suggest an approach
```

### AI Prompt: Bug Triage Assistant

```
Help me triage and prioritize these bugs.

Bug list:
1. [Bug title] - Severity: [S] - Reported: [Date] - Users affected: [N]
2. [Bug title] - Severity: [S] - Reported: [Date] - Users affected: [N]
3. [Bug title] - Severity: [S] - Reported: [Date] - Users affected: [N]
4. [Bug title] - Severity: [S] - Reported: [Date] - Users affected: [N]
5. [Bug title] - Severity: [S] - Reported: [Date] - Users affected: [N]

Available dev capacity this week: [X] hours

Recommend:
1. Priority order (what to fix first and why)
2. Which bugs can be batched together (likely same root cause)
3. Which bugs can be deferred and for how long
4. Estimated time to fix each (rough hours)
5. Any bugs that might be features/expected behavior
```

---

## 14. QA Test Case Tracker

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Test Case | Title | -- |
| Feature | Relation | Links to Roadmap |
| Type | Select | Functional, Regression, Edge Case, Performance, Security |
| Status | Select | Not Run, Pass, Fail, Blocked, Skipped |
| Priority | Select | Must Test, Should Test, Nice to Test |
| Steps | Text | -- |
| Expected Result | Text | -- |
| Actual Result | Text | -- |
| Tester | Person | -- |
| Last Run | Date | -- |

### AI Prompt: Test Case Generator

```
Generate test cases for this feature.

Feature: [Feature name and description]
User flows: [Describe the main user flows]
Edge cases to consider: [Any known edge cases]
Integration points: [Other features this connects to]

Generate 10-15 test cases covering:
1. Happy path (3-4 cases)
2. Edge cases (3-4 cases)
3. Error handling (2-3 cases)
4. Performance considerations (1-2 cases)
5. Security considerations (1-2 cases)

For each test case, provide:
- Test case name
- Type (Functional / Edge Case / Error / Performance / Security)
- Priority (Must Test / Should Test / Nice to Test)
- Steps (numbered)
- Expected result
- Test data needed
```

---

## 15. Release Notes Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### AI Prompt: Release Notes Writer

```
Write release notes based on these completed items.

Version: [Version number]
Release date: [Date]

Completed items:
- [Feature/fix 1]
- [Feature/fix 2]
- [Feature/fix 3]
- [Feature/fix 4]
- [Feature/fix 5]

Audience: [Internal team / Customers / Both]

Generate release notes with:
1. **Headline:** One exciting sentence about this release
2. **New Features:** Bullet points written for end users (not technical)
3. **Improvements:** Enhancements to existing features
4. **Bug Fixes:** Brief descriptions of resolved issues
5. **Known Issues:** Any remaining issues to be aware of

Tone: [Professional / Friendly / Technical] -- write for [audience type].
```

---

## 16. Project Risk Register

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Risk | Title | -- |
| Category | Select | Technical, Resource, Schedule, Budget, External |
| Probability | Select | High, Medium, Low |
| Impact | Select | Critical, High, Medium, Low |
| Risk Score | Formula | Probability rank * Impact rank |
| Status | Select | Open, Mitigating, Accepted, Closed |
| Owner | Person | -- |
| Mitigation Plan | Text | -- |
| Trigger | Text | How we'll know this risk is materializing |
| Contingency | Text | Plan B if the risk occurs |
| Last Reviewed | Date | -- |

### AI Prompt: Risk Identification

```
Identify potential risks for this project.

Project: [Project name and description]
Timeline: [Start to end date]
Team: [Size and composition]
Technology: [Key technologies involved]
Dependencies: [External dependencies]
Budget: [Budget range]

Generate a risk register with 8-12 risks across these categories:
- Technical risks (architecture, integration, performance)
- Resource risks (staffing, skills, availability)
- Schedule risks (delays, dependencies, scope creep)
- Budget risks (cost overruns, unexpected expenses)
- External risks (vendor, market, regulatory)

For each risk:
1. Risk description (one sentence)
2. Category
3. Probability (High/Medium/Low)
4. Impact (Critical/High/Medium/Low)
5. Trigger (early warning sign)
6. Mitigation plan (2-3 sentences)
7. Contingency (what to do if it happens)
```

---

## 17. Resource Allocation Board

**Type:** Database (Board View)
**Difficulty:** Intermediate
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Team Member | Title | -- |
| Role | Select | Developer, Designer, PM, QA |
| Current Project | Relation | Links to Projects |
| Allocation | Number | Percentage (0-100) |
| Available From | Date | -- |
| Skills | Multi-select | [Relevant skills] |
| Status | Select | Available, Partially Available, Fully Allocated, On Leave |

### AI Prompt: Resource Optimization

```
Help me optimize team resource allocation.

Team members and current allocation:
- [Name 1]: [Role], currently [X]% on [Project A], skills: [skills]
- [Name 2]: [Role], currently [X]% on [Project B], skills: [skills]
- [Name 3]: [Role], currently [X]% on [Project A and C], skills: [skills]

Upcoming work that needs staffing:
- [Project D]: Needs [roles] for [X weeks], starting [date]
- [Project E]: Needs [roles] for [X weeks], starting [date]

Constraints:
- [Any constraints, e.g., "Person X must stay on Project A"]

Recommend:
1. Optimal allocation for each team member
2. Any capacity gaps that need hiring or contractors
3. Risks of the proposed allocation (single points of failure, overallocation)
4. Alternative scenarios if constraints change
```

---

## 18. Project Brief Template

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### Page Structure

```
# Project Brief: [Project Name]

## Problem Statement
[What problem are we solving? Who has this problem?]

## Proposed Solution
[High-level description of what we're building]

## Goals & Success Metrics
| Goal | Metric | Target |
|------|--------|--------|
| [Goal 1] | [Metric] | [Target] |

## Scope
### In Scope
- [Item 1]

### Out of Scope
- [Item 1]

## Timeline
- Kickoff: [Date]
- Milestone 1: [Date]
- Launch: [Date]

## Team
| Role | Person | Allocation |
|------|--------|------------|
| PM | [Name] | [%] |

## Dependencies
- [Dependency 1]

## Risks
- [Risk 1]

## Approval
- [ ] Product: [Name]
- [ ] Engineering: [Name]
- [ ] Design: [Name]
```

### AI Prompt: Project Brief Generator

```
Generate a project brief from this rough idea.

Idea: [Describe the project idea in 2-3 sentences]
Who it's for: [Target users]
Why now: [Why is this important right now]
Rough timeline: [How long should this take]
Team available: [Who's available to work on it]

Generate a complete project brief including:
1. Problem statement (clear, specific, backed by evidence)
2. Proposed solution (high level, not technical)
3. Goals with measurable success metrics
4. Scope (in scope and explicitly out of scope)
5. Key milestones and dates
6. Top 3 risks
7. Open questions that need answers before starting
```

---

## 19-26: Additional Templates

### 19. Dependency Tracker
Database tracking cross-team and external dependencies with status, owner, due date, and impact if delayed.

### 20. Team Capacity Planner
Weekly view of team capacity with allocation percentages, PTO tracking, and AI-generated staffing recommendations.

### 21. Stakeholder Communication Plan
Matrix of stakeholders, their information needs, communication frequency, and preferred format. AI prompt generates tailored updates per stakeholder.

### 22. Post-Mortem Template
Structured template for incident/project post-mortems: timeline, root cause analysis, impact assessment, and AI-generated improvement recommendations.

### 23. Change Request Log
Database for scope changes: description, requestor, impact assessment, approval status. AI prompt evaluates impact on timeline and resources.

### 24. Project Milestone Tracker
Timeline database of milestones with dependencies, status, completion criteria, and AI-generated progress reports.

### 25. AI Daily Standup Generator

**AI Prompt:**
```
Generate my daily standup update.

Yesterday I worked on:
- [Task 1, brief description of progress]
- [Task 2, brief description of progress]

Today I plan to:
- [Rough plan for today]

I'm stuck on:
- [Any blockers, or "nothing"]

Format as a concise standup update (under 100 words) with:
- Yesterday: [2-3 bullet points]
- Today: [2-3 bullet points]
- Blockers: [Any blockers or "None"]

Keep it factual and specific. Replace vague language with concrete details.
```

### 26. Sprint Velocity Calculator

Database with sprint-over-sprint data: planned points, completed points, velocity trend. AI prompt analyzes velocity patterns and recommends capacity for future sprints.

**AI Prompt:**
```
Analyze our sprint velocity and recommend next sprint's capacity.

Sprint history:
- Sprint 1: Planned [X] pts, Completed [Y] pts
- Sprint 2: Planned [X] pts, Completed [Y] pts
- Sprint 3: Planned [X] pts, Completed [Y] pts
- Sprint 4: Planned [X] pts, Completed [Y] pts
- Sprint 5: Planned [X] pts, Completed [Y] pts

Team changes for next sprint: [Any changes in team size]
Known risks for next sprint: [Holidays, dependencies, etc.]

Provide:
1. Average velocity (last 3 sprints)
2. Velocity trend (improving, stable, declining)
3. Recommended commitment for next sprint (conservative, moderate, aggressive)
4. Factors to consider
5. Warning signs if velocity is declining
```

---

*End of Project Management Templates. For content planning templates, see 02-content-calendar-templates.md.*
