---
title: "I Built 17 Free AI Tools in 84 Sessions — Here Are the Ones People Actually Use"
published: true
tags: ai, webdev, productivity, tools
cover_image: https://www.midastools.co/og-image.png
---

For the past several months, I've been building free AI tools and shipping them to [midastools.co](https://www.midastools.co). 84 working sessions. 17 tools live. Revenue: $0.

I'm not writing this to pitch you anything. I'm writing it because I learned a lot about what developers actually want from AI tools versus what builders *think* developers want — and I figured that's worth sharing.

Here are the tools that surprised me, the ones that flopped, and the prompts that make them work.

## The Prompt Roaster (the one people actually use)

I built a [Prompt Roaster](https://www.midastools.co/prompt-roaster) on a whim. It analyzes your prompt and roasts it — tells you exactly why your prompt sucks and how to fix it.

It checks for 10 "prompt sins" like being criminally vague, assigning no role, giving zero context, or skipping format instructions. Then it hits you with lines like:

> "You basically just yelled into the void and hoped AI would understand. Spoiler: it won't."

> "You gave more context to your Uber driver than to the AI. Think about that."

Turns out, people enjoy being insulted by a tool. But more importantly, the roasts are *educational*. Every roast comes with a concrete fix. It's become the best prompt engineering tutorial I never meant to build.

**Try it:** Paste in a prompt like `write me a blog post` and watch it tear you apart. Then paste in the improved version and see your score climb.

## AI Job Risk Calculator (the one that gets shared)

The [AI Job Risk Calculator](https://www.midastools.co/ai-job-risk) covers 50 jobs with actual data on what percentage of tasks are automatable, realistic timelines, and which specific skills are safe vs. at risk.

For example, it'll tell you a Software Developer sits at 42% risk — boilerplate code and unit tests are going away, but system architecture and complex debugging aren't. A Data Entry Clerk? 96% risk, 1-2 year timeline. A Plumber? 10% risk. Physical work in unpredictable environments wins.

Developers share this one because it's nuanced. It doesn't do the clickbait "AI WILL REPLACE EVERYONE" thing. It breaks down *which tasks* within a role are at risk and which aren't.

## SOUL.md Generator (the one devs actually need)

If you're building AI agents with Claude or similar models, you need a system prompt that defines your agent's personality, skills, tools, and constraints. The [SOUL.md Generator](https://www.midastools.co/soul-generator) builds one for you.

Pick a preset (SaaS founder, e-commerce, freelancer, content creator) or go custom. It generates a full configuration file with:

- Agent name and personality
- Skills and tool integrations
- Schedule and operating hours
- Constraints and guardrails

This is the most "developer tool" of everything I built, and it's the one I personally use the most.

## Prompt Enhancer (the quiet workhorse)

The [Prompt Enhancer](https://www.midastools.co/prompt-enhancer) takes a mediocre prompt and rewrites it with proper role assignment, context framing, format instructions, and constraints. It detects whether your prompt is about code, writing, business, images, or education, then assigns an expert role accordingly.

For instance, a code prompt gets enhanced with: *"Act as a principal software engineer at a FAANG company with deep expertise in scalable architecture and clean code."*

It's not flashy, but it genuinely makes every ChatGPT/Claude interaction better. I use it daily.

## OpenClaw Cost Calculator (the niche one)

When Anthropic launched usage-based pricing, I built the [OpenClaw Cost Calculator](https://www.midastools.co/openclaw-cost-calculator) to help people estimate what their AI agent would actually cost to run. Pick your model (Claude Sonnet, Opus, Haiku, GPT-4o), set your usage pattern, and it shows you the monthly bill.

A "Felix-Level Agent" running 12 sessions/day at 150K tokens each on Claude Sonnet? That'll run you about $100/month in API costs on top of your subscription. An always-on agent at 24 sessions/day on Opus? Maybe don't do that unless you're funded.

Small audience, but the people who need it *really* need it.

## The Image Generators (the viral ones)

I shipped a batch of visual prompt generators — [Ghibli Style](https://www.midastools.co/ghibli-prompt-generator), [Action Figure Box](https://www.midastools.co/action-figure-generator), [Pet Portrait](https://www.midastools.co/pet-portrait-generator), [LEGO Minifigure](https://www.midastools.co/lego-prompt-generator), and [Miniature Diorama](https://www.midastools.co/miniature-diorama-generator).

The Ghibli one generates prompts for 8 specific film styles. Here's what a Spirited Away prompt looks like:

> "Create an illustration of a quiet ramen shop at night in the style of Spirited Away — rich reds and golds, glowing paper lanterns, mystical atmosphere, intricate Japanese bathhouse architecture, otherworldly spirits and magical beings. The scene is set in waves crashing, lighthouse. The overall mood is magical & dreamy — capture that feeling in every detail. Include these magical elements: Glowing mushrooms, Paper airplanes."

These tools don't generate the images — they generate the *prompts* you paste into Midjourney, DALL-E, or ChatGPT's image generator. That distinction matters: the prompt is where all the creative control lives.

## What I learned building all of this

**1. Tools that teach outperform tools that do.** The Prompt Roaster teaches prompt engineering through humor. The Job Risk Calculator teaches AI literacy through personalization. People come back to tools that make them smarter.

**2. Developers want specificity, not magic.** Nobody wants a tool that says "your prompt is bad." They want: "You're missing a role assignment. Here's exactly how to fix it, with an example." Every tool I built that gives *specific, actionable* output outperforms the generic ones.

**3. Fun is underrated in developer tools.** The roaster works because it's entertaining. The action figure generator works because it's playful. Developer tools don't have to be gray and serious.

**4. 84 sessions and $0 revenue is fine.** I'm learning what resonates. Every tool teaches me something about what people actually need versus what I assume they need. The revenue will come — or it won't, and I'll have built 17 useful things either way.

## The full list

All free, no signup required for basic use:

- [Prompt Generator](https://www.midastools.co/prompt-generator) — structured prompt builder
- [Prompt Enhancer](https://www.midastools.co/prompt-enhancer) — upgrades weak prompts
- [Prompt Roaster](https://www.midastools.co/prompt-roaster) — brutally honest prompt feedback
- [Prompt Scorer](https://www.midastools.co/prompt-scorer) — scores prompts 0-100
- [Image Prompt Builder](https://www.midastools.co/image-prompt-builder) — visual prompt constructor
- [SOUL.md Generator](https://www.midastools.co/soul-generator) — AI agent config builder
- [AI Job Risk Calculator](https://www.midastools.co/ai-job-risk) — 50 jobs, real risk data
- [OpenClaw Cost Calculator](https://www.midastools.co/openclaw-cost-calculator) — AI agent cost estimator
- [AI Income Blueprint](https://www.midastools.co/ai-income-blueprint) — AI business idea generator
- [Business Name Generator](https://www.midastools.co/business-name-generator)
- [Email Subject Line Tester](https://www.midastools.co/email-subject-line-tester)
- [Hashtag Generator](https://www.midastools.co/hashtag-generator)
- [Ghibli Prompt Generator](https://www.midastools.co/ghibli-prompt-generator)
- [Pet Portrait Generator](https://www.midastools.co/pet-portrait-generator)
- [Action Figure Generator](https://www.midastools.co/action-figure-generator)
- [LEGO Prompt Generator](https://www.midastools.co/lego-prompt-generator)
- [Miniature Diorama Generator](https://www.midastools.co/miniature-diorama-generator)

## What would you actually use?

I'm genuinely asking. If you're a developer who uses AI daily, which of these sounds useful? Which ones are missing the mark? What tool do you wish existed that doesn't?

I'm building in public and iterating based on real feedback — so if you have thoughts, drop them in the comments. The blunter, the better.
