// DRAFT — pages/api/setup-mini-audit.js
// Status: PRE-BUILT for May 10 ship-day. NOT yet in pages/api/ — sits in .founder/plans/ until decision.
// On May 10 (if Plan A greenlit):
//   1. Move this file to pages/api/setup-mini-audit.js
//   2. Run GET https://www.midastools.co/api/setup-mini-audit?key=mt-dfy-setup-2026
//   3. Capture the returned paymentLink.url — paste it into MINI_AUDIT_URL in pages/ai-mini-audit.js
//   4. Update the KIT_MAP and PAYMENT_LINK_MAP in pages/api/stripe-webhook.js
//      (see .founder/plans/api-stripe-webhook-mini-audit.diff.md for the exact diff)
//   5. Build + deploy
//
// Cloned from pages/api/setup-tripwire.js (the $9 starter pack creator).
// Differences:
//   - Product name + description for $297 mini-audit
//   - Price = 29700 cents ($297) not 900 cents ($9)
//   - metadata.kit_type = 'mini-audit' (used by webhook to route to the intake-form email template)
//   - after_completion redirects to /thank-you?tier=mini-audit (existing thank-you page handles tier param)

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const MINI_AUDIT = {
  name: 'AI Mini-Audit (Async, 48-Hour Turnaround)',
  description: 'A focused 5-page expert review of your AI usage. Async (no call). 48-hour turnaround. We tell you the 3 specific AI moves to make this week — with tools, setup steps, and Year-1 ROI math, all built around your 12-question intake. 30-day money-back if it is not specific to your business.',
  price: 29700, // $297
  statementDescriptor: 'MIDAS MINI AUDIT',
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
    let product = await findExistingProduct(MINI_AUDIT.name);
    const existed = !!product;
    if (!product) {
      product = await stripe.products.create({
        name: MINI_AUDIT.name,
        description: MINI_AUDIT.description,
        metadata: { sku: 'mini-audit', tier: '297', delivery_sla_hours: '48' },
      });
    }

    // 2. Price
    let priceObj = existed ? await getExistingPrice(product.id) : null;
    if (!priceObj) {
      priceObj = await stripe.prices.create({
        product: product.id,
        unit_amount: MINI_AUDIT.price,
        currency: 'usd',
      });
    }

    // 3. Payment link — redirects to thank-you with tier=mini-audit (intake email fires from webhook)
    let paymentLink = existed ? await getExistingPaymentLink(priceObj.id) : null;
    if (!paymentLink) {
      paymentLink = await stripe.paymentLinks.create({
        line_items: [{ price: priceObj.id, quantity: 1 }],
        after_completion: {
          type: 'redirect',
          redirect: { url: 'https://www.midastools.co/thank-you?tier=mini-audit' },
        },
        metadata: { kit_type: 'mini-audit' },
      });
    }

    return res.status(200).json({
      ok: true,
      product: { id: product.id, name: product.name, existed },
      price: { id: priceObj.id, amount: priceObj.unit_amount },
      paymentLink: { id: paymentLink.id, url: paymentLink.url },
      next_steps: [
        `1. Copy paymentLink.url (${paymentLink?.url}) into MINI_AUDIT_URL in pages/ai-mini-audit.js`,
        `2. Add to KIT_MAP and PAYMENT_LINK_MAP in pages/api/stripe-webhook.js (see api-stripe-webhook-mini-audit.diff.md)`,
        `3. Add /ai-mini-audit to public/sitemap.xml at priority 0.9`,
        `4. Add nav link in components/Layout.js (small, not hero)`,
        `5. Submit /ai-mini-audit URL to IndexNow`,
        `6. Fire broadcast per .founder/plans/broadcast-mini-audit-launch.md`,
      ],
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
