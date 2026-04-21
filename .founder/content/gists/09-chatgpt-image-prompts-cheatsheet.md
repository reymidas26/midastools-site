# ChatGPT Image Prompts — 15 Copy-Paste Templates for DALL-E 3, GPT-4 Image & Gemini (April 2026)

Published: https://gist.github.com/manduks/28c2394f0df442349a1099247d6c66f7

> **Free prompt enhancer:** [midastools.co/prompt-enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet) — paste any rough idea, get a model-ready image prompt back in seconds.
> **Deep dive:** [Full ChatGPT Image Prompt Guide (April 2026)](https://www.midastools.co/blog/chatgpt-image-prompts-2026?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet)

ChatGPT's image generation finally caught up in 2026 — DALL-E 3 via ChatGPT-5, GPT-4 Image-1 for studio-grade output, and Gemini 2.5 Image for photoreal portraits. But the same prompt behaves differently in each.

This cheatsheet is the working template set I use. Every prompt has been run end-to-end in the last 7 days. Copy, paste, ship.

---

## TL;DR — The 15 templates worth keeping

| # | Template                             | Best model              | Use case                          |
|---|--------------------------------------|-------------------------|-----------------------------------|
| 1 | **Product hero shot**                | GPT-4 Image-1           | Ecommerce, landing pages          |
| 2 | **Flat-lay scene**                   | GPT-4 Image-1           | Instagram, blog headers           |
| 3 | **Professional headshot**            | Gemini 2.5 Image        | LinkedIn, speaker bios            |
| 4 | **Editorial portrait**               | DALL-E 3                | About pages, author photos        |
| 5 | **Isometric illustration**           | DALL-E 3                | SaaS feature graphics             |
| 6 | **3D character render**              | GPT-4 Image-1           | Mascots, branded avatars          |
| 7 | **YouTube thumbnail**                | GPT-4 Image-1           | Thumbnails that clickbait cleanly |
| 8 | **Minimalist logo concept**          | DALL-E 3                | Early-stage brand exploration     |
| 9 | **Infographic block**                | GPT-4 Image-1           | Carousels, slide decks            |
| 10 | **Cinematic scene**                 | DALL-E 3                | Storyboards, hero banners         |
| 11 | **Social media avatar**             | Gemini 2.5 Image        | Profile pics with brand color     |
| 12 | **Food photography**                | GPT-4 Image-1           | Menus, recipe posts               |
| 13 | **Pattern / texture**               | DALL-E 3                | Backgrounds, packaging            |
| 14 | **Before / after transformation**   | GPT-4 Image-1           | Fitness, skincare, design         |
| 15 | **Style-reference recreation**      | DALL-E 3                | Match an existing aesthetic       |

---

## The universal image prompt formula

Every strong image prompt has six slots. Fill them in order:

```
[SUBJECT]: who or what is in frame
[SETTING]: where they are, time of day
[COMPOSITION]: shot type, camera angle, framing
[LIGHTING]: source, quality, direction
[STYLE]: photorealistic | illustration | 3D | editorial | reference artist
[TECHNICAL]: aspect ratio, detail level, camera/lens notes
```

Skip any slot and the model fills it with a cliché. That's why most ChatGPT images look generic.

---

## 1. Product hero shot (ecommerce-ready)

```
A single [PRODUCT NAME] on a [SURFACE COLOR] background, centered composition,
shot from slight 15-degree angle, soft box lighting from upper-left,
deep shadows on right, photorealistic product photography style,
macro lens detail visible, 1:1 aspect ratio, studio minimal,
no text, no logos, clean negative space for UI overlay.
```

Try it: [free prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet) — paste a one-line idea, get this structure back.

---

## 2. Flat-lay scene (Instagram / blog header)

```
Overhead flat-lay photograph of [5-7 OBJECTS related to topic] arranged on
[TEXTURED SURFACE: linen | oak | marble], [SEASONAL PALETTE],
soft diffused window light from 10 o'clock position,
subtle shadows, editorial lifestyle aesthetic, shot on 50mm lens equivalent,
2:3 aspect ratio (portrait), natural color grading, no text overlays.
```

---

## 3. Professional headshot (LinkedIn / bio)

```
Professional headshot of a [GENDER] [AGE RANGE] [PROFESSION], wearing
[OUTFIT], neutral [COLOR] background with subtle gradient, three-point lighting
(key from upper-right, fill from lower-left, rim behind), confident direct
gaze slightly off-camera, shallow depth of field (f/2.8 look), shot on
85mm lens, corporate-polished but human, 4:5 portrait aspect ratio.
```

Tip: Gemini 2.5 Image handles faces best as of April 2026. For GPT-4 Image, add "consistent facial features, no facial distortion."

---

## 4. Editorial portrait (author photo / about page)

```
Editorial portrait of [PERSON DESCRIPTION] in a [ENVIRONMENT: studio |
library | industrial loft], shot on medium format camera feel,
window light from 45-degree angle, 40% of face in shadow (Rembrandt lighting),
thoughtful expression, subject looking past camera, muted earth tones,
slight film grain, 2:3 aspect ratio, magazine-quality.
```

---

## 5. Isometric illustration (SaaS feature)

```
Isometric 3D illustration of [CONCEPT: e.g. "data flowing between databases"],
limited color palette of [BRAND COLOR 1] and [BRAND COLOR 2] with white
background, clean geometric shapes, soft ambient occlusion shadows,
no text labels, modern SaaS marketing style (similar to Stripe / Linear
/ Vercel illustration language), centered composition, 16:9 aspect ratio.
```

---

## 6. 3D character render (mascot / avatar)

```
3D character render of [CHARACTER DESCRIPTION] in Pixar/Disney-adjacent style,
standing three-quarter view, neutral pose, studio lighting with soft shadow
beneath, pure [COLOR] background, vibrant but professional colors,
expressive face, high-detail texturing on [FEATURE: hair | clothing],
1:1 aspect ratio, intended for brand use.
```

---

## 7. YouTube thumbnail (high-CTR)

```
Vertical-split YouTube thumbnail: left half shows [VISUAL A: e.g. "chaotic
messy desk"], right half shows [VISUAL B: e.g. "clean organized workspace"],
large arrow or divider between them, center foreground has a
[EXPRESSIVE HUMAN FACE] reacting with [EMOTION], bright saturated colors,
high contrast, bold shadows on faces, 16:9 aspect ratio, no text
(text will be added in editor), clickbait composition principles.
```

---

## 8. Minimalist logo concept

```
Minimalist logo concept for [BRAND / CONCEPT], single geometric mark,
[COLOR] on pure white, clean vector aesthetic, negative space cleverness,
modern sans-serif feel (no text rendered), centered on canvas,
1:1 aspect ratio, 3 variations exploring [circle | square | organic] forms.
```

Caveat: models cannot render clean typography reliably. Use this for *mark* exploration, then recreate in Illustrator/Figma.

---

## 9. Infographic block (carousel slide)

```
Single infographic slide illustrating "[ONE SPECIFIC STAT OR CONCEPT]",
large iconography in center using [BRAND COLOR] on [OFF-WHITE] background,
minimal supporting shapes, space reserved in upper-third for headline text
(do not render the text), space reserved in lower-third for source line,
clean modern editorial design (style: Bloomberg Businessweek / The Pudding),
4:5 portrait aspect ratio, easy to overlay text later.
```

---

## 10. Cinematic scene (hero banner / storyboard)

```
Cinematic wide shot of [SCENE DESCRIPTION], shot on Arri Alexa feel,
2.35:1 anamorphic aspect ratio, golden hour warm lighting from frame-left,
atmospheric haze, color-graded teal and orange, shallow depth of field with
subject in sharp focus, background softly defocused bokeh, mood is
[ADJECTIVE: hopeful | tense | contemplative], no text.
```

---

## 11. Social media avatar (brand-colored)

```
Circular profile avatar of [SUBJECT: person | mascot | abstract mark],
centered in frame with even padding, background is solid [BRAND COLOR],
high-contrast subject so it reads at 48px thumbnail size,
soft rim light on subject edges for separation, 1:1 aspect ratio,
no text, no decorative elements outside subject.
```

---

## 12. Food photography

```
Overhead or 45-degree shot of [DISH NAME] on [PLATE COLOR] plate,
natural window lighting from [POSITION], small props: [2-3 PROPS],
steam rising (if hot), garnish in sharp focus, linen napkin and one
utensil in frame, muted [PALETTE: earthy | pastel | moody], editorial
food photography style (style: Bon Appetit), 4:5 aspect ratio,
no text overlays.
```

---

## 13. Pattern / texture (backgrounds)

```
Seamless repeating pattern of [MOTIF: e.g. "botanical leaves" | "geometric
diamonds"], [COLOR PALETTE], flat vector style (or organic watercolor style),
medium density (not too busy), 1:1 aspect ratio tileable,
suitable for packaging / web background, no dominant focal point.
```

---

## 14. Before / after transformation

```
Split-panel image, left panel labeled position showing [BEFORE STATE
DESCRIPTION] with [COOL/DESATURATED COLOR GRADE], right panel showing
[AFTER STATE DESCRIPTION] with [WARM/VIBRANT COLOR GRADE],
identical subject and framing across both panels, vertical divider line,
high-contrast transformation, 16:9 aspect ratio, do not render any text
labels — leave space for text overlay.
```

---

## 15. Style-reference recreation

```
[SUBJECT DESCRIPTION] rendered in the visual style of [REFERENCE:
"Studio Ghibli" | "Moebius" | "Soviet propaganda poster" | "Wes Anderson
cinematography" | "Saul Bass poster design"], faithful to that style's
color palette, composition rules, and line/brush quality, original
subject matter, not a direct copy of any specific artwork, [ASPECT RATIO].
```

Tip: DALL-E 3 handles art-historical style references most gracefully. GPT-4 Image-1 sometimes refuses specific living artists — use movements or studios.

---

## Common mistakes (avoid these)

1. **Writing prompts as sentences.** Models parse structured keyword lists better than natural prose. Use the 6-slot formula.
2. **Asking for text in the image.** Models still render garbled text. Leave space and add text in Figma / Photoshop / Canva.
3. **Mixing styles in one prompt.** "Photorealistic AND illustrated" = muddy. Pick one.
4. **Skipping aspect ratio.** Default 1:1 ruins half of use cases. Always specify.
5. **No lighting direction.** "Good lighting" means nothing. Specify source + angle + quality.

---

## Prompt-to-product funnel

These 15 are the starter set. The [AI Image Prompt Pack](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet) has 150+ templates across 12 categories — product photography, portraits, illustrations, thumbnails, social, food, fashion, architecture, editorial. $29, lifetime updates, 30-day refund.

Or rewrite any image prompt for free using the [prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet) — paste a rough description, get the structured version back.

---

## Resources

- [Full guide: ChatGPT Image Prompts (April 2026)](https://www.midastools.co/blog/chatgpt-image-prompts-2026?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet)
- [Ghibli-style prompt cheatsheet (gist)](https://gist.github.com/manduks/9efa985bed24330f1ef1c38521bad71f)
- [Midjourney v7 prompt cheatsheet (gist)](https://gist.github.com/manduks/b4821a55f4af02071f424d0ada5267ee)
- [Prompt Enhancer (free tool)](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet)
- [AI Image Prompt Pack ($29 — 150+ templates)](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet)

---

If this saved you time, consider starring the gist — it helps others find it. And if you build something with these, tag [@midastools](https://www.midastools.co?utm_source=gist&utm_medium=github&utm_campaign=09-chatgpt-image-prompts-cheatsheet) — I love seeing what people ship.
