<template>
  <UButton
    :icon="isDark ? 'fluent:weather-moon-24-filled' : 'fluent:weather-sunny-24-filled'"
    v-bind="$attrs"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    @click="isDark = !isDark"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'
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
