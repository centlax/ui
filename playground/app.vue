<template>
  <UContainer class="min-h-screen flex items-center">
    <UCard class="flex-1" :ui="{ background: 'bg-transparent', ring: 'ring-1 ring-gray-300 dark:ring-gray-700', divide: 'divide-y divide-gray-300 dark:divide-gray-700', header: { base: 'font-bold' } }">
      <template #header>
        Welcome to the playground!
      </template>

      <UInput />
      <UButton label="Log in" block class="mt-4" />
    </UCard>
  </UContainer>
</template>

<script setup>

</script>

<style>
body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>
