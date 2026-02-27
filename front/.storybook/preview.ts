import type { Preview } from '@storybook/vue3-vite'

import '../src/assets/main.css'
import '../src/stories/input-story.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
