<template>
  <header ref="el" :class="ui.wrapper" aria-label="Global">
    <div ref="left" class="flex justify-center items-center lg:flex-1">
      <ULogo class="dark:fill-white h-9" />
      <span class="ml-2 font-semibold text-2xl tracking-widest">Centlax</span>
    </div>
    <div ref="left" class="flex h-6 w-full" />

    <div class="flex gap-x-6 lg:gap-x-12 text-gray-900 dark:text-white text-sm font-semibold leading-6">
      <slot />
    </div>

    <div class="lg:flex lg:flex-1 lg:justify-end">
      <slot name="left" />
    </div>

    <div class="">
      <UButton square color="white" icon="i-fluent-navigation-24-regular">
        <span class="sr-only">Open main menu</span>
      </UButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import ui from './header.css'
import UButton from '../../../components/elements/Button.vue'
import ULogo from '../../elements/logo/Logo.vue'
</script>

<style>
</style>
