import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(() => {
  const isStorybook =
    process.argv.some((arg) => arg.includes('storybook'))
    || process.env.STORYBOOK === 'true'
    || process.env.npm_lifecycle_event === 'storybook'
    || process.env.npm_lifecycle_event === 'build-storybook'

  return {
    plugins: [vue(), ...(isStorybook ? [] : [vueDevTools()])],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
