<template>
  <UPage sticky>
    <template #header>
      lwket
    </template>
    <div class="bg-green-600 h-[20rem]" v-for="(i,n) in 10" :key="i" />
  </UPage>
</template>
