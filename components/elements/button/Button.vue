<template>
  <ULink :type="type" :disabled="disabled || loading" :class="buttonClass" v-bind="$attrs">
    <slot name="leading" :disabled="disabled" :loading="loading">
      <UIcon v-if="isLeading && leadingIconName" :name="leadingIconName" :class="leadingIconClass" aria-hidden="true" />
    </slot>

    <slot>
      <span v-if="label" :class="[truncate ? ui.truncate : '']">
        {{ props.label }}
      </span>
    </slot>

    <slot name="trailing" :disabled="disabled" :loading="loading">
      <UIcon
        v-if="isTrailing && trailingIconName"
        :name="trailingIconName"
        :class="trailingIconClass"
        aria-hidden="true"
      />
    </slot>
  </ULink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import ULink from '../Link.vue'
import UIcon from '../Icon.vue'
import ui from './button.css'
const slots = useSlots()

defineOptions({
  components: {
    UIcon,
    ULink
  },
  inheritAttrs: false
})
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  block: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  padded: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<keyof typeof ui.size>,
    default: () => ui.default.size
  },
  color: {
    type: String as PropType<keyof typeof ui.color>,
    default: () => ui.default.color
  },
  variant: {
    type: String as PropType<keyof typeof ui.variant>,
    default: () => ui.default.variant
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
  square: {
    type: Boolean,
    default: false
  },
  truncate: {
    type: Boolean,
    default: false
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  }
})



const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || (props.loading && !props.trailing) || props.leadingIcon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
})

const isSquare = computed(() => props.square || (!slots.default && !props.label))

const buttonClass = computed(() => {
  return twMerge(twJoin(
    ui.base,
    ui.font,
    ui.rounded,
    ui.text[props.size],
    ui.gap[props.size],
    props.padded && ui[isSquare.value ? 'square' : 'padding'][props.size],
    ui.variant[props.variant].replaceAll('{color}', props.color),
    props.block ? ui.block : ui.inline
  ), props.class)
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

const leadingIconClass = computed(() => {
  return twJoin(
    ui.icon.base,
    ui.icon.size[props.size],
    props.loading && ui.icon.loading
  )
})

const trailingIconClass = computed(() => {
  return twJoin(
    ui.icon.base,
    ui.icon.size[props.size],
    props.loading && !isLeading.value && ui.icon.loading
  )
})


</script>
