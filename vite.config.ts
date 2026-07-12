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
    ...(isGhPagesBuild ? { basepath: ghPagesBase.slice(0, -1) } : {}),
  },
  ...(isGhPagesBuild
    ? {
        vite: { base: ghPagesBase },
        nitro: { preset: "github-pages" },
      }
    : {}),
});
