import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Fully static output so Netlify can detect the contact form in the
// generated HTML at deploy time (Netlify Forms only parses static HTML).
export default defineConfig({
  site: 'https://dantremblaymusic.com',
  output: 'static',
  integrations: [tailwind()],
  build: {
    // Inline all page CSS into <style> tags so it doesn't block first render.
    inlineStylesheets: 'always',
  },
});
