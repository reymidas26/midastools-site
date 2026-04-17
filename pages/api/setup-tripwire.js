// One-time setup: creates $9 tripwire product + price + payment link
// GET /api/setup-tripwire?key=mt-dfy-setup-2026

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const TRIPWIRE = {
  name: 'Best 20 AI Prompts — Starter Pack',
  description: '20 hand-picked AI prompts from our Mega Pack — the same ones our best customers use. Cold email, landing page copy, content ideas, image generation, and more. Instant download.',
  price: 900, // $9
};

async function findExistingProduct(name) {
  const products = await stripe.products.search({ query: `name~"${name}"` });
  return products.data.find((p) => p.name === name && p.active) || null;
}

async function getExistingPrice(productId) {
  const prices = await stripe.prices.list({ product: productId, active: true, limit: 1 });
  return prices.data[0] || null;
}

async function getExistingPaymentLink(priceId) {
  const links = await stripe.paymentLinks.list({ active: true, limit: 100 });
  return links.data.find(
    (link) => link.line_items?.data?.[0]?.price?.id === priceId
  ) || null;
}

export default async function handler(req, res) {
  if (req.query.key !== 'mt-dfy-setup-2026') {
    return res.status(401).json({ error: 'unauthorized' });
  }

  try {
    // 1. Product
    let product = await findExistingProduct(TRIPWIRE.name);
    const existed = !!product;
    if (!product) {
      product = await stripe.products.create({ name: TRIPWIRE.name, description: TRIPWIRE.description });
    }

    // 2. Price
    let priceObj = existed ? await getExistingPrice(product.id) : null;
    if (!priceObj) {
      priceObj = await stripe.prices.create({
        product: product.id,
        unit_amount: TRIPWIRE.price,
        currency: 'usd',
      });
    }

    // 3. Payment link — with upsell to Mega Pack at checkout
    let paymentLink = existed ? await getExistingPaymentLink(priceObj.id) : null;
    if (!paymentLink) {
      paymentLink = await stripe.paymentLinks.create({
        line_items: [{ price: priceObj.id, quantity: 1 }],
        after_completion: {
          type: 'redirect',
          redirect: { url: 'https://www.midastools.co/thank-you?tier=tripwire' },
        },
      });
    }

    return res.status(200).json({
      ok: true,
      product: { id: product.id, name: product.name, existed },
      price: { id: priceObj.id, amount: priceObj.unit_amount },
      paymentLink: { id: paymentLink.id, url: paymentLink.url },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
