<template>
  <ul v-if="props.links?.length" :class="[ui.wrapper]" v-bind="$attrs">
    <li v-for="(link, index) of links" :key="index" class="relative">
      <UPopover
        v-if="link.children?.length"
        mode="hover"
        :open-delay="0"
        width="max-w-[18rem]"
      >
        <template #default="{ open }">
          <ULink
            :to="link.to"
            :class="[ui.base]"
          >
            {{ link.label }}
            <UIcon
              :name="ui.trailingIcon.name"
              :class="[ui.trailingIcon.base, open ? ui.trailingIcon.active : ui.trailingIcon.inactive]"
            />
          </ULink>
        </template>

        <template #panel="{ close }">
          <div v-if="link.children.length" :class="[ui.pop.wrapper]" @click="close">
            <ULink
              v-for="(kid, kid_index) of link.children"
              :key="kid_index"
              :to="kid.to"
              :primary="false"
              :class="[ui.pop.base, ui.pop.hover]"
            >
              <UIcon v-if="kid.icon" :name="kid.icon" :class="ui.pop.icon.base" />
              <div :class="['text-left space-y-1 ']">
                <span :class="ui.pop.label">
                  {{ kid.label }}

                  <UIcon
                    v-if="kid.target === '_blank'"
                    :name="ui.pop.externalIcon.name"
                    :class="ui.pop.externalIcon.base"
                  />
                </span>
                <span v-if="kid.description" :class="ui.pop.description">
                  {{ kid.description }}
                </span>
              </div>
            </ULink>
          </div>
        </template>
      </UPopover>
      <ULink
        v-else
        :to="link.to"
        :class="ui.base"
      >
        {{ link.label }}

        <UIcon v-if="link.target === '_blank'" :name="ui.externalIcon.name" :class="ui.externalIcon.base" />
      </ULink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { NavLink } from '#ui/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: NavLink[]
}>()

const ui = {
  wrapper: 'flex items-center gap-x-8',
  base: 'text-base font-medium flex items-center gap-1',
  trailingIcon: {
    name: 'i-heroicons-chevron-down-20-solid',
    base: 'w-5 h-5 transform transition-transform duration-200 flex-shrink-0',
    active: 'rotate-180',
    inactive: ''
  },
  externalIcon: {
    name: 'heroicons:arrow-up-right-20-solid',
    base: 'w-4 h-4 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  pop: {
    wrapper: 'p-2 space-y-1',
    base: 'block px-2 py-1.5 rounded-md flex gap-2 ',
    hover: 'hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:text-primary',
    label: 'font-medium text-sm inline-block relative',
    description: 'text-sm leading-snug text-gray-600 dark:text-gray-400 line-clamp-2',
    icon: {
      base: 'w-5 h-5 flex-shrink-0 mt-1 text-primary'
    },
    externalIcon: {
      name: 'heroicons:arrow-up-right-20-solid',
      base: 'w-4 h-4 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
    }
  }
}
</script>
