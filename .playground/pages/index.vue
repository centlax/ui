<template>
  <div class="bg-purple-600 h-[10rem]" />

  <UButton label="Submit" />
  <UColorPicker />
  <UColorButton />

  <UContainer>
    <div class="h-[10rem] max-w-xl mx-auto py-10 gap-3">
      <UFormGroup v-slot="{ error }" id="sndqer" label="Email" :error="!email && 'You must enter an email'"
        help="This is a nice email!">
        <UInput v-model="email" type="email" placeholder="Enter email"
          :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
      </UFormGroup>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const email = ref('')
</script>
