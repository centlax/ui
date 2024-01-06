<template>
  <ULink
    :to="props.to"
    :primary="false"
    type="button"
    :disabled="disabled || loading"
    :class="buttonUI"
    v-bind="$attrs"
  >
    <slot name="leading" :disabled="disabled" :loading="loading">
      <UIcon v-if="leadingIcon" :name="leadingIcon" :class="leadingIconUI" aria-hidden="true" />
    </slot>

    <slot>
      <span v-if="label" :class="[truncate ? ui.truncate : '']"> {{ props.label }} </span>
    </slot>

    <slot name="trailing" :disabled="disabled">
      <UIcon
        v-if="props.trailingIcon"
        :name="props.trailingIcon"
        :class="trailingIconUI"
        aria-hidden="true"
      />
    </slot>
  </ULink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import { UIcon, ULink } from '#components'
import ui from './button.css'
import type { Button } from '../../../types'
const slots = useSlots()

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<Button>(), {
  to: undefined,
  label: undefined,
  block: false,
  loading: false,
  disabled: false,
  padded: true,
  square: false,
  truncate: false,
  iconColor: false,
  icon: null,
  trailingIcon: null,
  size: 'md',
  color: 'primary',
  variant: 'solid',
  loadingIcon: 'heroicons:arrow-path-20-solid',
  class: ''
})

const isSquare = computed(() => props.square || (!slots.default && !props.label))
const buttonUI = computed(() => {
  return twMerge(twJoin(
    ui.base, ui.font,
    ui.rounded[props.size],
    ui.text[props.size],
    ui.gap[props.size],
    props.padded && ui[isSquare.value ? 'square' : 'padding'][props.size],
    isWhiteGray(props.color) && ui.color[props.color],
    !isWhiteGray(props.color) && ui.variant[props.variant].replaceAll('{color}', props.color),
    props.block ? ui.block : ui.inline
  ), props.class)
})

const leadingIcon = computed(() => {
  return props.loading ? ui.default.loadingIcon : props.icon
})

const leadingIconUI = computed(() => {
  return twJoin(
    ui.icon.base,
    ui.icon.size[props.size],
    props.iconColor && isWhiteGray(props.color) && ui.icon.color,
    props.loading && ui.icon.loading
  )
})

const trailingIconUI = computed(() => {
  return twJoin(
    ui.icon.base,
    ui.icon.size[props.size],
    props.loading && ui.icon.loading
  )
})
</script>
