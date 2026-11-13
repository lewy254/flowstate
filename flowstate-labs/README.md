# Flowstate Labs — Landing Page

Website for Flowstate Labs: calm, considered software that makes everyday life easier.
Built with React and Vite.

## Structure

- `index.html`, `privacy-policy/index.html`, `terms-of-service/index.html` — one HTML entry per route
- `src/entries/` — mounts each page into `#root`
- `src/pages/` — page components (`HomePage`, `PrivacyPage`, `TermsPage`)
- `src/components/` — shared header, footer, legal layout, hero particle field
- `src/hooks/` — theme toggle and scroll-reveal hooks
- `src/styles.css` — design system
- `src/assets/hero-meditating.svg` — hero illustration (inlined at build time)
- `public/assets/` — logo, favicon, and brand icons (served at `/assets/...`)

## App-specific privacy

Product-specific policies (when needed) live at `/<app-name>/privacy/index.html`
and supplement the general policy at `/privacy-policy`. Add them as extra HTML
entries in `vite.config.js` so they are included in the build.

## Running locally

```bash
npm install
npm run dev
```

Then visit http://localhost:5173, http://localhost:5173/privacy-policy, and http://localhost:5173/terms-of-service.

## Building

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally
```
