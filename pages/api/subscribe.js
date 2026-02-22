import fs from 'fs';
import path from 'path';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.csv');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, name } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const timestamp = new Date().toISOString();
  const line = `${timestamp},"${name || ''}","${email}"\n`;

  // Init file with header if needed
  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    fs.writeFileSync(SUBSCRIBERS_FILE, 'timestamp,name,email\n');
  }

  // Check for duplicate
  const existing = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8');
  if (existing.includes(email)) {
    return res.status(200).json({ success: true, message: 'already subscribed' });
  }

  fs.appendFileSync(SUBSCRIBERS_FILE, line);
  console.log(`New subscriber: ${email}`);

  return res.status(200).json({ success: true });
}
