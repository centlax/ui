<template>
  <UContainer :class="[ui.wrapper]">
    <header :class="ui.header" v-bind="$attrs" aria-label="Global">
      <NuxtLink id="left" :to="to" aria-label="ariaLabel" :class="[ui.left, ui.logo]">
        <span class="sr-only">Centlax</span>
        <ULogo />
        <slot name="left">
          {{ title }}
        </slot>
      </NuxtLink>
      <nav id="center" :class="hideUI">
        <slot name="center" />
      </nav>
      <nav id="right" :class="ui.right">
        <slot name="right">
          <UColorButton color="gray" />
        </slot>
        <slot name="panel-buttons">
          <div :class="showUI">
            <UButton color="gray" :icon="ui.button.icon.open" square @click="isOpen = true" />
          </div>
        </slot>
      </nav>
    </header>
  </UContainer>
  <USlideover
    v-model="isOpen"
    :transition="false"
    :overlay="false"
    width="full"
    :wrapper-class="showUI"
  >
    <UContainer :class="ui.wrapper">
      <header :class="ui.header">
        <NuxtLink id="left" :to="to" aria-label="ariaLabel" :class="[ui.left, ui.logo]">
          <ULogo />
          <slot name="left">
            {{ title }}
          </slot>
        </NuxtLink>
        <nav id="center" :class="hideUI">
          <slot name="center" />
        </nav>
        <nav id="right" :class="ui.right">
          <slot name="right">
            <UColorButton color="gray" />
          </slot>
          <slot name="panel-buttons">
            <div :class="showUI">
              <UButton color="gray" :icon="ui.button.icon.close" square @click="isOpen = false" />
            </div>
          </slot>
        </nav>
      </header>
    </UContainer>
    <UContainer>
      <div :class="ui.panel.body">
        <slot name="panel" />
      </div>
    </UContainer>
  </USlideover>
</template>

<script setup lang="ts">
import config from './header.css'
import { ref, computed } from 'vue'
import ui from './header.css'

const isOpen = ref(false)

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  to?: string
  title?: string
  class?: any,
  size?: string
}>(), {
  to: '/',
  title: undefined,
  class: undefined,
  size: 'md'
})

const showUI = computed(() => {
  return config.show[props.size]
})
const hideUI = computed(() => {
  return config.hide[props.size]
})


</script>
