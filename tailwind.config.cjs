const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "typing-and-blink-caret": "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
      },
      keyframes: {
        typing: {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },
        "blink-caret": {
          "from, to": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "orange",
          },
        },
      },
    },
  },
  plugins: [],
};
