import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Multi-page build: each route is its own HTML entry so URLs stay
// /, /privacy-policy and /terms-of-service on any static host.
const page = (path) => fileURLToPath(new URL(path, import.meta.url));

// Redirect /privacy-policy -> /privacy-policy/ (and the same for terms) so
// the dev and preview servers serve the page instead of the SPA fallback.
const trailingSlashPages = /^\/(privacy-policy|terms-of-service)$/;
function trailingSlash(req, res, next) {
  const path = req.url.split("?")[0];
  if (trailingSlashPages.test(path)) {
    res.statusCode = 301;
    res.setHeader("Location", `${path}/${req.url.slice(path.length)}`);
    res.end();
    return;
  }
  next();
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "legal-trailing-slash",
      configureServer(server) {
        server.middlewares.use(trailingSlash);
      },
      configurePreviewServer(server) {
        server.middlewares.use(trailingSlash);
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        home: page("./index.html"),
        privacy: page("./privacy-policy/index.html"),
        terms: page("./terms-of-service/index.html"),
      },
    },
  },
});
