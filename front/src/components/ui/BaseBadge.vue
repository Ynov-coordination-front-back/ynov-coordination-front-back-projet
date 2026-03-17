<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    variant?: 'neutral' | 'primary' | 'success' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    dot?: boolean
    rounded?: boolean
  }>(),
  {
    label: '',
    variant: 'neutral',
    size: 'md',
    dot: false,
    rounded: true,
  },
)
</script>

<template>
  <span
    class="base-badge"
    :class="[
      `base-badge-${props.variant}`,
      `base-badge-${props.size}`,
      { 'base-badge-pill': props.rounded },
    ]"
  >
    <span v-if="props.dot" class="base-badge-dot" aria-hidden="true" />
    <slot>{{ props.label }}</slot>
  </span>
</template>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid transparent;
  font-weight: 600;
}

.base-badge-pill {
  border-radius: 999px;
}

.base-badge-sm {
  padding: 0.2rem 0.45rem;
  font-size: 0.72rem;
}

.base-badge-md {
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
}

.base-badge-lg {
  padding: 0.4rem 0.75rem;
  font-size: 0.9rem;
}

.base-badge-neutral {
  background: #e2e8f0;
  color: #1e293b;
}

.base-badge-primary {
  background: #ccfbf1;
  color: #115e59;
}

.base-badge-success {
  background: #dcfce7;
  color: #166534;
}

.base-badge-danger {
  background: #fee2e2;
  color: #991b1b;
}

.base-badge-dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: currentColor;
}
</style>
