import Head from 'next/head';
import Link from 'next/link';

const AUDIT_URL = 'https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03';

export default function AIAudit() {
  return (
    <>
      <Head>
        <title>AI Business Audit & Setup — Midas Tools</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="description" content="We audit your business, find the 3 highest-ROI processes to automate, and deploy your first AI agent — in 48 hours. $997 one-time." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--gold:#F5C842;--black:#0A0A0A;--gray-900:#111;--gray-800:#1A1A1A;--gray-400:#888;--white:#fff}
        html{scroll-behavior:smooth}
        body{font-family:Inter,sans-serif;background:var(--black);color:var(--white);line-height:1.6;-webkit-font-smoothing:antialiased}
        nav{display:flex;justify-content:space-between;align-items:center;padding:20px 40px;border-bottom:1px solid var(--gray-800);position:sticky;top:0;background:rgba(10,10,10,0.95);backdrop-filter:blur(10px);z-index:100}
        .nav-logo{font-size:20px;font-weight:800;color:var(--gold);text-decoration:none}
        .hero{max-width:760px;margin:0 auto;padding:100px 40px 80px;text-align:center}
        .badge{display:inline-block;background:rgba(245,200,66,0.12);border:1px solid rgba(245,200,66,0.3);color:var(--gold);padding:6px 16px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:32px}
        h1{font-size:clamp(32px,5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:19px;color:var(--gray-400);max-width:560px;margin:0 auto 48px;line-height:1.6}
        .btn{display:inline-block;background:var(--gold);color:var(--black);padding:18px 40px;border-radius:12px;font-size:18px;font-weight:800;text-decoration:none;letter-spacing:-0.3px}
        .price-note{font-size:14px;color:var(--gray-400);margin-top:12px}
        section{max-width:760px;margin:0 auto;padding:80px 40px}
        .label{font-size:12px;font-weight:700;color:var(--gold);letter-spacing:2px;text-transform:uppercase;margin-bottom:16px}
        h2{font-size:clamp(26px,3.5vw,40px);font-weight:800;letter-spacing:-1px;margin-bottom:40px}
        .card-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
        @media(max-width:600px){.card-grid{grid-template-columns:1fr}}
        .card{background:var(--gray-800);border:1px solid #222;border-radius:16px;padding:28px}
        .card-icon{font-size:28px;margin-bottom:12px}
        .card h3{font-size:16px;font-weight:700;margin-bottom:8px}
        .card p{font-size:14px;color:var(--gray-400);line-height:1.5}
        .deliverable{display:flex;gap:20px;padding:28px 0;border-bottom:1px solid var(--gray-800)}
        .deliverable:last-child{border-bottom:none}
        .d-num{flex-shrink:0;width:36px;height:36px;background:rgba(245,200,66,0.12);border:1px solid rgba(245,200,66,0.3);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--gold);font-size:15px}
        .d-body h3{font-size:17px;font-weight:700;margin-bottom:6px}
        .d-body p{font-size:15px;color:var(--gray-400);line-height:1.5}
        .process-step{display:flex;gap:20px;padding:24px 0;border-bottom:1px solid var(--gray-800)}
        .process-step:last-child{border-bottom:none}
        .p-icon{font-size:24px;flex-shrink:0;width:40px;text-align:center}
        .p-body h3{font-size:16px;font-weight:700;margin-bottom:4px}
        .p-body p{font-size:14px;color:var(--gray-400)}
        .who-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        @media(max-width:600px){.who-grid{grid-template-columns:1fr}}
        .who-item{display:flex;gap:12px;align-items:flex-start;padding:16px;background:var(--gray-800);border-radius:12px}
        .who-check{color:var(--gold);font-weight:800;flex-shrink:0}
        .who-text{font-size:14px;color:var(--gray-400)}
        .cta-box{background:linear-gradient(135deg,rgba(245,200,66,0.08) 0%,rgba(10,10,10,0) 60%);border:1px solid rgba(245,200,66,0.2);border-radius:24px;padding:80px 40px;text-align:center;max-width:760px;margin:0 auto 80px}
        .cta-box h2{margin-bottom:16px}
        .cta-box p{color:var(--gray-400);font-size:18px;margin-bottom:40px}
        .price-big{font-size:64px;font-weight:900;color:var(--gold);letter-spacing:-3px;line-height:1}
        footer{border-top:1px solid var(--gray-800);padding:32px 40px;text-align:center;color:var(--gray-400);font-size:13px}
        footer a{color:var(--gray-400)}
        @media(max-width:600px){nav{padding:16px 20px}.hero{padding:60px 20px 60px}section{padding:60px 20px}}
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">👑 Midas Tools</Link>
        <a href={AUDIT_URL} style={{background:'var(--gold)',color:'#000',padding:'10px 24px',borderRadius:8,fontWeight:700,fontSize:14,textDecoration:'none'}}>Book Your Audit — $997</a>
      </nav>

      <div className="hero">
        <div className="badge">🔍 Done-For-You AI Implementation</div>
        <h1>We find where AI saves you<br /><span>$10,000+/year</span> — then<br />build it for you.</h1>
        <p className="hero-sub">A 48-hour audit of your business + a live AI agent deployed and running before we leave. No fluff. No theory. A working system that cuts costs or grows revenue.</p>
        <a href={AUDIT_URL} className="btn">Book Your AI Audit — $997 →</a>
        <p className="price-note">One-time · Delivered within 48 hours · 100% money-back if we don't find $5,000+ in savings</p>
      </div>

      <section>
        <div className="label">Who This Is For</div>
        <h2>You know AI is changing everything.<br />You don't know where to start.</h2>
        <div className="who-grid">
          {[
            'You have a small team (1–10 people) spending time on repetitive tasks',
            'You\'re paying $500+/month for tools, VAs, or contractors that AI could replace',
            'You\'ve tried ChatGPT but never deployed anything that actually runs on its own',
            'You want a working AI system, not another framework or course',
            'You have a clear bottleneck: lead gen, content, support, ops — but no time to build',
            'You want results in days, not months',
          ].map((t,i) => (
            <div className="who-item" key={i}>
              <span className="who-check">✓</span>
              <span className="who-text">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="label">What You Get</div>
        <h2>An audit AND a working system.<br />Not one or the other.</h2>
        <div>
          {[
            { n: '1', h: 'Business Process Audit', p: 'We review your workflows, tools, and team tasks. We identify the 3 highest-ROI processes to automate with AI — ranked by time savings and revenue impact.' },
            { n: '2', h: 'Custom AI Agent Built & Deployed', p: 'We build your first AI agent live — configured for your actual business, connected to your real tools (email, CRM, Stripe, Notion, Slack — whatever you use).' },
            { n: '3', h: 'Automation Playbook', p: 'A written document: what the agent does, how to adjust it, what to automate next. You own it forever. No black box.' },
            { n: '4', h: '30-Day Follow-Up Support', p: 'Email access to us for 30 days after delivery. If something breaks, we fix it. If you want to expand the agent, we help you plan it.' },
            { n: '5', h: 'ROI Projection', p: 'We calculate the expected time and cost savings of the system we built. If we can\'t find $5,000+/year in value, you get a full refund.' },
          ].map(d => (
            <div className="deliverable" key={d.n}>
              <div className="d-num">{d.n}</div>
              <div className="d-body"><h3>{d.h}</h3><p>{d.p}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="label">How It Works</div>
        <h2>From payment to live agent in 48 hours.</h2>
        {[
          { icon: '📋', h: 'Day 0 — You book and fill out the intake form', p: '15 minutes. Tell us your business, your biggest time-wasters, and what tools you use. We read it before we start.' },
          { icon: '🔍', h: 'Day 1 — We audit and plan', p: 'We map your workflows, identify the automation targets, and build the plan. You approve before we build anything.' },
          { icon: '🤖', h: 'Day 2 — We build and deploy', p: 'Live build session. Your AI agent gets configured, connected, and tested against your actual data. You see it run.' },
          { icon: '🚀', h: 'Day 2 night — Handoff', p: 'You receive the deployed system + Automation Playbook. We stay on email for 30 days. You\'re done.' },
        ].map(s => (
          <div className="process-step" key={s.h}>
            <div className="p-icon">{s.icon}</div>
            <div className="p-body"><h3>{s.h}</h3><p className="p-body p" style={{fontSize:14,color:'var(--gray-400)'}}>{s.p}</p></div>
          </div>
        ))}
      </section>

      <div className="cta-box" id="book">
        <div className="label" style={{marginBottom:24}}>Ready to find your savings?</div>
        <div className="price-big">$997</div>
        <p style={{marginTop:16,marginBottom:40,fontSize:18,color:'var(--gray-400)'}}>One-time. 48 hours. A working AI agent deployed in your business.<br />Full refund if we don't find $5,000+/year in savings.</p>
        <a href={AUDIT_URL} className="btn">Book Your AI Audit →</a>
        <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>Secure checkout via Stripe · After payment, you'll receive an intake form via email within 1 hour · 30-day money-back guarantee · Slots limited</p>
      </div>

      <section style={{paddingTop:0}}>
        <div className="label">FAQ</div>
        <h2>Common questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {[
            { q: 'Do I need to be technical?', a: 'No. We handle all the setup and configuration. You tell us your business problems — we build the solution. You just need to show us your current tools and workflows.' },
            { q: 'How do you access my systems?', a: 'Only with your explicit permission, during a live session. We never store credentials. If you prefer, we can guide you step-by-step and you do the connecting yourself.' },
            { q: 'What if the AI agent stops working after you leave?', a: '30-day email support is included. If anything breaks, email us and we fix it. We also document everything in your Automation Playbook so you can maintain it yourself.' },
            { q: 'What kinds of businesses do you work with?', a: 'Service businesses, agencies, SaaS founders, solo operators with 1–10 people. Ideal fit: you have repeatable processes but no engineering team to automate them.' },
            { q: 'What if you can\'t find $5,000 in savings?', a: 'Full refund. No questions. We only take the engagement if we genuinely see the savings opportunity upfront.' },
          ].map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div style={{fontSize:17,fontWeight:700,marginBottom:8}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.6}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Midas Tools · <Link href="/" style={{color:'var(--gray-400)'}}>Home</Link> · <a href="mailto:rmidas26@gmail.com">rmidas26@gmail.com</a></p>
      </footer>
    </>
  );
}
