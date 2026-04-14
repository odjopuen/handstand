# Copy Audit — Ground Work

**Started:** 2026-04-13 · **Status:** ✅ COMPLETE (pass 1)
**Owner note:** This doc is the single source of truth for the site-wide copy rewrite. If a Claude session ends, a new session can resume by reading this file. Check boxes show what's done. Add questions that come up during implementation to the **Notes / Questions** section at the bottom.

---

## Voice & direction (reference)

- **Voice:** warm + playful + honest. Handstands take years — like learning to walk. Be patient.
- **One belief:** *"Be patient with yourself and others. Handstand is more a practice of patience than an all-out workout."*
- **Hook line (usable verbatim):** *"Once you get it, you're hooked. Promise."*
- **Class format:** 90 min total = 30 min warm-up (wrist/HS-specific) + 30 min handstand practice split by level + 30 min full-body HIIT finisher.
- **Position the class as:** a workout, NOT a yoga-style handbalancing class. Medium intensity framing.
- **What the class is for (3 things):** (1) show you how to train, (2) give you regular feedback every month, (3) connect you with people to train with between classes.
- **Co-host:** Garson Karrel — Jonny's friend and personal movement coach (animal movement is his specialty), currently learning handstands alongside the students. LinkedIn: `Garsonkarrel`. Honest framing — not positioned as an equal handstand coach.
- **Audience:** curious beginners · people who always wanted to try · returners rediscovering HS · advanced practitioners looking for challenge + community.
- **Jonny's origin:** started at 14, many breaks (some multi-year), eventually clicked — hooked, addicted, obsessed ever since.
- **Avoid:** yoga-studio vibes, over-spiritual language, promises of fast results.
- **Testimonials:** 3 real ones coming — placeholder section hidden until then.
- **Blog + newsletter:** removed entirely. Community lives in WhatsApp group (link TBD).
- **Next workshop:** April 25, 2026, 2:00–3:30 PM, downtown Toronto, max 16. Luma URL live: `https://luma.com/uoopsxfs`.

---

## Global changes

- [x] Create this tracking doc
- [x] Update memory pointer to this doc
- [x] Delete `src/app/blog/` entirely
- [x] Remove blog search action from `src/lib/seo.ts` (`buildWebSiteSchema`)
- [x] Hide `/testimonials` route from nav + sitemap + home page (route directory deleted, NAV_LINKS updated, TestimonialsCarousel removed from home)
- [x] Blank out fake entries in `src/data/testimonials.ts` (kept type export for future)
- [x] Collapse `src/data/classes.ts` to a single workshop definition with 3-section breakdown
- [x] Update `SITE_CONFIG.description` in `src/lib/constants.ts`
- [ ] WhatsApp placeholder URL — `https://chat.whatsapp.com/PLACEHOLDER` **still needs real invite link** (user to provide)

---

## Home page

### Hero (`src/components/home/Hero.tsx`)
- [x] Eyebrow → *"Practice, consistency, patience. We lay the ground work."* (revised 2026-04-14 — brand pun, echoes voice)
- [x] Bottom tagline → *"One workshop a month. Toronto. All levels. 16 spots — kept small so you actually get seen."*

### ValueProposition (`src/components/home/ValueProposition.tsx`)
- [x] Pillar 01 → **Patience is the skill**
- [x] Pillar 02 → **Learn how to train**
- [x] Pillar 03 → **Train with people**

### ClassesPreview (`src/components/home/ClassesPreview.tsx`)
- [x] Description rewritten to 90-min format + "probably addicted" line

### StatsSection (`src/components/home/StatsSection.tsx`)
- [x] Stat 4 → "2 Hosts per session — Jonny coaching, Garson spotting"
- [x] Stat 1 note → "with plenty of breaks — the addiction stuck"

### NewsletterCapture → WhatsApp block (`src/components/home/NewsletterCapture.tsx`)
- [x] Body copy rewritten — "where the community actually lives"

### CTABanner (`src/components/home/CTABanner.tsx`)
- [x] Eyebrow → "once you get it, you're hooked — promise"
- [x] Subtext → "Curious, rediscovering it, or deep in it — everyone belongs."
- [x] Trust signals → Small groups · All levels · Built for community

### Marquee (`src/components/home/Marquee.tsx`)
- [x] Replaced "REAL RESULTS" with "PATIENCE IS THE SKILL"
- [x] Added "CO-HOSTED BY GARSON KARREL"

---

## About page (`src/app/about/page.tsx`)

- [x] Hero subtext rewritten
- [x] "Why I teach" body rewritten (origin → patience + consistency → Garson intro → "hooked, promise")
- [x] Values card 01 → **Patience first**
- [x] Values card 02 → **Train between sessions**
- [x] Values card 03 → **Community is the point**
- [x] Pullquote updated — "...for years."
- [x] About metadata updated to mention Garson

---

## Workshop page (`src/app/classes/page.tsx`)

- [x] Hero subtext rewritten
- [x] "What to expect" 4 cards fully rewritten (structure / not yoga / all levels / co-hosted)
- [x] FAQ rewrites + added "How fit do I need to be?" + "Will I handstand after one class?"
- [x] FAQ location answer updated to mention rotating downtown locations
- [x] Meta description rewritten
- [x] Added class time (2:00–3:30 PM) to next date card

