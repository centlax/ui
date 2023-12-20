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
          <div v-if="link.children.length" :class="ui.pop.wrapper" @click="close">
            <ULink
              v-for="(kid, kid_index) of link.children"
              :key="kid_index"
              v-bind="omit(kid, ['label', 'icon'])"
              :class="ui.pop.base"
              :active-class="ui.pop.active"
              :inactive-class="ui.pop.inactive"
              @click="kid.click"
            >
              <UIcon v-if="kid.icon" :name="kid.icon" :class="ui.pop.icon.base" />

              <p :class="[kid.target === '_blank' && 'pr-3']">
                <span :class="ui.pop.label">
                  {{ kid.label }}

                  <UIcon v-if="kid.target === '_blank'" :name="ui.pop.externalIcon.name" :class="ui.pop.externalIcon.base" />
                </span>
                <span v-if="kid.description" :class="ui.pop.description">
                  {{ kid.description }}
                </span>
              </p>
            </ULink>
          </div>
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
import { toRef } from 'vue'
import { useUI } from '../../../composables/useUI'
import config from './header-links.css'


defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: Link[]
  ui?: Partial<typeof config>
  class?: any
}>()

const { ui, attrs } = useUI('header.links', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
