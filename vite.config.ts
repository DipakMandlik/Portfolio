// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export for GitHub Pages, opted into only by `npm run build:pages` (see package.json).
// Left unset for the default `build`/`dev` scripts so Lovable's own Cloudflare pipeline is untouched —
// per @lovable.dev/vite-tanstack-config, nitro/vite overrides here are ignored inside a Lovable build anyway.
// Served from https://dipakmandlik.github.io/dipak-mandlik-portfolio/, so assets need this base path.
// If the repo is renamed later, update this (and the URLs below) to match.
const isGhPagesBuild = process.env.GH_PAGES_BUILD === "1";
const ghPagesBase = "/dipak-mandlik-portfolio/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Both Nitro's `static`/`github-pages` presets (rollupOptions.input/html-file
  // conflict) and Start's own built-in prerender (expects a plain `dist/server/server.js`
  // layout Nitro doesn't produce here) fail against this Cloudflare-oriented Nitro setup.
  // So build a plain runnable Node server instead — the CI workflow boots it, curls the
  // page to capture static HTML itself, and ships that + the client assets to Pages.
  ...(isGhPagesBuild
    ? {
        vite: { base: ghPagesBase },
        nitro: { preset: "node-server" },
      }
    : {}),
});
