import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.okamilink.com',
  integrations: [mdx()],
  build: {
    format: 'directory',
  },
  server: {
    port: 3000,
    host: true,
  },
  // View Transitions will be added directly in BaseLayout
});
