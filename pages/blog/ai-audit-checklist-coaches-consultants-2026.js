import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_AUDIT = 'https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03';

export default function AiAuditChecklistCoachesConsultantsGuide() {
  const title = 'AI Audit Checklist for Solo Coaches & Consultants — 14 Questions to Run Before Spending Another Dollar on ChatGPT (April 2026)';
  const description = 'Most solo coaches and consultants have already paid for ChatGPT, Claude, Notion AI, and a course on top — and still can\'t answer "what changed in your week?". 14 questions to close that gap, plus when to DIY vs hire a $997 productized audit vs $10K consultant.';
  const url = 'https://www.midastools.co/blog/ai-audit-checklist-coaches-consultants-2026';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: url,
      datePublished: '2026-04-28',
      dateModified: '2026-04-28',
      author: { '@type': 'Person', name: 'Rey Midas', url: 'https://www.midastools.co' },
      publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI audit for coaches and consultants?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI audit is a structured review of a solo expert\'s actual weekly workflow, mapping each recurring task to whether AI saves real hours, costs more than it saves, or shouldn\'t be touched at all (because of privacy, judgment, or moat reasons). It is NOT a tool list. It is a Tuesday-by-Tuesday answer to: where does $20/month buy you 5+ hours a week, and where does it just burn $20/month? A good audit produces 3-5 ranked recommendations, the math behind each one, and a concrete 4-day implementation plan.'
          }
        },
        {
          '@type': 'Question',
          name: 'How is a $997 productized AI audit different from hiring a $300/hr consultant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A bespoke consultant typically charges 8-15 hours of discovery + analysis at $300/hr — usually $3,000 to $10,000 — over 4-8 weeks. The productized $997 version compresses the 14 most-leveraged questions into a 7-day engagement: written deliverable, 30-minute review call, financial-impact projection, and a refund if you don\'t recover 5+ hours per week within the first month. It works for solo experts at $5K-$25K MRR. Above that scale (teams of 3+ or $50K+ MRR), the bespoke consultant\'s extra depth starts paying back.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s the disqualifier — when should I NOT buy an AI audit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Question 10 of the audit is the disqualifier: "What 5 hours per week saved would I actually do something with?" If the honest answer is "I\'d watch more shows" or "I\'d scroll X again", you don\'t have a time problem — you have an energy, focus, or confidence problem, and no audit fixes those. About half the people who consider an audit discover at this question that they shouldn\'t buy. We tell them so on the discovery call. That\'s the version of "qualified lead" that actually works at $997.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s the privacy floor question and why does it matter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The privacy floor categorizes the data you handle weekly into three tiers: Tier A (must never leave your device — SSNs, medical, attorney-client privileged, signed NDAs), Tier B (only encrypted SaaS with DPA + zero retention — client revenue, addresses, unsigned contracts), and Tier C (any tool — your marketing copy, public testimonials). Most "AI for therapists" or "AI for lawyers" courses ignore this and recommend tools that violate the practitioner\'s licensing-board rules. The audit refuses to recommend a tool that breaches your floor — it\'s the difference between a useful audit and an enforcement action.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does an AI audit take and what do I get?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A productized audit runs 7 days end-to-end. Day 1: discovery questionnaire delivered. Days 2-3: 60-minute discovery call + workflow walkthrough. Days 4-6: written report drafted (15-25 pages: priority matrix of opportunities, 3-5 specific tool recommendations with monthly cost, hours-saved math per workflow, 4-day quick-start implementation plan). Day 7: 30-minute review call to walk through the report and answer questions. The deliverable is something you could hand to a contractor or VA to execute, not a "we\'ll figure it out together" deck.'
          }
        }
      ]
    }
  ];

  const questions = [
    { n: 1, q: 'Where does my week actually go, by hour?', why: 'Most coaches think their week is 60% client delivery. Real tracking shows it\'s 25% delivery + 30% prospect/admin + 25% content + 20% fragmented context-switching. You can\'t fix what you don\'t measure.', tip: 'Track every 30-minute block for 5 working days. Log task, client, revenue, energy (+1/0/-1), and whether it repeats. Sort by repeats=weekly + energy=-1. Those are your audit candidates.' },
    { n: 2, q: 'What 3 tasks repeat every week?', why: 'If two of three sound similar, merge them. You should have 3 distinct workflows, not 7. Stop here if you can\'t fill it in.', tip: 'Top 3 recurring tasks, with frequency × time. The audit fixes the wrong workflow if you skip this.' },
    { n: 3, q: 'Which tasks need my judgment vs my typing?', why: 'Coaches who bill for judgment ($300/hr) and try to "automate coaching" lose. Coaches who automate the typing around their judgment win.', tip: 'Label each step J (judgment), T (typing), or R (research). Most workflows are 20% J + 60% T + 20% R. The 80% (T + R) is your AI surface area.' },
    { n: 4, q: 'What does each repeating task cost per hour?', why: 'A 3-hour/week task at a $250 effective rate costs you $37,500/year. A $50/month tool that cuts it in half pays back in 11 days.', tip: 'Hours/week × billable rate × 50 weeks = annual cost. Use opportunity cost if you can\'t bill the hours.' },
    { n: 5, q: 'What tools have I paid for and never used past month 1?', why: 'Average solo coach we audit has $147/month in AI tooling, of which $89 is unused. Cancel-the-unused alone pays for the audit in 11 months.', tip: 'Open last 90 days of card statements. Anything where "last opened > 30 days ago" — cancel today. You don\'t need an audit, you just have to look.' },
    { n: 6, q: 'Which client deliverable do I dread the most?', why: 'Easy tasks aren\'t bottlenecks — they\'re just easy. Dreaded tasks are. Solving the dread is what unlocks the other 4 hours.', tip: 'Score each recurring deliverable 1-5 on dread. Dread-5, hours-2+, multiple-per-month is your highest-leverage target. Not the easiest. The dreadful one.' },
    { n: 7, q: 'When I describe my work to AI, do I get generic output?', why: 'If the output sounds like a Medium blog post — generic, "in today\'s fast-paced world" — you don\'t have a tool problem. You have a context problem.', tip: 'Test prompt: "I\'m a [title]. I [what] for [ICP]. I\'m trying to [thing] for a client who [thing]. Write [deliverable] that [outcome]." If output is generic, fix context, not tool.' },
    { n: 8, q: 'What\'s my privacy floor — what data must never leave my device?', why: 'This question disqualifies 60% of "AI for therapists" or "AI for lawyers" courses on the market — they recommend tools that violate the practitioner\'s licensing-board data-handling rules.', tip: 'Tier A (local-only): SSNs, medical, privileged. Tier B (paid SaaS + DPA): revenue, addresses. Tier C (any tool): marketing, public, anonymized.' },
    { n: 9, q: 'Can I actually use APIs, or only chat UIs?', why: 'Where you score below 3, the gap is training, not tooling. Where you score 3+, the gap is workflow design. Recommending Zapier to a 1 is cruel.', tip: 'Score yourself 1-5 on: chat UIs, custom GPTs/Claude projects, Zapier/Make.com, browser automation, API + Python, self-hosted models.' },
    { n: 10, q: 'What 5 hours/week saved would I actually do something with?', why: 'About half of audit-curious people discover at this question that they don\'t have a time problem. They have an energy, focus, or confidence problem. None of those are fixed by Notion AI.', tip: 'Yes: "I\'d onboard 2 more clients" or "finish the cohort course". No: "I\'d watch more shows" or "scroll X". No-answer = save the $997.' },
    { n: 11, q: 'What does my best client get from me that AI cannot replicate?', why: 'Most coaches discover their moat is presence + accountability + reading the person in front of them. Their capacity tasks are weekly emails + summaries + session notes. Their adminish tasks are everything else. Automate C and A. Protect M.', tip: 'List top 3 things your favorite client says about you. Mark each M (moat), C (capacity), A (adminish). Protect M, automate C+A.' },
    { n: 12, q: 'If I spent $1,000 on AI tooling tomorrow, would I know which 3 to buy?', why: 'If you can\'t fill in tool/cost/use-case/why for 3 tools, you\'re going to make a wrong $1,000 bet. The audit IS that decision, with diligence done.', tip: 'Write 3 tools with: name, $/mo, specific use case, why this over the other 12 contenders. Inability to fill = audit candidate.' },
    { n: 13, q: 'What does failure look like in 90 days?', why: 'Without this, you can\'t tell ROI from busywork. With this, you can.', tip: 'Write 3 sentences: success state, partial state, full-failure state ("no change in hours, $50/mo wasted"). This is what we put on page 2 of every $997 deliverable.' },
    { n: 14, q: 'Who would I hire to do this audit if money were no object?', why: '10-hour assessment × $300/hr = $3,000. Productized version: $997, 7 days, written deliverable + call. We don\'t try to convince you we\'re better — we tell you when to hire one and when to buy productized.', tip: 'Be honest. Not "myself with more time". Not "ChatGPT for free". Name the firm and rate.' }
  ];

  return (
    <Layout>
      <Head>
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {jsonLd.map((ld, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        ))}
      </Head>

      <style>{`
        .blog-post { max-width: 760px; margin: 0 auto; padding: 80px 24px 64px; }
        .blog-post h1 { font-size: clamp(28px, 4vw, 40px); font-weight: 900; line-height: 1.15; letter-spacing: -1px; color: var(--text); margin-bottom: 16px; }
        .blog-meta { font-size: 14px; color: var(--text-secondary); margin-bottom: 32px; }
        .blog-post h2 { font-size: 24px; font-weight: 800; color: var(--text); margin: 40px 0 16px; letter-spacing: -0.5px; }
        .blog-post h3 { font-size: 18px; font-weight: 700; color: var(--text); margin: 28px 0 12px; }
        .blog-post p { font-size: 16px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px; }
        .blog-post ul, .blog-post ol { font-size: 16px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px; padding-left: 24px; }
        .blog-post li { margin-bottom: 8px; }
        .blog-post strong { color: var(--text); }
        .blog-post code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 14px; }
        .blog-code { background: #1a1a2e; border-radius: 12px; padding: 24px; margin: 20px 0; overflow-x: auto; }
        .blog-code pre { color: #e0e0e0; font-size: 13px; line-height: 1.6; margin: 0; font-family: 'SF Mono', 'Fira Code', monospace; white-space: pre-wrap; }
        .blog-cta { background: var(--surface); border: 2px solid var(--accent); border-radius: 16px; padding: 32px; text-align: center; margin: 40px 0; }
        .blog-cta h3 { font-size: 20px; margin: 0 0 8px; color: var(--text); }
        .blog-cta p { font-size: 15px; color: var(--text-secondary); margin: 0 0 20px; }
        .blog-cta-btn { display: inline-block; background: var(--accent); color: white; padding: 14px 32px; border-radius: 100px; font-weight: 700; text-decoration: none; transition: transform 0.2s; }
        .blog-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.3); }
        .blog-tip { background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%); border-left: 4px solid var(--accent); border-radius: 0 12px 12px 0; padding: 20px 24px; margin: 24px 0; }
        .blog-tip p { margin: 0; font-size: 15px; }
        .compare-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
        .compare-table th, .compare-table td { padding: 12px; border: 1px solid var(--border, #e5e7eb); text-align: left; color: var(--text-secondary); vertical-align: top; }
        .compare-table th { background: var(--surface); color: var(--text); font-weight: 700; }
        .q-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
        .q-table th, .q-table td { padding: 10px; border: 1px solid var(--border, #e5e7eb); text-align: left; color: var(--text-secondary); vertical-align: top; }
        .q-table th { background: var(--surface); color: var(--text); font-weight: 700; }
        .q-table td:first-child { width: 48px; font-weight: 700; text-align: center; color: var(--text); }
      `}</style>

      <article className="blog-post">
        <p className="blog-meta">April 28, 2026 · 14 min read</p>
        <h1>{title}</h1>

        <p>
          Most solo coaches and consultants we talk to have already paid for <strong>ChatGPT Plus</strong>. Half of them have
          paid for <strong>Claude Pro</strong>, <strong>Notion AI</strong>, and at least one "AI for coaches" course on top.
        </p>
        <p>
          None of them can answer this question: <strong>what changed in your week?</strong>
        </p>
        <p>
          That's the gap an AI audit closes. Not "what AI tools exist" — that's a Google search. The audit answers: <em>given
          your specific workflow, your specific clients, and your specific Tuesday afternoon, where does AI save you 5+ hours
          per week and where does it just burn $20/month?</em>
        </p>

        <div className="blog-tip">
          <p>
            This is the checklist we use on $997 client engagements, simplified to 14 questions you can run on yourself today.
            The free fillable version (with a 1-page summary you can hand to a contractor) is at{' '}
            <Link href="/audit-template" style={{ color: 'var(--accent)', fontWeight: 600 }}>midastools.co/audit-template</Link>.
          </p>
        </div>

        <h2>TL;DR — 14 questions worth a real answer</h2>
        <table className="q-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>What "no" or "I don't know" usually means</th>
            </tr>
          </thead>
          <tbody>
            {questions.map(q => (
              <tr key={q.n}>
                <td>{q.n}</td>
                <td><strong>{q.q}</strong></td>
                <td>{q.why}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="blog-cta">
          <h3>Free 14-question fillable template</h3>
          <p>The full checklist with a 1-page summary you can hand to a VA or contractor. Email-gated. No credit card.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/audit-template" className="blog-cta-btn">Get the Free Template</Link>
            <a href={STRIPE_AUDIT} className="blog-cta-btn" style={{ background: 'var(--text)' }}>Done-for-you Audit — $997</a>
          </div>
        </div>

        <h2>The universal audit-question formula</h2>
        <p>Every question above fills five slots. When you write your own audit questions for your business, follow the same shape:</p>
        <div className="blog-code">
          <pre>{`[ROLE]:        who you are when you do the task (writer? researcher? CFO? therapist?)
[TASK]:        the smallest unit that recurs — "draft Tuesday's nurture email", not "marketing"
[FREQUENCY]:   per day, per week, per client, per launch
[TIME COST]:   minutes of focused work, not calendar hours
[JUDGMENT %]:  what fraction is "decisions only you can make" vs "typing it out"`}</pre>
        </div>
        <p>
          A task with 80%+ judgment is <strong>not</strong> an AI candidate, even if AI <em>can</em> technically do it. Your
          discovery calls aren't a bottleneck — your follow-up notes are.
        </p>

        {questions.map(q => (
          <section key={q.n}>
            <h2>{q.n}. {q.q}</h2>
            <p><em>Why this matters:</em> {q.why}</p>
            <p><strong>How to answer:</strong> {q.tip}</p>
          </section>
        ))}

        <h2>DIY checklist vs $997 productized audit vs $10K bespoke consultant</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Slot</th>
              <th>DIY (this checklist)</th>
              <th>$997 Productized</th>
              <th>$10K Bespoke</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time to deliverable</td>
              <td>6-10 hours of your week</td>
              <td>7 days</td>
              <td>4-8 weeks</td>
            </tr>
            <tr>
              <td>Discovery call</td>
              <td>None</td>
              <td>60 min</td>
              <td>3-4 sessions</td>
            </tr>
            <tr>
              <td>Custom analysis</td>
              <td>You do it</td>
              <td>We do it</td>
              <td>They do it deeper</td>
            </tr>
            <tr>
              <td>Tool recommendations</td>
              <td>Self-research</td>
              <td>3-5, tested for you</td>
              <td>5-15 with vendor relationships</td>
            </tr>
            <tr>
              <td>Hours-saved math</td>
              <td>Your gut</td>
              <td>Calculated per workflow</td>
              <td>Calculated + measured</td>
            </tr>
            <tr>
              <td>Refund if wrong</td>
              <td>N/A</td>
              <td>Yes — full refund unless 5+ hrs/wk saved</td>
              <td>Usually not</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>Anyone with 6 free hours</td>
              <td>Solo experts $5K-$25K MRR</td>
              <td>Teams of 3+, $50K+ MRR</td>
            </tr>
          </tbody>
        </table>
        <p>
          You are <strong>not</strong> the audience for the $10K bespoke consultant if you're a solo expert. You probably{' '}
          <em>are</em> the audience for one of the first two columns.
        </p>

        <div className="blog-cta">
          <h3>Done-for-you AI Clarity Assessment</h3>
          <p>7 days. 14-question audit + 6 more. Custom 15-25 page report. 30-min review call. Full refund if we don't save you 5+ hrs/wk.</p>
          <a href={STRIPE_AUDIT} className="blog-cta-btn">Book the $997 Assessment</a>
        </div>

        <h2>Common mistakes (from 50+ informal audits before we productized)</h2>
        <ol>
          <li>
            <strong>Treating "AI for coaches" courses as substitutes for an audit.</strong> Courses teach you tools. An audit
            tells you which tools, in what order, for <em>your</em> week. They're complementary, not competitive.
          </li>
          <li>
            <strong>Auditing the easiest workflow first.</strong> Easy workflows aren't bottlenecks — they're just easy. Audit
            the dreaded one (question 6). The unlock is in the dread.
          </li>
          <li>
            <strong>Skipping question 10.</strong> Half of all audit-curious people don't actually have a time problem. They
            have an energy problem, a focus problem, or a confidence problem. None of those are fixed by Notion AI.
          </li>
          <li>
            <strong>Confusing "AI saved me time on this email" with "AI saved me 5 hrs/week".</strong> One email is a vibe; 5
            hrs/week is a measurable change in your calendar. Track question 1 again 30 days after implementing.
          </li>
          <li>
            <strong>Hiring an "AI consultant" who doesn't know your industry.</strong> A generic AI consultant will recommend
            the same 5 tools to a real estate agent, a pastor, an IP attorney, and a cohort-course coach. The recommendation
            depends on the privacy floor, content cadence, and client deliverable shape. Ask for industry references.
          </li>
        </ol>

        <h2>Resources</h2>
        <ul>
          <li>
            <strong>Free fillable template</strong> — 14 questions in a structured form with a 1-page summary at the end:{' '}
            <Link href="/audit-template" style={{ color: 'var(--accent)', fontWeight: 600 }}>midastools.co/audit-template</Link>
          </li>
          <li>
            <strong>$997 AI Clarity Assessment</strong> — done-for-you version of this checklist plus 6 more questions, custom
            15-25 page report, 30-min review call, full refund if we don't save you 5+ hrs/wk:{' '}
            <Link href="/ai-audit" style={{ color: 'var(--accent)', fontWeight: 600 }}>midastools.co/ai-audit</Link>
          </li>
          <li>
            <strong>For Coaches & Consultants</strong> — the broader product line we built for this audience:{' '}
            <Link href="/for-coaches" style={{ color: 'var(--accent)', fontWeight: 600 }}>midastools.co/for-coaches</Link>
          </li>
          <li>
            <strong>Free prompt enhancer</strong> — fixes the "generic AI output" problem from question 7 by upgrading your
            context: <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', fontWeight: 600 }}>midastools.co/prompt-enhancer</Link>
          </li>
        </ul>

        <h2>The bottom line</h2>
        <p>
          You don't need another tool. You don't need another course. You need a Tuesday-by-Tuesday answer to where AI fits
          your workflow and where it doesn't.
        </p>
        <p>
          The 14 questions above are how we do it. Run them yourself if you have 6 free hours. Buy the productized version if
          your time is worth more than the $997. Hire a $300/hr consultant if you have a team and a higher revenue floor. Just
          don't pay another $20/month for a tool you've never opened.
        </p>

        <div className="blog-cta" style={{ marginBottom: 0 }}>
          <h3>Ready to stop guessing?</h3>
          <p>Free 14-question template (email-gated). No credit card. Hand the summary to a VA, a contractor, or to us.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/audit-template" className="blog-cta-btn">Get the Free Template</Link>
            <a href={STRIPE_AUDIT} className="blog-cta-btn" style={{ background: 'var(--text)' }}>Done-for-you — $997</a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
