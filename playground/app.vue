<template>
  <UContainer class="min-h-screen flex items-center">
    <UCard class="flex-1 m-4 w-[40rem]" :ui="{ background: 'bg-transparent dark:bg-transparent', ring: 'ring-1 ring-gray-300 dark:ring-gray-700', divide: 'divide-y divide-gray-300 dark:divide-gray-700', header: { base: 'font-bold' } }">
      <template #header>
        Welcome to the playground!
      </template>
      <UInput icon="i-fluent-person-24-regular" />
      <UInput class="mt-5" />
      <UButton block class="mt-5" label="Log in" />

      <!-- <div class="space-x-10">
        <UButton size="xs" label="Button text" />
        <UButton size="sm" label="Button text" />
        <UButton color="yellow" size="md" label="Button text" />
        <UButton size="lg" label="Button text" />
        <UButton disabled size="xl" label="Button text" />
      </div> -->
    </UCard>
  </UContainer>
</template>

<script setup>

</script>

