# Dipak Mandlik — Portfolio

> Associate Software Engineer · Data & AI Engineer · Founder @ AIByDM

[![Deploy to GitHub Pages](https://github.com/DipakMandlik/Portfolio/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/DipakMandlik/Portfolio/actions/workflows/deploy-pages.yml)
[![Live Site](https://img.shields.io/badge/live-dipakmandlik.github.io%2FPortfolio-2f6bff)](https://dipakmandlik.github.io/Portfolio/)

**Live site:** https://dipakmandlik.github.io/Portfolio/

![Dipak Mandlik — Data & AI Engineer](./public/og-image.jpg)

A single-page portfolio built with TanStack Start and React, covering experience, skills, projects, education, certifications, awards, and a career journey timeline — with scroll-driven motion, a custom cursor, and a fully responsive layout.

## Tech stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19, file-based routing via TanStack Router)
- **Styling:** Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) + Radix UI primitives
- **Motion:** Framer Motion, GSAP (ScrollTrigger), Lenis smooth scroll
- **Build:** Vite 8, Nitro (node-server preset for the Pages build)
- **Tooling:** TypeScript, ESLint, Prettier, Bun

## Sections

Hero · Trusted By · About · Experience · Skills · Projects · Education · Certifications · Awards · Journey · Contact

## Getting started

```bash
bun install
bun run dev       # start the dev server
bun run build     # production build (Cloudflare/Nitro target)
bun run lint       # lint
bun run format     # format with Prettier
```

## Deployment

The site deploys to **GitHub Pages** automatically on every push to `main` via [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml):

1. `bun run build:pages` builds a static client bundle plus a runnable Node SSR server (Nitro's `node-server` preset), with the Vite `base` set to `/Portfolio/` to match the Pages project path.
2. The workflow boots that server locally in CI, captures the rendered HTML, and writes it as the static `index.html`.
3. [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) and [`actions/deploy-pages`](https://github.com/actions/deploy-pages) publish the result to GitHub Pages.

No custom domain — the site is served directly from the default `github.io` Pages URL.

## License

Personal portfolio — all rights reserved.
