import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.silver-hh.click',
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});