<template>
  <footer v-bind="props" :class="[ui.wrapper]">
    <div v-if="$slots.default">
      <slot />
    </div>
    <div :class="[ui.notice.font, ui.notice.primary]">
      <span class="flex flex-wrap gap-x-1 justify-center">
        <NuxtLink :to="props.to" :class="['hover:underline']"> Centlax</NuxtLink>
        &copy; {{ new Date().getFullYear() }}
      </span>
      <slot v-if="props.notice?.length" name="notice">
        <NuxtLink v-for="(item, index) in props.notice" :key="index" :to="props.to">
          {{ item.label }}
        </NuxtLink>
      </slot>
    </div>
    <div v-if="$slots.social">
      <slot name="social" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { Link } from '#ui/types'

const props = withDefaults(defineProps<{
  to?: string
  title?: string
  notice?: Link[]
  class?: any
}>(), {
  to: 'https://centlax.com',
  title: undefined,
  notice: () => [],
  size: 'md',
  class: undefined
})

const ui = {
  wrapper: 'py-2 bg-white/90 dark:bg-gray-900/90',
  font: 'text-sm',
  notice: {
    font: 'text-sm',
    primary: 'text-primary-600/90 dark:text-primary-500/90'
  }
}
</script>
