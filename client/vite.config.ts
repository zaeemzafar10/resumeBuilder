import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@shared": path.resolve("../shared"),
      "@assets": path.resolve("../attached_assets"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});