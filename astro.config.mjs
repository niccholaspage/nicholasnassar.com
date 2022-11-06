import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  site: "https://www.nicholasnassar.com",
  integrations: [tailwind(), solidJs()],
});
