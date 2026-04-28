# Subscriber Intel Playbook
**Last updated:** 2026-04-28 (Session 132)
**Owner:** Any Claude session interacting with subscribers
**Why:** Subscribers are intel, not just an audience. We pay to acquire each one — extract maximum signal before pitching anything.

---

## The core rule
**Never personalize outreach to a subscriber without first reading their `.founder/data/subscribers/{email}.json` profile.** If a profile doesn't exist or `manual_research_needed: true`, do the research FIRST and update the profile.

Email domains lie. `tavassoli.com` looks like a personal-brand consultant. It's actually a Vancouver real estate agent's marketing site. We learned this the hard way (Session 132).

---

## When to enrich

| Trigger | Action |
|---|---|
| New subscriber signs up | Run `python3 .founder/tools/subscriber-enricher.py {email}` immediately |
| Before any 1:1 outreach | Read existing JSON. If stale (>30 days) or `manual_research_needed: true`, re-enrich. |
| Before sending nurture broadcast | Skim profiles to confirm template fit; segment if needed |
| Strategic pivot decision (like the coach pivot) | Re-audit the full subscriber base — the actual ICP often emerges from the data, not from theory |

---

## How to read a profile JSON

```json
{
  "email": "hiedeh@tavassoli.com",
  "domain_class": "custom_domain | free_provider | gov_edu_nonprofit",
  "industry_hints": ["real_estate"],
  "geography_hints": ["CA/BC"],
  "best_fit_product": "dfy_listing_optimizer",
  "fit_reason": "Real estate — Listing Optimizer $149 rewrites property listings",
  "manual_research_needed": false,
  "outreach_recommendation": "..."
}
```

### domain_class meaning

- `custom_domain` — high signal. Visit the site, read about page, identify exact role/firm.
- `gov_edu_nonprofit` — high context (but org budget = different sales motion than SMB).
- `free_provider` — low signal. Auto-tool can't help much. Manual LinkedIn search by name.

### When `manual_research_needed: true`

The auto-tool flagged this sub as needing human-led research. Common cases:
1. **Domain redirected to a SaaS platform** (e.g., RealtyNinja) → check WHOIS or search for the email's `local-part` + last name + likely region
2. **Domain reachable but no industry keywords detected** → site is in non-English, or doesn't describe its services in the homepage HTML, or is a generic landing page
3. **Free email provider** → can't enrich without paid APIs (Clearbit, Apollo). Use Google + LinkedIn search for the name.

### Geographic hints from free email patterns

- Yahoo numeric suffix is often **area code or birth year**: `818 = LA area`, `425 = Seattle`, `78 = born 1978`
- AOL skews **age 50+, US, mainstream consumer**
- ISP emails (`wowway.com`, `comcast.net`, `att.net`) skew **US suburban/residential**
- `.fr` `.es` `.de` `.uk` free providers signal **country**
- `outlook.es` / `orange.fr` strongly suggest **Spain** / **France**

---

## Best-fit product taxonomy (current state)

| Industry detected | Product slug | Price | Why |
|---|---|---|---|
| coaching, consulting | `dfy_content_month` | $199 | Coaches need 30 days of content, sell via expertise |
| real_estate | `dfy_listing_optimizer` | $149 | Listing rewrites are direct ROI for agents |
| marketing, design (agencies) | `dfy_brand_pack` | $299 | Portfolio asset they can resell to their clients |
| legal | `kit_email_marketing` | $29 | Low-risk start; legal won't buy DFY content from no-name brand |
| ministry | `kit_content_creator` | $39 | Sermons, newsletters, donor letters |
| ecommerce | `dfy_listing_optimizer` | $149 | Product page rewrites |
| healthcare | `uncertain` | — | Compliance-heavy. Don't pitch DFY without checking HIPAA implications |
| government, education, nonprofit | `starter_pack_only` | $9 | Org-budget cycles; tripwire only |
| unknown / unclear | `uncertain` | — | Manual research before any pitch |

This taxonomy lives in `.founder/tools/subscriber-enricher.py:fit_score()`. Update both when products evolve.

---

## Outreach decision tree

```
Subscriber X signed up via /for-coaches?utm_campaign=Y
   ↓
Read .founder/data/subscribers/X.json
   ↓
manual_research_needed = true?
   ├─ YES → do 5-min web/LinkedIn sweep → update JSON manually → continue
   └─ NO → proceed
   ↓
best_fit_product = ?
   ├─ uncertain → DON'T outreach. Add to nurture drip only.
   ├─ starter_pack_only → soft sell $9 tripwire in next nurture email
   ├─ kit_X (low-risk) → mention kit naturally in next nurture
   └─ dfy_X (high-value) → personalized 1:1 outreach drafted by Claude
                         → reviewed by Armando
                         → sent
```

---

## Anti-patterns (don't do these)

- ❌ Drafting a generic "we just niched down" email to a sub whose actual industry contradicts the niche
- ❌ Pitching DFY $299 to a free-email-provider sub without LinkedIn confirmation they have $299 to spend
- ❌ Trusting the auto-tool's `industry_hints` when the domain redirects to a SaaS — verify the underlying owner manually
- ❌ Sending the same nurture template to all subs without checking whether segments would convert better
- ❌ Treating subscribers as "audience" instead of "intel" — every sub is a research input

---

## Tool integration roadmap

**Today (Session 132):** Tool exists. Manual run after any new signup.

**Next (proposed):** Migrate enricher logic to JavaScript inside `/api/subscribe` so every signup is auto-enriched on the same request. Outputs land in the same `.founder/data/subscribers/{email}.json` location (or a Vercel KV-backed equivalent if we move off jsonblob). When this lands, every new sub has a profile within 2 seconds of signup.

**Later (proposed):** Wire profile data into `/api/nurture` so each sub gets nurture content tuned to their `industry_hints` (e.g., a real estate sub gets Listing Optimizer-relevant content; a coach sub gets Content Month-relevant content). This compounds — same broadcast volume, higher conversion.

---

## Memory linkage

- **Feedback rule:** `feedback_research_subscribers_first.md` (memory) — never draft outreach blind
- **Audit data:** `.founder/deliverables/subscriber-intel-2026-04-28.md` (the deep 20-sub audit)
- **Pivot decision context:** `.founder/deliverables/pivot-decision-2026-04-28.md`
- **Tool source:** `.founder/tools/subscriber-enricher.py`
- **Profile data:** `.founder/data/subscribers/*.json`
