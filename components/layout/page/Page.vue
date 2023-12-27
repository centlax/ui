<template>
  <component
    :is="props.as"
    :class="ui.wrapper"
  >
    <header :class="ui.header">
      <slot name="header" />
    </header>
    <main :class="ui.main">
      <slot />
    </main>
    <footer :class="ui.footer">
      <slot name="footer" />
    </footer>
  </component>
</template>

<script setup lang="ts">

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
  wrapper: 'flex',
  header: 'min-h-4',
  main: 'flex-grow',
  footer: 'min-h-4'
}
</script>
