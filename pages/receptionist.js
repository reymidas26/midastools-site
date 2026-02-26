import Head from 'next/head';
import Link from 'next/link';

const CAL_LINK = 'https://cal.com/manduks/midastools';

export default function Receptionist() {
  return (
    <>
      <Head>
        <title>AI Phone Receptionist for Small Business — Midas Tools</title>
        <meta name="description" content="Deploy a 24/7 AI receptionist that answers calls, books appointments, and never misses a lead — for $499 setup + $299/mo. Dental, law, real estate. Setup in 48 hours." />
        <meta property="og:title" content="AI Phone Receptionist for Small Business — Midas Tools" />
        <meta property="og:description" content="Your business answers every call, 24/7. AI receptionist that books appointments and captures leads automatically. $499 setup + $299/mo." />
        <meta property="og:url" content="https://www.midastools.co/receptionist" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--gold:#F5C842;--black:#0A0A0A;--gray-900:#111;--gray-800:#1A1A1A;--gray-700:#2A2A2A;--gray-400:#888;--gray-200:#CCC;--white:#fff}
        html{scroll-behavior:smooth}
        body{font-family:Inter,sans-serif;background:var(--black);color:var(--white);line-height:1.6;-webkit-font-smoothing:antialiased}
        nav{display:flex;justify-content:space-between;align-items:center;padding:20px 40px;border-bottom:1px solid var(--gray-800);position:sticky;top:0;background:rgba(10,10,10,0.95);backdrop-filter:blur(10px);z-index:100}
        .nav-logo{font-size:20px;font-weight:800;color:var(--gold);text-decoration:none}
        .nav-links{display:flex;gap:24px;align-items:center}
        .nav-link{color:#aaa;text-decoration:none;font-size:14px;font-weight:500}
        .nav-link:hover{color:#fff}
        .nav-cta{background:var(--gold);color:var(--black);padding:10px 24px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none}
        .hero{max-width:820px;margin:0 auto;padding:100px 40px 80px;text-align:center}
        .badge{display:inline-block;background:rgba(245,200,66,0.12);border:1px solid rgba(245,200,66,0.3);color:var(--gold);padding:6px 16px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:32px}
        h1{font-size:clamp(34px,5.5vw,62px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:20px;color:var(--gray-400);max-width:600px;margin:0 auto 48px;line-height:1.6}
        .btn-primary{display:inline-block;background:var(--gold);color:var(--black);padding:18px 40px;border-radius:12px;font-size:18px;font-weight:800;text-decoration:none;transition:opacity 0.2s}
        .btn-primary:hover{opacity:0.9}
        .btn-secondary{display:inline-block;border:2px solid var(--gray-700);color:var(--white);padding:16px 32px;border-radius:12px;font-size:16px;font-weight:600;text-decoration:none;margin-left:16px;transition:border-color 0.2s}
        .btn-secondary:hover{border-color:var(--gray-400)}
        .hero-cta{margin-top:16px;font-size:14px;color:var(--gray-400)}
        section{padding:80px 40px;max-width:900px;margin:0 auto}
        .problem-box{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:16px;padding:48px;text-align:center;margin-bottom:80px}
        .problem-box h2{font-size:28px;font-weight:800;margin-bottom:16px}
        .problem-box p{color:var(--gray-400);font-size:17px;max-width:560px;margin:0 auto}
        .stat{font-size:48px;font-weight:900;color:var(--gold);display:block;margin-bottom:4px}
        .stat-label{color:var(--gray-400);font-size:14px}
        .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;text-align:center;margin-bottom:80px}
        h2{font-size:clamp(26px,4vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
        h2 span{color:var(--gold)}
        .section-sub{color:var(--gray-400);font-size:17px;margin-bottom:48px;max-width:560px}
        .features-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:80px}
        .feature-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:16px;padding:32px}
        .feature-icon{font-size:28px;margin-bottom:16px}
        .feature-card h3{font-size:18px;font-weight:700;margin-bottom:8px}
        .feature-card p{color:var(--gray-400);font-size:14px;line-height:1.6}
        .industries{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:80px}
        .industry-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:12px;padding:24px;text-align:center}
        .industry-icon{font-size:32px;margin-bottom:12px}
        .industry-card h3{font-size:16px;font-weight:700;margin-bottom:6px}
        .industry-card p{color:var(--gray-400);font-size:13px;line-height:1.5}
        .pricing-card{background:var(--gray-900);border:2px solid var(--gold);border-radius:20px;padding:48px;text-align:center;max-width:500px;margin:0 auto 80px}
        .price{font-size:52px;font-weight:900;color:var(--gold);margin:16px 0 4px}
        .price-detail{color:var(--gray-400);font-size:15px;margin-bottom:32px}
        .price-list{list-style:none;text-align:left;margin-bottom:32px}
        .price-list li{padding:8px 0;border-bottom:1px solid var(--gray-800);font-size:15px;display:flex;align-items:center;gap:10px}
        .price-list li:before{content:"✓";color:var(--gold);font-weight:700;flex-shrink:0}
        .how-it-works{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-bottom:80px}
        .step{text-align:center}
        .step-num{width:48px;height:48px;background:rgba(245,200,66,0.12);border:1px solid rgba(245,200,66,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:18px;font-weight:900;color:var(--gold)}
        .step h3{font-size:16px;font-weight:700;margin-bottom:8px}
        .step p{color:var(--gray-400);font-size:14px;line-height:1.5}
        .roi-box{background:linear-gradient(135deg,rgba(245,200,66,0.08),rgba(245,200,66,0.02));border:1px solid rgba(245,200,66,0.2);border-radius:20px;padding:48px;margin-bottom:80px}
        .roi-box h2{margin-bottom:8px}
        .roi-box p{color:var(--gray-400);margin-bottom:32px}
        .roi-math{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
        .roi-item{background:var(--gray-800);border-radius:12px;padding:24px}
        .roi-item .label{font-size:12px;color:var(--gray-400);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px}
        .roi-item .value{font-size:22px;font-weight:800}
        .roi-item .value.gold{color:var(--gold)}
        .cta-section{text-align:center;padding:80px 40px;background:var(--gray-900);border-top:1px solid var(--gray-800)}
        .cta-section h2{font-size:clamp(28px,4vw,44px);margin-bottom:16px}
        .cta-section p{color:var(--gray-400);font-size:17px;max-width:500px;margin:0 auto 40px}
        footer{text-align:center;padding:40px;border-top:1px solid var(--gray-800);color:var(--gray-400);font-size:14px}
        footer a{color:var(--gray-400);text-decoration:none}
        footer a:hover{color:var(--white)}
        @media(max-width:700px){
          .features-grid,.industries,.how-it-works,.roi-math{grid-template-columns:1fr}
          .stats-row{grid-template-columns:repeat(2,1fr)}
          nav{padding:16px 20px}
          section{padding:60px 20px}
          .pricing-card,.roi-box,.problem-box{padding:32px 24px}
        }
      `}</style>

      {/* Nav */}
      <nav>
        <Link href="/" className="nav-logo">⚡ Midas Tools</Link>
        <div className="nav-links">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/ai-audit" className="nav-link">AI Audit</Link>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta">Book a Call</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <div className="badge">📞 AI Receptionist — Setup in 48 Hours</div>
        <h1>Your Business <span>Answers Every Call.</span><br />Even at 2 AM.</h1>
        <p className="hero-sub">A 24/7 AI receptionist that answers calls, books appointments, qualifies leads, and escalates emergencies — for less than your monthly coffee budget.</p>
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Your AI Receptionist →</a>
        <p className="hero-cta">$499 setup · $299/month · No contracts · Cancel anytime</p>
      </div>

      {/* Stats */}
      <section>
        <div className="stats-row">
          <div>
            <span className="stat">30%</span>
            <div className="stat-label">of business calls go unanswered after hours</div>
          </div>
          <div>
            <span className="stat">85%</span>
            <div className="stat-label">of callers don't leave voicemails — they call a competitor</div>
          </div>
          <div>
            <span className="stat">250x</span>
            <div className="stat-label">average ROI for service businesses in month one</div>
          </div>
        </div>

        {/* Problem */}
        <div className="problem-box">
          <h2>You're losing customers to voicemail</h2>
          <p>A dental patient calls at 7 PM with a question about appointment availability. A real estate prospect calls Sunday morning. A legal client needs intake before Monday. They all hit voicemail. Most of them call your competitor next.</p>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2>What Your AI Receptionist Does</h2>
        <p className="section-sub">Handles the entire call lifecycle — from greeting to booking confirmation.</p>
        <div className="features-grid">
          {[
            { icon: '📞', title: 'Answers every call instantly', desc: 'Picks up in under 2 seconds, 24/7/365. No hold music. No "press 1 for...".' },
            { icon: '📅', title: 'Books appointments live', desc: 'Checks real-time availability and books directly into your Google Calendar or Cal.com during the call.' },
            { icon: '🎯', title: 'Qualifies new leads', desc: 'Collects name, contact info, reason for call, and insurance/budget info before you ever speak to them.' },
            { icon: '🚨', title: 'Escalates emergencies', desc: 'Detects genuine emergencies and routes to your cell immediately — dental pain, legal deadlines, urgent listings.' },
            { icon: '💬', title: 'Sends SMS confirmation', desc: 'Automatically sends a booking confirmation text after the call. Reduces no-shows by ~30%.' },
            { icon: '📋', title: 'Full call transcripts', desc: 'Every call logged with transcript and summary. Review missed opportunities and tune responses over time.' },
          ].map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section>
        <h2>Built for <span>Service Businesses</span></h2>
        <p className="section-sub">Any business where appointments = revenue and missed calls = lost money.</p>
        <div className="industries">
          {[
            { icon: '🦷', name: 'Dental Practices', desc: 'Patient intake, appointment booking, emergency triage. HIPAA-friendly configuration available.' },
            { icon: '⚖️', name: 'Law Firms', desc: 'New client intake, consultation scheduling, conflict-of-interest screening.' },
            { icon: '🏡', name: 'Real Estate', desc: 'Showing requests, buyer/seller qualification, listing inquiry capture.' },
            { icon: '💆', name: 'Med Spas & Clinics', desc: 'Service inquiries, appointment booking, waitlist management.' },
            { icon: '🔧', name: 'Home Services', desc: 'Service quotes, job scheduling, emergency dispatch routing.' },
            { icon: '🏋️', name: 'Fitness & Wellness', desc: 'Class booking, membership inquiries, trainer scheduling.' },
          ].map(i => (
            <div key={i.name} className="industry-card">
              <div className="industry-icon">{i.icon}</div>
              <h3>{i.name}</h3>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section>
        <div className="roi-box">
          <h2>The <span>ROI Math</span></h2>
          <p>For a dental practice seeing 20 new patients/month at $500 average value:</p>
          <div className="roi-math">
            <div className="roi-item">
              <div className="label">Missed calls (nights + weekends)</div>
              <div className="value">~30%</div>
            </div>
            <div className="roi-item">
              <div className="label">New patients recovered/month</div>
              <div className="value">6</div>
            </div>
            <div className="roi-item">
              <div className="label">Revenue recovered/month</div>
              <div className="value gold">$3,000</div>
            </div>
            <div className="roi-item">
              <div className="label">Cost of AI receptionist</div>
              <div className="value">$299/mo</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <h2 style={{textAlign:'center'}}>How It Works</h2>
        <p className="section-sub" style={{textAlign:'center',margin:'0 auto 48px'}}>We handle everything. You're live in 48 hours.</p>
        <div className="how-it-works">
          {[
            { n: '1', title: 'Book a 20-min call', desc: 'We learn your business: hours, services, booking flow, common questions, emergency protocol.' },
            { n: '2', title: 'We build & configure', desc: 'Custom voice, system prompt, calendar integration, escalation rules. Done in 24-48 hours.' },
            { n: '3', title: 'You go live', desc: 'Your AI receptionist gets a local phone number. Calls start being answered immediately. We monitor the first week.' },
          ].map(s => (
            <div key={s.n} className="step">
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section>
        <h2 style={{textAlign:'center'}}>Simple <span>Pricing</span></h2>
        <p className="section-sub" style={{textAlign:'center',margin:'0 auto 48px'}}>No hidden fees. No per-minute charges for normal volumes.</p>
        <div className="pricing-card">
          <div className="badge">Most Popular</div>
          <div className="price">$299<span style={{fontSize:20,fontWeight:600}}>/mo</span></div>
          <div className="price-detail">+ $499 one-time setup fee</div>
          <ul className="price-list">
            {[
              '24/7 AI phone receptionist',
              'Local phone number included',
              'Live calendar booking (Google / Cal.com)',
              'Lead qualification & capture',
              'Emergency escalation routing',
              'SMS confirmation after every booking',
              'Full call transcripts & recordings',
              'Custom voice & persona',
              'Onboarding call + 1 week of tuning',
              'Email support',
            ].map(item => <li key={item}>{item}</li>)}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Book a Setup Call →
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>Up to 300 min/month included. Overages billed at $0.05/min.</p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2>Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {[
            { q: 'Will callers know they\'re talking to an AI?', a: 'Only if they directly ask. The AI will honestly acknowledge it\'s an AI assistant for your practice. It won\'t pretend to be a human employee. Most callers don\'t ask and don\'t care — they just want their question answered and appointment booked.' },
            { q: 'What happens if it can\'t answer a question?', a: 'It takes a message and flags it for you. For anything critical, it can escalate to your cell phone in real-time. You define the escalation criteria during setup.' },
            { q: 'Can I use my existing phone number?', a: 'Yes — we can forward your existing number to the AI, or set up a new local number as your main line. Both options work.' },
            { q: 'What calendar systems does it work with?', a: 'Google Calendar, Cal.com, and Calendly natively. Other systems available via custom integration (usually +$200 setup).' },
            { q: 'Is it HIPAA compliant?', a: 'We can configure it to be HIPAA-friendly for dental and medical practices. Includes BAA if required. Contact us for details.' },
            { q: 'What\'s the commitment?', a: 'Month-to-month. Cancel anytime with 30 days notice. Setup fee is non-refundable after the AI is deployed.' },
          ].map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div style={{fontSize:17,fontWeight:700,marginBottom:8}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.6}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="cta-section">
        <h2>Stop Losing Customers to Voicemail</h2>
        <p>Book a 20-minute call. We'll scope your setup and have you live within 48 hours.</p>
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Setup Call →</a>
        <p style={{marginTop:16,fontSize:14,color:'var(--gray-400)'}}>$499 setup · $299/month · No contracts</p>
      </div>

      <footer>
        <p>© 2026 Midas Tools · <Link href="/" style={{color:'var(--gray-400)'}}>Home</Link> · <Link href="/services" style={{color:'var(--gray-400)'}}>All Services</Link> · <a href="mailto:rmidas26@gmail.com">Contact</a></p>
      </footer>
    </>
  );
}
