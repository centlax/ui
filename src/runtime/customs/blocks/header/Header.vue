<template>
  <UContainer :class="ui.wrapper">
    <header :class="ui.header" v-bind="attrs">
      <NuxtLink id="left" :to="to" :aria-label="ariaLabel" :class="[ui.left, ui.logo]">
        <ULogo />
        <slot name="left">
          {{ title }}
        </slot>
      </NuxtLink>
      <nav id="center" :class="hideUI">
        <slot name="center">
          <HeaderLinks :links="links" />
        </slot>
      </nav>
      <nav id="right" :class="ui.right">
        <slot name="right" />
        <slot name="panel-buttons">
          <UColorButton color="gray" />
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
        <NuxtLink id="left" :to="to" :aria-label="ariaLabel" :class="[ui.left, ui.logo]">
          <ULogo />
          <slot name="left">
            {{ title }}
          </slot>
        </NuxtLink>
        <nav id="center" :class="hideUI">
          <slot name="center">
            <HeaderLinks :links="links" />
          </slot>
        </nav>
        <nav id="right" :class="ui.right">
          <slot name="right" />
          <slot name="panel-buttons">
            <UColorButton color="gray" />
            <div :class="showUI">
              <UButton color="gray" :icon="ui.button.icon.close" square @click="isOpen = false" />
            </div>
          </slot>
        </nav>
      </header>
      <div class="h-full" />
    </UContainer>
  </USlideover>
</template>

<script setup lang="ts">
import config from './header.css'
import { ref, toRef, computed } from 'vue'
const isOpen = ref(false)
import { useUI } from '../../../composables/useUI'
import { getSlotChildrenText } from '../../../lib/slots'
import type { Link } from '../../../types'
import HeaderLinks from './HeaderLinks.vue'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  to?: string
  title?: string
  links?: Link[]
  ui?: Partial<typeof config>
  class?: any,
  size?: string
}>(), {
  to: '/',
  title: undefined,
  links: () => [],
  ui: () => ({}),
  class: undefined,
  size: 'md'
})
// @ts-ignore
const slots = useSlots()
const ariaLabel = computed(() => (props.title || (slots.title && getSlotChildrenText(slots.title())) || 'Logo').trim())
const { ui, attrs } = useUI('header', toRef(props, 'ui'), config, toRef(props, 'class'), true)

const showUI = computed(() => {
  return config.show[props.size]
})
const hideUI = computed(() => {
  return config.hide[props.size]
})
</script>
