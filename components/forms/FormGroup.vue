<template>
  <div :class="ui.wrapper" v-bind="$attrs">
    <div v-if="label || $slots.label" :class="[ui.label.wrapper]">
      <label :for="inputId" :class="[ui.label.base, required ? ui.label.required : '']">
        <slot v-if="$slots.label" name="label" v-bind="{ error, label, name, hint, help }" />
        <template v-else>{{ label }}</template>
      </label>
      <span v-if="hint || $slots.hint" :class="[ui.hint]">
        <slot v-if="$slots.hint" name="hint" v-bind="{ error, label, name, hint, help }" />
        <template v-else>{{ hint }}</template>
      </span>
    </div>


    <div :class="[label ? ui.container : '']">
      <slot v-bind="{ error }" />

      <p v-if="(typeof error === 'string' && error) || $slots.error" :class="[ui.error]">
        <slot v-if="$slots.error" name="error" v-bind="{ error, label, name, hint, help }" />
        <template v-else>
          {{ error }}
        </template>
      </p>
      <p v-else-if="help || $slots.help" :class="[ui.help]">
        <slot v-if="$slots.help" name="help" v-bind="{ error, label, name, hint, help }" />
        <template v-else>
          {{ help }}
        </template>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, inject, ref } from 'vue'
import type { Ref, PropType } from 'vue'
import type { FormError, InjectedFormGroupValue } from '#ui/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  name: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  required: {
    type: Boolean,
    default: false
  },
  help: {
    type: String,
    default: null
  },
  error: {
    type: [String, Boolean],
    default: null
  },
  hint: {
    type: String,
    default: null
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  },
  eagerValidation: {
    type: Boolean,
    default: false
  }
})


const formErrors = inject<Ref<FormError[]> | null>('form-errors', null)
const error = computed(() => {
  return (props.error && typeof props.error === 'string') || typeof props.error === 'boolean'
    ? props.error
    : formErrors?.value?.find((error) => error.path === props.name)?.message
})

const inputId = ref()
provide<InjectedFormGroupValue>('form-group', {
  error,
  inputId,
  name: computed(() => props.name),
  eagerValidation: computed(() => props.eagerValidation)
})

const ui = {
  wrapper: '',
  label: {
    wrapper: 'flex content-center items-center justify-between',
    base: 'block text-sm font-medium text-gray-900 dark:text-white',
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-danger-600 dark:after:text-danger-500`
  },
  container: 'mt-2 relative',
  description: 'text-gray-600 dark:text-gray-500',
  hint: 'text-gray-600 dark:text-gray-500',
  help: 'mt-2 text-sm text-gray-900 dark:text-gray-300',
  error: 'mt-2 text-sm text-danger-600 dark:text-danger-500',
  default: {
    size: 'md'
  }
}
</script>
