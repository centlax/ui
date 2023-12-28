<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'fluent:weather-moon-24-filled' : 'fluent:weather-sunny-24-filled'"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click=" isDark = !isDark"
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
    {{ isDark }} {{ colorMode.preference }} {{ colorMode.value }} {{ colorMode.forced }}
  </ClientOnly>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

