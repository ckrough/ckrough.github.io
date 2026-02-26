import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.krough.org',
  trailingSlash: 'never',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
