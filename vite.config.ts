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
const isGhPagesBuild = process.env.GH_PAGES_BUILD === "1";
const ghPagesBase = "/dipak-mandlik-portfolio/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGhPagesBuild
      ? {
          basepath: ghPagesBase.slice(0, -1),
          // Prerender the (single) route to real static HTML — TanStack Start's own
          // basepath-aware prerenderer, not Nitro's, which doesn't know about basepath.
          prerender: { enabled: true, crawlLinks: true },
        }
      : {}),
  },
  // Nitro's own `static`/`github-pages` presets conflict with Start's SSR build
  // (rollupOptions.input resolves to an html file) and 404 their own basepath-blind
  // crawl — so leave Nitro's preset untouched and rely solely on
  // tanstackStart.prerender above for the static HTML; the CI workflow deploys
  // just the prerendered `.output/public` directory and ignores the server bundle.
  ...(isGhPagesBuild ? { vite: { base: ghPagesBase } } : {}),
});
