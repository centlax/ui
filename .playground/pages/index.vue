<script setup>
const isOpen = ref(false)
</script>

<template>
  <div class="p-4 flex justify-center items-center">
    <UButton label="Open" @click="isOpen = true" />
    <UColorButton />
    <UColorPicker />

    <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <UPlaceholder class="h-full" />
      </div>
    </USlideover>
    <ULink to="/">wqf</ULink>
  </div>
</template>

