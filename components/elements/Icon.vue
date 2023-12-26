<template>
  <Icon :name="props.name" />
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
