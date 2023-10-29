import { theme } from "./src/theme/theme";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: theme,

  // The output directory for your css system
  outdir: "styled-system",
});
