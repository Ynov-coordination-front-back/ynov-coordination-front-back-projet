import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const isStorybook = process.env.STORYBOOK === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vite-plugin-vue-devtools embarque vite-plugin-inspect qui est incompatible
    // avec le builder Vite de Storybook — on le désactive dans ce contexte
    !isStorybook && vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
