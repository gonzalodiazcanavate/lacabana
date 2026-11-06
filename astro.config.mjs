import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://reformaslacabanha.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: false,
  integrations: [sitemap({ lastmod: new Date() })],
  vite: { plugins: [tailwindcss()] },
});
