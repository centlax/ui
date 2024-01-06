<script setup lang="ts">
import { NuxtLink } from '#components'
import type { Link } from '#ui/types'

const props = withDefaults(defineProps<Link>(), {
  as: 'button',
  label: undefined,
  primary: true
})


</script>

<template>
  <component
    :is="props.as"
    v-bind="$attrs"
    v-if="!props.to"
  >
    <slot />
  </component>
  <NuxtLink
    v-else
    v-bind="$props"
    class="cursor-pointer"
    :exact-active-class="props.primary ? 'text-primary' : undefined "
    :active-class="props.primary ? 'text-primary' : undefined"
  >
    <slot> {{ props.label }} </slot>
  </NuxtLink>
</template>
