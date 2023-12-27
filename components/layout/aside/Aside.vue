<template>
  <aside :class="ui.wrapper" v-bind="$attrs">
    <div class="relative">
      <div v-if="$slots.top" :class="ui.top.wrapper">
        <div :class="ui.top.header" />
        <div :class="ui.top.body">
          <slot name="top" />
        </div>
        <div :class="ui.top.footer" />
      </div>

      <slot name="links">
        <UAsideLinks :links="props.links" />
      </slot>

      <slot />

      <slot name="bottom" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Link } from '../../../types/link'

const ui = {
  wrapper: 'hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4',
  top: {
    wrapper: 'sticky -top-8 -mt-8 pointer-events-none z-[1]',
    header: 'h-8 bg-background -mx-4 px-4',
    body: 'bg-background relative pointer-events-auto flex -mx-4 px-4',
    footer: 'h-8 bg-gradient-to-b from-background -mx-4 px-4'
  }
}

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: Link[]
  class?: any
}>()

</script>
