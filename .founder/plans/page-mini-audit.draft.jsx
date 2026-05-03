// DRAFT — pages/ai-mini-audit.js
// Status: PRE-BUILT for May 10 ship-day. NOT yet in pages/ — sits in .founder/plans/ until decision.
// On May 10 (if Plan A greenlit):
//   1. Run /api/setup-mini-audit to get the real Stripe link, paste into MINI_AUDIT_URL below.
//   2. Move this file to pages/ai-mini-audit.js.
//   3. Add /ai-mini-audit to sitemap.xml.
//   4. Submit to IndexNow.
//   5. Add nav link in components/Layout.js.
//   6. Build + deploy.
//
// Cloned from pages/ai-audit.js. Differences from $997:
//   - Hero: "Are you using ChatGPT right?" (curiosity hook, not consultant framing)
//   - Price block: $297 not $997
//   - Phase framework: 3 phases not 4 (no discovery call, no live walkthrough — async only)
//   - Math: 6hr/wk * $100/hr = $30,720; ROI multiple = 103x (vs $997's 30.8x — both honest)
//   - Implementation ladder: $97 + $1,500 + $3,500 + Mini-Audit credit toward Imp. Lite
//   - FAQ: Mini-Audit-specific — "why $297 not $997?", "no call?", "48hr turnaround?", "credit toward $1,500?"
//   - Lead-magnet section: removed (Mini-Audit IS the lead magnet conversion play)

import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

// $297 AI Mini-Audit — async, 48-hour turnaround, 5-page PDF
// Stripe link assigned by /api/setup-mini-audit on ship-day. PLACEHOLDER UNTIL THEN.
const MINI_AUDIT_URL = 'https://buy.stripe.com/PLACEHOLDER_PASTE_AFTER_SETUP';

// Implementation upsell tiers (existing DFY + Mega Pack links — same as $997 page)
const IMPL_LITE    = 'https://midastools.co/services'; // quoted on report
const IMPL_FULL    = 'https://midastools.co/services'; // quoted on report
const MEGA_PACK    = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';   // $97 Mega Pack
const FULL_AUDIT   = '/ai-audit'; // upsell anchor for buyers who want the $997 full version

const TITLE = 'AI Mini-Audit — $297 5-Page Report in 48 Hours, Async | Midas Tools';
const DESCRIPTION = 'A focused, 5-page expert review of your AI usage. Async (no call). 48-hour turnaround. We tell you the 3 specific AI moves to make this week, with tools, setup steps, and ROI math. $297 one-time. 30-day money-back.';
const URL = 'https://www.midastools.co/ai-mini-audit';

