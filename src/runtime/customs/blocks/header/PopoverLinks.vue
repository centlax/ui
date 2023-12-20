<template>
  <div v-if="links?.length" :class="ui.wrapper" v-bind="attrs">
    <ULink
      v-for="(link, index) of links"
      :key="index"
      v-bind="omit(link, ['label', 'icon'])"
      :class="ui.base"
      :active-class="ui.active"
      :inactive-class="ui.inactive"
      @click="link.click"
    >
      <UIcon v-if="link.icon" :name="link.icon" :class="ui.icon.base" />

      <p :class="[link.target === '_blank' && 'pr-3']">
        <span :class="ui.label">
          {{ link.label }}

          <UIcon v-if="link.target === '_blank'" :name="ui.externalIcon.name" :class="ui.externalIcon.base" />
        </span>
        <span v-if="link.description" :class="ui.description">
          {{ link.description }}
        </span>
      </p>
    </ULink>
  </div>
</template>

<script setup lang="ts">
import type { Link } from '../../../types'
import { omit } from '../../../lib/lodash'
import { computed, toRef } from 'vue'
import { useUI } from '../../../composables/useUI'

const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'p-2 space-y-1',
  base: 'block px-2 py-1.5 rounded-md flex items-start gap-1.5',
  active: 'bg-gray-100/80 dark:bg-gray-800/80 text-primary',
  inactive: 'hover:bg-gray-100/80 dark:hover:bg-gray-800/80',
  label: 'font-semibold text-sm/6 inline-block relative',
  description: 'text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2',
  icon: {
    base: 'w-4 h-4 flex-shrink-0 mt-1'
  },
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  }
}))

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: Link[]
  ui?: Partial<typeof config.value>
  class?: any
}>()

const { ui, attrs } = useUI('header.popover.links', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
