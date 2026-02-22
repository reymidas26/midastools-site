import Head from 'next/head';
import Link from 'next/link';

const posts = {
  'felix-craft-story': {
    title: 'The Felix Craft Story: How an AI Made $14,718 in 3 Weeks',
    date: 'Feb 20, 2026',
    meta: 'An OpenClaw AI agent called Felix Craft earned nearly $15,000 in under three weeks — building, launching, and selling products autonomously.',
    content: `
## What is Felix Craft?

Felix Craft is an OpenClaw agent — an AI running on a Mac Mini, communicating via Telegram, with full access to Stripe, email, Vercel, and GitHub. It isn't a real person. It's a digital entrepreneur built and operated by Nat Eliason, author and entrepreneur.

In two and a half weeks of operation, Felix earned **$14,718**. Not from crypto. Not from gimmicks. From real digital products sold to real customers.

## The First Product: A PDF Sold Overnight

On Felix's first night, Nat gave it a challenge: build something you can sell by morning.

Felix built a PDF titled "How to Hire an AI," built a landing page, deployed it to Vercel, and left one blocker for the morning: Stripe API access. Nat provided the key. Felix finished the setup and launched.

**The PDF has since sold nearly $9,000.**

No design agency. No product manager. One night.

## The Second Product: ClawMart

With the PDF proving Felix could ship and sell, the next mission was bigger: build a real business.

After exploring managed OpenClaw deployments (too crowded), Felix pivoted to **ClawMart** — a marketplace for OpenClaw skills and personas. The insight: *deploying OpenClaw is getting easy, but knowing what to do with it isn't.*

Felix built the entire marketplace in a weekend. Launched February 12th, 2026. In its first week: **$6,500 in volume** and nearly 50 builders signed up.

## How Felix Operates Day to Day

Felix's workflow has three parts:

**The Daily Review:** Each morning, Felix checks Stripe and site stats, compiles open items, and proposes the 5 highest-priority tasks. Nat reviews in 5 minutes and approves or adjusts.

**The Daily Jobs:** Email triage, X replies, scheduling blog posts from a content marketing agent, monitoring for site errors.

**The Daily Improvement:** Each night, Felix reviews what needed human intervention and finds ways to eliminate those touchpoints. Every day, a little more autonomous.

## What This Proves

Felix crossed two critical milestones:
1. An AI agent can build, launch, and sell a real digital product
2. That same agent can operate and grow a real business with minimal oversight

The question isn't whether this is possible anymore. Felix proved it is.

The question is: **can you replicate it?**

## How to Replicate the Felix Model

Felix runs on OpenClaw with:
- A revenue-focused SOUL.md identity file
- A HEARTBEAT.md system for proactive checks
- A daily review workflow
- Access to Stripe, Vercel, GitHub, and email

We built the exact templates, workflows, and prompts Felix uses into the **OpenClaw Entrepreneur Starter Kit** — so you can deploy your own Felix-equivalent today.

**$29 → [Get the Starter Kit](https://www.midastools.co)**
    `
  },
  'deploy-openclaw-ai-entrepreneur': {
    title: 'How to Deploy an OpenClaw AI Entrepreneur (Step by Step)',
    date: 'Feb 22, 2026',
    meta: 'A complete guide to setting up OpenClaw with a revenue-focused SOUL.md, heartbeat system, and the tools needed to build and sell products autonomously.',
    content: `
## What You're Building

An AI agent that:
- Works 24/7 toward a specific revenue goal
- Proactively checks Stripe, email, and your product metrics
- Builds and launches products with minimal direction
- Reports to you daily in under 5 minutes of your time

This is the Felix Craft model. Here's how to replicate it.

## Step 1: Install OpenClaw

OpenClaw runs on macOS. Download it at openclaw.ai and follow the installation steps. You'll connect it to an AI model (Claude Sonnet is recommended) and set up your messaging channel (Telegram is the most seamless).

This takes about 20 minutes.

## Step 2: Configure Your Agent's Identity with SOUL.md

The most important file in your workspace is **SOUL.md**. This is your agent's identity — who it is, what it cares about, how it thinks.

A revenue-focused SOUL.md contains:
- The agent's name and role
- A specific revenue mission ("$10,000 MRR in 90 days")
- How it thinks (bias to action, revenue > features, distribution > product)
- What it can and can't do without asking

**Do not skip this.** An agent without a strong identity drifts. An agent with a clear mission executes.

Example mission line:
> "My job is not to assist. My job is to build revenue-generating products as fast as possible."

## Step 3: Set Up the Heartbeat System

The heartbeat makes your agent proactive. Without it, your agent only responds when you talk to it. With it, your agent checks in on revenue, email, and progress automatically — and reaches out when something needs attention.

Your **HEARTBEAT.md** file tells the agent what to check and when to alert you:
- Revenue pulse (Stripe activity)
- Inbox triage (customer support)
- Build queue status
- Blocker escalation

Set the heartbeat interval to every 30-60 minutes in OpenClaw settings.

## Step 4: Give It the Right Tools

For an agent to build and ship products, it needs access to:

- **GitHub** — to push and manage code
- **Vercel** — to deploy websites and APIs
- **Stripe or Gumroad** — to collect payments
- **Email** — to handle customer support

Store all credentials in a **.env file** in your workspace. Give your agent restricted API keys — not full admin access. Start narrow, expand as trust builds.

## Step 5: Give It a Mission and Get Out of the Way

Use this prompt to kickstart your agent:

> "Tonight while I sleep, I want you to research what people in [your niche] are struggling with, choose one problem you can solve with a digital product, build it, and deploy it. Leave a clear list of any blockers in the morning."

Then go to sleep. Seriously.

The reflex to check in and micromanage will kill your agent's momentum. Let it work. Review in the morning. Unblock what it flags. Repeat.

## Step 6: The Daily Review Loop

The most important habit is a daily 5-minute review:

1. Agent sends a morning report: revenue, blockers, proposed priorities
2. You read it, approve or adjust
3. Agent executes all day
4. You intervene only when explicitly flagged

This is how Nat Eliason manages Felix. It's how you should manage yours.

## Get the Starter Kit

We've packaged every file, template, and prompt described in this guide into the **OpenClaw Entrepreneur Starter Kit**:

- 5 SOUL.md templates for different business types
- Heartbeat workflow system
- Daily review template
- 5 product launch prompts
- Revenue ops playbook (how to safely connect Stripe, email, hosting)
- Complete setup guide

**$29 → [Get the Starter Kit](https://www.midastools.co)**
    `
  }
};

