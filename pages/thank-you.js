import Head from 'next/head';

export default function ThankYou() {
  return (
    <>
      <Head><title>Thank You — Midas Tools</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" /></Head>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Inter, sans-serif; background: #0A0A0A; color: #fff; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px; -webkit-font-smoothing: antialiased; }
        .card { max-width: 560px; width: 100%; text-align: center; }
        .icon { font-size: 64px; margin-bottom: 24px; }
        h1 { font-size: 36px; font-weight: 900; letter-spacing: -1px; margin-bottom: 12px; }
        .sub { font-size: 18px; color: #888; margin-bottom: 40px; }
        .download-box { background: #111; border: 1px solid #222; border-radius: 16px; padding: 32px; margin-bottom: 32px; }
        .download-box h2 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .download-box p { font-size: 14px; color: #888; margin-bottom: 24px; }
        .btn { display: inline-block; background: #F5C842; color: #000; padding: 16px 36px; border-radius: 10px; font-size: 16px; font-weight: 800; text-decoration: none; }
        .checklist { text-align: left; background: #111; border: 1px solid #222; border-radius: 16px; padding: 28px; margin-bottom: 32px; }
        .checklist h3 { font-size: 15px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
        .checklist ul { list-style: none; }
        .checklist li { font-size: 15px; padding: 6px 0; color: #ccc; }
        .checklist li::before { content: "✓ "; color: #F5C842; font-weight: 700; }
        .note { font-size: 13px; color: #555; }
        .note a { color: #888; }
      `}</style>
      <div className="card">
        <div className="icon">👑</div>
        <h1>You're in.</h1>
        <p className="sub">Your OpenClaw Entrepreneur Starter Kit is ready. A download link is also on its way to your email.</p>
        <div className="download-box">
          <h2>Download Your Kit</h2>
          <p>Click below to download all files (ZIP, ~16KB)</p>
          <a href="/openclaw-starter-kit.zip" className="btn" download>⬇ Download Starter Kit</a>
        </div>
        <div className="checklist">
          <h3>What's inside</h3>
          <ul>
            {['5 SOUL.md identity templates', 'Heartbeat workflow system', 'Daily review template', '5 product launch prompts', 'Revenue ops playbook', 'Complete setup guide'].map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <p className="note">Questions? <a href="mailto:rmidas26@gmail.com">rmidas26@gmail.com</a> — we reply within 24h.</p>
      </div>
    </>
  );
}
