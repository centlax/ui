<template>
  <div :class="ui.wrapper">
    <input
      :id="inputId"
      ref="input"
      :name="name"
      :value="props.modelValue"
      :type="props.type"
      :required="props.required"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :class="inputUI"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
    >
    <slot />

    <span v-if="props.icon || $slots.leading" :class="leadingWrapperIconUI">
      <slot name="leading" :disabled="disabled">
        <UIcon v-if="props.icon" :name="props.icon" :class="leadingIconUI" />
      </slot>
    </span>

    <span v-if="props.trailingIcon || $slots.trailing" :class="trailingWrapperIconUI">
      <slot name="trailing" :disabled="disabled">
        <UIcon v-if="props.trailingIcon" :name="props.trailingIcon" :class="trailingIconUI" />
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import UIcon from '../../elements/Icon.vue'
import { defu } from 'defu'
import { looseToNumber } from '../../../utils'
import ui from './input.css'
import type { Input } from '#ui/types'

const slots = useSlots()

defineOptions({
  components: {
    UIcon
  },
  inheritAttrs: false
})

const props = withDefaults(defineProps<Input>(), {
  modelValue: '',
  type: 'text',
  id: undefined,
  name: undefined,
  placeholder: undefined,
  required: false,
  disabled: false,
  autofocus: false,
  autofocusDelay: 100,
  icon: null,
  trailingIcon: null,
  padded: true,
  size: 'md',
  color: 'white',
  variant: 'outline',
  outlineAuto: false,
  inputClass: '',
  class: '',
  modelModifiers: () => ({})
})

const emit = defineEmits(['update:modelValue', 'blur'])
const { emitFormBlur, emitFormInput, color, inputId, name } = useFormGroup(props, ui)
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
  emitFormInput()
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
  emitFormBlur()
  emit('blur', event)
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})

const inputUI = computed(() => {
  let variantKey = props.color === 'white' ? 'white' : 'gray'
  if (props.outlineAuto) {
    variantKey = 'auto'
  }
  return twMerge(twJoin(
    ui.base,
    ui.form,
    ui.font,
    ui.rounded[props.size],
    ui.placeholder,
    ui.text[props.size],
    props.padded ? ui.padding[props.size] : 'p-0',
    // @ts-ignore
    isWhiteGray(color.value) && ui.color[color.value],
    // @ts-ignore
    !isWhiteGray(color.value) && ui.variant.outline[variantKey].replaceAll('{color}', color.value),
    (props.icon || slots.leading ) && ui.leading.padding[props.size],
    (props.trailingIcon || slots.trailing ) && ui.trailing.padding[props.size]
  ), props.inputClass)
})


const leadingWrapperIconUI = computed(() => {
  return twJoin(
    ui.icon.leading.wrapper,
    ui.icon.trailing.pointer,
    ui.icon.leading.padding[props.size]
  )
})

const leadingIconUI = computed(() => {
  return twJoin(
    ui.icon.base,
    props.color && ui.icon.color.replaceAll('{color}', props.color),
    ui.icon.size[props.size]
  )
})

const trailingWrapperIconUI = computed(() => {
  return twJoin(
    ui.icon.trailing.wrapper,
    ui.icon.trailing.pointer,
    ui.icon.trailing.padding[props.size]
  )
})

const trailingIconUI = computed(() => {
  return twJoin(
    ui.icon.base,
    props.color && (props.color !== 'primary') && ui.icon.color.replaceAll('{color}', props.color),
    ui.icon.size[props.size]
  )
})
</script>
