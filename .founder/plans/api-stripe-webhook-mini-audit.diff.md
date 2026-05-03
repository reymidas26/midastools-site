# Stripe Webhook — Mini-Audit Diff (May 10 Ship-Day)

**Status:** PRE-PLANNED for May 10 ship-day. NOT yet applied to `pages/api/stripe-webhook.js`.

**File to modify:** `pages/api/stripe-webhook.js`
**Purpose:** Route `checkout.session.completed` events for the new mini-audit Stripe payment link to a new email template that delivers the 12-question intake form (instead of a kit ZIP).

**Why a diff (not a full file replacement):**
The existing webhook is 426 lines and may receive other edits between today (May 2) and ship day (May 10). A precise diff prevents merge conflicts and is easier to verify line-by-line than a full file overwrite.

---

## Step 1 — Add mini-audit entry to `KIT_MAP`

**Location:** Inside the `KIT_MAP` object, immediately after the `'starter-pack'` entry (around line 33).

**Add this block:**

```javascript
  // $297 Mini-Audit — async intake form delivery (no zip, no download)
  'mini-audit': {
    name: 'AI Mini-Audit (Async)',
    file: null,
    deliveryType: 'intake-form', // NEW — distinguishes from web-delivery, bundle, single-file
    subject: 'Your Mini-Audit intake — 5 minutes, please complete by [DATE+24h]',
    items: [
      '12-question intake form (5-7 minutes to complete)',
      'Optional: 3 sample prompts you currently use',
      'Optional: 1 screenshot of a workflow you hate',
      '5-page personalized PDF delivered within 48 hours of intake submission',
      'T+10-day check-in email asking how Tool #1 is going',
      '$297 credits 100% toward Implementation Lite ($1,500) within 30 days',
      '30-day money-back if report is not specific to your business',
    ],
  },
```

---

## Step 2 — Add mini-audit payment link to `PAYMENT_LINK_MAP`

**Location:** Inside the `PAYMENT_LINK_MAP` object inside `detectKit()` (around line 280).

**Add this line** (replace `plink_PASTE_FROM_SETUP` with the actual plink ID returned by `/api/setup-mini-audit`):

```javascript
    // $297 Mini-Audit
    'plink_PASTE_FROM_SETUP': 'mini-audit',
```

---

## Step 3 — Add product-name fallback in `detectKit()`

**Location:** Inside `detectKit()`, in the productName fallback chain (around line 301, after the `starter pack` line).

**Add this line:**

```javascript
  if (productName.includes('mini-audit') || productName.includes('mini audit')) return KIT_MAP['mini-audit'];
```

---

## Step 4 — Add amount fallback for $297 in `detectKit()`

**Location:** Inside `detectKit()`, in the amount fallback chain (around line 317, after the `amount === 900` line).

**Add this line:**

```javascript
  if (amount === 29700) return KIT_MAP['mini-audit'];
```

---

## Step 5 — Add new email-template branch in `sendDownloadEmail()`

**Location:** Inside `sendDownloadEmail()`, in the if/else-if chain that picks `downloadSection` (around line 342).

**Replace the existing chain:**

```javascript
  let downloadSection;
  if (isWebDelivery) {
    downloadSection = `<a href="${kit.deliveryUrl}" ...`;
  } else if (isBundle) {
    downloadSection = `<p ...`;
  } else {
    downloadSection = `<a href="${baseUrl}/${kit.file}" ...`;
  }
```

**With this updated chain (adds intake-form branch FIRST):**

