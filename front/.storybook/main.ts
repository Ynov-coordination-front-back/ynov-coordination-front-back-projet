import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (viteConfig) => {
    viteConfig.plugins = (viteConfig.plugins ?? []).filter((plugin) => {
      const pluginName =
        typeof plugin === 'object' && plugin !== null && 'name' in plugin
          ? String((plugin as { name?: string }).name ?? '')
          : ''

      return !pluginName.includes('vue-devtools') && !pluginName.includes('inspect')
    })

    return viteConfig
  },
}

export default config
