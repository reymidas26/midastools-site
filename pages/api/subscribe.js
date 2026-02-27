import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source, business } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  // Determine lead type and follow-up action
  const isReceptionist = source === 'receptionist-free-script';
  const subject = isReceptionist
    ? `📞 New receptionist lead: ${email}${business ? ' — ' + business : ''}`
    : `🔥 New lead: ${email}`;

  const followUpNote = isReceptionist
    ? `<p><strong>Lead type:</strong> AI Receptionist — Free Script Request</p>
       <p><strong>Business type:</strong> ${business || 'Not specified'}</p>
       <p><strong>Action needed:</strong> Send them a custom AI receptionist script for their business type within 24 hours. Reply to their email with a personalized script showing what their AI receptionist would say.</p>
       <p><a href="https://www.midastools.co/receptionist">View landing page</a> | <a href="https://cal.com/manduks/midastools">Book setup call</a></p>`
    : `<p><strong>Source:</strong> Homepage email capture</p>
       <p>This person wants the free AI starter kit. Reply and send them: <a href="https://midastools.co/openclaw-starter-kit.zip">the kit</a> or a personal note.</p>`;

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
      subject,
      text: `New lead from midastools.co\n\nEmail: ${email}\nSource: ${source || 'homepage'}\nBusiness: ${business || 'n/a'}\nTime: ${new Date().toISOString()}`,
      html: `
        <h2>${isReceptionist ? '📞' : '🔥'} New lead from midastools.co</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Mexico_City' })} Mexico City</p>
        ${followUpNote}
        <hr/>
        <p style="color:#888;font-size:12px">Sent by MidasTools lead capture</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Failed to send' });
  }
}
