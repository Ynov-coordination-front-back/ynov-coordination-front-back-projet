import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

import BaseInput from '../components/ui/BaseInput.vue'

type ConfettiPiece = {
  id: number
  left: number
  drift: number
  size: number
  delay: number
  duration: number
  rotate: number
  color: string
}

const confettiColors = ['#ff6b6b', '#ffd166', '#06d6a0', '#4dabf7', '#f06595']

const meta = {
  title: 'Form/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  args: {
    label: 'Nom de scène',
    placeholder: 'text',
    helperText: 'Cet input est reusable et compatible v-model.',
    disabled: false,
    required: false,
    type: 'text',
    variant: 'outline',
    size: 'md',
  },
  argTypes: {
    modelValue: { control: false },
    id: { control: 'text' },
    name: { control: 'text' },
    autocomplete: { control: 'text' },
    error: { control: 'text' },
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof BaseInput>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args: Story['args']) => ({
    components: { BaseInput },
    setup() {
      const value = ref('')
      const confettiPieces = ref<ConfettiPiece[]>([])
      let nextId = 0

      function triggerConfetti() {
        confettiPieces.value = Array.from({ length: 28 }, () => ({
          id: nextId++,
          left: Math.random() * 100,
          drift: Math.random() * 220 - 110,
          size: Math.random() * 8 + 6,
          delay: Math.random() * 150,
          duration: Math.random() * 600 + 1000,
          rotate: Math.random() * 720 - 360,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)] ?? '#14b8a6',
        }))

        window.setTimeout(() => {
          confettiPieces.value = []
        }, 1900)
      }

      watch(value, (nextValue, previousValue) => {
        const normalizedValue = nextValue.trim().toLowerCase()
        const normalizedPreviousValue = previousValue?.trim().toLowerCase() ?? ''
        if (
          normalizedValue.includes('stage')
          && !normalizedPreviousValue.includes('stage')
        ) {
          triggerConfetti()
        }
      })

      return { args, value, confettiPieces }
    },
    template: `
      <div class="input-story-shell">
        <BaseInput v-bind="args" v-model="value" />
        <p class="input-story-value">Valeur actuelle: <strong>{{ value || '(vide)' }}</strong></p>

        <div class="confetti-layer" aria-hidden="true">
          <span
            v-for="piece in confettiPieces"
            :key="piece.id"
            class="confetti-piece"
            :style="{
              left: piece.left + '%',
              width: piece.size + 'px',
              height: piece.size * 0.5 + 'px',
              '--confetti-color': piece.color,
              '--confetti-drift': piece.drift + 'px',
              '--confetti-delay': piece.delay + 'ms',
              '--confetti-duration': piece.duration + 'ms',
              '--confetti-rotate': piece.rotate + 'deg',
            }"
          />
        </div>
      </div>
    `,
  }),
}
