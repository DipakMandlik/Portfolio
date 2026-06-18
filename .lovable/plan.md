
# Dipak Mandlik — Premium Portfolio

## Stack note
You chose Next.js 14, but this workspace is scaffolded with TanStack Start and Lovable's build pipeline is wired to it. Re-platforming to Next.js inside Lovable isn't supported — the dev server, routing, and build won't work.

**I'll build the same site on the existing stack** (React 19 + TanStack Start + Tailwind v4 + Framer Motion + GSAP + Lenis). Identical visual result, component architecture, and animation quality — only the routing/SSR layer differs from your prompt. If you later want true Next.js, that's an export-and-move-off-Lovable step.

Confirm or tell me to stop before I build.

## Design system
- **Palette (tokens in `src/styles.css`):** `--bg-base #FFFFFF`, `--bg-porcelain #F5F6F8`, `--bg-mist #ECEFF3`, `--ink #0A0A0B`, `--ink-soft #4A4F57`, `--line #E2E6EC`, `--blue #1A56DB`, `--blue-bright #2F6BFF`, `--blue-deep #0B2A6B`, `--glow rgba(47,107,255,0.14)`. Mapped through `@theme inline` so utilities like `bg-porcelain`, `text-ink-soft`, `border-line`, `text-blue` work.
- **Typography:** Fraunces (display, variable) + Inter (body, variable) via `@fontsource-variable/*` packages. Hero 64–96px, headings line-height 1.05–1.15, body 1.6. Editorial serif for H1/H2, Inter for everything else.
- **Motion:** Framer Motion for component reveals (fade + 24px rise, stagger, ease `[0.16, 1, 0.3, 1]`), GSAP ScrollTrigger for pinned/parallax/timeline-draw, Lenis for smooth scroll. Full `prefers-reduced-motion` short-circuits.

## Page architecture (single route: `src/routes/index.tsx`)
Sticky frosted nav, scroll progress bar, custom cursor (desktop, opt-out on touch), then sections in order:

1. **Hero** — staggered char reveal of "Dipak Mandlik", animated blue-glow mesh gradient background (CSS + subtle Framer motion, no video to keep LCP fast), headline, subline, "View Work" (blue) + "Download CV" (ghost) CTAs, scroll cue.
2. **About** — editorial two-column, parallax portrait (placeholder portrait illustration generated as asset), pull-quote bio, quick-facts row.
3. **Experience** — vertical timeline, GSAP-drawn connecting line, scroll-revealed role cards.
4. **Skills** — grouped chip grid (Languages / Frameworks / Tools / Cloud & Data / Soft), tasteful logo marquee.
5. **Projects** — alternating large blocks, parallax media, stack tags, live + repo links, hover lift.
6. **Education** — clean cards.
7. **Certifications** — grid with issuer + verify link.
8. **Awards** — highlight strip with blue accent.
9. **Life Journey** — signature GSAP horizontal-pinned scroll of 5 milestones with year, headline, narrative, image.
10. **Contact** — big "Let's build something." closer, mailto CTA, social links, footer with back-to-top.

## Content strategy
All copy lives in typed data files under `src/data/` (`experience.ts`, `projects.ts`, `skills.ts`, `education.ts`, `certifications.ts`, `awards.ts`, `journey.ts`, `profile.ts`). I'll seed realistic placeholders inferred from "Software Engineer · AI & Data Enthusiast" positioning, each field commented `// [FILL IN]` so you can swap quickly. Portrait + project mockups generated as placeholder assets.

## Component inventory
`components/nav/StickyNav.tsx`, `ScrollProgress.tsx`, `CustomCursor.tsx`, `LenisProvider.tsx`, `motion/Reveal.tsx`, `motion/SectionHeading.tsx`, `sections/Hero.tsx`, `About.tsx`, `Experience.tsx`, `Skills.tsx`, `Projects.tsx`, `Education.tsx`, `Certifications.tsx`, `Awards.tsx`, `Journey.tsx`, `Contact.tsx`, `Footer.tsx`.

## Quality bar
Semantic HTML, alt text, focus rings on every interactive, keyboard-navigable nav + journey scroller, only transform/opacity animated, lazy-loaded images, single H1, route `<head>` metadata (title, description, OG, Twitter), responsive at 375 / 768 / 1280 / 1920.

## Technical details
- Install: `framer-motion`, `gsap`, `lenis`, `lucide-react`, `@fontsource-variable/fraunces`, `@fontsource-variable/inter`.
- Fonts imported in `src/styles.css` via `@import "@fontsource-variable/..."` (local package, not URL) and registered in `@theme` as `--font-display` / `--font-sans`.
- GSAP ScrollTrigger registered client-side only (guarded by `typeof window`).
- Lenis mounted in `__root.tsx` via a client provider; reduced-motion users get native scroll.
- No backend, no Cloud, no server functions. Contact = `mailto:`.
- Build will pass strict TS; routeTree auto-generates.

## Out of scope (call out if you want any added later)
Real CV PDF, real portrait photo, real project screenshots, working contact form with delivery, blog, CMS, i18n, analytics.
