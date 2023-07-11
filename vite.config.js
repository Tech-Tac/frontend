import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite'
import lightningcss from "vite-plugin-lightningcss"

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    lightningcss(),
    Icons({
      compiler: 'svelte'
    })
  ],
  server: {
    host: "0.0.0.0"
  },
  build: {
    cssMinify: "lightningcss",
  }
};

export default config;
