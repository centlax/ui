<template>
  <UContainer class="min-h-screen flex items-center">
    <UCard class="flex-1" :ui="{ background: 'bg-transparent', ring: 'ring-1 ring-gray-300 dark:ring-gray-700', divide: 'divide-y divide-gray-300 dark:divide-gray-700', header: { base: 'font-bold' } }">
      <template #header>
        Welcome to the playground!
      </template>
      <div class="w-full mb-4 flex justify-center" size="xl">
        <ULogo size="lg" class="dark:fill-white" />
      </div>

      <UInput />
      <UFormGroup label="Email">
        <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
      </UFormGroup>
      <UButton label="LOG IN" block class="mt-4" />
    </UCard>
  </UContainer>
</template>

<script setup>

</script>

