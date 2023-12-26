<template>
  <div :class="ui.wrapper">
    <input
      :id="props.id"
      ref="input"
      :name="props.name"
      :value="props.modelValue"
      :type="props.type"
      :required="props.required"
      :placeholder="props.placeholder"
      :disabled="props.disabled || props.loading"
      :class="inputClass"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
    >
    <slot />

    <span v-if="(isLeading && leadingIconName) || $slots.leading" :class="leadingWrapperIconClass">
      <slot name="leading" :disabled="disabled" :loading="loading">
        <UIcon :name="leadingIconName" :class="leadingIconClass" />
      </slot>
    </span>

    <span v-if="(isTrailing && trailingIconName) || $slots.trailing" :class="trailingWrapperIconClass">
      <slot name="trailing" :disabled="disabled" :loading="loading">
        <UIcon :name="trailingIconName" :class="trailingIconClass" />
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, useSlots } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import UIcon from '../../elements/Icon.vue'
import { defu } from 'defu'
import { looseToNumber } from '../../../utils'
import ui from './input.css'

const slots = useSlots()

defineOptions({
  components: {
    UIcon
  },
  inheritAttrs: false
})


const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  autofocusDelay: {
    type: Number,
    default: 100
  },
  icon: {
    type: String,
    default: null
  },
  loadingIcon: {
    type: String,
    default: () => ui.default.loadingIcon
  },
  leadingIcon: {
    type: String,
    default: null
  },
  trailingIcon: {
    type: String,
    default: null
  },
  trailing: {
    type: Boolean,
    default: false
  },
  leading: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  padded: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<keyof typeof ui.size>,
    default: () => ui.default.size,
    validator (value: string) {
      return Object.keys(ui.size).includes(value)
    }

  },
  color: {
    type: String as PropType<keyof typeof ui.color>,
    default: () => ui.default.color
  },
  variant: {
    type: String as PropType<keyof typeof ui.variant>,
    default: () => ui.default.variant
  },
  inputClass: {
    type: String,
    default: null
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  },
  modelModifiers: {
    type: Object as PropType<{ trim?: boolean, lazy?: boolean, number?: boolean }>,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'blur'])

const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false }))

const input = ref<HTMLInputElement | null>(null)

const autoFocus = () => {
  if (props.autofocus) {
    input.value?.focus()
  }
}

// Custom function to handle the v-model properties
const updateInput = (value: string) => {

  if (modelModifiers.value.trim) {
    value = value.trim()
  }

  if (modelModifiers.value.number || props.type === 'number') {
    value = looseToNumber(value)
  }
  emit('update:modelValue', value)
}

const onInput = (event: Event) => {
  if (!modelModifiers.value.lazy) {
    updateInput((event.target as HTMLInputElement).value)
  }
}

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  if (modelModifiers.value.lazy) {
    updateInput(value)
  }

  // Update trimmed input so that it has same behaviour as native input https://github.com/vuejs/core/blob/5ea8a8a4fab4e19a71e123e4d27d051f5e927172/packages/runtime-dom/src/directives/vModel.ts#L63
  if (modelModifiers.value.trim) {
    (event.target as HTMLInputElement).value = value.trim()
  }
}

const onBlur = (event: FocusEvent) => {
  emit('blur', event)
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})

const inputClass = computed(() => {
  const variant = ui.color?.[props.color as string]?.[props.variant as string] || ui.variant[props.variant]

  return twMerge(twJoin(
    ui.base,
    ui.form,
    ui.font,
    ui.rounded[props.size],
    ui.placeholder,
    ui.size[props.size],
    props.padded ? ui.padding[props.size] : 'p-0',
    variant?.replaceAll('{color}', props.color),
    (isLeading.value || slots.leading) && ui.leading.padding[props.size],
    (isTrailing.value || slots.trailing) && ui.trailing.padding[props.size]
  ), props.inputClass)
})

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || (props.loading && !props.trailing) || props.leadingIcon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
})

const leadingIconName = computed(() => {
  if (props.loading) {
    return props.loadingIcon
  }

  return props.leadingIcon || props.icon
})

const trailingIconName = computed(() => {
  if (props.loading && !isLeading.value) {
    return props.loadingIcon
  }

  return props.trailingIcon || props.icon
})

const leadingWrapperIconClass = computed(() => {
  return twJoin(
    ui.icon.leading.wrapper,
    ui.icon.leading.pointer,
    ui.icon.leading.padding[props.size]
  )
})

const leadingIconClass = computed(() => {
  return twJoin(
    ui.icon.base,
    props.color && ui.icon.color.replaceAll('{color}', props.color),
    ui.icon.size[props.size],
    props.loading && ui.icon.loading
  )
})

const trailingWrapperIconClass = computed(() => {
  return twJoin(
    ui.icon.trailing.wrapper,
    ui.icon.trailing.pointer,
    ui.icon.trailing.padding[props.size]
  )
})

const trailingIconClass = computed(() => {
  return twJoin(
    ui.icon.base,
    props.color && ui.icon.color.replaceAll('{color}', props.color),
    ui.icon.size[props.size],
    props.loading && !isLeading.value && ui.icon.loading
  )
})


</script>
