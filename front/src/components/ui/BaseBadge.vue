<script setup lang="ts">
import { computed } from 'vue'

type BadgeVariant = 'neutral' | 'primary' | 'success' | 'danger'
type BadgeSize = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    label?: string
    variant?: BadgeVariant
    size?: BadgeSize
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

const badgeClasses = computed(() => [
  'base-badge',
  `base-badge-${props.variant}`,
  `base-badge-${props.size}`,
  {
    'base-badge-rounded': props.rounded,
  },
])
</script>

<template>
  <span :class="badgeClasses" role="status" aria-live="polite">
    <span v-if="dot" class="base-badge-dot" aria-hidden="true" />
    <slot>{{ label || 'Badge' }}</slot>
  </span>
</template>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid transparent;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
}

.base-badge-rounded {
  border-radius: 999px;
}

.base-badge-sm {
  font-size: 0.72rem;
  padding: 0.22rem 0.5rem;
}

.base-badge-md {
  font-size: 0.8rem;
  padding: 0.3rem 0.62rem;
}

.base-badge-lg {
  font-size: 0.88rem;
  padding: 0.4rem 0.74rem;
}

.base-badge-neutral {
  background: var(--color-background-soft);
  border-color: var(--color-border);
  color: var(--color-text);
}

.base-badge-primary {
  background: color-mix(in srgb, #16a34a 16%, transparent);
  border-color: color-mix(in srgb, #16a34a 45%, transparent);
  color: #166534;
}

.base-badge-success {
  background: color-mix(in srgb, #0ea5e9 16%, transparent);
  border-color: color-mix(in srgb, #0ea5e9 45%, transparent);
  color: #0369a1;
}

.base-badge-danger {
  background: color-mix(in srgb, #dc2626 14%, transparent);
  border-color: color-mix(in srgb, #dc2626 40%, transparent);
  color: #991b1b;
}

.base-badge-dot {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 999px;
  background: currentColor;
}
</style>
