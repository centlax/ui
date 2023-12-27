<template>
  <div v-if="props.links?.length" :class="ui.wrapper" v-bind="$attrs">
    <ULink
      v-for="(link, index) in links"
      :key="index"
      v-slot="{ isActive }"
      v-bind="omit(link, ['label', 'icon', 'iconClass'])"
      :class="ui.base"
      :active-class="ui.active"
      :inactive-class="ui.inactive"
      @click="link.click || $emit('kill') "
    >
      <div v-if="link.icon" :class="[ui.icon.wrapper, link.active || isActive ? ui.icon.active : ui.icon.inactive]">
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
import type { Link } from '../../../types/link'
import { omit } from '../../../libs/lodash'
import share from '../../../shared/share.css'
import { computed } from 'vue'

defineEmits(['kill'])

const ui = computed(() => ({
  wrapper: 'space-y-4 mb-3 lg:mb-6 -mx-1 lg:mx-0',
  base: 'flex items-center gap-2 group',
  active: 'text-primary font-semibold',
  inactive: 'text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium',
  icon: {
    wrapper: 'rounded-md p-1 inline-flex ring-inset ring-1',
    base: 'w-4 h-4 flex-shrink-0',
    active: 'ring-primary text-primary-500 dark:text-primary-400',
    inactive: 'bg-gray-100 dark:bg-gray-800 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background'
  },
  externalIcon: {
    name: share.ui.icons.external,
    base: 'w-4 h-4 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  label: 'text-sm relative'
}))

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: Link[]
  class?: any
}>()

</script>
