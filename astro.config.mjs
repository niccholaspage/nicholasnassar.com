import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  site: "https://www.nicholasmdecker.com",
  integrations: [solidJs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
