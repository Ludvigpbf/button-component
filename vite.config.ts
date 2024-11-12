import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@flycktcoding/loaders",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: false, // Disable sourcemaps, change to true if needed
    emptyOutDir: true, // Empty outDir before each build
  },
  plugins: [
    react(),
    dts({
      exclude: ["src/development","index.html"], // Exclude files from dts build
    }),
  ],
});
