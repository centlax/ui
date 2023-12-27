<template>
  <UContainer :class="[ui.wrapper, props.wrapperClass]">
    <header :class="ui.header" v-bind="$attrs" aria-label="Global">
      <NuxtLink id="left" :to="to" aria-label="ariaLabel" :class="[ui.left, ui.logo]" @click="isOpen = false">
        <span class="sr-only">Centlax</span>
        <ULogo />
        <slot name="left">
          {{ title }}
        </slot>
      </NuxtLink>
      <nav id="center" :class="[hideUI, ui.center]">
        <slot>
          <UHeaderLinks :links="props.links" />
        </slot>
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
    <UContainer :class="[ui.wrapper, props.wrapperClass]">
      <header :class="ui.header">
        <NuxtLink id="left" :to="to" aria-label="ariaLabel" :class="[ui.left, ui.logo]" @click="isOpen = false">
          <ULogo />
          <slot name="left">
            {{ title }}
          </slot>
        </NuxtLink>
        <nav id="right" :class="ui.right">
          <slot name="right" />
          <slot name="action-button">
            <div :class="showUI">
              <UButton color="gray" :icon="ui.button.icon.close" square @click="isOpen = false" />
            </div>
          </slot>
        </nav>
      </header>
    </UContainer>
    <UContainer>
      <div :class="[ui.panel]">
        <slot name="panel">
          <UAsideLinks
            :links="links"
            @kill="isOpen = false"
          />
        </slot>
      </div>
    </UContainer>
  </USlideover>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ui from './header.css'
import type { Link } from '#ui/types/link'

const isOpen = ref(false)

defineOptions({
  inheritAttrs: false
})

type Size = keyof typeof ui.size;
const props = withDefaults(defineProps<{
  to?: string
  title?: string
  links?: Link[]
  size?: Size
  class?: any
  wrapperClass?: string
}>(), {
  to: '/',
  title: undefined,
  links: () => [],
  size: 'md',
  class: undefined,
  wrapperClass: undefined
})


const showUI = computed(() => {
  return ui.show[props.size]
})
const hideUI = computed(() => {
  return ui.hide[props.size]
})

</script>
