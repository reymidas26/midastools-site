import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      subject: `🔥 New lead: ${email}`,
      text: `New email subscriber from midastools.co\n\nEmail: ${email}\nTime: ${new Date().toISOString()}\n\nFollow up: https://mail.google.com`,
      html: `
        <h2>🔥 New lead from midastools.co</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Mexico_City' })} CST</p>
        <p><strong>Source:</strong> Homepage email capture (SOUL.md template)</p>
        <hr/>
        <p>This person wants the free SOUL.md template. Reply and send them: <a href="https://midastools.co/openclaw-starter-kit.zip">the kit</a> or a personal note.</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Failed to send' });
  }
}