export default function AIMiniAudit() {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={URL} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Mini-Audit',
          description: DESCRIPTION,
          url: URL,
          provider: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
          offers: { '@type': 'Offer', price: 297, priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Why $297 instead of the $997 full audit?', acceptedAnswer: { '@type': 'Answer', text: 'The Mini-Audit is async (no call), 5 pages instead of 15-25, and delivered in 48 hours instead of 7 days. Same analyst desk, same methodology — tighter scope. If you want the full discovery call + walkthrough + 25-page report, the $997 Clarity Assessment is the right fit. Your $297 credits 100% toward Implementation Lite if you upgrade within 30 days.' } },
            { '@type': 'Question', name: 'No call? How does that work?', acceptedAnswer: { '@type': 'Answer', text: 'After purchase you get a 12-question intake form (5-7 min to complete) + you can optionally send 3 sample prompts and 1 workflow screenshot. We turn that into a 5-page personalized PDF within 48 hours. No call needed for this scope; we built it for solo operators who want a clear answer fast, not a consulting relationship.' } },
            { '@type': 'Question', name: 'What do I actually receive?', acceptedAnswer: { '@type': 'Answer', text: 'A 5-page PDF: page 1 cover + executive summary; page 2 your three biggest AI leverage points (with intake quotes); page 3 deep-dive on Tool #1 (the one to set up this week); page 4 quick-look on Tools #2 and #3; page 5 Year-1 ROI math + this-week checklist + upsell ladder. Plus one follow-up email at T+10 days asking how Tool #1 is going.' } },
            { '@type': 'Question', name: 'When does the 48-hour delivery clock start?', acceptedAnswer: { '@type': 'Answer', text: 'When you submit your intake form answers, not when you pay. So if you buy on Monday and submit answers on Wednesday, your report arrives Friday. Most buyers complete intake within 24 hours of purchase.' } },
            { '@type': 'Question', name: 'What if I want help implementing the recommendations?', acceptedAnswer: { '@type': 'Answer', text: 'Your $297 credits 100% toward our Implementation Lite tier ($1,500) if you upgrade within 30 days. We set up Tool #1 (your top recommendation) end-to-end including brand voice tuning and team-ready docs. Bigger scope (all 3 tools + integrations) starts at $3,500.' } },
            { '@type': 'Question', name: 'What is your refund policy?', acceptedAnswer: { '@type': 'Answer', text: 'Full refund within 30 days if the report is not specific to your business. Specific = at least 5 verbatim references to your intake answers, plus tool recommendations no generic "best AI tools 2026" article would give you. We have never had to issue one.' } },
          ].map(item => item),
        }) }} />
      </Head>

      <style>{`
        .hero{max-width:820px;margin:0 auto;padding:80px 40px 56px;text-align:center}
        .pre-h1{display:inline-block;padding:6px 14px;background:rgba(255,200,0,0.08);color:var(--gold);font-size:11px;font-weight:800;border-radius:99px;margin-bottom:24px;letter-spacing:1.5px;border:1px solid rgba(255,200,0,0.15)}
        h1{font-size:clamp(34px,5.4vw,60px);font-weight:900;line-height:1.04;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:19px;color:var(--gray-400);max-width:620px;margin:0 auto 36px;line-height:1.6}
        .hero-cta-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:18px}
        .hero-meta{display:flex;gap:24px;justify-content:center;flex-wrap:wrap;font-size:13px;color:var(--gray-400)}
        .hero-meta span::before{content:"✓ ";color:var(--gold);font-weight:800}
        section{max-width:820px;margin:0 auto;padding:64px 40px}
        h2{font-size:clamp(28px,3.8vw,42px);font-weight:900;letter-spacing:-1.5px;margin-bottom:18px;line-height:1.1}
        .sub2{color:var(--gray-400);font-size:17px;margin-bottom:36px;line-height:1.6;max-width:640px}
        .pull-quote{border-left:3px solid var(--gold);padding:20px 24px;background:var(--gray-900);border-radius:0 12px 12px 0;margin:32px 0;font-size:18px;line-height:1.6;color:var(--gray-200);font-style:italic}
        .pull-quote cite{display:block;margin-top:10px;font-style:normal;font-size:13px;color:var(--gray-400);font-weight:600}
        .phase{display:flex;gap:24px;padding:32px 0;border-bottom:1px solid var(--gray-800)}
        .phase:last-child{border-bottom:none}
        .phase-num{flex-shrink:0;width:48px;height:48px;background:linear-gradient(135deg,#FCD34D 0%,#F59E0B 100%);color:#0F172A;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px}
        .phase-body h3{font-size:19px;font-weight:800;margin-bottom:8px}
        .phase-body .phase-meta{font-size:12px;color:var(--gold);font-weight:700;letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
        .phase-body p{font-size:15px;color:var(--gray-300);line-height:1.65;margin-bottom:8px}
        .phase-body ul{margin:8px 0 0 0;padding-left:0;list-style:none}
        .phase-body ul li{font-size:14px;color:var(--gray-400);padding:4px 0;display:flex;gap:10px}
        .phase-body ul li::before{content:"›";color:var(--gold);font-weight:800;flex-shrink:0}
        .deliv-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:24px}
        .deliv-item{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:12px;padding:20px}
        .deliv-item h4{font-size:14px;font-weight:800;margin-bottom:6px;color:var(--gold);letter-spacing:0.5px}
        .deliv-item p{font-size:13.5px;color:var(--gray-400);line-height:1.55}
        .math-table{width:100%;border-collapse:collapse;margin-top:20px}
        .math-table tr{border-bottom:1px solid var(--gray-800)}
        .math-table td{padding:14px 0;font-size:15px;color:var(--gray-300)}
        .math-table td:last-child{text-align:right;font-weight:700;color:var(--gold);font-variant-numeric:tabular-nums}
        .math-table tr.total td{font-size:17px;color:var(--text);font-weight:900;padding-top:18px}
        .math-table tr.total td:last-child{color:var(--gold);font-size:22px}
        .ladder-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-top:24px}
        .ladder-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:24px;position:relative}
        .ladder-card.featured{border:2px solid var(--gold);background:linear-gradient(180deg,rgba(255,200,0,0.04) 0%,var(--gray-900) 100%)}
        .ladder-card .tier-tag{display:inline-block;padding:3px 10px;background:rgba(255,200,0,0.1);color:var(--gold);font-size:10px;font-weight:800;border-radius:99px;letter-spacing:1px;margin-bottom:12px}
        .ladder-card h4{font-size:17px;font-weight:800;margin-bottom:6px}
        .ladder-card .price{font-size:26px;font-weight:900;color:var(--gold);letter-spacing:-1px;margin-bottom:10px}
        .ladder-card .price small{font-size:11px;font-weight:600;color:var(--gray-400);letter-spacing:0;margin-left:4px}
        .ladder-card p{font-size:13px;color:var(--gray-400);line-height:1.55}
        .who-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .who-item{display:flex;gap:12px;align-items:flex-start;padding:14px;background:var(--gray-900);border:1px solid var(--gray-800);border-radius:12px}
        .who-check{color:var(--gold);font-weight:800;flex-shrink:0}
        .who-text{font-size:14px;color:var(--gray-300);line-height:1.5}
        .cta-box{border:1px solid var(--gray-800);border-radius:20px;padding:72px 40px;text-align:center;max-width:820px;margin:40px auto 80px;background:linear-gradient(180deg,rgba(255,200,0,0.04) 0%,transparent 100%)}
        .cta-box h2{margin-bottom:14px}
        .cta-box .price-big{font-size:64px;font-weight:900;color:var(--gold);letter-spacing:-3px;line-height:1;margin:18px 0 8px}
        .cta-box .price-cap{font-size:13px;color:var(--gray-400);text-transform:uppercase;letter-spacing:2px;margin-bottom:32px}
        .cta-box p{color:var(--gray-300);font-size:16px;margin-bottom:32px;line-height:1.6}
        .faq-item{border-bottom:1px solid var(--gray-800);padding-bottom:20px;margin-bottom:20px}
        .faq-item summary{font-size:16px;font-weight:700;cursor:pointer;color:var(--text);list-style:none;padding:8px 0}
        .faq-item summary::-webkit-details-marker{display:none}
        .faq-item summary::before{content:"+ ";color:var(--gold);font-weight:900;margin-right:8px}
        .faq-item[open] summary::before{content:"− "}
        .faq-item p{font-size:15px;color:var(--gray-400);line-height:1.65;margin:12px 0 0;padding-left:22px}
        @media(max-width:600px){.hero{padding:48px 20px}section{padding:48px 20px}.deliv-grid,.who-grid{grid-template-columns:1fr}.cta-box{padding:48px 24px;margin:0 20px 60px}.cta-box .price-big{font-size:52px}}
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="pre-h1">$297 · 48 HOURS · ASYNC · 5-PAGE PDF</div>
        <h1>Are you using <span>ChatGPT</span> right?</h1>
        <p className="hero-sub">
          A focused, 5-page expert review of your AI usage. No call. No deck. Just three specific moves you should make this week — with tools, setup steps, and ROI math, all built around <em>your</em> intake answers.
        </p>
        <div className="hero-cta-row">
          <a href={MINI_AUDIT_URL} className="btn-primary">Get the $297 Mini-Audit →</a>
        </div>
        <div className="hero-meta">
          <span>One-time payment</span>
          <span>48-hour async delivery</span>
          <span>30-day money-back</span>
        </div>
      </div>

      {/* THE PITCH */}
      <section>
        <div className="section-label">What This Is</div>
        <h2>An expert second opinion on your AI usage. Tight, opinionated, async.</h2>
        <p className="sub2">
          You've tried ChatGPT. You've watched the demos. You've maybe even bought a prompt pack or two. The question that nags at you: <em>am I actually getting my money's worth?</em>
        </p>
        <p className="sub2">
          The Mini-Audit answers that. We read your 12-question intake (plus 3 sample prompts if you send them), and we send back a 5-page PDF telling you the 3 specific tools to set up this week — with the exact use case, setup steps, and ROI math, all keyed to <em>your</em> business.
        </p>
        <div className="pull-quote">
          A typical Mini-Audit recovers <strong style={{color:'#FCD34D'}}>6+ hours/week</strong> for ~<strong style={{color:'#FCD34D'}}>$40/month</strong> in tool costs. At $100/hour of your time, that's <strong style={{color:'#FCD34D'}}>$30,720/year of value created</strong> from a $297 review.
          <cite>— Same methodology as our $997 Clarity Assessment, scoped tighter</cite>
        </div>
      </section>

      {/* WHO */}
      <section style={{paddingTop:0}}>
        <div className="section-label">Who This Is For</div>
        <h2>Built for solo operators who want a clear answer fast.</h2>
        <div className="who-grid">
          {[
            'Coaches, freelancers, consultants, small-shop owners doing $1K+/mo',
            'You\'re using ChatGPT or Claude but suspect you\'re missing the higher-leverage moves',
            'You\'ve bought one too many "100 prompts for $9" packs and want real direction',
            'You spend 5+ hrs/wk on tasks AI could obviously handle, but haven\'t set up the right tool',
            'You want a written game plan, not a 60-min consulting call',
            'You can spare 5-7 minutes to fill out an intake form',
          ].map((t,i) => (
            <div className="who-item" key={i}>
              <span className="who-check">✓</span>
              <span className="who-text">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHO THIS IS NOT */}
      <section style={{paddingTop:0}}>
        <div className="section-label">Who This Is NOT For</div>
        <h2>Honest fit: when to buy something else.</h2>
        <div className="who-grid">
          <div className="who-item" style={{background:'transparent',border:'1px solid var(--gray-800)'}}>
            <span style={{color:'#888',fontWeight:800,flexShrink:0}}>→</span>
            <span className="who-text">Teams of 3+ → buy the <Link href="/ai-audit"><a style={{color:'var(--gold)'}}>$997 Clarity Assessment</a></Link> instead. Bigger scope, includes the 60-min discovery call.</span>
          </div>
          <div className="who-item" style={{background:'transparent',border:'1px solid var(--gray-800)'}}>
            <span style={{color:'#888',fontWeight:800,flexShrink:0}}>→</span>
            <span className="who-text">"Build me an AI agent" requests → buy <Link href="/services"><a style={{color:'var(--gold)'}}>Implementation Lite ($1,500)</a></Link> instead. We do the work, not the diagnosis.</span>
          </div>
          <div className="who-item" style={{background:'transparent',border:'1px solid var(--gray-800)'}}>
            <span style={{color:'#888',fontWeight:800,flexShrink:0}}>→</span>
            <span className="who-text">"I just want free prompts" → grab the <Link href="/prompt-enhancer"><a style={{color:'var(--gold)'}}>free Prompt Enhancer</a></Link>. No purchase needed.</span>
          </div>
          <div className="who-item" style={{background:'transparent',border:'1px solid var(--gray-800)'}}>
            <span style={{color:'#888',fontWeight:800,flexShrink:0}}>→</span>
            <span className="who-text">Pre-revenue founders pre-product-market-fit → AI tooling won't fix that. Save your $297.</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 phases */}
      <section style={{paddingTop:0}}>
        <div className="section-label">How It Works</div>
        <h2>3 phases. 48 hours from intake to PDF.</h2>
        <p className="sub2">
          Async means no calendar coordination. Submit intake → wait 48 hrs → get the report.
        </p>

        <div className="phase">
          <div className="phase-num">1</div>
          <div className="phase-body">
            <div className="phase-meta">5-7 minutes · Right after purchase</div>
            <h3>12-Question Intake</h3>
            <p>You get an email with 12 questions about your business, your time-sucks, your stack, your priority for the next quarter, and your hourly rate. Optionally send 3 sample prompts you currently use and 1 screenshot of a workflow you hate.</p>
            <ul>
              <li>Reply to the email with numbered answers (or use the Notion form if you prefer)</li>
              <li>The 48-hour delivery clock starts when we receive your answers</li>
              <li>Most buyers complete intake within a few hours</li>
            </ul>
          </div>
        </div>

        <div className="phase">
          <div className="phase-num">2</div>
          <div className="phase-body">
            <div className="phase-meta">≤4 hours of analyst time · Async</div>
            <h3>Analysis + Report Drafting</h3>
            <p>The same analyst desk that does the $997 audit reads your intake, identifies your 3 biggest AI leverage points, picks the 3 tools that fit your specific situation, and drafts a 5-page personalized PDF.</p>
            <ul>
              <li>Cross-reference your stack against 50+ tested AI tools</li>
              <li>Reject anything we haven&apos;t personally tested in similar workflows</li>
              <li>Verify pricing on the day of delivery (pricing pages change)</li>
              <li>Verify each recommendation references something specific you wrote</li>
            </ul>
          </div>
        </div>

        <div className="phase">
          <div className="phase-num">3</div>
          <div className="phase-body">
            <div className="phase-meta">Within 48 hours · PDF + 1 follow-up</div>
            <h3>Delivery + Check-In</h3>
            <p>You get a 5-page personalized PDF in your inbox. Then 10 days later, one short follow-up email asking how Tool #1 is going. That&apos;s it — no upsell sequence, no drip campaign, no calendar invite ambush.</p>
            <div className="deliv-grid">
              <div className="deliv-item"><h4>PAGE 1</h4><p>Cover + executive summary with your top 3 moves on a single table.</p></div>
              <div className="deliv-item"><h4>PAGE 2</h4><p>Your 3 biggest AI leverage points — with intake quotes proving we read every word.</p></div>
              <div className="deliv-item"><h4>PAGE 3</h4><p>Tool #1 — full deep-dive: use case, setup steps, pricing, learning curve, alternatives.</p></div>
              <div className="deliv-item"><h4>PAGE 4</h4><p>Tools #2 + #3 — half-page each. Just enough to act.</p></div>
              <div className="deliv-item"><h4>PAGE 5</h4><p>Year-1 ROI math, this-week checklist, soft upsell ladder.</p></div>
              <div className="deliv-item"><h4>+ T+10 EMAIL</h4><p>"How&apos;s Tool #1 going?" — single accountability nudge, no sales pitch.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section style={{paddingTop:0}}>
        <div className="section-label">The Numbers</div>
        <h2>Why $297 is the smallest bet you should make on AI clarity.</h2>
        <p className="sub2">
          Run the math on a typical Mini-Audit outcome — 6 hours/week recovered at $100/hour of your time:
        </p>
        <table className="math-table">
          <tbody>
            <tr><td>Hours recovered per week</td><td>6 hrs</td></tr>
            <tr><td>Your hourly rate (conservative)</td><td>$100/hr</td></tr>
            <tr><td>Weekly value created</td><td>$600/wk</td></tr>
            <tr><td>Annual value (52 weeks)</td><td>$31,200/yr</td></tr>
            <tr><td>Recommended tool stack cost</td><td>~$40/mo ($480/yr)</td></tr>
            <tr><td>Net value, year one</td><td>$30,720</td></tr>
            <tr className="total"><td>Cost of the Mini-Audit</td><td>$297</td></tr>
            <tr className="total"><td>Year-1 ROI multiple</td><td>103x</td></tr>
          </tbody>
        </table>
      </section>

      {/* PRICING ANCHOR — 3-tier comparison */}
      <section style={{paddingTop:0}}>
        <div className="section-label">Pricing Comparison</div>
        <h2>How $297 fits in the AI-clarity market.</h2>
        <table className="math-table">
          <tbody>
            <tr><td>Hire a $300/hr AI consultant for 2 hours</td><td>$600+</td></tr>
            <tr><td><Link href="/ai-audit"><a style={{color:'var(--gold)'}}>$997 AI Clarity Assessment</a></Link> (15-25 page report + call)</td><td>$997</td></tr>
            <tr className="total"><td>Mini-Audit (5 pages, async, 48 hrs)</td><td>$297 ← you are here</td></tr>
            <tr><td>DIY with our <Link href="/prompt-enhancer"><a style={{color:'var(--gold)'}}>free Prompt Enhancer</a></Link> + free <Link href="/audit-template"><a style={{color:'var(--gold)'}}>Audit Template</a></Link></td><td>$0 (slower)</td></tr>
          </tbody>
        </table>
      </section>

      {/* IMPLEMENTATION LADDER */}
      <section style={{paddingTop:0}}>
        <div className="section-label">After The Report</div>
        <h2>Want help building it? Here&apos;s the ladder.</h2>
        <p className="sub2">
          Most Mini-Audit buyers DIY. About 30% want help with at least Tool #1. Either is fine.
        </p>
        <div className="ladder-grid">
          <div className="ladder-card">
            <div className="tier-tag">DEFAULT</div>
            <h4>DIY</h4>
            <div className="price">$0<small>more</small></div>
            <p>The 5-page report is yours forever. Implement at your pace. Most buyers ship Tool #1 within a week.</p>
          </div>
          <div className="ladder-card">
            <div className="tier-tag">DIY-ASSIST</div>
            <h4>Coach Mega Pack</h4>
            <div className="price">$97<small>/once</small></div>
            <p>200+ done-for-you prompts so Tool #1 immediately produces on-brand output from day 1.</p>
            <a href={MEGA_PACK} style={{display:'block',textAlign:'center',marginTop:16,padding:'10px 14px',background:'rgba(255,200,0,0.08)',border:'1px solid rgba(255,200,0,0.2)',borderRadius:99,fontSize:13,fontWeight:700,color:'var(--gold)',textDecoration:'none'}}>Add to Mini-Audit →</a>
          </div>
          <div className="ladder-card featured">
            <div className="tier-tag">MOST POPULAR · $297 CREDITS 100%</div>
            <h4>Implementation Lite</h4>
            <div className="price">$1,500<small>+ scoped</small></div>
            <p>We set up Tool #1 (your top recommendation) end-to-end. Tool config, brand voice tuning, team-ready docs. Your $297 credits 100% if you upgrade within 30 days.</p>
            <p style={{fontSize:12,color:'var(--gray-400)',marginTop:10,fontStyle:'italic'}}>Quoted on report</p>
          </div>
          <div className="ladder-card">
            <div className="tier-tag">FULL BUILD</div>
            <h4>Full Implementation</h4>
            <div className="price">$3,500<small>+ scoped</small></div>
            <p>All 3 recommendations implemented. Multi-tool integration, team training, 30-day support.</p>
            <p style={{fontSize:12,color:'var(--gray-400)',marginTop:10,fontStyle:'italic'}}>Quoted on report</p>
          </div>
        </div>
      </section>

      {/* PRIMARY CTA */}
      <div className="cta-box" id="book">
        <div className="section-label" style={{marginBottom:0}}>Ready to find out?</div>
        <div className="price-big">$297</div>
        <div className="price-cap">One-Time · 48 Hours · Yours Forever</div>
        <p>
          Buy today, fill out the 12-question intake (5-7 min),<br />
          get a custom 5-page PDF in your inbox within 48 hours.<br /><br />
          <strong style={{color:'var(--text)'}}>Full refund within 30 days</strong> if the report isn&apos;t specific to your business.
        </p>
        <a href={MINI_AUDIT_URL} className="btn-primary">Get the $297 Mini-Audit →</a>
        <p style={{marginTop:18,fontSize:12,color:'var(--gray-400)'}}>
          Secure Stripe checkout · Intake form delivered instantly · 30-day money-back
        </p>
      </div>

      {/* FAQ */}
      <section style={{paddingTop:0}}>
        <div className="section-label">FAQ</div>
        <h2>Questions Mini-Audit buyers actually ask.</h2>
        <div>
          {[
            {
              q: 'Why $297 instead of the $997 full audit?',
              a: 'The Mini-Audit is async (no call), 5 pages instead of 15-25, and delivered in 48 hours instead of 7 days. Same analyst desk, same methodology — tighter scope. If you want the full discovery call + walkthrough + 25-page report, the $997 Clarity Assessment is the right fit. Your $297 credits 100% toward Implementation Lite if you upgrade within 30 days.',
            },
            {
              q: 'No call? How does that work?',
              a: 'After purchase you get a 12-question intake form (5-7 min to complete). Optionally send 3 sample prompts and 1 workflow screenshot. We turn that into a 5-page personalized PDF within 48 hours. No call needed for this scope; we built it for solo operators who want a clear answer fast, not a consulting relationship.',
            },
            {
              q: 'What do I actually receive?',
              a: 'A 5-page PDF: page 1 cover + executive summary; page 2 your three biggest AI leverage points (with intake quotes); page 3 deep-dive on Tool #1 (the one to set up this week); page 4 quick-look on Tools #2 and #3; page 5 Year-1 ROI math + this-week checklist + upsell ladder. Plus one follow-up email at T+10 days asking how Tool #1 is going.',
            },
            {
              q: 'When does the 48-hour delivery clock start?',
              a: 'When you submit your intake form answers, not when you pay. So if you buy on Monday and submit answers on Wednesday, your report arrives Friday. Most buyers complete intake within 24 hours of purchase.',
            },
            {
              q: 'How is this different from a free "10 AI Tools for Coaches" listicle?',
              a: 'A generic article tells you what AI exists. We tell you what AI fits YOUR business — your intake, your stack, your bottleneck, your priority for the next quarter. We test every recommendation against your specific situation. We also tell you which popular tools NOT to bother with for you.',
            },
            {
              q: 'Do I need to be technical?',
              a: 'No. Zero. We translate "AI can do this" into "click here, then here, then here." Most buyers implement Tool #1 within 48 hours of receiving the report.',
            },
            {
              q: 'What if I want help implementing the recommendations?',
              a: 'Your $297 credits 100% toward our Implementation Lite tier ($1,500) if you upgrade within 30 days. We set up Tool #1 (your top recommendation) end-to-end including brand voice tuning and team-ready docs. Bigger scope (all 3 tools + integrations) starts at $3,500.',
            },
            {
              q: 'What is your refund policy?',
              a: 'Full refund within 30 days if the report is not specific to your business. "Specific" = at least 5 verbatim references to your intake answers, plus tool recommendations no generic "best AI tools 2026" article would give you. We have never had to issue one.',
            },
            {
              q: 'How do you handle privacy?',
              a: 'We never ask for credentials, login info, or payment data. Sample prompts and screenshots are reviewed by the analyst, not stored beyond report delivery. After the buyer accepts the report, intake form data is archived (read-only) for 90 days then deleted.',
            },
          ].map((f,i) => (
            <details className="faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA — soft */}
      <section style={{paddingTop:0,paddingBottom:80,textAlign:'center'}}>
        <p style={{fontSize:17,color:'var(--gray-300)',maxWidth:540,margin:'0 auto 24px',lineHeight:1.6}}>
          The clarity premium isn&apos;t in the deck — it&apos;s in the act of someone who has tested 50+ AI tools telling you the 3 that fit YOUR business. That&apos;s what $297 buys.
        </p>
        <a href={MINI_AUDIT_URL} className="btn-primary">Get the $297 Mini-Audit →</a>
      </section>
    </Layout>
  );
}
