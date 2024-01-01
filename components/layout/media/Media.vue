<template>
  <div :class="alertClass" v-bind="$attrs">
    <div
      class="flex"
      :class="[ui.gap, { 'items-start': (description || $slots.description), 'items-center': !description && !$slots.description }]"
    >
      <UIcon v-if="icon" :name="icon" :class="ui.icon.base" />
      <UAvatar v-if="avatar" v-bind="{ size: ui.avatar.size, ...avatar }" :class="ui.avatar.base" />

      <div :class="ui.inner">
        <p :class="ui.title">
          <slot name="title" :title="title">
            {{ title }}
          </slot>
        </p>
        <p v-if="description || $slots.description" :class="ui.description">
          <slot name="description" :description="description">
            {{ description }}
          </slot>
        </p>

        <div v-if="(description || $slots.description) && actions.length" :class="ui.actions">
          <UButton
            v-for="(action, index) of actions"
            :key="index"
            v-bind="{ ...(ui.default.actionButton || {}), ...action }"
            @click.stop="action.click"
          />
        </div>
      </div>
      <div
        v-if="closeButton || (!description && !$slots.description && actions.length)"
        :class="twMerge(ui.actions, 'mt-0')"
      >
        <template v-if="!description && !$slots.description && actions.length">
          <UButton
            v-for="(action, index) of actions"
            :key="index"
            v-bind="{ ...(ui.default.actionButton || {}), ...action }"
            @click.stop="action.click"
          />
        </template>

        <UButton
          v-if="closeButton"
          aria-label="Close"
          v-bind="{ ...(ui.default.closeButton || {}), ...closeButton }"
          @click.stop="$emit('close')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import { UButton, UIcon, UAvatar } from '#build/components'
import ui from './media.css'

defineOptions({
  components: {
    UIcon,
    UAvatar,
    UButton
  },
  inheritAttrs: false
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: () => ui.default.icon
  },
  avatar: {
    type: String,
    default: null
  },
  closeButton: {
    type: Object,
    default: () => ui.default.closeButton
  },
  actions: {
    type: Array as PropType<(typeof UButton & { click?: Function })[]>,
    default: () => []
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
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  }
})

defineEmits(['close'])

const alertClass = computed(() => {
  return twMerge(twJoin(
    ui.wrapper,
    ui.rounded,
    ui.shadow,
    ui.padding,
    ui.variant[props.variant].replaceAll('{color}', props.color)  // Type assertion here
  ), props.class)
})

</script>
