<template>
  <aside :class="ui.wrapper" v-bind="attrs">
    <div class="relative">
      <div v-if="$slots.top" :class="ui.top.wrapper">
        <div :class="ui.top.header" />
        <div :class="ui.top.body">
          <slot name="top" />
        </div>
        <div :class="ui.top.footer" />
      </div>

      <slot name="links">
        <UAsideLinks :links="links" />
      </slot>

      <slot />

      <slot name="bottom" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Link } from '../../../types'
import { toRef } from 'vue'
import { useUI } from '../../../composables/useUI'
import config from './aside.css'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: Link[]
  ui?: Partial<typeof config>
  class?: any
}>()

const { ui, attrs } = useUI('aside', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
