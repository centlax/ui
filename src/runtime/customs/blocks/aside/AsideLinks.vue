<template>
  <div v-if="links?.length" :class="ui.wrapper" v-bind="attrs">
    <ULink
      v-for="(link, index) in links"
      :key="index"
      v-slot="{ isActive }"
      :class="ui.base"
      :active-class="ui.active"
      :inactive-class="ui.inactive"
      :to="link.to"
      @click="link.click"
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
import type { Link } from '../../../types'
//import { omit } from '../../../lib/lodash'
import config from './aside-links.css'
import { toRef } from 'vue'
import { useUI } from '../../../composables/useUI'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: Link[]
  ui?: Partial<typeof config>
  class?: any
}>()

const { ui, attrs } = useUI('aside.links', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
