<template>
  <component :is="props.as" :class="wrapperUI">
    <div :class="leftUI">
      <slot name="left">
        <slot name="right">
          <UButton :padded="false" size="xl" variant="ghost" :color="props.color" :icon="ui.icon.info" />
        </slot>
      </slot>
    </div>
    <div>
      <h4 class="text-sm font-bold">
        {{ props.title }}
      </h4>
      <p class="mt-1 text-sm">
        {{ props.description }}
      </p>
    </div>
    <div :class="leftUI">
      <slot name="right">
        <UButton
          square
          size="xs"
          variant="outline"
          :color="props.color"
          :icon="ui.icon.close"
          @click="isOpen = true"
        />
      </slot>
    </div>
  </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import ui from './alert.css'
const isOpen = ref(false)
const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  title: {
    type: String,
    default: 'Lorem ipsum'
  },
  description: {
    type: String,
    default: 'Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem'
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
  class: {
    type: String,
    default: ''
  },
  position: {
    type: String as PropType<keyof typeof ui.position>,
    default: () => ui.default.position
  },
  close: {
    type: Boolean,
    default: false
  }
})
defineEmits(['close'])
const wrapperUI = computed(() => {
  return twMerge(twJoin(
    (props.close || isOpen ) && 'hidden',
    ui.wrapper,
    ui.rounded[props.size],
    ui.shadow,
    ui.padding,
    isWhiteGray(props.color) && ui.color[props.color],
    !isWhiteGray(props.color) && ui.variant[props.variant].replaceAll('{color}', props.color)
  ), props.class)
})

const leftUI = computed(() => {
  return twMerge(twJoin(
    ui.position[props.position]
  ))
})
</script>
