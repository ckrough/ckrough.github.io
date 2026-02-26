import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.krough.org',
  trailingSlash: 'never',
  integrations: [tailwind()],
  output: 'static',
});