```javascript
  const isIntakeForm = kit.deliveryType === 'intake-form';

  let downloadSection;
  if (isIntakeForm) {
    downloadSection = `
      <p style="color:#374151;font-size:15px;margin-bottom:24px;line-height:1.6;">
        Thanks for buying the Mini-Audit. To deliver your 5-page report within 48 hours of receiving your answers, please spend 5-7 minutes on the 12 questions below. Be specific — the more concrete your answers, the more concrete my recommendations.
      </p>
      <p style="color:#374151;font-size:15px;margin-bottom:24px;line-height:1.6;">
        <strong>Reply to this email</strong> with your numbered answers (1-12). The 48-hour delivery clock starts when I receive them.
      </p>
      <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:12px;padding:24px;margin-bottom:24px;">
        <h3 style="margin:0 0 16px;font-size:17px;color:#78350F;">The 12 Questions</h3>
        <ol style="color:#374151;font-size:14px;line-height:1.8;padding-left:20px;margin:0;">
          <li><strong>Your business in one sentence.</strong> Imagine I had never heard of you. Tell me what you do, who you do it for, and what they pay you.</li>
          <li><strong>Your current revenue level.</strong> (under $1K/mo, $1K–$5K, $5K–$15K, $15K–$50K, $50K–$150K, $150K+/mo)</li>
          <li><strong>The single biggest time-suck in your week.</strong> Be specific — "writing IG posts on Sunday night" beats "marketing." Bonus if you can give the rough weekly hour count.</li>
          <li><strong>The expensive thing you suspect AI could replace.</strong> Could be a VA, contractor, software subscription, or a habit. List as many as you want with rough monthly $.</li>
          <li><strong>AI tools you have actually tried in the last 12 months.</strong> Even if you used the free tier once. Be honest about which stuck and which did not.</li>
          <li><strong>The thing that has been broken for 3+ months</strong> that you keep saying you will fix.</li>
          <li><strong>Your honest hourly rate (or value-per-hour).</strong> Used for Year-1 ROI math. ($50, $75, $100, $150, $200, $300+/hr)</li>
          <li><strong>Your current tool stack — name them.</strong> CRM, email tool, calendar, accounting, project mgmt, design, writing.</li>
          <li><strong>Team size — full-time or contract.</strong> Solo? Solo + VA? Solo + 2 contractors?</li>
          <li><strong>Your Q3 priority — what is the next $50K of revenue going to come from?</strong></li>
          <li><strong>Your honest AI fluency level (0–10).</strong> 0 = never used ChatGPT, 5 = use regularly but never automated, 10 = built and shipped an AI feature.</li>
          <li><strong>What would make this Mini-Audit a 10/10 for you?</strong> One paragraph: if you could design the perfect outcome, what would you walk away with on Day 7?</li>
        </ol>
      </div>
      <p style="color:#6B7280;font-size:14px;margin-bottom:24px;line-height:1.6;">
        <strong>Optional but recommended:</strong> paste 3 prompts you currently use with ChatGPT/Claude/etc, and attach 1 screenshot of a workflow you hate (no credentials, no client names — just the shape of the friction).
      </p>
    `;
  } else if (isWebDelivery) {
    downloadSection = `<a href="${kit.deliveryUrl}" style="display:inline-block;background:#D97706;color:#FFFFFF;padding:16px 32px;border-radius:10px;font-weight:800;font-size:16px;text-decoration:none;margin-bottom:32px;">
        → Open Your Prompt Pack
      </a>
      <p style="color:#6B7280;font-size:13px;margin-top:-20px;margin-bottom:32px;">Bookmark this link — your 20 prompts live here. Copy-paste into ChatGPT, Claude, or Gemini.</p>`;
  } else if (isBundle) {
    downloadSection = `<p style="color:#ccc;font-size:15px;margin-bottom:16px;">Download each kit below:</p>${buildBundleDownloadLinks(kit)}`;
  } else {
    downloadSection = `<a href="${baseUrl}/${kit.file}" style="display:inline-block;background:#3B5FFF;color:#FFFFFF;padding:16px 32px;border-radius:10px;font-weight:800;font-size:16px;text-decoration:none;margin-bottom:32px;">
        ⬇ Download Your Kit
      </a>`;
  }
```

---

## Step 6 — Adjust the email subject and "What's inside" header for intake-form

**Location:** Inside `sendDownloadEmail()`, in the `transporter.sendMail()` call (around line 357).

**Existing line:**

```javascript
    subject: `👑 ${kit.subject}`,
```

**Replace with:**

```javascript
    subject: isIntakeForm ? kit.subject : `👑 ${kit.subject}`,
```

(The mini-audit intake email should not have the "👑" prefix — it is an action request, not a celebration.)

**And the "What's inside" header (around line 368):**

The existing block reads:
```javascript
          <p style="color: #6B7280; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">What's inside:</p>
```

**Replace with:**

```javascript
          <p style="color: #6B7280; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">${isIntakeForm ? 'What happens next' : "What's inside"}:</p>
```

---

## Step 7 — Verify (post-deploy smoke test)

After deploying:

1. Trigger a Stripe test event:
   ```bash
   stripe trigger checkout.session.completed \
     --override checkout_session:metadata.kit_type=mini-audit \
     --override checkout_session:customer_details.email=iam@armando.mx
   ```

2. Verify in iam@armando.mx inbox: subject = `Your Mini-Audit intake — 5 minutes, please complete by [DATE+24h]`, body lists all 12 questions in a yellow box.

3. Verify Vercel logs show `Purchase detected: AI Mini-Audit (Async) for iam@armando.mx`.

4. If the smoke test passes, fire the live broadcast per `.founder/plans/broadcast-mini-audit-launch.md`.

---

## Total time estimate for this diff (May 10)

- Apply diff steps 1-6: ~20 minutes (mechanical edits, copy-paste)
- Smoke test: ~10 minutes (Stripe CLI + inbox check)
- Total: **~30 minutes**

Combined with `setup-mini-audit.js` (~5 min to deploy + run + capture URL), `ai-mini-audit.js` page move (~5 min), sitemap + IndexNow + nav (~10 min), and broadcast send (~30 min staged), total ship effort = **~80 minutes (1 hr 20 min)**.

That fits comfortably inside one focused half-day session on May 10.
