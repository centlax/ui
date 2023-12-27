<template>
  <UPage sticky>

    <template #header>
     <div class="flex">
      <UColorPicker />
     </div>
    </template>
    <div class="bg-primary-600 h-[20rem]" v-for="(i,n) in 10" :key="i" />
  </UPage>
</template>
