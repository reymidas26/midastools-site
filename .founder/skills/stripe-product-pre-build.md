# Pre-build a Stripe SKU's full ship pack

Purpose: Drop deploy-day work to <90 min by writing the artifacts now.

When to use: (product + price + payment link + webhook routing + delivery email + page + broadcast) is gated behind a future decision (1+ week out). You want decision-day to be a flip-the-switch, not a half-day build.

---

When to use: A new Stripe SKU (product + price + payment link + webhook routing + delivery email + page + broadcast) is gated behind a future decision (1+ week out). You want decision-day to be a flip-the-switch, not a half-day build.
---
1. Read the current /api/setup-tripwire.js (or analogous existing setup endpoint) to confirm the Stripe API pattern still matches the spec.
2. Read the current /api/stripe-webhook.js to confirm the KIT_MAP + detectKit + sendDownloadEmail structure still matches the spec.
3. Draft /api/setup-<sku>.js as .founder/plans/api-setup-<sku>.draft.js — full file, idempotent, with metadata.kit_type set.
4. Draft the webhook diff as .founder/plans/api-stripe-webhook-<sku>.diff.md — surgical edits with line locations, NOT a full file replacement (full files drift if the source changes between now and ship).
5. Draft pages/<sku>.js as .founder/plans/page-<sku>.draft.jsx — placeholder Stripe URL prevents accidental ship if file gets moved without the URL being filled in.
6. Draft the broadcast email as .founder/plans/broadcast-<sku>-launch.md — multiple subject-line variants, full body, reply templates for the 4 most likely reply types.
7. Update the spec's ship-day checklist to mark all pre-built items as ☑ and recompute total ship effort.
8. Verify each file with wc -l before claiming pre-built (per never-claim-without-verifying).
9. Specifically catch spec-vs-reality drift in step 1+2; correct the spec inline.`
