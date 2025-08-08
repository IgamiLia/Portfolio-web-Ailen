// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
        "@lib": path.resolve("./src/lib"),
        "@pages": path.resolve("./src/pages"),
        "@assets": path.resolve("./src/assets"),
        "@styles": path.resolve("./src/styles"),
      },
    },
  },
});
