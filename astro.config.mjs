import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [
    tailwind(),
  ],
  output: 'static',
  adapter: vercel(),
  site: 'https://your-domain.com', // Replace with your actual domain
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    ssr: {
      noExternal: ['astro-seo']
    }
  }
}); 