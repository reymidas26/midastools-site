# 02 - Content Calendar Templates

> 25+ Notion AI templates for content planning, social media, blogs, newsletters, podcasts, and content repurposing.
> Every template includes database structures, property configurations, AND AI prompts.

---

## Table of Contents

1. [Master Content Calendar](#1-master-content-calendar)
2. [AI Topic Generator Board](#2-ai-topic-generator-board)
3. [Social Media Scheduling Board](#3-social-media-scheduling-board)
4. [AI Caption Generator Templates](#4-ai-caption-generator-templates)
5. [Blog Editorial Calendar](#5-blog-editorial-calendar)
6. [AI Blog Outline Generator](#6-ai-blog-outline-generator)
7. [Newsletter Planning Database](#7-newsletter-planning-database)
8. [AI Subject Line Generator](#8-ai-subject-line-generator)
9. [Podcast Content Pipeline](#9-podcast-content-pipeline)
10. [Video Content Pipeline](#10-video-content-pipeline)
11. [Content Repurposing Tracker](#11-content-repurposing-tracker)
12. [Content Idea Backlog](#12-content-idea-backlog)
13. [SEO Content Planner](#13-seo-content-planner)
14. [Content Performance Tracker](#14-content-performance-tracker)
15. [Brand Voice Guide Template](#15-brand-voice-guide-template)
16. [Hashtag Research Database](#16-hashtag-research-database)
17. [Collaboration & Guest Content Tracker](#17-collaboration-guest-content-tracker)
18. [Content Workflow Automation](#18-content-workflow-automation)
19. [Seasonal Content Planner](#19-seasonal-content-planner)
20. [Competitor Content Tracker](#20-competitor-content-tracker)
21. [UGC (User-Generated Content) Tracker](#21-ugc-tracker)
22. [Content Audit Template](#22-content-audit-template)
23. [AI Content Brief Generator](#23-ai-content-brief-generator)
24. [Evergreen Content Library](#24-evergreen-content-library)
25. [Content Distribution Checklist](#25-content-distribution-checklist)
26. [Weekly Content Review Dashboard](#26-weekly-content-review-dashboard)

---

## 1. Master Content Calendar

**Type:** Database (Calendar + Table View)
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Content Title | Title | -- |
| Publish Date | Date | -- |
| Status | Select | Idea, Outlined, Drafting, Editing, Scheduled, Published |
| Platform | Multi-select | Blog, Twitter/X, LinkedIn, Instagram, TikTok, YouTube, Newsletter, Podcast |
| Content Type | Select | Article, Thread, Carousel, Reel, Short, Long-form Video, Email, Episode |
| Pillar/Topic | Select | [Your content pillars - e.g., Tutorials, Behind the Scenes, Industry News, Case Studies] |
| Author | Person | -- |
| Campaign | Relation | Links to Campaigns database |
| URL | URL | Published link |
| Performance | Select | Viral, Above Average, Average, Below Average, Flop |
| Notes | Text | -- |
| AI Draft | Text | AI-generated first draft |

### Calendar View Setup
- View: Calendar by Publish Date
- Color by: Platform (different color per platform)
- Filter: Status is not "Idea"

### Table View Setup
- Group by: Status
- Sort by: Publish Date ascending
- Filter: Publish Date is within next 30 days

### AI Prompt: Monthly Content Plan Generator

```
Create a 30-day content plan for my brand.

Brand/Niche: [Your niche]
Target audience: [Who you're creating for]
Content pillars: [List 3-5 content themes/pillars]
Platforms: [Which platforms you post on]
Posting frequency: [e.g., Blog 2x/week, Twitter daily, Instagram 3x/week, Newsletter weekly]
Current goals: [What you're trying to achieve -- growth, engagement, sales, etc.]
Upcoming events/launches: [Any time-sensitive content needs]

Generate a 30-day content calendar with:
1. Date
2. Platform
3. Content type (article, thread, carousel, reel, etc.)
4. Topic/Title
5. Content pillar it falls under
6. Brief description (1-2 sentences)
7. CTA (what action you want the reader to take)

Ensure a good mix of content types and pillars throughout the month.
Balance educational, entertaining, and promotional content (80/15/5 ratio).
```

### AI Prompt: Content Gap Finder

```
Analyze my recent content and find gaps in my coverage.

My content pillars: [List your pillars]
Recent content published (last 30 days):
- [Title 1] - [Platform] - [Pillar]
- [Title 2] - [Platform] - [Pillar]
- [Title 3] - [Platform] - [Pillar]
- [Title 4] - [Platform] - [Pillar]
- [Title 5] - [Platform] - [Pillar]

Identify:
1. Which content pillars are underrepresented?
2. Which platforms are being neglected?
3. What content types haven't been used recently?
4. What audience questions or pain points haven't been addressed?
5. Suggest 10 content ideas to fill these gaps, specifying platform and format.
```

---

## 2. AI Topic Generator Board

**Type:** Database (Board View)
**Difficulty:** Beginner
**AI Prompts:** 3

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Topic Idea | Title | -- |
| Status | Select | Raw Idea, Researched, Approved, Assigned, In Production |
| Source | Select | AI Generated, Audience Question, Trending, Competitor, Personal Experience |
| Pillar | Select | [Your content pillars] |
| Potential Score | Number | 1-10 rating |
| Platform Fit | Multi-select | Blog, Social, Newsletter, Video, Podcast |
| Keywords | Text | Target SEO keywords |
| Audience Pain Point | Text | What problem this solves |
| Notes | Text | -- |

### AI Prompt: Bulk Topic Generator

```
Generate 25 content topic ideas for my niche.

Niche: [Your niche]
Target audience: [Describe your ideal reader/viewer]
Their biggest problems: [List 3-5 pain points]
Content pillars: [Your pillars]
Tone: [Professional / Casual / Educational / Entertaining]

For each topic, provide:
1. Topic title (attention-grabbing, specific)
2. Content pillar it belongs to
3. Best platform/format for this topic
4. Target keyword (for SEO)
5. Hook (first sentence or question to grab attention)
6. Potential score (1-10, based on likely audience interest)

Generate a mix of:
- How-to tutorials (8 ideas)
- Listicles/roundups (5 ideas)
- Opinion/thought leadership (4 ideas)
- Case studies/examples (4 ideas)
- Behind the scenes/personal (4 ideas)
```

### AI Prompt: Trending Topic Finder

```
Based on these trending topics in my industry, suggest content angles.

Industry: [Your industry]
Trending topics/news:
- [Trend 1]
- [Trend 2]
- [Trend 3]

My expertise areas: [What you're qualified to talk about]
My audience's level: [Beginner / Intermediate / Advanced]

For each trend, suggest:
1. A hot take or unique angle (not the same take everyone else has)
2. Best format (thread, blog post, video, carousel)
3. Title/headline
4. Time sensitivity (post within 24 hours / this week / anytime)
5. How to connect it back to your core message
```

### AI Prompt: Audience Question to Content

```
Turn these audience questions into content ideas.

Questions from my audience:
1. "[Question from DMs, comments, or emails]"
2. "[Question]"
3. "[Question]"
4. "[Question]"
5. "[Question]"

For each question, create:
1. A content piece title (not just restating the question)
2. Best format (blog, video, carousel, thread)
3. Outline (5-7 main points to cover)
4. Related questions to address in the same piece
5. CTA (what to offer the person after consuming this content)
```

---

## 3. Social Media Scheduling Board

**Type:** Database (Board + Calendar View)
**Difficulty:** Beginner
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Post Title | Title | Short reference name |
| Platform | Select | Twitter/X, LinkedIn, Instagram, TikTok, Facebook, Threads |
| Post Type | Select | Text, Image, Carousel, Reel/Video, Story, Poll, Thread |
| Status | Select | Drafted, Designed, Approved, Scheduled, Posted |
| Publish Date | Date | Include time |
| Caption | Text | Full post copy |
| Media | Files | Images, videos |
| Hashtags | Text | -- |
| Link | URL | Any link included |
| Campaign | Relation | Links to Campaigns |
| Engagement | Number | Likes + comments + shares |
| Impressions | Number | -- |
| Notes | Text | -- |

### Board View: Group by Platform, sort by Publish Date
### Calendar View: By Publish Date, color by Platform

### AI Prompt: Weekly Social Media Batch

```
Create a week of social media posts for my brand.

Brand: [Your brand/business]
Platform: [Which platform]
Audience: [Who follows you]
Voice: [Your brand voice -- e.g., witty and direct, warm and educational]
This week's focus: [Any theme, launch, or event]
Content mix: [e.g., 2 educational, 2 engaging, 1 promotional, 1 personal, 1 repurposed]

For each post, provide:
1. Day of week
2. Post type (text, image with caption, carousel, poll, thread)
3. Full caption/copy (ready to post, including line breaks and formatting)
4. Image/visual description (what to create or photograph)
5. Hashtags (5-10 relevant ones)
6. Best time to post
7. CTA (comment prompt, link click, save, share)

Write in first person. Make each post self-contained and valuable.
```

### AI Prompt: Engagement Booster

```
Rewrite this social media post to increase engagement.

Original post:
"[Paste your original post]"

Platform: [Which platform]
Goal: [More comments / more saves / more shares / more clicks]

Provide 3 variations:
1. Hook-focused: Start with a pattern interrupt or controversial statement
2. Story-focused: Rewrite as a mini story or personal anecdote
3. Question-focused: Rewrite to spark conversation in comments

For each variation, explain why it should perform better.
```

---

## 4. AI Caption Generator Templates

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 5

### AI Prompt: Instagram Carousel Captions

```
Write an Instagram carousel caption for this topic.

Topic: [Your topic]
Number of slides: [5-10]
Audience: [Who this is for]
Goal: [Educate, entertain, convert]

Generate:
1. Slide-by-slide text (what goes ON each carousel slide -- keep it concise, 1-2 sentences per slide)
2. Caption for the post (hook, value, CTA -- under 2200 characters)
3. First comment with hashtags (20-30 relevant hashtags organized by reach: broad, medium, niche)
```

### AI Prompt: Twitter/X Thread Writer

```
Turn this idea into a viral Twitter/X thread.

Topic: [Your topic]
Key points to cover: [List 3-5 main points]
Thread length: [5-12 tweets]

Rules:
- Tweet 1 must be a compelling hook (bold claim, surprising stat, or provocative question)
- Each tweet must stand alone but flow into the next
- Use short sentences and line breaks
- Include at least one concrete example or data point
- Last tweet should have a clear CTA
- No hashtags in the thread itself (save for a reply)

Write the full thread, numbered 1/ through [X]/.
```

### AI Prompt: LinkedIn Post Writer

```
Write a LinkedIn post about this topic.

Topic: [Your topic]
Key message: [Main takeaway]
Audience: [Who should care about this]
Tone: [Professional but human / Storytelling / Data-driven / Contrarian]

Structure:
1. Hook (first 2 lines that make people click "See more")
2. Story or context (3-5 short paragraphs)
3. Key insight or lesson (the "aha" moment)
4. Actionable takeaway (what the reader can do today)
5. Engagement prompt (question or CTA)

Rules:
- Short paragraphs (1-2 sentences each)
- Use line breaks liberally
- No hashtags in the body (put 3-5 at the end)
- Under 3000 characters
- First person, conversational tone
```

### AI Prompt: TikTok/Reel Script Writer

```
Write a script for a short-form video (TikTok/Reel).

Topic: [Your topic]
Duration: [15 / 30 / 60 seconds]
Style: [Talking head, voice-over with b-roll, text on screen, trending format]
Audience: [Who this is for]

Generate:
1. Hook (first 3 seconds -- what stops the scroll)
2. Full script with timestamps
3. On-screen text for each section
4. Visual/action notes (what to show while speaking)
5. CTA (last 3-5 seconds)
6. Caption for the post
7. Suggested sounds/music style

Keep language casual and punchy. Every second counts.
```

### AI Prompt: Facebook Group Post Writer

```
Write a Facebook group post that sparks discussion.

Group topic: [What the group is about]
Post goal: [Spark discussion / Share value / Soft promote / Build authority]
Topic: [What you want to post about]

Generate:
1. Opening hook (question or bold statement)
2. Body (provide value or share experience -- 3-5 short paragraphs)
3. Discussion prompt (open-ended question that encourages comments)

Rules:
- No links in the post (algorithms penalize links)
- Write like you're talking to a friend
- Be specific and personal, not generic
- Under 500 words
```

---

## 5. Blog Editorial Calendar

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Article Title | Title | -- |
| Status | Select | Idea, Outlined, Drafting, Editing, SEO Review, Scheduled, Published |
| Publish Date | Date | -- |
| Author | Person | -- |
| Category | Select | [Your blog categories] |
| Target Keyword | Text | Primary SEO keyword |
| Word Count Target | Number | -- |
| Actual Word Count | Number | -- |
| SEO Score | Number | 1-100 |
| Internal Links | Number | Count of internal links |
| External Links | Number | Count of external links |
| Featured Image | Files | -- |
| Meta Description | Text | Under 160 characters |
| URL Slug | Text | -- |
| Pillar/Cluster | Select | Pillar, Cluster, Standalone |
| Parent Article | Relation | Self-referencing (for cluster posts linking to pillar) |
| Estimated Traffic | Number | Monthly search volume |
| Conversion Goal | Select | Email signup, Product sale, Free trial, Awareness |
| Outline | Text | -- |
| Draft URL | URL | Google Doc or Notion link |

### AI Prompt: Blog Content Calendar (Quarterly)

```
Create a 12-week blog content calendar.

Niche: [Your niche]
Target audience: [Who reads your blog]
Main keywords/topics: [5-10 keywords you want to rank for]
Publishing frequency: [Posts per week]
Business goals: [What you're trying to drive -- signups, sales, awareness]
Existing top-performing content: [Your best posts so far]

Generate a 12-week calendar with:
1. Week number and publish date
2. Article title (SEO-optimized, click-worthy)
3. Target keyword and estimated monthly search volume
4. Category
5. Content type (pillar, cluster, standalone, or update)
6. Word count target
7. Brief outline (5 bullet points)
8. Internal linking opportunity (which existing posts to link to/from)
9. Conversion goal (what CTA to include)

Organize content into topic clusters: 1 pillar post with 3-4 supporting cluster posts.
```

### AI Prompt: Blog Title A/B Generator

```
Generate 10 title variations for this blog post.

Topic: [Your topic]
Target keyword: [SEO keyword]
Audience: [Who this is for]
Post type: [How-to, Listicle, Guide, Comparison, Case Study, Opinion]

Generate 10 titles in different styles:
1. Number-based listicle
2. How-to format
3. Question format
4. Controversial/contrarian
5. "Ultimate guide" style
6. Curiosity gap
7. Data/stat driven
8. Problem-solution
9. Time-based ("in 2026")
10. Power word heavy

For each title:
- Keep under 60 characters (for SEO)
- Include the target keyword naturally
- Rate click-worthiness (1-10)
```

---

## 6. AI Blog Outline Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 2

### AI Prompt: Detailed Blog Outline

```
Create a detailed outline for this blog post.

Title: [Your article title]
Target keyword: [Primary keyword]
Secondary keywords: [3-5 related keywords to include]
Target word count: [1500 / 2000 / 3000+ words]
Audience knowledge level: [Beginner / Intermediate / Advanced]
Goal: [Educate, convince, convert, entertain]

Generate an outline with:
1. Meta description (under 160 characters, includes keyword)
2. Introduction (hook strategy + thesis statement)
3. H2 and H3 headings (organized logically)
4. Key points under each heading (3-5 bullets)
5. Where to place examples, data, or case studies
6. Where to include internal links (suggest anchor text)
7. FAQ section (5 questions people also ask)
8. Conclusion with CTA
9. Suggested featured image concept

Ensure the outline follows SEO best practices:
- Keyword in first 100 words
- Keyword in at least 2 H2s
- Related keywords distributed naturally
- Logical flow from problem to solution
```

### AI Prompt: Introduction Hook Writer

```
Write 5 different opening hooks for this blog post.

Title: [Your title]
Topic: [What the post is about]
Audience: [Who reads this]
Tone: [Professional / Casual / Authoritative / Friendly]

Hook styles:
1. Startling statistic + context
2. Common misconception + correction
3. Personal story or anecdote
4. Provocative question
5. Bold prediction or claim

Each hook should be 2-4 sentences and flow naturally into the article topic. The goal is to stop the reader from bouncing in the first 5 seconds.
```

---

## 7. Newsletter Planning Database

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Issue Title | Title | -- |
| Issue Number | Number | Auto-increment |
| Send Date | Date | Include time |
| Status | Select | Planning, Writing, Editing, Designed, Scheduled, Sent |
| Subject Line | Text | -- |
| Preview Text | Text | The text shown after subject line in inbox |
| Sections | Multi-select | Main Story, Quick Tips, Tool of the Week, Ask Me Anything, Curated Links |
| Word Count | Number | -- |
| Open Rate | Number | Percentage |
| Click Rate | Number | Percentage |
| Unsubscribes | Number | -- |
| New Subscribers | Number | This week |
| List Size | Number | Total at time of send |
| Sponsor | Text | If monetized |
| Notes | Text | -- |

### AI Prompt: Newsletter Issue Planner

```
Help me plan this week's newsletter issue.

Newsletter name: [Name]
Audience: [Who subscribes]
Newsletter format/sections: [List your recurring sections]
This week's main topic: [What you want to write about]
Recent content to promote: [Blog posts, videos, products]
Industry news: [Any relevant news this week]
Subscriber count: [Current list size]

Generate:
1. Subject line (3 options -- optimized for open rate)
2. Preview text (the snippet shown after subject line)
3. Main story outline (5-7 key points, plus hook and CTA)
4. Quick tips section (3 actionable tips related to main topic)
5. Curated links (suggest 3-5 types of resources to include)
6. CTA strategy (what action you want readers to take)
7. P.S. line (a personal touch or bonus)

Keep total newsletter length to [500 / 800 / 1200] words.
```

### AI Prompt: Newsletter Welcome Sequence

```
Write a 5-email welcome sequence for new newsletter subscribers.

Newsletter: [Name and topic]
Audience: [Who subscribes and why]
Free lead magnet: [What they signed up for]
Paid product: [What you eventually want to sell them]
Brand voice: [Your tone and personality]

For each email, provide:
1. Send timing (Day 0, Day 1, Day 3, Day 5, Day 7)
2. Subject line
3. Preview text
4. Full email copy (ready to send)
5. CTA

Email purposes:
- Email 1 (Day 0): Deliver the lead magnet, set expectations
- Email 2 (Day 1): Share your story, build connection
- Email 3 (Day 3): Deliver massive value (your best tip/framework)
- Email 4 (Day 5): Social proof / case study
- Email 5 (Day 7): Soft pitch for paid product

Each email should be 200-400 words. Write in first person, conversational tone.
```

---

## 8. AI Subject Line Generator

**Type:** Page Template
**Difficulty:** Beginner
**AI Prompts:** 2

### AI Prompt: Subject Line Batch Generator

```
Generate 20 email subject lines for this newsletter topic.

Topic: [What the newsletter is about]
Audience: [Who receives it]
Goal: [Open rate optimization / click-through / urgency]
Past top-performing subject lines: [List 2-3 that worked well]

Generate 20 subject lines across these categories:
- Curiosity gap (4 lines): Make them wonder what's inside
- Benefit-driven (4 lines): Promise a clear outcome
- Number/list-based (3 lines): Use specific numbers
- Question format (3 lines): Ask something they want answered
- Urgency/scarcity (2 lines): Time-sensitive angle
- Personal/story (2 lines): "I" statements, vulnerability
- Contrarian/surprising (2 lines): Challenge assumptions

Rules:
- Under 50 characters (for mobile)
- No spam trigger words (free, act now, limited time)
- Include emoji option (with and without) for A/B testing
- Rate each line's predicted open rate: High / Medium / Low
```

### AI Prompt: Subject Line A/B Test Analyzer

```
Analyze these subject line A/B test results and recommend improvements.

Test results:
- Subject A: "[Subject line A]" -- Open rate: [X]%, Click rate: [Y]%
- Subject B: "[Subject line B]" -- Open rate: [X]%, Click rate: [Y]%

List size: [Total subscribers]
Audience: [Description]
Send time: [Day and time]

Analyze:
1. Why did the winner outperform? (Psychology behind it)
2. What elements worked? (Curiosity, specificity, personalization, etc.)
3. What elements didn't work?
4. Three new subject lines that combine the winning elements
5. Recommendation for next A/B test (what variable to test next)
```

---

## 9. Podcast Content Pipeline

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Episode Title | Title | -- |
| Episode Number | Number | -- |
| Type | Select | Solo, Interview, Co-hosted, Roundtable, Q&A |
| Status | Select | Idea, Booked, Recorded, Edited, Show Notes Written, Published |
| Record Date | Date | -- |
| Publish Date | Date | -- |
| Guest | Text | Guest name and contact |
| Topic | Text | -- |
| Key Takeaways | Text | 3-5 bullet points |
| Show Notes | Text | -- |
| Transcript | Text | -- |
| Audio File | Files | -- |
| Duration | Number | Minutes |
| Downloads | Number | -- |
| Repurposed | Checkbox | Has this been repurposed? |
| Social Clips | Number | Number of clips created |

### AI Prompt: Episode Planning

```
Help me plan a podcast episode.

Podcast: [Podcast name and niche]
Episode type: [Solo / Interview with [Guest Name and their expertise]]
Topic: [Main topic]
Target duration: [30 / 45 / 60 minutes]
Audience: [Who listens]

Generate:
1. Episode title (compelling, includes keywords)
2. Episode description (2-3 sentences for podcast apps)
3. Intro script (30 seconds -- hook the listener)
4. Interview questions OR solo episode outline (10-15 points)
5. Key timestamps (suggested segment breakdown)
6. Outro script with CTA (30 seconds)
7. 3 potential clips for social media (mark which parts would make good short clips)
```

### AI Prompt: Show Notes Writer

```
Write show notes for this podcast episode.

Episode title: [Title]
Episode number: [Number]
Guest: [If applicable]
Key points discussed:
- [Point 1]
- [Point 2]
- [Point 3]
- [Point 4]
- [Point 5]

Resources mentioned:
- [Resource 1]
- [Resource 2]

Generate:
1. Episode summary (3-5 sentences, SEO-optimized)
2. Key takeaways (5-7 bullet points)
3. Timestamps (estimate based on topics)
4. Resources and links section
5. Notable quotes from the episode (2-3)
6. CTA (subscribe, review, visit link)
7. SEO meta description (under 160 characters)
```

---

## 10. Video Content Pipeline

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Video Title | Title | -- |
| Platform | Select | YouTube, TikTok, Instagram Reels, LinkedIn Video |
| Status | Select | Idea, Scripted, Filmed, Editing, Thumbnail, Scheduled, Published |
| Publish Date | Date | -- |
| Type | Select | Tutorial, Vlog, Review, Explainer, Short, Live |
| Duration | Select | Under 60s, 1-5min, 5-15min, 15-30min, 30min+ |
| Script | Text | -- |
| Thumbnail Concept | Text | -- |
| Views | Number | -- |
| Watch Time | Number | Average minutes |
| CTR | Number | Click-through rate % |
| SEO Title | Text | YouTube-optimized title |
| Tags | Text | Comma-separated |
| Description | Text | Full YouTube description |

### AI Prompt: YouTube Video Planner

```
Plan a YouTube video on this topic.

Topic: [Your video topic]
Channel niche: [Your niche]
Target audience: [Who watches your videos]
Video length: [Target duration]
Style: [Tutorial, talking head, screen share, vlog, explainer]

Generate:
1. SEO-optimized title (under 60 chars, includes keyword)
2. Thumbnail concept (text overlay + visual description)
3. Hook (first 15 seconds -- script this word-for-word)
4. Full video outline with timestamps
5. YouTube description (with keywords, timestamps, links sections)
6. Tags (15-20 relevant tags)
7. End screen CTA script
8. 3 suggested shorts/clips to cut from this video
9. Pinned comment suggestion (to boost engagement)
```

### AI Prompt: Video Script Writer

```
Write a full video script for this topic.

Topic: [Topic]
Video length: [X minutes]
Style: [Conversational / Educational / Energetic / Calm]
Audience: [Who's watching]

Script format:
[HOOK - 0:00-0:15]
[Visual direction] + [What to say]

[INTRO - 0:15-0:45]
[Visual direction] + [What to say]

[SECTION 1 - Title]
[Visual direction] + [What to say]

... continue for each section ...

[CTA + OUTRO]
[Visual direction] + [What to say]

Include:
- B-roll suggestions in brackets
- On-screen text callouts
- Transition suggestions
- Engagement prompts ("comment below" moments)
```

---

## 11. Content Repurposing Tracker

**Type:** Database
**Difficulty:** Intermediate
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Original Content | Title | -- |
| Original Platform | Select | Blog, YouTube, Podcast, Newsletter |
| Source Link | URL | -- |
| Repurposed Formats | Multi-select | Twitter Thread, LinkedIn Post, Carousel, Reel, Short, Newsletter, Blog, Infographic |
| Status | Select | Not Started, In Progress, Complete |
| Repurposed Links | Text | Links to all repurposed versions |
| Total Reach | Number | Combined reach across all formats |
| Best Performer | Text | Which repurposed format did best |

### AI Prompt: Content Repurposing Plan

```
Create a repurposing plan for this piece of content.

Original content: [Paste the full content OR provide a summary]
Original format: [Blog post / YouTube video / Podcast episode / Newsletter]
Platforms I'm active on: [List your platforms]

Generate a plan to repurpose this into:
1. Twitter/X thread (write the full thread)
2. LinkedIn post (write the full post)
3. Instagram carousel (slide-by-slide text, 8-10 slides)
4. Short-form video script (30-60 seconds)
5. Newsletter snippet (3-4 paragraphs)

For each format:
- Adapt the tone and length for the platform
- Include a hook optimized for that platform
- Include a CTA appropriate for the platform
- Note the best time to post it relative to the original
```

### AI Prompt: Blog to Thread Converter

```
Convert this blog post into a Twitter/X thread.

Blog post:
[Paste the full blog post]

Rules:
- 8-15 tweets
- Tweet 1: Hook that stands alone (no "Thread:" or "1/")
- Each tweet: Under 280 characters, one key idea
- Include 1-2 tweets with data or examples
- End with a CTA (follow, retweet, link to full post)
- No hashtags in the thread
- Use line breaks for readability

Write the complete thread, numbered.
```

---

## 12. Content Idea Backlog

**Type:** Database (Board View)
**Difficulty:** Beginner
**AI Prompts:** 1

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Idea | Title | -- |
| Status | Select | Raw, Validated, Prioritized, Scheduled, Archived |
| Source | Select | AI Generated, Audience, Competitor, Trending, SEO Research, Personal |
| Confidence | Select | High, Medium, Low |
| Effort | Select | Quick Win, Medium, Deep Dive |
| Best Format | Multi-select | Blog, Thread, Video, Carousel, Podcast, Newsletter |
| Target Keyword | Text | -- |
| Search Volume | Number | Monthly searches |
| Notes | Text | -- |
| Added Date | Date | Created time |

### AI Prompt: Idea Validator

```
Evaluate these content ideas and help me prioritize them.

My niche: [Your niche]
My audience size: [Rough follower/subscriber count]
My monetization: [How I make money from content]

Ideas to evaluate:
1. [Idea 1]
2. [Idea 2]
3. [Idea 3]
4. [Idea 4]
5. [Idea 5]

For each idea, rate (1-10):
- Audience interest: Will my audience care?
- Uniqueness: Has this been done to death or is there a fresh angle?
- SEO potential: Can this rank in search?
- Shareability: Will people share/save this?
- Monetization potential: Does this lead toward a purchase?
- Effort required: How hard is this to create?

Rank them from best to worst opportunity and explain why #1 should be created first.
```

---

## 13. SEO Content Planner

**Type:** Database
**Difficulty:** Advanced
**AI Prompts:** 2

### Database Properties

| Property | Type | Options/Details |
|----------|------|-----------------|
| Target Keyword | Title | -- |
| Search Volume | Number | Monthly |
| Keyword Difficulty | Number | 1-100 |
| Current Rank | Number | -- |
| Target Rank | Number | -- |
| Content Status | Select | Not Written, Published, Updating |
| Content URL | URL | -- |
| Content Type | Select | Pillar, Cluster, Standalone |
| Cluster Parent | Relation | Self-referencing |
| Search Intent | Select | Informational, Commercial, Transactional, Navigational |
| Word Count Target | Formula | Based on intent: Info = 2000, Commercial = 1500, Transactional = 1000 |
| Competitors | Text | Top 3 ranking URLs |
| Last Updated | Date | -- |

### AI Prompt: Keyword Cluster Builder

```
Build a content cluster around this topic.

Main topic (pillar): [Your main topic]
Niche: [Your niche]
Target audience: [Who you serve]

Generate:
1. Pillar page topic and title (comprehensive, 3000+ word guide)
2. 8-12 cluster topics that support the pillar, each with:
   - Article title
   - Target keyword
   - Search intent (informational/commercial/transactional)
   - Suggested word count
   - How it links to the pillar (anchor text suggestion)
3. Internal linking strategy (how all pieces connect)
4. Content creation order (which to write first for maximum SEO impact)
5. Estimated timeline to complete the full cluster
```

### AI Prompt: SEO Content Brief

```
Create an SEO content brief for this keyword.

Target keyword: [Keyword]
Search volume: [Monthly searches]
Top 3 ranking pages: [URLs or just describe them]
My site's domain authority: [If known]
Content type: [Blog post, landing page, guide]

Generate:
1. Recommended title (with keyword, under 60 chars)
2. Meta description (with keyword, under 160 chars)
3. Recommended URL slug
4. Search intent analysis (what the searcher really wants)
5. Required H2 headings (based on what top results cover)
6. Suggested H3 subheadings
7. Key points to cover (that competitors mention)
8. Gap opportunities (what competitors miss)
9. Recommended word count
10. Internal linking suggestions
11. Schema markup recommendation
12. Featured snippet opportunity (if applicable -- format answer accordingly)
```

---

## 14-26: Additional Content Templates

### 14. Content Performance Tracker
Database tracking every published piece with views, engagement, conversions, and ROI. AI prompt analyzes top performers to find winning patterns.

### 15. Brand Voice Guide Template
Page template documenting your brand's tone, vocabulary, writing rules, and examples. AI prompt generates a brand voice guide from sample content.

### 16. Hashtag Research Database
Database of hashtags organized by category, reach, and competition level. AI prompt generates platform-specific hashtag sets.

### 17. Collaboration & Guest Content Tracker
Database managing guest posts, collaborations, and partnerships with status, outreach templates, and AI-powered pitch generators.

### 18. Content Workflow Automation
Template for defining content production workflows with stages, owners, and SLAs. AI prompt maps your process and identifies bottlenecks.

### 19. Seasonal Content Planner
Annual calendar of holidays, events, and seasonal trends with pre-planned content ideas. AI prompt generates seasonal content angles for your niche.

### 20. Competitor Content Tracker
Database monitoring competitor content with frequency, topics, and engagement. AI prompt identifies gaps and opportunities.

### 21. UGC (User-Generated Content) Tracker
Database for collecting and managing user-generated content with permissions, usage status, and AI-powered thank you messages.

### 22. Content Audit Template

**AI Prompt: Content Audit Analyzer**
```
Analyze my content library and recommend actions.

Content inventory:
- [URL 1] - [Title] - Published [Date] - [Monthly traffic] visits
- [URL 2] - [Title] - Published [Date] - [Monthly traffic] visits
- [URL 3] - [Title] - Published [Date] - [Monthly traffic] visits
[Continue for all content]

For each piece, recommend one action:
- KEEP: Performing well, no changes needed
- UPDATE: Good topic but needs refreshing (specify what to update)
- MERGE: Combine with another piece (specify which)
- DELETE: Low value, no traffic, hurting SEO (explain why)
- REDIRECT: Redirect to a better-performing piece

Also identify:
1. Top 5 highest-opportunity updates (most traffic gain for least effort)
2. Content gaps (topics you should cover but haven't)
3. Cannibalization issues (pages competing for the same keyword)
```

### 23. AI Content Brief Generator
Automated brief creation with SEO data, audience insights, and competitor analysis for each planned piece.

### 24. Evergreen Content Library
Database of timeless content pieces with refresh schedules, update logs, and AI prompts for keeping content current.

### 25. Content Distribution Checklist

**Template:**
```
# Content Distribution Checklist - [Content Title]

## Same Day as Publish
- [ ] Share on Twitter/X with custom caption
- [ ] Share on LinkedIn with custom caption
- [ ] Share to Instagram Stories
- [ ] Send to email list (if main piece)
- [ ] Share in relevant communities/groups
- [ ] Post in Slack/Discord channels
- [ ] Submit to aggregators (if applicable)

## Within 48 Hours
- [ ] Create 2-3 social clips/graphics
- [ ] Write Twitter thread version
- [ ] Cross-post to Medium/Dev.to (if applicable)
- [ ] Respond to all comments/engagement

## Within 1 Week
- [ ] Create carousel version for Instagram
- [ ] Repurpose for newsletter
- [ ] Pitch for syndication (if applicable)
- [ ] Internal link from 3+ existing pieces

## Within 1 Month
- [ ] Analyze performance metrics
- [ ] Run paid promotion on top performer
- [ ] Create follow-up content if high engagement
```

### 26. Weekly Content Review Dashboard
Dashboard pulling in metrics from all content databases with AI-generated weekly performance summary and recommendations.

---

*End of Content Calendar Templates. For CRM and sales templates, see 03-crm-sales-templates.md.*
