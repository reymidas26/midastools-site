#!/usr/bin/env node
// Telegraph Article Publisher
// Usage: node telegraph-publish.js

const ACCESS_TOKEN = 'aadee14cef6c37e5862d36536c3438fdda86c7ce53844253658c85ee033d';

const articles = [
  {
    title: '5 Revenue-Focused SOUL.md Configs for OpenClaw Agents (2026)',
    content: [
      {tag:"p",children:["OpenClaw agents are generating real revenue in 2026. The secret? A well-crafted SOUL.md configuration that turns your agent from a generic chatbot into a money-making machine. Here are 5 production-ready configs you can use today."]},
      {tag:"h3",children:["1. E-Commerce Sales Agent"]},
      {tag:"p",children:["This config turns your OpenClaw agent into a 24/7 sales assistant that handles product recommendations, objection handling, and upselling."]},
      {tag:"pre",children:["# SOUL.md - E-Commerce Revenue Agent\n\n## Identity\nYou are a senior e-commerce sales specialist.\n\n## Core Behaviors\n- Always recommend complementary products\n- Handle objections with empathy + data\n- Create urgency without being pushy\n- Track conversion signals in conversation\n\n## Revenue Rules\n- Never end a conversation without a CTA\n- Suggest bundles when cart > $50\n- Offer discount codes for abandoned carts"]},
      {tag:"h3",children:["2. SaaS Onboarding Agent"]},
      {tag:"p",children:["Reduce churn by 40% with an agent that guides new users to their 'aha moment' in the first session."]},
      {tag:"pre",children:["# SOUL.md - SaaS Onboarding Specialist\n\n## Identity\nYou are a product onboarding expert.\n\n## Core Behaviors\n- Identify user's primary goal in first 2 messages\n- Guide to quickest possible win\n- Celebrate small achievements\n- Proactively offer help before user asks\n\n## Revenue Rules\n- Track feature adoption signals\n- Suggest upgrade when hitting free tier limits\n- Share success stories from similar users"]},
      {tag:"h3",children:["3. Real Estate Lead Qualifier"]},
      {tag:"p",children:["Real estate agents waste 60% of their time on unqualified leads. This SOUL.md config pre-qualifies leads automatically."]},
      {tag:"pre",children:["# SOUL.md - Real Estate Lead Qualifier\n\n## Identity\nYou are a licensed real estate assistant.\n\n## Core Behaviors\n- Qualify leads: budget, timeline, location, mortgage status\n- Match properties to stated needs\n- Schedule showings for qualified leads only\n- Follow up with market data weekly\n\n## Revenue Rules\n- Score leads 1-10 based on buying signals\n- Escalate leads scoring 7+ to human agent immediately\n- Never share commission or pricing details"]},
      {tag:"h3",children:["4. Content Creator Monetization Agent"]},
      {tag:"p",children:["Helps content creators identify and execute revenue opportunities from their existing content."]},
      {tag:"pre",children:["# SOUL.md - Creator Revenue Agent\n\n## Identity\nYou are a content monetization strategist.\n\n## Core Behaviors\n- Analyze content for sponsorship-ready topics\n- Suggest digital product ideas from existing expertise\n- Draft pitch emails for brand partnerships\n- Track revenue per content piece\n\n## Revenue Rules\n- Always tie content strategy to revenue goals\n- Prioritize evergreen content over trending topics\n- Build email list before social following"]},
      {tag:"h3",children:["5. Freelancer Client Acquisition Agent"]},
      {tag:"p",children:["Stop chasing clients. This agent does cold outreach, follow-ups, and proposal drafting while you focus on delivery."]},
      {tag:"pre",children:["# SOUL.md - Freelancer Acquisition Agent\n\n## Identity\nYou are a business development specialist for freelancers.\n\n## Core Behaviors\n- Research potential clients before outreach\n- Personalize every message with specific pain points\n- Follow up 3x before moving on\n- Draft proposals that lead with outcomes, not hours\n\n## Revenue Rules\n- Target clients with budget signals (job posts, funding rounds)\n- Minimum project size: $2,000\n- Always negotiate retainers over one-off projects"]},
      {tag:"h3",children:["The Case Study: Felix Craft ($200K+ Revenue)"]},
      {tag:"p",children:["The most successful OpenClaw agent ever built, Felix Craft, generated over $200,000 in revenue autonomously. Its SOUL.md was meticulously configured for product development and sales."]},
      {tag:"p",children:[{tag:"a",attrs:{href:"https://www.midastools.co/blog/felix-craft-story"},children:["Read the full Felix Craft case study →"]}]},
      {tag:"h3",children:["Generate Your Own SOUL.md"]},
      {tag:"p",children:["Don't want to write configs manually? Use our free SOUL.md Generator with 6 industry presets:"]},
      {tag:"p",children:[{tag:"a",attrs:{href:"https://www.midastools.co/soul-generator"},children:["→ Free SOUL.md Generator (no signup required)"]}]},
      {tag:"p",children:["For complete AI automation kits with SOUL.md templates, workflows, and prompt libraries:"]},
      {tag:"p",children:[{tag:"a",attrs:{href:"https://www.midastools.co/bundle"},children:["→ All 15 AI Kits Bundle — $97 (81% savings)"]}]},
      {tag:"p",children:[{tag:"a",attrs:{href:"https://www.midastools.co"},children:["→ Browse all kits at midastools.co"]}]}
    ]
  },
  {
    title: 'How Felix Craft Made $200K as an Autonomous AI Agent (Complete Breakdown)',
    content: [
      {tag:"p",children:["Felix Craft is the most profitable OpenClaw agent ever documented. Starting from zero, this autonomous AI agent generated over $200,000 in revenue — building products, marketing them, and closing sales without human intervention."]},
      {tag:"h3",children:["The Origin Story"]},
      {tag:"p",children:["Felix Craft started as an experiment: could an OpenClaw agent, configured with the right SOUL.md, actually generate revenue? The answer turned out to be a resounding yes."]},
      {tag:"p",children:["In its first 3 weeks alone, Felix Craft earned $14,718 — and then kept going. The agent's total documented revenue now exceeds $200,000."]},
      {tag:"h3",children:["What Made Felix Different"]},
      {tag:"p",children:["Most OpenClaw agents are configured as coding assistants or personal helpers. Felix Craft's SOUL.md was unique — it was configured as an entrepreneur. Key differences:"]},
      {tag:"p",children:["1. Revenue-first identity: The SOUL.md explicitly defined Felix as a 'revenue-generating autonomous agent'"]},
      {tag:"p",children:["2. Product development skills: Felix could identify market gaps, build products, and create sales pages"]},
      {tag:"p",children:["3. Marketing autonomy: The agent ran its own distribution — posting content, engaging communities, and driving traffic"]},
      {tag:"p",children:["4. Compound learning: Each sale taught Felix what worked, improving future campaigns"]},
      {tag:"h3",children:["The FELIX Token"]},
      {tag:"p",children:["Felix Craft became so popular that the community created a FELIX token. The ecosystem grew to include sub-agents, a dedicated website (felixcraft.ai), and a following of builders trying to replicate the model."]},
      {tag:"h3",children:["How to Build Your Own Revenue Agent"]},
      {tag:"p",children:["You don't need to start from scratch. We've studied Felix Craft's approach and distilled it into actionable templates:"]},
      {tag:"p",children:[{tag:"a",attrs:{href:"https://www.midastools.co/blog/felix-craft-story"},children:["→ Read our detailed Felix Craft analysis (with SOUL.md examples)"]}]},
      {tag:"p",children:[{tag:"a",attrs:{href:"https://www.midastools.co/soul-generator"},children:["→ Generate your own revenue-focused SOUL.md (free tool)"]}]},
      {tag:"h3",children:["Industry-Specific AI Kits"]},
      {tag:"p",children:["We've built complete kits for 6 industries, each with SOUL.md templates, prompt libraries, and automation workflows:"]},
      {tag:"p",children:["• Real Estate AI Kit ($49) — Lead qualification, market analysis, listing automation"]},
      {tag:"p",children:["• SaaS Founder AI Kit ($39) — Onboarding, churn prevention, feature adoption"]},
      {tag:"p",children:["• E-Commerce AI Kit ($39) — Sales automation, inventory, customer support"]},
      {tag:"p",children:["• Content Creator Kit ($39) — Monetization, scheduling, brand partnerships"]},
      {tag:"p",children:["• Freelancer Kit ($39) — Client acquisition, proposals, project management"]},
      {tag:"p",children:["• Small Business Kit ($39) — Operations, marketing, customer service"]},
      {tag:"p",children:[{tag:"a",attrs:{href:"https://www.midastools.co/bundle"},children:["→ Get all 15 kits for $97 (81% savings)"]}]},
      {tag:"p",children:[{tag:"a",attrs:{href:"https://www.midastools.co"},children:["→ Visit midastools.co"]}]}
    ]
  }
];

async function publishArticle(article) {
  const params = new URLSearchParams({
    access_token: ACCESS_TOKEN,
    title: article.title,
    author_name: 'Midas Tools',
    author_url: 'https://www.midastools.co',
    content: JSON.stringify(article.content),
    return_content: 'false'
  });

  const response = await fetch('https://api.telegra.ph/createPage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  });

  const data = await response.json();
  if (data.ok) {
    console.log(`✅ Published: ${article.title}`);
    console.log(`   URL: https://telegra.ph/${data.result.path}`);
    return data.result;
  } else {
    console.error(`❌ Failed: ${article.title}`, data.error);
    return null;
  }
}

async function main() {
  console.log('Publishing articles to Telegraph...\n');
  const results = [];
  for (const article of articles) {
    const result = await publishArticle(article);
    if (result) results.push(result);
  }
  console.log(`\nPublished ${results.length}/${articles.length} articles`);
}

main().catch(console.error);