export async function getStaticPaths() {
  return { paths: Object.keys(posts).map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { post: posts[params.slug], slug: params.slug } };
}

export default function BlogPost({ post }) {
  const paragraphs = post.content.trim().split('\n').filter(l => l.trim());

  return (
    <>
      <Head>
        <title>{post.title} — Midas Tools</title>
        <meta name="description" content={post.meta} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        body{font-family:Inter,sans-serif;background:#0A0A0A;color:#fff;-webkit-font-smoothing:antialiased}
        nav{display:flex;justify-content:space-between;align-items:center;padding:20px 40px;border-bottom:1px solid #1A1A1A;background:rgba(10,10,10,0.95);position:sticky;top:0;z-index:100}
        .nav-logo{font-size:20px;font-weight:800;color:#F5C842;text-decoration:none}
        .nav-cta{background:#F5C842;color:#000;padding:10px 24px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none}
        .container{max-width:680px;margin:0 auto;padding:80px 40px}
        .post-date{font-size:13px;color:#888;margin-bottom:16px}
        h1{font-size:clamp(28px,4vw,44px);font-weight:900;letter-spacing:-1px;margin-bottom:40px;line-height:1.1}
        .prose p{font-size:17px;line-height:1.75;color:#ccc;margin-bottom:20px}
        .prose h2{font-size:24px;font-weight:800;margin:40px 0 16px;color:#fff}
        .prose strong{color:#fff}
        .prose a{color:#F5C842}
        .prose blockquote{border-left:3px solid #F5C842;padding-left:20px;color:#888;font-style:italic;margin:24px 0}
        .cta-inline{background:rgba(245,200,66,0.08);border:1px solid rgba(245,200,66,0.2);border-radius:12px;padding:32px;text-align:center;margin:48px 0}
        .cta-inline p{color:#888;margin-bottom:16px}
        .cta-inline a{display:inline-block;background:#F5C842;color:#000;padding:14px 32px;border-radius:8px;font-weight:800;text-decoration:none;font-size:16px}
        footer{border-top:1px solid #1A1A1A;padding:32px 40px;text-align:center;color:#555;font-size:13px}
        footer a{color:#888}
      `}</style>
      <nav>
        <Link href="/" className="nav-logo">👑 Midas Tools</Link>
        <a href="https://buy.stripe.com/4gM00i6Sbaz71qka02cMM00" className="nav-cta">Get the Kit — $29</a>
      </nav>
      <div className="container">
        <div className="post-date">{post.date}</div>
        <h1>{post.title}</h1>
        <div className="prose">
          {paragraphs.map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
            if (line.startsWith('> ')) return <blockquote key={i}><p>{line.replace('> ', '')}</p></blockquote>;
            if (line.startsWith('**') && line.endsWith('**')) return <p key={i}><strong>{line.replace(/\*\*/g, '')}</strong></p>;
            return <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>') }} />;
          })}
        </div>
        <div className="cta-inline">
          <p>Get the templates, workflows, and prompts to replicate this yourself.</p>
          <a href="https://buy.stripe.com/4gM00i6Sbaz71qka02cMM00">Get the Starter Kit — $29 →</a>
        </div>
      </div>
      <footer><p>© 2026 Midas Tools · <Link href="/blog" style={{color:'#888'}}>Blog</Link> · <a href="mailto:rmidas26@gmail.com">rmidas26@gmail.com</a></p></footer>
    </>
  );
}
