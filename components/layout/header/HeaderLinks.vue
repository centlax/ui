<template>
  <ul v-if="props.links?.length" :class="[ui.wrapper]" v-bind="$attrs">
    <li v-for="(link, index) of links" :key="index" class="relative">
      <UPopover
        v-if="link.children?.length"
        mode="hover"
        :open-delay="0"
        width="max-w-[16rem]"
      >
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

                  <UIcon
                    v-if="kid.target === '_blank'"
                    :name="ui.pop.externalIcon.name"
                    :class="ui.pop.externalIcon.base"
                  />
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
import type { Link } from '#ui/types/link'
import { omit } from '#ui/utils/lodash'
import ui from './header-links.css'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: Link[]
  class?: any
}>()

</script>
