<template>
  <UContainer :class="ui.wrapper">
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
            <UButton variant="gray" :icon="ui.button.icon.open" square @click="isOpen = true" />
          </div>
        </slot>
      </nav>
    </header>
  </UContainer>
  <USlideover
    v-model="isOpen"
    :class="showUI"
    :transition="false"
    :ui="{
      overlay: {
        transition: {
          enter: 'duration-0',
          leave: 'duration-0'
        }
      }, width: 'max-w-full'
    }"
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
              <UButton variant="gray" :icon="ui.button.icon.close" square @click="isOpen = false" />
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
import ui from './header.css'
import { ref, computed } from 'vue'
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
  size: {
    type: String,
    default: 'md'
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  },
  title: {
    type: String,
    default: ''
  }
})

const showUI = computed(() => {
  return ui.show[props.size]
})
const hideUI = computed(() => {
  return ui.hide[props.size]
})

</script>
