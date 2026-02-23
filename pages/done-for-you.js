import Head from 'next/head';
import Link from 'next/link';

const DFY_URL = 'https://buy.stripe.com/00w7sK3FZ8qZ7OI7RUcMM01';

export default function DoneForYou() {
  return (
    <>
      <Head>
        <title>Done-For-You OpenClaw Setup — Midas Tools</title>
        <meta name="description" content="We configure your entire OpenClaw agent for you — SOUL.md, heartbeat system, API connections, and first product launch. $299 one-time." />
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
        h1{font-size:clamp(32px,5vw,60px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:19px;color:var(--gray-400);max-width:540px;margin:0 auto 48px;line-height:1.6}
        .btn{display:inline-block;background:var(--gold);color:var(--black);padding:18px 40px;border-radius:12px;font-size:18px;font-weight:800;text-decoration:none;letter-spacing:-0.3px}
        .price-note{font-size:14px;color:var(--gray-400);margin-top:12px}
        section{max-width:760px;margin:0 auto;padding:80px 40px}
        .label{font-size:12px;font-weight:700;color:var(--gold);letter-spacing:2px;text-transform:uppercase;margin-bottom:16px}
        h2{font-size:clamp(26px,3.5vw,40px);font-weight:800;letter-spacing:-1px;margin-bottom:40px}
        .deliverable{display:flex;gap:20px;padding:28px 0;border-bottom:1px solid var(--gray-800)}
        .deliverable:last-child{border-bottom:none}
        .d-num{flex-shrink:0;width:36px;height:36px;background:rgba(245,200,66,0.12);border:1px solid rgba(245,200,66,0.3);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--gold);font-size:15px}
        .d-body h3{font-size:17px;font-weight:700;margin-bottom:6px}
        .d-body p{font-size:15px;color:var(--gray-400);line-height:1.5}
        .process{display:flex;flex-direction:column;gap:0}
        .process-step{display:flex;gap:20px;padding:24px 0;border-bottom:1px solid var(--gray-800)}
        .process-step:last-child{border-bottom:none}
        .p-icon{font-size:24px;flex-shrink:0;width:40px;text-align:center}
        .p-body h3{font-size:16px;font-weight:700;margin-bottom:4px}
        .p-body p{font-size:14px;color:var(--gray-400)}
        .cta-box{background:linear-gradient(135deg,rgba(245,200,66,0.08) 0%,rgba(10,10,10,0) 60%);border:1px solid rgba(245,200,66,0.2);border-radius:24px;padding:80px 40px;text-align:center;max-width:760px;margin:0 auto 80px}
        .cta-box h2{margin-bottom:16px}
        .cta-box p{color:var(--gray-400);font-size:18px;margin-bottom:40px}
        footer{border-top:1px solid var(--gray-800);padding:32px 40px;text-align:center;color:var(--gray-400);font-size:13px}
        footer a{color:var(--gray-400)}
        @media(max-width:600px){nav{padding:16px 20px}.hero,.section{padding:60px 20px}}
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">👑 Midas Tools</Link>
        <a href={DFY_URL} style={{background:'var(--gold)',color:'#000',padding:'10px 24px',borderRadius:8,fontWeight:700,fontSize:14,textDecoration:'none'}}>Get Started — $299</a>
      </nav>

      <div className="hero">
        <div className="badge">🛠 Done-For-You Service</div>
        <h1>Your AI entrepreneur,<br /><span>built and launched</span><br />while you sleep.</h1>
        <p className="hero-sub">Pay once. We configure your entire OpenClaw agent — identity, heartbeat system, API connections, and first product launch. You wake up with a deployed revenue machine.</p>
        <a href={DFY_URL} className="btn">Get Started — $299 →</a>
        <p className="price-note">One-time · Delivered within 48 hours · 30-day guarantee</p>
      </div>

      <section>
        <div className="label">What You Get</div>
        <h2>Everything configured, nothing left to figure out</h2>
        <div>
          {[
            { n: '1', h: 'Custom SOUL.md', p: 'Your agent\'s identity file — written specifically for your goals, market, and business type. Not a template. Yours.' },
            { n: '2', h: 'Heartbeat System', p: 'HEARTBEAT.md configured to monitor your revenue, inbox, and metrics. Proactive alerts set up for what matters.' },
            { n: '3', h: 'Full API Integration', p: 'Stripe, GitHub, Vercel, and Gmail all connected and tested. Your agent can deploy code, collect payments, and handle support from day one.' },
            { n: '4', h: 'First Product Launch', p: 'We give your agent its first overnight mission and stay live through the morning to unblock anything it flags. You wake up with a product live.' },
            { n: '5', h: 'Daily Review Setup', p: 'Your agent\'s morning report configured and running. Revenue, blockers, and priorities — delivered to you every morning in 5 minutes.' },
            { n: '6', h: '2 Weeks of Support', p: 'Access to us via email for 14 days after delivery. Questions, tweaks, course corrections — we\'ve got you.' },
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
        <h2>Three steps. 48 hours. Done.</h2>
        <div className="process">
          {[
            { icon: '💳', h: 'You pay and fill out a short form', p: 'Tell us your revenue goal, niche, and what tools you already have (Stripe, GitHub, etc.).' },
            { icon: '🤖', h: 'We build your agent overnight', p: 'We configure everything: SOUL.md, HEARTBEAT.md, API connections, and your first product launch prompt.' },
            { icon: '🚀', h: 'Your agent is live', p: 'Within 48 hours, you receive your configured workspace and a live agent ready to build and sell.' },
          ].map(s => (
            <div className="process-step" key={s.h}>
              <div className="p-icon">{s.icon}</div>
              <div className="p-body"><h3>{s.h}</h3><p>{s.p}</p></div>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-box" id="buy">
        <div className="label" style={{marginBottom:16}}>Ready to start?</div>
        <h2>Your AI entrepreneur,<br />configured in 48 hours</h2>
        <p>$299 one-time. Includes full setup, first product launch, and 2 weeks of support.</p>
        <a href={DFY_URL} className="btn">Get Started — $299 →</a>
        <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>Secure checkout via Stripe · 30-day money-back guarantee</p>
      </div>

      <footer>
        <p>© 2026 Midas Tools · <Link href="/" style={{color:'var(--gray-400)'}}>Home</Link> · <a href="mailto:rmidas26@gmail.com">rmidas26@gmail.com</a></p>
      </footer>
    </>
  );
}
