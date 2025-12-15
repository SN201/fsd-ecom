// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import svgr from "vite-plugin-svgr";
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

// vite.config.ts
/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 🟢 FIX 1: Exclude SVGs from Vite's default asset handling
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.webp"],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/shared/test/setupTest.ts",
  },
});
