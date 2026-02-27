import type { Meta, StoryObj } from '@storybook/vue3-vite'

import BaseButton from '../components/ui/BaseButton.vue'

const meta = {
  title: 'Form/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    block: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <div style="width:min(480px,92vw); display:grid; gap:0.8rem;">
        <BaseButton v-bind="args">Valider</BaseButton>
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display:flex; flex-wrap:wrap; gap:0.75rem;">
        <BaseButton variant="primary">Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton variant="danger">Danger</BaseButton>
      </div>
    `,
  }),
}
