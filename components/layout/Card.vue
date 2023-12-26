<template>
  <component
    :is="$attrs.onSubmit ? 'form' : as"
    :class="cardUI"
    v-bind="$attrs"
  >
    <div v-if="$slots.header" :class="[ui.header.base, ui.header.padding, ui.header.background]">
      <slot name="header" />
    </div>
    <div :class="[ui.body.base, ui.body.padding, ui.body.background]">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="[ui.footer.base, ui.footer.padding, ui.footer.background]">
      <slot name="footer" />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  }
})

const ui = {
  base: 'overflow-hidden',
  background: 'bg-white dark:bg-gray-900',
  divide: 'divide-y divide-gray-200 dark:divide-gray-800',
  ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
  rounded: 'rounded-lg',
  shadow: 'shadow',
  body: {
    base: '',
    background: '',
    padding: 'px-4 py-5 sm:p-6'
  },
  header: {
    base: '',
    background: '',
    padding: 'px-4 py-5 sm:px-6'
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-4 py-4 sm:px-6'
  }
}

const cardUI = computed(() => {
  return twMerge(twJoin(
    ui.base,
    ui.rounded,
    ui.divide,
    ui.ring,
    ui.shadow,
    ui.background
  ), props.class)
})
</script>
