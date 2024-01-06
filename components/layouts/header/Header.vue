<template>
  <section>
    <div :class="[ui.wrapper, props.class]" v-bind="$attrs">
      <UContainer :class="[ui.header]">
        <NuxtLink id="left" :to="to" aria-label="ariaLabel" :class="[ui.left, ui.logo]" @click="close()">
          <span class="sr-only">Centlax</span>
          <ULogo />
          <slot name="left">
            {{ title }}
          </slot>
        </NuxtLink>
        <nav id="center" :class="[hideUI, ui.center]">
          <slot>
            <UHeaderLinks :links="links" />
          </slot>
        </nav>
        <nav id="right" :class="ui.right">
          <slot name="right" />
          <slot name="buttons">
            <UColorButton v-bind="buttons" />
            <UColorPicker v-bind="buttons" />
            <div :class="showUI">
              <UButton v-bind="buttons" :icon="ui.button.icon.open" square @click="open()" />
            </div>
          </slot>
        </nav>
      </UContainer>
    </div>
    <USlideover
      v-model="isOpen"
      :transition="false"
      :overlay="false"
      width="full"
      :class="[showUI]"
    >
      <div :class="[ui.wrapper, props.class]" v-bind="$attrs">
        <UContainer :class="ui.header">
          <NuxtLink id="left" :to="to" aria-label="ariaLabel" :class="[ui.left, ui.logo]" @click="close()">
            <ULogo />
            <slot name="left">
              {{ title }}
            </slot>
          </NuxtLink>
          <nav id="right" :class="ui.right">
            <slot name="right" />
            <slot name="buttons">
              <UColorButton v-bind="buttons" />
              <UColorPicker v-bind="buttons" />
              <div :class="showUI">
                <UButton v-bind="buttons" :icon="ui.button.icon.close" square @click="close()" />
              </div>
            </slot>
          </nav>
        </UContainer>
      </div>
      <UContainer :class="[ui.panel]">
        <UAsideLinks :links="links" @close="close()" />
        <slot name="panel" />
      </UContainer>
    </USlideover>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { UButton } from '#components'
import ui from './header.css'
import type { Button } from '#ui/types/button'
import type { NavLink } from '#ui/types/link'

defineOptions({
  components: { UButton },
  inheritAttrs: false
})

type HeaderSize = keyof typeof ui.size

const props = withDefaults(defineProps<{
  to?: string
  title?: string
  links?: NavLink[]
  buttons?: Button
  size?: HeaderSize
  class?: any
}>(), {
  to: '/',
  title: undefined,
  links: () => [],
  buttons: undefined,
  size: 'md',
  class: undefined
})

const isOpen = ref(false)
const open = () => { isOpen.value = true }
const close = () => { isOpen.value = false }

defineExpose({ close })


const showUI = computed(() => {
  return ui.show[props.size]
})

const hideUI = computed(() => {
  return ui.hide[props.size]
})
</script>
