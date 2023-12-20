<template>
  <ul v-if="links?.length" :class="ui.wrapper" v-bind="attrs">
    <li v-for="(link, index) of links" :key="index" class="relative">
      <UPopover v-if="link.children?.length" v-bind="ui.popover">
        <template #default="{ open }">
          <ULink
            v-bind="omit(link, ['label', 'icon', 'children'])"
            :class="ui.base"
            :active-class="ui.active"
            :inactive-class="ui.inactive"
            @click="link.click"
          >
            {{ link.label }}

            <UIcon
              :name="ui.trailingIcon.name"
              :class="[ui.trailingIcon.base, open ? ui.trailingIcon.active : ui.trailingIcon.inactive]"
            />
          </ULink>
        </template>

        <template #panel="{ close }">
          <PopoverLinks :links="link.children" @click="close" />
        </template>
      </UPopover>
      <ULink
        v-else
        v-bind="omit(link, ['label', 'icon'])"
        :class="ui.base"
        :active-class="ui.active"
        :inactive-class="ui.inactive"
        @click="link.click"
      >
        {{ link.label }}

        <UIcon v-if="link.target === '_blank'" :name="ui.externalIcon.name" :class="ui.externalIcon.base" />
      </ULink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Link } from '../../../types'
import { omit } from '../../../lib/lodash'
import { computed, toRef } from 'vue'
import { useUI } from '../../../composables/useUI'
import PopoverLinks from './PopoverLinks.vue'
// @ts-ignore
const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'flex items-center gap-x-8',
  base: 'text-base font-semibold flex items-center gap-1',
  active: 'text-primary',
  inactive: 'hover:text-primary',
  trailingIcon: {
    name: appConfig.ui.icons.chevron,
    base: 'w-5 h-5 transform transition-transform duration-200 flex-shrink-0',
    active: 'rotate-180',
    inactive: ''
  },
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  popover: {
    mode: 'hover' as const,
    openDelay: 0,
    ui: {
      width: 'max-w-[16rem]'
    }
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

const { ui, attrs } = useUI('header.links', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
