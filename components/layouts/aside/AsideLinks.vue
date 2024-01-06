<template>
  <div v-if="props.links?.length" :class="ui.wrapper" v-bind="$attrs">
    <ULink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      :class="ui.base"
      @click="$emit('close')"
    >
      <div v-if="link.icon" :class="[ui.icon.wrapper]">
        <UIcon v-if="link.icon" :name="link.icon" :class="[ui.icon.base, link.iconClass]" />
      </div>

      <span :class="ui.label">
        {{ link.label }}

        <UIcon v-if="link.target === '_blank'" :name="ui.externalIcon.name" :class="ui.externalIcon.base" />
      </span>
    </ULink>
  </div>
</template>

<script setup lang="ts">
import type { NavLink } from '#ui/types'
import { computed } from 'vue'
import { coreUI } from '#ui/ui.config/core.ui'

defineEmits(['close'])

const ui = computed(() => ({
  wrapper: 'space-y-4 mb-3 lg:mb-6 -mx-1 lg:mx-0',
  base: 'group/item flex items-center gap-2 group',
  active: 'text-primary font-semibold',
  inactive: 'text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium',
  icon: {
    wrapper: 'rounded-md p-1.5 inline-flex ring-inset ring-1 group-hover/item:ring-2 ring-gray-300 dark:ring-gray-700',
    base: 'w-4 h-4 flex-shrink-0',
    active: 'ring-primary text-primary-500 dark:text-primary-400',
    inactive: 'bg-gray-100 dark:bg-gray-800 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background'
  },
  externalIcon: {
    name: coreUI.icons.external,
    base: 'w-4 h-4 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  label: 'text-base font-medium hover:font-semibold relative'
}))

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: NavLink[]
  class?: any
}>()
</script>
