<template>
  <UTooltip class="capitalize" :open-delay="100" :popper="{ placement: 'top' }">
    <template #text>
      <span class="font-bold">{{ color.value }}</span>
    </template>
    <UButton
      square
      :variant="color.value === selected.value ? 'soft' : 'ghost'"
      @click.stop.prevent="$emit('select')"
    >
      <span class="inline-block w-3 h-3 rounded-full" :style="{ backgroundColor: color.hex }" />
    </UButton>
  </UTooltip>
</template>

<script setup lang="ts">
defineProps<{
  color: { value: string, hex: string },
  selected: { value: string } }>()
defineEmits(['select'])
</script>
