<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-fluent-weather-moon-24-filled' : 'i-fluent-weather-sunny-24-filled'"
      :color="props.color"
      :variant="props.variant"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const props = defineProps({
  color: {
    type: String,
    default: 'gray'
  },
  variant: {
    type: String,
    default: 'solid'
  }
})
</script>
