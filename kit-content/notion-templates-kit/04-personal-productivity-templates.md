# 04 - Personal Productivity Templates

> 25+ Notion AI templates for building a second brain, journaling, habit tracking, book notes, weekly reviews, and life dashboards.
> Every template includes the page/database structure AND AI prompts for reflection, analysis, and goal-setting.

---

## Table of Contents

1. [Second Brain / Knowledge Base](#1-second-brain--knowledge-base)
2. [AI Note Connector](#2-ai-note-connector)
3. [Daily Journal Template](#3-daily-journal-template)
4. [AI Reflection Prompt Generator](#4-ai-reflection-prompt-generator)
5. [Morning Routine Template](#5-morning-routine-template)
6. [Evening Review Template](#6-evening-review-template)
7. [Book Notes Database](#7-book-notes-database)
8. [AI Book Summary Generator](#8-ai-book-summary-generator)
9. [Article/Resource Library](#9-article-resource-library)
10. [Habit Tracker](#10-habit-tracker)
11. [AI Goal Setting System](#11-ai-goal-setting-system)
12. [Weekly Review Template](#12-weekly-review-template)
13. [AI Weekly Analysis](#13-ai-weekly-analysis)
14. [Monthly Review Template](#14-monthly-review-template)
15. [Annual Review Template](#15-annual-review-template)
16. [Life Dashboard](#16-life-dashboard)
17. [Finance Tracker](#17-finance-tracker)
18. [Health & Fitness Tracker](#18-health--fitness-tracker)
19. [Learning Tracker](#19-learning-tracker)
20. [Project/Side Hustle Tracker](#20-project-side-hustle-tracker)
21. [Decision Journal](#21-decision-journal)
22. [Gratitude Log](#22-gratitude-log)
23. [Energy & Focus Tracker](#23-energy--focus-tracker)
24. [Bucket List / Life Goals](#24-bucket-list--life-goals)
25. [Idea Capture System](#25-idea-capture-system)
26. [AI Personal Coach Prompts](#26-ai-personal-coach-prompts)

---

## 1. Second Brain / Knowledge Base

**Type:** Database + Page Structure
**Difficulty:** Intermediate
**AI Prompts:** 2

### The PARA Structure in Notion

Create four top-level databases:

#### Projects Database
| Property | Type | Options/Details |
|----------|------|-----------------|
| Project Name | Title | -- |
| Status | Select | Active, On Hold, Completed, Archived |
| Area | Relation | Links to Areas database |
| Deadline | Date | -- |
| Priority | Select | High, Medium, Low |
| Next Action | Text | -- |
| Progress | Number | 0-100% |
| Notes | Text | -- |

#### Areas Database
| Property | Type | Options/Details |
|----------|------|-----------------|
| Area | Title | e.g., Health, Career, Finance, Relationships, Learning |
| Status | Select | Active, Inactive |
| Projects | Relation | Links to Projects |
| Resources | Relation | Links to Resources |
| Description | Text | What this area covers |
| Review Frequency | Select | Weekly, Monthly, Quarterly |

#### Resources Database
| Property | Type | Options/Details |
|----------|------|-----------------|
| Resource | Title | -- |
| Type | Select | Article, Book, Course, Video, Tool, Template, Reference |
| Topic | Multi-select | [Your topics of interest] |
| Area | Relation | Links to Areas |
| Source | URL | -- |
| Summary | Text | Your notes or AI summary |
| Status | Select | To Process, Processed, Archived |
| Tags | Multi-select | Freeform tags |

#### Archive Database
Anything no longer active moves here. Same properties as the source database plus "Archived Date."

### AI Prompt: Note Organizer

```
Help me organize these notes into my PARA system.

My areas of life: [List your Areas -- e.g., Career, Health, Finance, Learning, Relationships, Creative]
My active projects: [List current projects]

Notes to organize:
1. [Note/idea 1]
2. [Note/idea 2]
3. [Note/idea 3]
4. [Note/idea 4]
5. [Note/idea 5]
6. [Note/idea 6]
7. [Note/idea 7]
8. [Note/idea 8]

For each note, determine:
1. Which PARA category: Project / Area / Resource / Archive
2. Which specific Project or Area it belongs to
3. Tags to apply
4. Whether it's actionable (if yes, what's the next action?)
5. Related notes it should be linked to
```

### AI Prompt: Knowledge Synthesizer

```
Synthesize these related notes into a single insight.

Notes on the topic of [Topic]:
1. [Note/highlight/quote 1]
2. [Note/highlight/quote 2]
3. [Note/highlight/quote 3]
4. [Note/highlight/quote 4]
5. [Note/highlight/quote 5]

Generate:
1. A one-paragraph synthesis (what's the overarching insight?)
2. Key principles extracted (3-5 bullet points)
3. Contradictions or tensions between the sources
4. How this applies to my life/work
5. One action I could take based on this knowledge
6. Questions this raises for further exploration
```

---

## 2. AI Note Connector

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### AI Prompt: Find Connections Between Notes

```
Find unexpected connections between these seemingly unrelated notes.

Note 1: [Topic A -- your notes/summary]
Note 2: [Topic B -- your notes/summary]
Note 3: [Topic C -- your notes/summary]
Note 4: [Topic D -- your notes/summary]
Note 5: [Topic E -- your notes/summary]

Identify:
1. Surprising connections between any two or more notes
2. A common underlying principle or pattern
3. How an idea from one domain could apply to another
4. A potential project or experiment inspired by combining these ideas
5. A question that bridges multiple notes

Think like a cross-disciplinary researcher. The most valuable insights come from connecting dots across domains.
```

---

## 3. Daily Journal Template

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Date | Title | YYYY-MM-DD |
| Mood | Select | Great, Good, Okay, Rough, Bad |
| Energy | Select | High, Medium, Low |
| Sleep Hours | Number | -- |
| Sleep Quality | Select | Excellent, Good, Fair, Poor |
| Exercise | Checkbox | Did you move today? |
| Highlight | Text | Best thing that happened |
| Gratitude | Text | 3 things grateful for |
| Word Count | Number | How much you wrote (formula or manual) |

### Page Template: Daily Entry

```
# [Date] - [Day of Week]

## Morning Intention
**Today I want to feel:** [Emotion]
**My #1 priority today:** [One thing that would make today a win]
**I'm grateful for:**
1. [Gratitude 1]
2. [Gratitude 2]
3. [Gratitude 3]

## What Happened Today
[Free-write about your day. Don't censor. Just capture.]

## Wins
- [Win 1]
- [Win 2]

## Challenges
- [Challenge 1]
- [Challenge 2]

## Lessons & Insights
- [What did you learn today?]

## Tomorrow
**One thing to carry forward:** [Something to continue]
**One thing to let go of:** [Something to release]
**Tomorrow's intention:** [How you want to show up]
```

### AI Prompt: Daily Journal Reflection

```
Reflect on my journal entry and provide insights.

Today's entry:
[Paste your journal entry]

Mood: [Mood rating]
Energy: [Energy level]
Sleep: [Hours and quality]

Generate a thoughtful reflection that:
1. Identifies the emotional undertone of the entry (what am I really feeling?)
2. Highlights patterns you notice (compared to themes I've written about before: [mention 2-3 recent themes])
3. Points out something I might not have noticed about my own writing
4. Asks me one powerful question to deepen my self-awareness
5. Suggests one small action for tomorrow based on today's experience
6. Offers a reframe on any challenges mentioned (different perspective)

Be honest but kind. Like a wise friend, not a therapist.
```

### AI Prompt: Weekly Journal Digest

```
Analyze my journal entries from the past week and create a digest.

Monday: Mood [X], Energy [Y]. Key theme: [Brief summary]
Tuesday: Mood [X], Energy [Y]. Key theme: [Brief summary]
Wednesday: Mood [X], Energy [Y]. Key theme: [Brief summary]
Thursday: Mood [X], Energy [Y]. Key theme: [Brief summary]
Friday: Mood [X], Energy [Y]. Key theme: [Brief summary]
Saturday: Mood [X], Energy [Y]. Key theme: [Brief summary]
Sunday: Mood [X], Energy [Y]. Key theme: [Brief summary]

Analyze:
1. Mood pattern (what days were best/worst and why)
2. Energy pattern (what affects my energy most)
3. Top theme of the week (what's on my mind)
4. Wins to celebrate (even small ones)
5. Recurring struggle (what keeps coming up)
6. One insight I might be avoiding
7. An intention for next week based on these patterns
```

---

## 4. AI Reflection Prompt Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### AI Prompt: Custom Journal Prompts

```
Generate 7 journal prompts for this week.

My current focus areas: [What's important to me right now]
What I'm struggling with: [Current challenges]
What's going well: [Current wins]
My journaling style: [Deep reflection / Quick bullets / Stream of consciousness / Gratitude-focused]

Generate 7 unique journal prompts (one per day) that:
1. Monday: Focus on setting intentions for the week
2. Tuesday: Explore a current challenge from a new angle
3. Wednesday: Celebrate progress and wins
4. Thursday: Examine a relationship or interaction
5. Friday: Reflect on what you learned this week
6. Saturday: Dream and envision (future-focused)
7. Sunday: Rest and reset (self-compassion focused)

Each prompt should be a specific, open-ended question (not generic "how do you feel?"). Make them thought-provoking and relevant to my current situation.
```

---

## 5. Morning Routine Template

**Type:** Page Template (Daily Duplicate)
**Difficulty:** Beginner
**AI Prompts:** 1

### Template

```
# Morning Routine - [Date]

## Body (10 min)
- [ ] Glass of water (before anything else)
- [ ] Stretch or movement: [Specific exercise]
- [ ] Cold shower / face wash

## Mind (15 min)
- [ ] Meditation: [X] minutes
- [ ] Journal: Morning intention + gratitude
- [ ] Read: [X] pages of [Current book]

## Plan (10 min)
- [ ] Review calendar
- [ ] Identify #1 priority for today: __________
- [ ] Time-block deep work session: [Time]
- [ ] Set phone to Do Not Disturb until: [Time]

## Fuel
- [ ] Healthy breakfast: __________
- [ ] Supplements: __________

## Score (end of morning)
How well did I follow through? (1-5): __
```

### AI Prompt: Morning Routine Builder

```
Design a personalized morning routine for me.

Wake-up time: [Time]
Time available before work/obligations: [Minutes]
Current fitness level: [Beginner / Intermediate / Advanced]
Goals: [e.g., more focus, less anxiety, better health, creative output]
Constraints: [e.g., kids at home, small apartment, no gym access]
What I've tried before: [Past routines and what didn't stick]
Non-negotiables: [Things I must include, like coffee]

Design a morning routine that:
1. Fits within my time window
2. Includes body, mind, and planning components
3. Starts easy (building the habit matters more than intensity)
4. Has a "minimum viable" version for tough mornings (10 min)
5. Progresses over 4 weeks (start simple, add complexity)
6. Includes specific activities with durations
7. Explains WHY each activity is included
```

---

## 6. Evening Review Template

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### Template

```
# Evening Review - [Date]

## Day Score: [1-10]

## What went well today?
1.
2.
3.

## What didn't go as planned?
1.
2.

## Did I complete my #1 priority? [Yes / No]
If no, why?
What will I do about it tomorrow?

## Energy Map
- Morning energy: [High / Medium / Low]
- Afternoon energy: [High / Medium / Low]
- Evening energy: [High / Medium / Low]
- Biggest energy drain:
- Biggest energy boost:

## Tomorrow's Setup
- #1 priority:
- Calendar conflicts to note:
- Preparation needed:
```

### AI Prompt: Evening Debrief

```
Help me process my day and prepare for tomorrow.

What happened today:
- My #1 priority was: [X] and I [completed / didn't complete] it because [reason]
- Other things I did: [List activities]
- Something unexpected: [What surprised me]
- My mood throughout the day: [Describe]

Generate:
1. An honest assessment of how I spent my time today (productive vs busy)
2. What I should feel good about (specific encouragement)
3. One thing I could have done differently (constructive, not critical)
4. Pattern I should watch for (based on what I described)
5. Three priorities for tomorrow (based on what didn't get done and what matters most)
6. A wind-down recommendation (something to help me sleep well)
```

---

## 7. Book Notes Database

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Book Title | Title | -- |
| Author | Text | -- |
| Status | Select | Want to Read, Reading, Finished, Abandoned |
| Rating | Select | 5 Stars, 4 Stars, 3 Stars, 2 Stars, 1 Star |
| Genre/Category | Multi-select | Business, Psychology, Self-Help, Tech, Fiction, Science, Philosophy, Biography |
| Date Started | Date | -- |
| Date Finished | Date | -- |
| Key Takeaways | Text | Top 3-5 insights |
| Favorite Quotes | Text | -- |
| How It Changed Me | Text | Concrete action or mindset shift |
| Recommend To | Text | Who would benefit from this book |
| One-Line Summary | Text | The book in one sentence |
| Cover | Files | Book cover image |
| AI Summary | Text | -- |

### Page Template: Book Notes

```
# [Book Title] by [Author]

## Why I Read This
[What drew you to this book]

## One-Sentence Summary
[The entire book distilled into one sentence]

## Key Ideas
### Idea 1: [Title]
[Explanation + your thoughts]

### Idea 2: [Title]
[Explanation + your thoughts]

### Idea 3: [Title]
[Explanation + your thoughts]

## Favorite Quotes
> "[Quote 1]" (p. XX)
>
> "[Quote 2]" (p. XX)
>
> "[Quote 3]" (p. XX)

## How This Book Changed My Thinking
[What shifted in your perspective]

## Actions I'm Taking Based on This Book
- [ ] [Action 1]
- [ ] [Action 2]
- [ ] [Action 3]

## Rating: [X]/5
**Would recommend to:** [Who would benefit]
```

### AI Prompt: Book Notes Distiller

```
Help me process my book notes into actionable insights.

Book: [Title] by [Author]
My raw highlights and notes:
[Paste your highlights, marginalia, or raw notes]

Generate:
1. One-sentence summary of the entire book
2. The 5 most important ideas (ranked by impact), each in 2-3 sentences
3. 3 favorite quotes with context on why they matter
4. How this book connects to other books I've read: [List 2-3 related books]
5. Practical takeaways: 3 specific things I can do differently starting this week
6. One sentence I could share on social media about this book
7. Who should read this book (and who shouldn't)
```

### AI Prompt: Reading List Curator

```
Recommend my next 5 books based on my reading history.

Books I loved (and why):
- [Book 1] -- loved because [reason]
- [Book 2] -- loved because [reason]
- [Book 3] -- loved because [reason]

Books I didn't like (and why):
- [Book 1] -- didn't like because [reason]

What I'm currently interested in learning about:
- [Topic 1]
- [Topic 2]

My reading goals: [e.g., improve leadership, understand AI, expand worldview]

Recommend 5 books with:
1. Title and author
2. One-sentence description
3. Why it's a good fit for me specifically
4. What I'll gain from reading it
5. Estimated reading time
6. Priority order (which to read first)
```

---

## 8. AI Book Summary Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 1

### AI Prompt: Comprehensive Book Summary

```
Create a comprehensive summary of the book [Book Title] by [Author].

I've read the book and want a structured reference I can return to.

Generate:
1. Book overview (3-4 sentences: what it's about, who it's for, main thesis)
2. Chapter-by-chapter key points (1-2 sentences per chapter, or per major section)
3. The author's main arguments (numbered list)
4. Practical frameworks or models introduced (describe each)
5. Counterarguments or limitations (what the author misses or oversimplifies)
6. Comparison to similar books in the genre
7. Implementation guide: How to apply the top 3 ideas in daily life

Format as a reference document I can quickly scan when I need a refresher.
```

---

## 9. Article/Resource Library

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Title | Title | -- |
| URL | URL | -- |
| Type | Select | Article, Video, Podcast, Tool, Course, Tweet |
| Topic | Multi-select | -- |
| Saved Date | Date | Created time |
| Status | Select | To Read, Read, Summarized, Archived |
| Rating | Select | Must Read, Useful, Okay, Skip |
| Key Insight | Text | Main takeaway in 1-2 sentences |
| Notes | Text | Your notes |
| Source | Text | Who shared or where you found it |

### AI Prompt: Article Summarizer

```
Summarize this article for my knowledge base.

Article title: [Title]
Article URL: [URL]
Article content (or key paragraphs):
[Paste the article or its key sections]

Generate:
1. One-sentence summary (the core insight)
2. Key points (3-5 bullet points)
3. How this is relevant to my work/life: [Briefly describe your context]
4. One action item inspired by this article
5. Tags to categorize this: [Suggest 3-5 tags]
6. Related topics to explore further
```

---

## 10. Habit Tracker

**Type:** Database
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Date | Title | YYYY-MM-DD |
| Habit 1: [Name] | Checkbox | e.g., Exercise |
| Habit 2: [Name] | Checkbox | e.g., Read 20 pages |
| Habit 3: [Name] | Checkbox | e.g., Meditate |
| Habit 4: [Name] | Checkbox | e.g., No social media before noon |
| Habit 5: [Name] | Checkbox | e.g., Write 500 words |
| Habit 6: [Name] | Checkbox | e.g., 8 hours sleep |
| Completion Rate | Formula | (Checked habits / Total habits) * 100 |
| Notes | Text | What helped or hindered today |
| Streak Count | Number | Days in a row (manually or formula) |

### AI Prompt: Habit Stack Designer

```
Design a habit stack for me based on my goals.

My goals for the next 90 days:
- [Goal 1]
- [Goal 2]
- [Goal 3]

My current routine:
- Wake up at [time]
- [Existing routine items]
- Go to bed at [time]

My biggest struggles with habits: [e.g., consistency, motivation, time]
Habits I've successfully maintained: [Any existing good habits]
Time available for new habits: [Minutes per day]

Design a habit stack with:
1. Starter habits (tiny, 2-minute versions to build consistency)
2. Habit stacking sequence (attach each new habit to an existing one)
3. Implementation intentions: "After I [existing habit], I will [new habit]"
4. Environment design tips (how to set up your space for success)
5. Tracking method recommendation
6. 4-week progression plan (how to increase intensity over time)
7. Recovery plan (what to do when you miss a day)
```

### AI Prompt: Habit Review Analyzer

```
Analyze my habit tracking data and provide recommendations.

Habit tracking for the past [2/4] weeks:

[For each habit, list completion rate]
- Exercise: [X] out of [Y] days ([Z]%)
- Reading: [X] out of [Y] days ([Z]%)
- Meditation: [X] out of [Y] days ([Z]%)
- [Habit 4]: [X] out of [Y] days ([Z]%)
- [Habit 5]: [X] out of [Y] days ([Z]%)

Patterns I noticed: [Any observations]
Days I struggled most: [Which days and why]

Analyze:
1. Which habits are sticking and why?
2. Which habits need intervention and what kind?
3. Are there too many habits? Should I reduce?
4. Day-of-week patterns (which days are strongest/weakest)
5. Habit correlations (do certain habits tend to succeed/fail together)
6. Three specific changes to improve consistency next week
7. An encouraging note about what's working
```

---

## 11. AI Goal Setting System

**Type:** Page Template + Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties (Goals)

| Property | Type | Options/Details |
|----------|------|-----------------|
| Goal | Title | -- |
| Timeframe | Select | This Week, This Month, This Quarter, This Year, 3-Year, Lifetime |
| Area | Select | Career, Health, Finance, Relationships, Learning, Creative, Adventure |
| Status | Select | Not Started, In Progress, Achieved, Abandoned |
| Progress | Number | 0-100% |
| Target Metric | Text | How you measure success |
| Current Metric | Text | Where you are now |
| Deadline | Date | -- |
| Milestones | Relation | Links to Milestones database |
| Why | Text | Why this goal matters to you |
| Obstacles | Text | What might get in the way |
| Next Action | Text | Very next thing to do |

### AI Prompt: Goal Setting Workshop

```
Help me set meaningful goals for the next [quarter / year].

Where I am now:
- Career: [Current situation]
- Health: [Current situation]
- Finance: [Current situation]
- Relationships: [Current situation]
- Learning: [Current situation]
- Fun/Adventure: [Current situation]

Where I want to be:
- [Describe your vision broadly]

What frustrates me most right now: [Your biggest pain point]
What excites me most right now: [Your biggest source of energy]

Generate:
1. One bold goal for each life area (6 total)
2. For each goal:
   - Specific, measurable target
   - Why this matters (connect to values and emotions)
   - The gap between here and there
   - First 3 milestones
   - Biggest obstacle and how to overcome it
   - Daily/weekly habit that moves the needle
   - How to know if you're off track
3. Priority ranking (which goal to focus on first)
4. The one keystone goal that would positively impact all other areas
```

### AI Prompt: Goal Progress Check-in

```
Review my progress on this goal and help me adjust.

Goal: [Goal statement]
Deadline: [Date]
Started: [Date]
Target metric: [What success looks like]
Current progress: [Where I am now, expressed as metric]
% Complete: [Percentage]
Days remaining: [Number]

What I've done so far:
- [Action 1]
- [Action 2]
- [Action 3]

What's blocking me:
- [Obstacle 1]
- [Obstacle 2]

Generate:
1. Honest progress assessment (On Track / Behind / Way Behind)
2. At current pace, will you hit the goal? (Math it out)
3. What needs to change to get back on track (if behind)
4. Revised milestones for remaining time
5. The ONE thing to focus on for the next 7 days
6. Motivation boost (remind me why this matters and how far I've come)
```

---

## 12. Weekly Review Template

**Type:** Page Template (Weekly Duplicate)
**Difficulty:** Beginner
**AI Prompts:** 1

### Template

```
# Weekly Review - Week of [Date]

## Score This Week: [1-10]

## Review: What Happened

### Big Wins
1.
2.
3.

### Challenges / Setbacks
1.
2.

### Key Metrics
- Hours of deep work: [X]
- Habit completion rate: [X]%
- Exercise sessions: [X]
- Books/pages read: [X]
- Revenue (if tracking): $[X]
- Energy average (1-5): [X]

## Reflect: What I Learned
- Biggest lesson:
- Something I'm grateful for:
- Something I'd do differently:

## Plan: Next Week

### Top 3 Priorities
1.
2.
3.

### Commitments & Appointments
- [List appointments and deadlines]

### Habits to Focus On
- [Which habits need extra attention]

### One Thing to Let Go Of
- [Something to stop doing or worrying about]
```

### AI Prompt: Weekly Review Synthesizer

```
Analyze my weekly review and provide insights for next week.

This week's data:
- Score: [1-10]
- Wins: [List]
- Challenges: [List]
- Deep work hours: [X]
- Habit completion: [X]%
- Energy level: [X/5 average]
- Biggest lesson: [What you learned]
- Mood trend: [How you felt overall]

Last week's score for comparison: [X]
Current top goal: [Your main focus]

Generate:
1. Week-in-review summary (3 sentences -- honest but encouraging)
2. Pattern spotted (compare to previous weeks if context provided)
3. Hidden win I might be overlooking
4. The one thing that held me back most
5. Specific plan for next week's #1 priority (break it into daily actions)
6. Energy management suggestion (based on energy data)
7. A question to sit with this weekend
```

---

## 13. AI Weekly Analysis

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### AI Prompt: Deep Weekly Analysis

```
Perform a deep analysis of my week across all life areas.

Work/Career:
- Hours worked: [X]
- Key accomplishments: [List]
- Unfinished items: [List]
- Stress level: [1-10]

Health:
- Exercise: [X] sessions, types: [List]
- Sleep average: [X] hours, quality: [Good/Fair/Poor]
- Diet quality: [1-10]
- Mental health: [1-10]

Relationships:
- Quality time with: [Who and how much]
- Neglected connections: [Who you haven't connected with]

Finance:
- Money spent on: [Categories]
- Income: [If relevant]
- Financial stress: [1-10]

Learning/Growth:
- What I learned: [Topics]
- Skills practiced: [List]
- Books/content consumed: [List]

Generate:
1. Life balance assessment (which areas got attention, which were neglected)
2. The area that needs the most urgent attention
3. Correlation analysis (e.g., "Your stress was highest on days you slept poorly")
4. One thing that's going better than I think
5. One thing that needs honest attention
6. Recommended focus for next week (the 80/20 -- what small change yields the most improvement)
7. A personalized affirmation based on my strengths this week
```

---

## 14. Monthly Review Template

**Type:** Page Template
**Difficulty:** Intermediate
**AI Prompts:** 1

### Template

```
# Monthly Review - [Month Year]

## Month at a Glance
- Overall score: [1-10]
- Word for this month: [One word that summarizes it]
- Biggest win:
- Biggest challenge:
- Most surprising moment:

## Goal Progress
| Goal | Target | Actual | Status |
|------|--------|--------|--------|
| [Goal 1] | [Target] | [Result] | On Track / Behind / Achieved |
| [Goal 2] | [Target] | [Result] | On Track / Behind / Achieved |
| [Goal 3] | [Target] | [Result] | On Track / Behind / Achieved |

## Monthly Metrics
- Avg weekly score: [X]
- Total deep work hours: [X]
- Books finished: [X]
- Habit completion rate: [X]%
- Revenue: $[X]
- Savings rate: [X]%
- Exercise sessions: [X]

## Lessons Learned
1.
2.
3.

## Next Month
- Theme: [One word or phrase]
- Top 3 goals:
- One thing to start:
- One thing to stop:
- One thing to continue:
```

### AI Prompt: Monthly Deep Dive

```
Analyze my month and help me plan the next one.

Month: [Month]
Weekly scores: [W1: X, W2: X, W3: X, W4: X]
Goals and results: [List each goal with target vs actual]
Key events: [Major things that happened]
Health data: [Exercise, sleep, diet averages]
Financial data: [Revenue, expenses, savings if tracking]
Mood trend: [How the month felt emotionally]
Biggest lesson: [What I learned]

Generate:
1. Month score and honest assessment
2. Goal achievement analysis (what worked, what didn't, and why)
3. Trend analysis (comparing to previous months if data provided)
4. The hidden theme of this month (what was I really focused on vs. what I said I'd focus on)
5. Three specific goals for next month (SMART format)
6. One behavioral change that would have the biggest positive impact
7. A reflection question to carry into next month
```

---

## 15. Annual Review Template

**Type:** Page Template
**Difficulty:** Advanced
**AI Prompts:** 1

### AI Prompt: Year in Review Generator

```
Help me conduct a thorough annual review.

Year: [Year]
Top 5 highlights of the year:
1. [Highlight]
2. [Highlight]
3. [Highlight]
4. [Highlight]
5. [Highlight]

Top 3 challenges:
1. [Challenge]
2. [Challenge]
3. [Challenge]

Goals I set at the start of the year:
- [Goal 1]: [Achieved/Partially/Missed]
- [Goal 2]: [Achieved/Partially/Missed]
- [Goal 3]: [Achieved/Partially/Missed]

Life area assessments (1-10):
- Career: [X]
- Health: [X]
- Finance: [X]
- Relationships: [X]
- Learning: [X]
- Fun/Adventure: [X]

Generate:
1. Year narrative (tell the story of my year in 3 paragraphs)
2. Biggest growth areas (where I improved most)
3. Biggest regret or missed opportunity
4. Unexpected lessons (things I learned that I didn't plan to)
5. People who mattered most this year
6. Habits that stuck vs. habits that didn't
7. Theme of the year (looking back, what was this year really about?)
8. One thing I'm most proud of
9. Letter to myself for next year (advice, encouragement, warnings)
10. Three bold goals for next year
```

---

## 16. Life Dashboard

**Type:** Dashboard Page
**Difficulty:** Advanced
**AI Prompts:** 1

### Page Structure

```
# Life Dashboard

## Quick Pulse (Callout Blocks)
- Overall Life Score: [X/10]
- Current Focus: [One word]
- Days Until Next Goal Deadline: [X]
- Current Streak: [X] days of [Habit]

## Active Goals (Linked Database View)
[Filtered to: Status = In Progress, sorted by Deadline]

## This Week's Priorities (Linked View)
[From Weekly Review database, current week]

## Habit Streaks (Linked View)
[From Habit Tracker, current month view]

## Health Stats (Linked View)
[Exercise log, sleep log, current week]

## Financial Snapshot (Linked View)
[Monthly income, expenses, savings rate]

## Reading Progress (Linked View)
[Currently reading books]

## Upcoming (Linked View)
[Calendar items for next 7 days]
```

### AI Prompt: Life Dashboard Review

```
Review my life dashboard data and give me a state of the union.

Current scores (1-10):
- Career satisfaction: [X]
- Health/fitness: [X]
- Financial stability: [X]
- Relationships: [X]
- Personal growth: [X]
- Fun/adventure: [X]
- Stress level: [X] (lower is better)

Active goals: [List top 3 with progress %]
Current habits and streaks: [List habits and streak lengths]
Recent wins: [Last 2-3 things you're proud of]
Current struggles: [What's hard right now]

Generate:
1. Life score (weighted average with reasoning)
2. Strongest area and why
3. Area needing the most attention
4. The hidden connection between my strongest and weakest areas
5. One insight about my current life trajectory
6. Recommended shift in focus for the next 30 days
7. A challenging but important question to sit with
```

---

## 17-26: Additional Productivity Templates

### 17. Finance Tracker
Database tracking income, expenses, savings, investments. AI prompt generates monthly financial summaries and spending pattern analysis.

### 18. Health & Fitness Tracker
Database for workouts, meals, sleep, weight, vitals. AI prompt creates workout plans and analyzes health trends.

**AI Prompt: Fitness Plan Generator**
```
Create a 4-week fitness plan based on my profile.

Current level: [Beginner / Intermediate / Advanced]
Goal: [Lose weight / Build muscle / Improve endurance / General health]
Available equipment: [Gym, home equipment, bodyweight only]
Time per workout: [Minutes]
Workouts per week: [Number]
Injuries or limitations: [Any]
Activities I enjoy: [What I like doing]

Generate a 4-week plan with:
1. Weekly schedule (which days, which body parts or workout types)
2. Specific exercises with sets, reps, and rest periods
3. Progression plan (how to increase difficulty week over week)
4. Warm-up and cool-down routines
5. One recovery day activity suggestion
6. How to track progress (what to measure)
```

### 19. Learning Tracker
Database for courses, skills, and certifications with progress tracking and AI-generated learning paths.

### 20. Project/Side Hustle Tracker
Database for personal projects with time invested, revenue generated, status, and AI-generated next steps.

### 21. Decision Journal
Database logging important decisions with context, alternatives, expected outcomes, and later review of actual outcomes. AI prompt helps with decision frameworks.

**AI Prompt: Decision Helper**
```
Help me think through this decision.

Decision: [What I'm trying to decide]
Options:
- Option A: [Description]
- Option B: [Description]
- Option C: [Description, if applicable]

Context: [Relevant background]
Timeline: [When I need to decide by]
What I value most: [Your priorities -- e.g., freedom, security, growth, relationships]
My gut feeling: [What my instinct says]

Analyze using:
1. Pros/cons for each option (5 each)
2. 10/10/10 test (how will I feel about this in 10 minutes, 10 months, 10 years?)
3. Regret minimization (which option would I regret NOT choosing?)
4. Reversibility assessment (how easy is it to undo each option?)
5. The advice I would give my best friend in this situation
6. What fear is driving me toward/away from each option?
7. Final recommendation with reasoning
```

### 22. Gratitude Log
Simple daily database with 3 gratitudes, a highlight, and an AI prompt for deepening gratitude practice.

### 23. Energy & Focus Tracker
Time-block database tracking energy levels throughout the day to identify peak performance windows.

### 24. Bucket List / Life Goals
Database of lifetime goals with categories, difficulty, cost estimates, and progress.

### 25. Idea Capture System
Quick-entry database for capturing ideas on the go with AI-powered categorization and development prompts.

### 26. AI Personal Coach Prompts

**AI Prompt: Weekly Coaching Session**
```
Act as my personal coach for a weekly check-in session.

How I'm feeling overall (1-10): [Score]
This week's win I'm most proud of: [Win]
This week's biggest frustration: [Frustration]
Am I living aligned with my values? [Yes / Somewhat / No -- explain]
One thing I'm avoiding: [What I'm procrastinating on]
Energy level: [High / Medium / Low]

Coach me by:
1. Acknowledging my win (be specific about why it matters)
2. Exploring the frustration (what's the real issue underneath?)
3. Gently addressing what I'm avoiding (why am I avoiding it? What would happen if I just started?)
4. Giving me a challenge for next week (something slightly outside my comfort zone)
5. Asking me one powerful question that will stick with me
6. Ending with an honest, encouraging observation

Be direct. Don't sugarcoat. But be kind. Good coaches push you AND believe in you.
```

---

*End of Personal Productivity Templates. For business operations templates, see 05-business-operations-templates.md.*
