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
      <nav id="center" :class="[hideUI, ui.center]">
        <slot />
      </nav>
      <nav id="right" :class="ui.right">
        <slot name="right" />
        <slot name="action-button">
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
          <slot name="right" />
          <slot name="action-button">
            <div :class="showUI">
              <UButton color="gray" :icon="ui.button.icon.close" square @click="(isOpen = false)" />
            </div>
          </slot>
        </nav>
      </header>
    </UContainer>
    <UContainer>
      <div :class="[ui.panel, 'bg-red-800']" @click="isOpen = false">
        <slot />
      </div>
    </UContainer>
  </USlideover>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ui from './header.css'
import type { PropType } from 'vue'

const isOpen = ref(false)

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  to: {
    type: String,
    default: '/'
  },
  title: {
    type: String,
    default: undefined
  },
  class: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<keyof typeof ui.size>,
    default: 'md'
  }
})


const showUI = computed(() => {
  return ui.show[props.size]
})
const hideUI = computed(() => {
  return ui.hide[props.size]
})

</script>
