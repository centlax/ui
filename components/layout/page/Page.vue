<template>
  <component
    :is="props.as"
    :class="ui.wrapper"
  >
    <header v-if="$slots.header" :class="headerUI">
      <slot name="header" />
    </header>
    <main :class="ui.main">
      <slot />
    </main>
    <footer v-if="$slots.footer" :class="ui.footer">
      <slot name="footer" />
    </footer>
  </component>
</template>

<script setup lang="ts">
import { twJoin } from 'tailwind-merge'

const props = defineProps({
  as: {
    type: String,
    default: 'section'
  },
  sticky: {
    type: Boolean,
    default: false
  }
})

const ui = {
  wrapper: 'flex flex-col min-h-screen',
  header: 'min-h-4',
  main: 'flex-grow',
  footer: 'min-h-4'
}

const headerUI = computed(() => {
  return twJoin(
    ui.header,
    props.sticky && 'sticky top-0 z-50'
  )
})
</script>
