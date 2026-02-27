<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonType = 'button' | 'submit' | 'reset'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    type?: ButtonType
    disabled?: boolean
    loading?: boolean
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    loading: false,
    block: false,
  },
)

const isDisabled = computed(() => props.disabled || props.loading)
const buttonClasses = computed(() => [
  'base-button',
  `base-button-${props.variant}`,
  `base-button-${props.size}`,
  {
    'base-button-block': props.block,
    'base-button-loading': props.loading,
  },
])
</script>

<template>
  <button :type="type" :disabled="isDisabled" :class="buttonClasses">
    <span v-if="loading" class="base-button-loader" aria-hidden="true" />
    <span>
      <slot>{{ loading ? 'Chargement...' : 'Action' }}</slot>
    </span>
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border: 1px solid transparent;
  border-radius: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1;
  cursor: pointer;
  transition:
    transform 0.12s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.base-button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.base-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, #10b981 20%, transparent);
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.base-button-primary {
  color: #ffffff;
  background: linear-gradient(180deg, #22c55e, #16a34a);
  border-color: #15803d;
}

.base-button-primary:hover:not(:disabled) {
  box-shadow: 0 8px 18px color-mix(in srgb, #16a34a 25%, transparent);
}

.base-button-secondary {
  color: var(--color-heading);
  background: var(--color-background-soft);
  border-color: var(--color-border-hover);
}

.base-button-secondary:hover:not(:disabled) {
  background: color-mix(in srgb, var(--color-background-soft) 84%, #ffffff);
}

.base-button-ghost {
  color: var(--color-heading);
  background: transparent;
  border-color: var(--color-border);
}

.base-button-ghost:hover:not(:disabled) {
  background: color-mix(in srgb, var(--color-background-soft) 70%, transparent);
}

.base-button-danger {
  color: #ffffff;
  background: linear-gradient(180deg, #ef4444, #dc2626);
  border-color: #b91c1c;
}

.base-button-danger:hover:not(:disabled) {
  box-shadow: 0 8px 18px color-mix(in srgb, #dc2626 25%, transparent);
}

.base-button-sm {
  min-height: 2rem;
  padding: 0.45rem 0.75rem;
  font-size: 0.82rem;
}

.base-button-md {
  min-height: 2.4rem;
  padding: 0.62rem 1rem;
  font-size: 0.92rem;
}

.base-button-lg {
  min-height: 2.8rem;
  padding: 0.78rem 1.2rem;
  font-size: 1rem;
}

.base-button-block {
  width: 100%;
}

.base-button-loader {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 999px;
  border: 2px solid color-mix(in srgb, #ffffff 65%, transparent);
  border-top-color: transparent;
  animation: base-button-spin 0.8s linear infinite;
}

@keyframes base-button-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
