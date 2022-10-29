import Unocss from "unocss/astro";

import { defineConfig } from "astro/config";
import { presetUno } from "unocss";

// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss({
      presets: [presetUno()],
    }),
  ],
});
