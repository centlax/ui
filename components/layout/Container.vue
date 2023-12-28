<template>
  <component :is="as" :class="outerUI" v-bind="$attrs">
    <div :class="innerUI">
      <slot />
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
    default: 'section'
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  },
  padding: {
    type: String as PropType<keyof typeof ui.padding>,
    default: 'md'
  },
  innerClass: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  }

})

const outerUI = computed(() => {
  return twMerge(twJoin(
    ui.base,
    ui.padding[props.padding]
  ), props.class)
})

const innerUI = computed(() => {
  return twMerge(twJoin(
    ui.constrained,
    'mx-auto'
  ), props.innerClass)
})

const ui = {
  base: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-[1rem] w-full',
  padding: {
    xs: 'sm:px-[1.05rem] md:px-[1.10rem] lg:px-[1.15rem] xl:px-[1.20rem] 2xl:px-[1.25rem]',
    sm: 'sm:px-[1.10rem] md:px-[1.20rem] lg:px-[1.30rem] xl:px-[1.40rem] 2xl:px-[1.50rem]',
    md: 'sm:px-[1.20rem] md:px-[1.40rem] lg:px-[1.60rem] xl:px-[1.80rem] 2xl:px-[2.00rem]',
    lg: 'sm:px-[1.30rem] md:px-[1.60rem] lg:px-[1.90rem] xl:px-[2.20rem] 2xl:px-[2.50rem'
  },
  constrained: 'max-w-screen-2xl'
}
</script>
