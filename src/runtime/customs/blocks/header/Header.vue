<template>
  <UContainer :class="ui.wrapper">
    <header :class="ui.header" v-bind="attrs" aria-label="Global">
      <NuxtLink id="left" :to="to" :aria-label="ariaLabel" :class="[ui.left, ui.logo]">
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
        <slot name="panel">
          <UAsideLinks :links="links" />
        </slot>
      </div>
    </UContainer>
  </USlideover>
</template>

<script setup lang="ts">
import config from './header.css'
import { ref, toRef, computed } from 'vue'
import { useUI } from '../../../composables/useUI'
import { getSlotChildrenText } from '../../../lib/slots'
import HeaderLinks from './HeaderLinks.vue'
import { useSlots } from '#imports'
import type { PropType } from 'vue'
import type { Strategy } from '../../../types'

const isOpen = ref(false)

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  to: {
    type: String,
    default: '/'
  },
  ui: {
    type: Object as PropType<Partial<typeof config> & { strategy?: Strategy }>,
    default: () => ({})
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
