import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Tommy-Hck.github.io',
  base: 'portfolio',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
