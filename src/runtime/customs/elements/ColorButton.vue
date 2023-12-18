<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'i-fluent-weather-moon-24-filled' : 'i-fluent-weather-sunny-24-filled'"
      v-bind="$attrs"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

defineOptions({
  inheritAttrs: false
})

const colorMode = useColorMode()

// Computed

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    // @ts-ignore
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
