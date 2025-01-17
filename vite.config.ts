import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte"
    }),
    ViteImageOptimizer()
  ],
  server: {
    host: "0.0.0.0",
  },
  build: {
    cssMinify: "lightningcss"
  }
});
