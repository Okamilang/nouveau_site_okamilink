import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine canonique du site (non-www = version en ligne et indexee par Google)
  site: 'https://okamilink.com',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Exclut les pages legales (en noindex) du sitemap
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/confidentialite'),
    }),
  ],
  build: {
    format: 'directory',
    assets: 'assets',
  },
  server: {
    port: 3000,
    host: true,
  },
});
