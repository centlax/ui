<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      v-bind="$attrs"
      :icon="isDark ? 'fluent:weather-moon-24-filled' : 'fluent:weather-sunny-24-filled'"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click=" isDark = !isDark"
    />
    <template #fallback>
      <UButton v-bind="$attrs" :icon="isDark ? 'fluent:weather-moon-24-filled' : 'fluent:weather-sunny-24-filled'" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
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

