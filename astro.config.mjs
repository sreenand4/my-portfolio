// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  site: 'https://sreenand4.github.io',
  base: '/my-portfolio',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['gsap'],
    },
  }
});