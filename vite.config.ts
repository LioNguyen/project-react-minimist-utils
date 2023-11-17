import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";

export default defineConfig(() => ({
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "minimalist-react-utils",
      formats: ["es", "cjs"],
      fileName: (format) =>
        `minimalist-react-utils.${format === "cjs" ? "cjs" : "es.js"}`,
    },
    optimizeDeps: {
      exclude: Object.keys(packageJson.peerDependencies),
    },
    outDir: "dist",
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/assets": resolve(__dirname, "./src/assets"),
      "@/constants": resolve(__dirname, "./src/constants"),
      "@/components": resolve(__dirname, "./src/components"),
      "@/hooks": resolve(__dirname, "./src/hooks"),
      "@/stories": resolve(__dirname, "./src/stories"),
      "@/utils": resolve(__dirname, "./src/utils"),
    },
    dedupe: ["react", "react-dom"],
  },
}));
