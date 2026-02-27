<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    id?: string
    label?: string
    placeholder?: string
    type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
    name?: string
    disabled?: boolean
    required?: boolean
    autocomplete?: string
    helperText?: string
    error?: string
  }>(),
  {
    modelValue: '',
    placeholder: '',
    type: 'text',
    name: undefined,
    disabled: false,
    required: false,
    autocomplete: 'off',
    helperText: '',
    error: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const generatedId = `input-${Math.random().toString(36).slice(2, 10)}`
const inputId = computed(() => props.id || generatedId)
const hasError = computed(() => Boolean(props.error))
const hintId = computed(() => `${inputId.value}-hint`)

const value = computed({
  get: () => props.modelValue,
  set: (nextValue: string) => emit('update:modelValue', nextValue),
})

function onBlur(event: FocusEvent) {
  emit('blur', event)
}

function onFocus(event: FocusEvent) {
  emit('focus', event)
}
</script>

<template>
  <div class="input-field">
    <label v-if="label" class="input-label" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      v-model="value"
      class="input-control"
      :class="{ 'input-control-error': hasError }"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
      :aria-invalid="hasError"
      :aria-describedby="hintId"
      @blur="onBlur"
      @focus="onFocus"
    />
    <p :id="hintId" class="input-hint" :class="{ 'input-hint-error': hasError }">
      {{ error || helperText }}
    </p>
  </div>
</template>

<style scoped>
.input-field {
  width: 100%;
  display: grid;
  gap: 0.35rem;
}

.input-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-heading);
}

.input-control {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 0.65rem;
  background: var(--color-background);
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.4;
  padding: 0.7rem 0.8rem;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.input-control::placeholder {
  color: color-mix(in srgb, var(--color-text) 50%, transparent);
}

.input-control:focus {
  outline: none;
  border-color: #14b8a6;
  box-shadow: 0 0 0 3px color-mix(in srgb, #14b8a6 18%, transparent);
}

.input-control:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.input-control-error {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px color-mix(in srgb, #dc2626 14%, transparent);
}

.input-hint {
  min-height: 1.1rem;
  font-size: 0.78rem;
  color: color-mix(in srgb, var(--color-text) 72%, transparent);
}

.input-hint-error {
  color: #dc2626;
}
</style>
