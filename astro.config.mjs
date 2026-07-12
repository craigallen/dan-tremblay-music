import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://dantremblaymusic.com',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind()],
  security: {
    checkOrigin: false,
  },
});
