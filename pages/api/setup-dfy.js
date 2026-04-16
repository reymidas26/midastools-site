// One-time setup: creates 3 DFY Stripe products + prices + payment links
// GET /api/setup-dfy?key=mt-dfy-setup-2026

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const DFY_PRODUCTS = [
  {
    name: 'AI Content Month — Done For You',
    description: '30 days of ready-to-post social media content. We create it, you publish it.',
    price: 19900, // $199
  },
  {
    name: 'AI Brand Starter Pack — Done For You',
    description: 'Complete brand package: voice guide, 50 social posts, email templates, ad copy.',
    price: 29900, // $299
  },
  {
    name: 'AI Listing Optimizer — Done For You',
    description: 'We rewrite up to 10 of your product/property listings with AI-optimized copy.',
    price: 14900, // $149
  },
];

async function findExistingProduct(name) {
  const products = await stripe.products.search({
    query: `name~"${name}"`,
  });
  return products.data.find((p) => p.name === name && p.active) || null;
}

async function getExistingPrice(productId) {
  const prices = await stripe.prices.list({
    product: productId,
    active: true,
    limit: 1,
  });
  return prices.data[0] || null;
}

async function getExistingPaymentLink(priceId) {
  const links = await stripe.paymentLinks.list({ active: true, limit: 100 });
  return links.data.find(
    (link) => link.line_items?.data?.[0]?.price?.id === priceId
  ) || null;
}

async function setupProduct({ name, description, price }) {
  // 1. Product — reuse if exists
  let product = await findExistingProduct(name);
  const existed = !!product;
  if (!product) {
    product = await stripe.products.create({ name, description });
  }

  // 2. Price — reuse if exists
  let priceObj = existed ? await getExistingPrice(product.id) : null;
  if (!priceObj) {
    priceObj = await stripe.prices.create({
      product: product.id,
      unit_amount: price,
      currency: 'usd',
    });
  }

  // 3. Payment link — always create (no reliable way to search by price)
  let paymentLink;
  if (existed) {
    // Try to find existing link for this price
    paymentLink = await getExistingPaymentLink(priceObj.id);
  }
  if (!paymentLink) {
    paymentLink = await stripe.paymentLinks.create({
      line_items: [{ price: priceObj.id, quantity: 1 }],
      after_completion: {
        type: 'redirect',
        redirect: { url: 'https://www.midastools.co/thank-you' },
      },
    });
  }

  return {
    name,
    existed,
    productId: product.id,
    priceId: priceObj.id,
    paymentLinkId: paymentLink.id,
    paymentLinkUrl: paymentLink.url,
  };
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method not allowed' });
  }

  if (req.query.key !== 'mt-dfy-setup-2026') {
    return res.status(401).json({ error: 'unauthorized' });
  }

  try {
    const results = [];
    for (const spec of DFY_PRODUCTS) {
      results.push(await setupProduct(spec));
    }

    return res.status(200).json({
      success: true,
      products: results,
    });
  } catch (err) {
    console.error('setup-dfy error:', err);
    return res.status(500).json({ error: err.message });
  }
}
