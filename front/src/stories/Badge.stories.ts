import type { Meta, StoryObj } from '@storybook/vue3-vite'

import BaseBadge from '../components/ui/BaseBadge.vue'

const meta = {
  title: 'DataDisplay/BaseBadge',
  component: BaseBadge,
  tags: ['autodocs'],
  args: {
    label: 'Nouveau',
    variant: 'neutral',
    size: 'md',
    dot: false,
    rounded: true,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof BaseBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => ({
    components: { BaseBadge },
    template: `
      <div style="display:flex; flex-wrap:wrap; gap:0.7rem;">
        <BaseBadge variant="neutral">Neutral</BaseBadge>
        <BaseBadge variant="primary">Primary</BaseBadge>
        <BaseBadge variant="success" dot>Success</BaseBadge>
        <BaseBadge variant="danger" dot>Danger</BaseBadge>
      </div>
    `,
  }),
}
