<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    block?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    block: false,
    type: 'button',
  },
)
</script>

<template>
  <button
    class="base-button"
    :class="[
      `base-button-${props.variant}`,
      `base-button-${props.size}`,
      { 'base-button-block': props.block },
    ]"
    :disabled="props.disabled || props.loading"
    :type="props.type"
  >
    <span v-if="props.loading">Chargement...</span>
    <slot v-else />
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.8rem;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
  cursor: pointer;
}

.base-button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.base-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.base-button-block {
  width: 100%;
}

.base-button-sm {
  padding: 0.55rem 0.85rem;
  font-size: 0.85rem;
}

.base-button-md {
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
}

.base-button-lg {
  padding: 0.9rem 1.2rem;
  font-size: 1rem;
}

.base-button-primary {
  background: #0f766e;
  color: #f8fafc;
}

.base-button-secondary {
  background: #e2e8f0;
  color: #0f172a;
}

.base-button-ghost {
  background: transparent;
  border-color: var(--color-border);
  color: var(--color-text);
}

.base-button-danger {
  background: #b91c1c;
  color: #fef2f2;
}
</style>