---

## Booking page (`src/app/booking/page.tsx`)

- [x] Hero eyebrow → "April 25 — 2:00–3:30 PM"
- [x] Hero headline → "Sign up."
- [x] Hero subtext → "Downtown Toronto. 90 minutes. Max 16. All levels."
- [x] "What to expect" rows rewritten (90-min format / location rotates / 2 hosts with Garson)
- [x] FAQ: added "How fit do I need to be?" and "Will I handstand after one class?"

---

## Getting Started (`src/app/getting-started/page.tsx`)

- [x] Hero subtext rewritten
- [x] Step 06 → "The real work is between classes"
- [x] Flipped myth: "one workshop and you'll be handstanding" → reality is years
- [x] Added myth: "It's a gentle yoga-style class" → it's a workout

---

## Gallery (`src/app/gallery/page.tsx`)

- [x] Hero subtext → "What 90 minutes of handstand practice actually looks like."

---

## Contact (`src/app/contact/page.tsx`)

- [x] Eyebrow → "Easiest way to ask? Show up."
- [x] Response time → "Usually same day. Always within a couple."
- [x] Success message → "usually same day"

---

## Header / Footer / Navigation

- [x] Header CTA "Join Workshop" → **Sign Up**
- [x] MobileMenu CTA "Book a Class" → **Sign Up**
- [x] Footer tagline → "Monthly handstand workshop in Toronto. 90 minutes. 16 spots. Co-hosted by Jonny & Garson."
- [x] Removed `/testimonials` from NAV_LINKS

---

## SEO / metadata

- [x] `constants.ts` SITE_CONFIG.description → rewritten
- [x] `seo.ts` — removed `/blog?q=` search action from `buildWebSiteSchema`
- [x] `sitemap.ts` — removed `/testimonials` entry + removed stale blog TODO comment

---

## Notes / Questions (add as they come up)

### Open — need user input
1. **WhatsApp invite link** — currently placeholder `https://chat.whatsapp.com/PLACEHOLDER` in `src/components/home/NewsletterCapture.tsx`. Replace when real link is available.
2. **Real testimonials** — 3 expected from April 25 workshop. When received, add to `src/data/testimonials.ts` and:
   - Restore `TestimonialsCarousel` import + render in `src/app/page.tsx` (component is untouched, just not rendered).
   - Recreate `src/app/testimonials/page.tsx` (was deleted — git history has the old version if useful as template).
   - Re-add `/testimonials` to `NAV_LINKS` in `src/lib/constants.ts` and to `src/app/sitemap.ts`.
3. **BUSINESS_INFO in `constants.ts`** — still has empty `street`, `postalCode`, `phone`, `email`, and social links. Fill in when available (affects footer + LocalBusiness schema).

### Observations during implementation (no action needed)
- `TestimonialsCarousel` component file (`src/components/home/TestimonialsCarousel.tsx`) was left in place — dead code but easy to restore when real testimonials arrive. If you'd prefer to delete it entirely, say the word.
- Stale Next.js `.next/dev` cache produced type errors referencing the deleted `/blog` and `/testimonials` routes — these will clear automatically on the next `npm run dev` or `npm run build`.
- Navigation label for `/classes` is **"Workshop"** — consistent with the "The Workshop" copy elsewhere. No change needed, but worth noting if you see a mismatch.

---

## Changelog

| Date | What was applied | Session |
|---|---|---|
| 2026-04-13 | Audit drafted. Tracking doc + memory pointer created. | #1 |
| 2026-04-13 | Applied all 🔴 and 🟡 edits across 17 files: home (Hero, ValueProposition, ClassesPreview, StatsSection, NewsletterCapture, CTABanner, Marquee, page.tsx), about, classes, booking, getting-started, gallery, contact, Header, MobileMenu, Footer, constants, seo, sitemap, classes.ts, testimonials.ts. Deleted `/blog` and `/testimonials` routes. Type-check clean (dev cache errors only). | #1 |
| 2026-04-14 | Live-site verification pass via Playwright — home/about/classes/booking/getting-started/gallery/contact all rendered with new copy. `/blog` + `/testimonials` return 404 as expected. No console errors. | #1 |
| 2026-04-14 | Revised hero eyebrow to *"Practice, consistency, patience. We lay the ground work."* — brand pun, echoes the patience voice. | #1 |
| 2026-04-14 | Standardized all workshop CTA buttons from *"Sign Up for (the/next) Workshop"* → *"Workshop Sign Up"* (Hero, CTABanner, Footer, About, Contact, Gallery, Getting Started). | #1 |
| 2026-04-14 | Softened "handstands take years" phrasing site-wide to be encouraging, not demotivating — updated `constants.ts` description, About values card + pullquote, Classes FAQ, Booking FAQ, Getting Started myth. New pattern: "a clean handstand takes time — closer to learning to walk than learning a trick". Jonny's personal "went on for years" line kept as-is (authentic origin story). | #1 |
