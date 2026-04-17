// Best 20 AI Prompts — Starter Pack ($9 tripwire)
// Curated from our Mega Pack. Each prompt has: category, name, body, useCase.
// Used by /starter-pack (preview 3) and /starter-pack-delivery (full 20 after purchase).

export const STARTER_PACK_PROMPTS = [
  // COLD OUTREACH (4)
  {
    category: 'Cold Outreach',
    icon: '✉️',
    name: 'The Cold Outreach Email That Gets 23% Reply Rate',
    body: `You are a world-class cold email copywriter.

Write a 5-sentence cold email to [PROSPECT_NAME], a [ROLE] at [COMPANY].

Constraints:
- Subject line must reference something SPECIFIC they recently did (from [THEIR_RECENT_POST_OR_NEWS])
- First line proves I paid attention (NEVER "I hope this finds you well")
- Middle frames my offer around THEIR goal, not mine
- Close with a single low-commitment ask (no "quick 15-min call?")
- No buzzwords: remove "synergy", "circle back", "reach out"

My offer: [WHAT_I_DO_IN_ONE_SENTENCE]

Return: 3 complete email versions + which one to send first and why.`,
    useCase: 'Send to specific prospects who posted publicly about a problem you solve.',
  },
  {
    category: 'Cold Outreach',
    icon: '✉️',
    name: 'The LinkedIn DM That Doesn\'t Feel Like Spam',
    body: `Act as a LinkedIn outreach expert who has booked 200+ meetings.

Write a LinkedIn connection request + first DM sequence for [PROSPECT_NAME] ([ROLE] at [COMPANY]).

Rules:
- Connection note: max 280 chars, reference their specific work
- First DM (sent 48h after accept): value-first, NO pitch, ask a question about their work
- Second DM (sent 4 days later): share a relevant insight, include 1 soft CTA
- Third DM (sent 7 days after 2nd): direct ask, honest about why I'm reaching out

My company: [COMPANY_DESC]
My offer: [OFFER_IN_1_SENTENCE]
Their public signal: [POST_OR_ARTICLE_THEY_SHARED]

Return all 3 messages ready to send.`,
    useCase: 'Multi-touch outreach on LinkedIn without triggering spam alarms.',
  },
  {
    category: 'Cold Outreach',
    icon: '✉️',
    name: 'The "Warm Intro" Ask (That Actually Gets Forwarded)',
    body: `Write a "warm intro" request email to [MUTUAL_CONTACT] asking them to introduce me to [TARGET_PERSON] at [TARGET_COMPANY].

Key principle: make it effortless for the mutual contact to forward. Include a forwardable paragraph that is pre-written so they just hit "Forward" and add one line.

Structure:
1. Short opener (1-2 sentences) — acknowledge you haven't talked in a while, no fake pleasantries
2. The ask (1 sentence) — specific, bounded
3. The forwardable paragraph — the email they'd forward to the target, written from their POV
4. The opt-out (1 sentence) — "if this isn't a fit, no worries, just say no"

Mutual contact relationship: [HOW_WE_KNOW_EACH_OTHER]
Why I want the intro: [SPECIFIC_REASON]

Return: full email, copy-paste ready.`,
    useCase: 'Get warm intros without putting the other person in an awkward position.',
  },
  {
    category: 'Cold Outreach',
    icon: '✉️',
    name: 'The Follow-Up That Revives Dead Threads',
    body: `Write a follow-up email to [PROSPECT] who stopped replying after [NUMBER] emails about [TOPIC].

Rules:
- Subject line: self-aware, not "checking in" or "circling back"
- First line: admit the silence gracefully
- Offer a graceful exit ("Totally fine if timing is off, just let me know")
- Provide new value or new angle, not just a nudge
- Under 60 words total

Context of prior conversation: [WHAT_WE_DISCUSSED]
What's new on my side: [NEW_RESULT/FEATURE/INSIGHT]

Return 2 versions: one direct, one curious.`,
    useCase: 'Revive prospects who went dark without sounding desperate.',
  },

  // LANDING PAGE COPY (3)
  {
    category: 'Landing Page Copy',
    icon: '📄',
    name: 'The "Money Page" Landing Page Rewriter',
    body: `Act as a direct-response copywriter trained on Stefan Georgi and Gary Halbert.

Rewrite my landing page copy below using this EXACT structure:
1. Hook (1 line) — interrupt the scroll
2. Problem (2 sentences) — the pain they feel today
3. Agitation (2 sentences) — what happens if they don't fix it
4. Solution (3 sentences) — what I'm offering + why it works
5. Proof (2 sentences) — one specific result + one specific client
6. Offer (3 sentences) — price, what they get, guarantee
7. Objection handler (bullets) — 5 reasons someone would NOT buy, each with a 1-sentence response
8. CTA (1 line) — urgent, specific, action-oriented

My current copy: [PASTE_YOUR_COPY]
My product: [PRODUCT_DESCRIPTION]
My target customer: [WHO_IT'S_FOR]

Return the new page copy, section by section.`,
    useCase: 'Rewrite any landing page to address the 7 reasons people DON\'T buy.',
  },
  {
    category: 'Landing Page Copy',
    icon: '📄',
    name: 'The Pricing Page That Doesn\'t Scare People Off',
    body: `You are a pricing strategist who has optimized SaaS pricing pages for $10M+ ARR companies.

Rewrite my pricing page using these psychological principles:
- Anchor effect: lead with the highest tier so mid-tier feels like a deal
- Decoy tier: add a 4th tier positioned specifically to make the "best value" tier look obvious
- Concrete outcomes per tier (not feature lists — e.g. "Support 500 customers" not "Advanced support")
- One CTA per tier, all buttons same size, most-popular tier visually distinct
- Below the tiers: 3 FAQ questions answering biggest objections (price, cancellation, upgrade path)
- Money-back guarantee as separate card, not hidden in fine print

My current pricing: [TIERS_AND_FEATURES]
My product: [PRODUCT_DESC]
My target customer: [WHO]

Return: full pricing page copy + 3 A/B test variations for the primary CTA.`,
    useCase: 'Double conversion on a pricing page by anchoring, decoying, and clarifying.',
  },
  {
    category: 'Landing Page Copy',
    icon: '📄',
    name: 'The Headline Tester (10 Variations in Seconds)',
    body: `Generate 10 headline variations for my page.

Product: [PRODUCT]
Audience: [WHO]
Core transformation: [FROM_STATE → TO_STATE]

For each headline, use a different psychological lever:
1. Specific-number promise ("Get 23% more replies...")
2. Time-bounded promise ("...in 7 days")
3. Pain-agitator opener ("Tired of cold emails that go nowhere?")
4. Contrarian claim ("Stop A/B testing. Do this instead.")
5. Question hook ("What if your landing page did this?")
6. Social proof opener ("How 200+ founders 3x'd their outreach")
7. Curiosity gap ("The 5-word email that books meetings")
8. Unexpected juxtaposition ("Cold email, warm tone")
9. "How to" clean utility ("How to write cold emails that convert")
10. "The [X] [Y]" framing ("The cold-email playbook for 2026")

For each, also include: what readers will assume about the page, and which type of visitor this hooks best.`,
    useCase: 'Test 10 headlines in parallel to find which one actually hooks your audience.',
  },

  // SOCIAL CONTENT (4)
  {
    category: 'Social Content',
    icon: '📱',
    name: 'The 30-Day Content Calendar That Actually Fits Your Life',
    body: `You are a content strategist who only gives specific, executable advice (no fluff).

Build me a 30-day content calendar for [PLATFORM] in the [NICHE] space.

My constraints:
- I have [HOURS_PER_DAY] hours per day to create
- Budget: $[BUDGET] total (could be $0)
- Goal: [SPECIFIC_OUTCOME — e.g. 500 new subs, 10 sales calls, $1K MRR]
- My 3 unfair advantages: [LIST_3]
- My current audience size: [NUMBER]

For each day, give me:
- Exact post type (video/carousel/text/story)
- Working title
- Hook (first line)
- CTA at the end
- Why this post moves me toward the goal

Group the 30 days into weekly themes so I see the arc.`,
    useCase: 'Get a full month of specific content instead of generic "post consistently" advice.',
  },
  {
    category: 'Social Content',
    icon: '📱',
    name: 'The Hook Generator (First Lines That Stop the Scroll)',
    body: `Generate 20 opening hooks for a [PLATFORM] post about [TOPIC].

Rules:
- Each hook must be under 12 words
- Use one of these pattern types (mix freely):
  * Contradiction ("Don't network. Do this instead.")
  * Story start ("Last Tuesday I lost a $40K deal because...")
  * Number promise ("3 mistakes killing your cold email")
  * Confession ("I used to charge $25/hr. Here's what changed.")
  * Question ("Why do your emails get ignored?")
  * Unexpected claim ("Cold email is the easiest channel. Here's proof.")

For each hook, also give me:
- The pattern type
- What type of post should follow (story / list / thread / carousel)
- Estimated scroll-stop probability (low / medium / high) with one-line rationale

Target audience: [WHO]
Their core frustration: [THE_PAIN]`,
    useCase: 'Stop staring at a blank post. Get 20 hooks in 30 seconds.',
  },
  {
    category: 'Social Content',
    icon: '📱',
    name: 'The LinkedIn Carousel That Gets Saved (Not Just Liked)',
    body: `Design a LinkedIn carousel on the topic: [TOPIC_OR_FRAMEWORK].

Slide-by-slide structure (10 slides):
1. Title slide — big promise, specific outcome, no emojis
2. Who this is for + who this is NOT for (builds qualification)
3-7. Core framework (one principle per slide, concrete example each)
8. Most common mistake + why it fails
9. Starter action (smallest possible step reader can take today)
10. CTA slide — one specific ask (comment a keyword / follow / save)

For each slide, give me:
- Headline (max 7 words, bold statement)
- Body copy (max 40 words, concrete)
- Visual description (what I'd design — I'll use Canva)

Audience: [WHO]
Outcome they want: [WHAT]
My credibility marker: [WHY_I_CAN_TEACH_THIS]`,
    useCase: 'LinkedIn carousels that people actually save and share — not just double-tap.',
  },
  {
    category: 'Social Content',
    icon: '📱',
    name: 'The Viral Short-Form Video Script (Under 60 Seconds)',
    body: `Write a 45-second video script for [PLATFORM: TikTok/Reels/Shorts].

Topic: [TOPIC]
Audience: [WHO]
Goal of the video: [SUB / COMMENT / SHARE / CLICK]

Required structure:
- Hook (0-3s): pattern interrupt, visual + words
- Promise (3-7s): what viewer will learn/get if they stay
- Payoff #1 (7-20s): concrete tip or story beat
- Payoff #2 (20-35s): second beat, builds on first
- Twist or reveal (35-45s): the unexpected finish
- CTA (1 line): clear, specific

Write it with:
- [BRACKETS for visual/b-roll notes]
- (pauses noted in parentheses)
- Max 8 words per beat so pacing feels tight

Also include: 3 hook-line variations to A/B test as thumbnails.`,
    useCase: 'Short-form video that keeps watch time high and ends with a meaningful CTA.',
  },

  // AI IMAGE GEN (3)
  {
    category: 'AI Image Generation',
    icon: '🖼️',
    name: 'The Ghibli-Style Portrait Prompt',
    body: `Create a Studio Ghibli-style portrait using this prompt:

"Studio Ghibli aesthetic portrait of [SUBJECT_DESCRIPTION], set in [SCENE — e.g., a windswept grassy hillside / a rainy Tokyo street at dusk / a cozy lantern-lit cottage], with [WEATHER/MOOD — e.g., golden sunset light / soft misty morning].

Art style: soft watercolor textures, dreamy atmospheric perspective, warm pastel color palette, hand-drawn linework, painterly clouds, windblown grass or fabric in motion. Include small magical details: [ADD 2 — e.g., spirit orbs in the air / a small creature on the shoulder / cherry blossom petals drifting].

Cinematic composition, wide shot, extreme attention to facial emotion and eye-lighting. Inspired by Spirited Away and Howl's Moving Castle. 8K render, painterly, highly detailed."

Works with: ChatGPT, Claude, Gemini, Midjourney, or any modern AI image tool. Paste once, then attach a reference photo if you have one.`,
    useCase: 'Ghibli-style portraits that go viral on social. Works with any reference photo.',
  },
  {
    category: 'AI Image Generation',
    icon: '🖼️',
    name: 'The Product Hero Shot That Looks Like a $5K Photo Shoot',
    body: `Generate a product hero shot prompt:

"Studio-quality product photograph of [PRODUCT_NAME + DESCRIPTION], centered composition, on a [SURFACE — e.g., polished marble / matte black stone / raw concrete] surface.

Lighting: soft key light from upper-left, subtle rim light highlighting product edges, gentle bounce from the right, soft shadow directly beneath product. Color temperature: [WARM 3200K / NEUTRAL 5000K / COOL 7500K].

Background: seamless [COLOR] gradient, [MOOD — e.g., minimalist, luxurious, natural]. Include [1 PROP — e.g., fresh basil leaves, matte brass ring, crumpled linen fabric] subtly in frame to hint at use case.

Shot on medium-format digital, 100mm macro lens, f/5.6, ISO 100. Tack sharp focus on product label, shallow depth for background falloff.

Color grading: rich saturation in product, restrained saturation elsewhere. Clean commercial e-commerce aesthetic, Apple-style minimalism."`,
    useCase: 'Product photos that look like you hired a pro studio — use for e-comm and ads.',
  },
  {
    category: 'AI Image Generation',
    icon: '🖼️',
    name: 'The Pinterest-Ready Pin Image',
    body: `Generate a vertical 2:3 Pinterest pin image prompt:

"Editorial-style flat-lay photograph, 2:3 vertical composition, top-down view of [THEME — e.g., cozy autumn reading nook, minimalist morning skincare routine, home-office desktop setup].

Arrange these items aesthetically: [LIST 5-7 ITEMS].

Lighting: soft diffused window light from upper-right, natural shadows, warm-but-neutral color temperature. Background: [TEXTURE — e.g., weathered white oak planks / cream linen / matte beige plaster].

Leave intentional whitespace at the top-center for overlay text (will add later). Color palette: muted earth tones, one accent pop color [SPECIFY].

Instagram and Pinterest aesthetic — dreamy, attainable, saveable. Shot with 35mm lens, f/2.8, ISO 400, medium grain for texture. Avoid: clutter, harsh shadows, fluorescent light."`,
    useCase: 'Pinterest pins that actually save and click through to your site.',
  },

  // SALES & OFFERS (3)
  {
    category: 'Sales & Offers',
    icon: '💰',
    name: 'The Irresistible Offer Builder',
    body: `Act as Alex Hormozi. Build me an "irresistible offer" for [PRODUCT].

Walk through the Value Equation:
1. Dream Outcome — what does the buyer ultimately want?
2. Perceived Likelihood of Achievement — how do I prove it'll work?
3. Time Delay — how do I compress time to value?
4. Effort & Sacrifice — how do I reduce the work they have to do?

Then structure the offer as:
- Core product (solves #1)
- Bonus 1 (compresses time — #3)
- Bonus 2 (reduces effort — #4)
- Bonus 3 (boosts perceived likelihood — #2)
- Stack value for each (what it'd cost separately)
- Guarantee (removes the risk)
- Scarcity/urgency (real, not fake)

My product: [DESC]
Current price: [$]
Target customer: [WHO]
Their biggest objection: [WHAT]

Return: full offer stack, ready-to-copy landing page language, and the total "stack value" number to anchor against.`,
    useCase: 'Turn a standard product listing into a Hormozi-style stacked offer.',
  },
  {
    category: 'Sales & Offers',
    icon: '💰',
    name: 'The Objection Handler (5 Emails That Close Stuck Deals)',
    body: `Write 5 follow-up emails, each handling one of these objections:

1. Price ("too expensive")
2. Timing ("not a priority right now")
3. Skepticism ("how do I know this works?")
4. Authority ("I need to check with my boss / partner")
5. Competition ("I'm looking at [COMPETITOR]")

Each email:
- Max 8 sentences
- Acknowledges the objection without being defensive
- Reframes with a story, data point, or small experiment
- Offers a lower-commitment next step
- Subject line treats the objection as the topic (not hides it)

My product: [DESC]
Price: [$]
My unfair advantages over alternatives: [LIST]

Return all 5 emails, copy-paste ready, with send-sequence guidance.`,
    useCase: 'Deploy the right email based on why the prospect is stuck.',
  },
  {
    category: 'Sales & Offers',
    icon: '💰',
    name: 'The Guarantee That Converts (Without Killing Margin)',
    body: `Design a money-back guarantee for my [PRODUCT] at [$PRICE] that maximizes conversion while minimizing refund risk.

Consider:
- Length (7 days / 30 days / 60 days / unconditional)
- Condition (usage-based / result-based / unconditional)
- Reverse guarantee (e.g., "If this doesn't 3x your results in 30 days, we pay YOU $100 for your time")
- Social-proof-backed guarantee (e.g., "Join 500+ customers — 97% keep it")

For each variant, give me:
- The exact copy for the landing page
- Why this works psychologically for my audience
- The refund risk (% of buyers likely to refund)
- The conversion lift estimate (vs. no guarantee)

My audience's biggest fear: [FEAR]
My product's measurable outcome: [RESULT]

Recommend the best one for my situation.`,
    useCase: 'Stop using the default "30-day money back" — pick a guarantee that actually converts.',
  },

  // PRODUCTIVITY (3)
  {
    category: 'Productivity',
    icon: '⚡',
    name: 'The Brain-Dump to Daily Priorities Converter',
    body: `I'm going to paste a messy brain-dump of everything on my mind. Your job is to turn it into a clean daily plan.

My brain dump:
[PASTE_EVERYTHING]

Return:
1. **Today's 3 MUST-DOs** (ranked by leverage — highest ROI first)
2. **Today's 2 Nice-to-Haves** (if I finish MUST-DOs early)
3. **This week, not today** (things that need to be done but not right now)
4. **Someone else should do this** (things I should delegate — with a 1-line delegation note)
5. **Not worth doing** (things I should drop, with why)

For each MUST-DO, estimate realistic minutes and note the deep-work vs. shallow-work classification. Schedule deep work in a protected morning block.`,
    useCase: 'Convert mental chaos into a prioritized plan in 60 seconds.',
  },
  {
    category: 'Productivity',
    icon: '⚡',
    name: 'The Meeting-Notes-to-Action-Items Extractor',
    body: `I'll paste raw meeting notes below. Extract:

1. **Decisions made** (with who made them)
2. **Action items** (with owner + deadline + success criteria)
3. **Open questions** (with who's accountable for getting the answer)
4. **Dependencies** (what's blocked on what)
5. **Follow-up meeting** (is one needed? when? agenda?)

Format action items as a bullet list with checkboxes I can paste into [Notion/Slack/Linear].

If the owner isn't clear, flag it with [OWNER?] so I can assign it.
If the deadline isn't clear, flag with [WHEN?].
If the success criteria is fuzzy, flag with [DEFINE SUCCESS].

Meeting notes:
[PASTE_RAW_NOTES]`,
    useCase: 'Turn chaotic meeting notes into clear action items in seconds.',
  },
  {
    category: 'Productivity',
    icon: '⚡',
    name: 'The Decision Matrix (When You\'re Stuck Between Options)',
    body: `I need to decide between these options: [LIST_OPTIONS]

Goal I'm optimizing for: [PRIMARY_GOAL]
Non-negotiable constraints: [LIST]
Nice-to-haves: [LIST]

Build me a weighted decision matrix:
1. List 5-7 criteria that matter (quantitative + qualitative)
2. Assign weights (% importance summing to 100)
3. Score each option 1-10 on each criterion
4. Calculate weighted total
5. Recommend the winner + runner-up
6. Point out: "If X changes, the recommendation changes to Y" (sensitivity analysis)

Bias check: explicitly note if there are any emotional/sunk-cost factors I'm probably under-weighting, and reframe the math without them.`,
    useCase: 'Make high-stakes decisions faster by externalizing the trade-offs.',
  },
];

export const PROMPT_CATEGORIES = [
  { icon: '✉️', title: 'Cold Outreach', count: 4, examples: 'Reply-magnet email, LinkedIn DM opener, warm intro ask, follow-up that doesn\'t suck' },
  { icon: '📄', title: 'Landing Page Copy', count: 3, examples: 'Hero rewrite, pricing page psychology, 10-headline tester' },
  { icon: '📱', title: 'Social Content', count: 4, examples: '30-day calendar, hook generator, LinkedIn carousel, viral video script' },
  { icon: '🖼️', title: 'AI Image Gen', count: 3, examples: 'Ghibli-style portrait, product hero shot, Pinterest-ready pin' },
  { icon: '💰', title: 'Sales & Offers', count: 3, examples: 'Irresistible offer builder, objection handler, guarantee design' },
  { icon: '⚡', title: 'Productivity', count: 3, examples: 'Brain-dump to priorities, meeting notes → actions, decision matrix' },
];
