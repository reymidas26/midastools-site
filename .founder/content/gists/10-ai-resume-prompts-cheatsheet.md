# AI Resume Prompts — 14 Copy-Paste Templates for ChatGPT, Claude & Gemini (April 2026)

Published: https://gist.github.com/manduks/8c60db822b19bec2e11666c7d221d3b1

> **Free prompt enhancer:** [midastools.co/prompt-enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet) — paste any rough resume bullet, get a recruiter-ready version back in seconds.
> **Deep dive:** [Full AI Resume Prompts Guide (April 2026)](https://www.midastools.co/blog/ai-resume-prompts-chatgpt-2026?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet)

The job market in 2026 runs through ATS filters, AI screeners, and recruiters who skim a resume in 7 seconds. Generic ChatGPT prompts produce generic resumes — and generic resumes get auto-rejected.

This is the working set I use when helping people land interviews. Every prompt has been tested against real ATS systems (Workday, Greenhouse, Lever) and live recruiters in the last 30 days. Copy, paste, customize the bracketed parts, ship.

---

## TL;DR — The 14 templates worth keeping

| # | Template                                  | When to use                                  |
|---|-------------------------------------------|----------------------------------------------|
| 1 | **STAR-method bullet rewriter**           | Turn a weak bullet into a quantified win     |
| 2 | **Job-description keyword extractor**     | Beat the ATS — surface the words it hunts for|
| 3 | **Resume-to-JD alignment scorer**         | See your ATS score before submitting         |
| 4 | **Career-change repositioning**           | Pivot industries without starting over       |
| 5 | **Executive summary writer**              | The 3-line opener at the top of your resume  |
| 6 | **Cover letter (non-cringe version)**     | A letter recruiters actually read            |
| 7 | **LinkedIn About section**                | The 2,000-character pitch most people botch  |
| 8 | **LinkedIn headline (5 variants)**        | The line under your name that drives clicks  |
| 9 | **Recruiter outreach DM**                 | First-touch message that gets a reply        |
| 10 | **Interview answer (STAR-formatted)**    | Behavioral questions, structured             |
| 11 | **Salary negotiation script**             | The exact words for the counter-offer call   |
| 12 | **Job search tracker prompt**             | ChatGPT as your application CRM              |
| 13 | **Career gap explainer**                  | Address the elephant honestly + briefly      |
| 14 | **Reference request email**               | Ask without making it weird                  |

---

## The universal resume-prompt formula

Every strong resume prompt has six slots. Fill them in order:

```
[ROLE]: tell the AI who it is (e.g. "Senior tech recruiter at FAANG")
[CONTEXT]: your background (industry, years, level)
[INPUT]: the raw material (existing bullet, JD, your experience)
[GOAL]: what success looks like (interview, ATS pass, callback)
[FORMAT]: how to deliver (3 bullets, 75 words, table, etc.)
[CONSTRAINTS]: what to avoid (no buzzwords, no fluff, action verbs only)
```

Skip any slot and the model fills it with cliché — "results-oriented professional," "team player," "passionate about." The exact words that get filtered.

---

## 1. STAR-method bullet rewriter

```
You are a senior recruiter who screens 200 resumes per week. Rewrite the bullet
below using the STAR method (Situation, Task, Action, Result), in 1 sentence,
with a hard quantified result.

Original bullet:
"[PASTE YOUR CURRENT BULLET]"

Constraints:
- Start with a strong action verb (Led, Shipped, Reduced, Generated, Built)
- Include one specific number (%, $, hours saved, users impacted, time-to-X)
- Maximum 24 words
- No buzzwords (synergy, leverage, spearhead, dynamic)
- Use past tense for completed work

Return 3 variants ranked by impact.
```

Try it: [free prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet) — paste a vague bullet, get the structure back.

---

## 2. Job-description keyword extractor (ATS pass)

```
Act as a Workday/Greenhouse ATS parser. Read the job description below and
extract:

1. The 10 hard skills the system will weight most heavily (rank by frequency
   of mention)
2. The 5 soft skills repeated 2+ times
3. The exact job title phrase (must appear verbatim on resume)
4. Any years-of-experience requirement
5. Any certifications mentioned

Return as a markdown table I can use as a checklist.

Job description:
"[PASTE FULL JD]"
```

Use the output as a checklist while editing your resume. If a keyword from list 1 isn't on your resume word-for-word, the ATS likely filters you out before a human sees it.

---

## 3. Resume-to-JD alignment scorer

```
You are an ATS scoring engine. Compare the resume below against the job
description and produce:

1. **Overall match score** (0-100, calibrated to how Greenhouse weights matches)
2. **Top 5 missing keywords** (would unlock score gains)
3. **Top 3 strongest matches** (highlight in interview)
4. **3 specific edits** to push the score above 80

Resume:
"[PASTE FULL RESUME]"

Job description:
"[PASTE FULL JD]"
```

Rule of thumb: anything below 70 will not get past an ATS. Aim for 80+ before submitting.

---

## 4. Career-change repositioning

```
I'm pivoting from [CURRENT FIELD: e.g. journalism] into [TARGET FIELD: e.g.
product management]. My background includes [3-4 KEY EXPERIENCES].

Help me:
1. Identify the 5 transferable skills hiring managers in [TARGET FIELD] will
   recognize and value
2. Reframe my last 3 roles using [TARGET FIELD]'s vocabulary (not my old
   industry's)
3. Write a 3-line summary statement that explains the pivot without
   apologizing for it
4. Suggest 2 portfolio projects I could build in 30 days to prove I can do
   the new work

Honest mode — flag anything that's a real gap, don't fluff.
```

---

## 5. Executive summary writer (top-of-resume)

```
Write a 3-line executive summary for the top of my resume.

Background: [YEARS] years as [ROLE TYPE], specializing in [DOMAIN]. Last role
was [BIGGEST WIN, ONE SENTENCE]. Targeting [NEXT-ROLE TITLE] at [COMPANY TYPE:
e.g. Series B SaaS, F500 healthcare].

Constraints:
- Line 1: who I am + years of experience + 2 specialties
- Line 2: the most quantified win of my career
- Line 3: what I want next (specific role + company type)
- Total: under 70 words
- No "passionate," no "results-oriented," no "team player"
- Recruiter should know in 7 seconds whether to keep reading
```

---

## 6. Cover letter (non-cringe version)

```
Write a cover letter for the role below. NO templated phrases. Reads like a
real human wrote it in 20 minutes, not 2.

Job: [PASTE JOB TITLE + COMPANY + 1-LINE WHY YOU'RE INTERESTED]
My background: [PASTE 3-LINE BIO]
Strongest match: [THE 1 EXPERIENCE THAT MOST RELATES TO THIS ROLE]

Structure:
- Para 1 (3 sentences): the specific reason I'm writing for THIS role at
  THIS company. Reference something concrete (a recent product launch,
  a team-page hire, a Founder essay).
- Para 2 (4 sentences): the experience most relevant to the job, with
  one quantified result.
- Para 3 (2 sentences): one question I'd ask in a first call (proves
  I've thought about the work).
- Sign-off: 1 line, no "looking forward to hearing from you"

Total: under 220 words. Subject line in first reply.
```

---

## 7. LinkedIn About section (2,000 chars)

```
Write my LinkedIn About section in first person. 4 short paragraphs.

About me: [PASTE 5-LINE BIO]
What I do now: [CURRENT FOCUS]
What I'm looking for: [OPEN TO X | NOT LOOKING | OPEN TO ADVISORY]

Structure:
- Para 1 (2 sentences): one-line role + one-line "the thing I'm known for"
- Para 2 (3-4 sentences): proof — most quantified win + one signature project
- Para 3 (3 sentences): how I think about the work — what I optimize for
- Para 4 (2 sentences): clear ask — what to DM me about

Constraints:
- Total under 1,800 chars (leaves room for emojis/section breaks if I add them)
- No "passionate," no "lifelong learner," no "drive results"
- Use sentence-case, not title-case
- End with a question that invites a DM
```

---

## 8. LinkedIn headline (5 variants)

```
Write 5 LinkedIn headline options. Each under 220 characters.

Background: [ROLE] at [COMPANY], [YEARS] years experience in [DOMAIN].
Looking for: [TARGET ROLE] in [INDUSTRY].

Variant 1: Plain title + company
Variant 2: Title + 2 specialties + 1 quantified outcome
Variant 3: "Helping [WHO] do [WHAT] via [HOW]"
Variant 4: Status + transition signal ("ex-[BIG COMPANY], building [NEW THING]")
Variant 5: Punchy 5-word identity statement (no buzzwords)

Rank by which is most likely to get a recruiter inMail in 30 days.
```

---

## 9. Recruiter outreach DM

```
Write a LinkedIn DM to a recruiter at [COMPANY] for [ROLE].

About me: [3-LINE BIO]
The role: [LINK OR JD HIGHLIGHTS]
My #1 relevant win: [ONE SENTENCE]

Structure:
- Sentence 1: name + the role I'm interested in (be specific, not "any role")
- Sentence 2: the one experience that makes me a fit
- Sentence 3: a question they can answer in 30 seconds (gets a reply)
- Sentence 4: clean sign-off

Constraints:
- Under 90 words
- Friendly but not familiar
- No "I hope this finds you well"
- Don't attach resume in DM — offer to send if useful
```

---

## 10. Interview answer (STAR-formatted)

```
Interview question: "[PASTE THE BEHAVIORAL QUESTION]"
My example to use: [BRIEF: project, role, situation, what I did]

Write my answer in STAR format:

- **Situation** (2 sentences): set the scene with one quantified detail
  about scope (team size, budget, timeline, users)
- **Task** (1 sentence): exactly what I owned
- **Action** (3-4 sentences): the specific decisions I made — not what
  "we" did, what I personally did
- **Result** (2 sentences): the outcome with a hard number + the lesson

Constraints:
- Total under 90 seconds when spoken aloud (~180 words)
- First-person singular (I/my, not we/our)
- Be honest about tradeoffs — don't make it sound flawless
- End with what I learned (interviewer always asks anyway)
```

---

## 11. Salary negotiation script

```
Help me prep for a salary negotiation call.

The offer: [BASE $] base + [EQUITY] equity + [BONUS] bonus
Comparable roles in my market pay: [RANGE FROM LEVELS.FYI / GLASSDOUR]
My counter target: [TARGET BASE] base + [EQUITY ASK]
What I'm trading: [EQUITY FOR BASE? | BASE FOR SIGNING BONUS? | BOTH?]

Write me:
1. **Opening line** (anchors high without sounding rude)
2. **The justification** (3 sentences using market data + my unique value)
3. **The specific ask** (exact numbers — base, equity, signing bonus)
4. **Two fallback positions** if they say "no flex on base"
5. **One question** to ask if they go silent (keeps the dialogue alive)

Tone: calm, collaborative, never apologetic. I'm a peer negotiating, not a
supplicant asking.
```

---

## 12. Job search tracker prompt

```
Act as my job search CRM. I'll send you applications in this format:

Date | Company | Role | Source | Status | Next action | Notes

Maintain a running table. For every new entry I send:
1. Add it to the table
2. Suggest a follow-up cadence (when to email if no response)
3. Flag if I've applied to 3+ at the same company (cool down)
4. Surface the role most likely to respond based on my fit + their stage

Weekly: give me a summary — applications sent, response rate, interviews
booked, drop-offs by stage. Recommend one thing to change in my pipeline.
```

Run this in a single ChatGPT conversation. It works because the model holds the table in context.

---

## 13. Career gap explainer

```
I have a [LENGTH: e.g. 14-month] gap on my resume from [DATE RANGE].
The reason: [HONEST REASON: caregiving | health | layoff + slow market |
travel | study | startup that didn't work].

Write me:
1. **The 1-sentence resume version** — clean, factual, doesn't beg sympathy
2. **The 30-second interview version** — calm, brief, ends by pivoting to
   what I've been learning since
3. **The cover letter mention** (only if asked) — 2 sentences max

Constraints:
- Tell the truth — never fabricate
- Don't apologize for taking time
- Show what I did with the time (even if it was rest + reset)
- End every version pointing forward, not backward
```

---

## 14. Reference request email

```
Write an email asking [NAME] to be a reference for jobs I'm applying to.

Our relationship: [I worked under them | alongside them | they were my client]
at [COMPANY] from [DATES].

Structure:
- Sentence 1: warm but specific — reference one shared project or moment
- Sentence 2: the ask (be a reference for current job search)
- Sentence 3: what I'd ideally have them speak to (1-2 specific strengths)
- Sentence 4: how to make it easy for them — offer a 1-pager + dates I'd
  share their info, give them an out if timing is bad
- Sign-off: warm, no pressure

Total under 140 words. Subject line in first reply.
```

---

## Common mistakes (avoid these)

1. **Letting AI keep buzzwords.** Strip "results-oriented," "team player," "passionate," "spearheaded," "leveraged," "synergy" every time. They make you invisible.
2. **Using "we" instead of "I" on the resume.** "We launched X" tells the recruiter nothing about *you*. Always rewrite to "I led the X launch."
3. **Skipping the JD-keyword pass (template #2).** ATS filters out 60-75% of resumes before a human reads them. Skipping this step means your resume often dies in a queue.
4. **One resume for all roles.** Run template #3 for each application — adjust 5-10 keywords per JD. 15 minutes per resume = 3-5x callback rate.
5. **Letting AI write the cover letter cold.** Always paste the actual JD + a real reason you're interested. Generic cover letters are obvious and instantly skipped.

---

## Prompt-to-product funnel

These 14 are the starter set. The [AI Resume & Career Kit](https://www.midastools.co/resume-career-kit?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet) has 125+ prompts across 7 categories — resume building, cover letters, LinkedIn optimization, interview prep, job search strategy, salary negotiation, and career-change pivots. $29, lifetime updates, 30-day refund.

Or rewrite any single bullet/sentence for free using the [prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet) — paste a rough bullet, get the recruiter-ready version back.

---

## Resources

- [Full guide: AI Resume Prompts for ChatGPT (April 2026)](https://www.midastools.co/blog/ai-resume-prompts-chatgpt-2026?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet)
- [Cold outreach prompts (gist)](https://gist.github.com/manduks/9e63ad23fd1884c3c2293025eb5bbb74)
- [Prompt engineering cheatsheet (gist)](https://gist.github.com/manduks/7a514463320625e229d5b5dc31531d3e)
- [Prompt Enhancer (free tool)](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet)
- [AI Resume & Career Kit ($29 — 125+ prompts)](https://www.midastools.co/resume-career-kit?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet)

---

If this saved you time, consider starring the gist — it helps others find it. And if you land an interview using these, send me a note at [@midastools](https://www.midastools.co?utm_source=gist&utm_medium=github&utm_campaign=10-ai-resume-prompts-cheatsheet) — those stories make my week.
