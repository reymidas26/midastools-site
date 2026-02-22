import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendDownloadEmail(customerEmail, customerName) {
  const downloadUrl = 'https://www.midastools.co/openclaw-starter-kit.zip';

  await transporter.sendMail({
    from: `"Midas Tools" <${process.env.GMAIL_ADDRESS}>`,
    to: customerEmail,
    subject: '👑 Your OpenClaw Starter Kit is ready',
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; background: #0A0A0A; color: #fff; padding: 40px; border-radius: 16px;">
        <h1 style="font-size: 28px; font-weight: 900; color: #F5C842; margin-bottom: 8px;">You're in. 👑</h1>
        <p style="color: #888; font-size: 16px; margin-bottom: 32px;">Thanks${customerName ? `, ${customerName}` : ''} — your OpenClaw Entrepreneur Starter Kit is ready to download.</p>
        
        <a href="${downloadUrl}" style="display: inline-block; background: #F5C842; color: #000; padding: 16px 32px; border-radius: 10px; font-weight: 800; font-size: 16px; text-decoration: none; margin-bottom: 32px;">
          ⬇ Download Your Kit
        </a>

        <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <p style="color: #888; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">What's inside:</p>
          <ul style="color: #ccc; font-size: 15px; padding-left: 20px; line-height: 1.8;">
            <li>5 SOUL.md identity templates</li>
            <li>Heartbeat workflow system</li>
            <li>Daily review template</li>
            <li>5 product launch prompts</li>
            <li>Revenue ops playbook</li>
            <li>Complete setup guide</li>
          </ul>
        </div>

        <p style="color: #555; font-size: 13px;">
          Questions? Just reply to this email — we respond within 24 hours.<br/>
          30-day money-back guarantee, no questions asked.
        </p>
      </div>
    `,
  });
}

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const sig = req.headers['stripe-signature'];
  const chunks = [];

  await new Promise((resolve, reject) => {
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', resolve);
    req.on('error', reject);
  });

  const rawBody = Buffer.concat(chunks);
  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name;

    if (email) {
      try {
        await sendDownloadEmail(email, name);
        console.log(`Download email sent to ${email}`);
      } catch (err) {
        console.error('Failed to send email:', err);
      }
    }
  }

  res.status(200).json({ received: true });
}
