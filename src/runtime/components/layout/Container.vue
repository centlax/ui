<template>
  <component :is="as" :class="outerUI" v-bind="attrs">
    <div :class="innerUI">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import { computed, toRef, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import { useUI } from '../../composables/useUI'
import { mergeConfig } from '../../utils'
import type { Strategy } from '../../types'
// @ts-expect-error
import appConfig from '#build/app.config'
import { container } from '#ui/ui.config'

const config = mergeConfig<typeof container>(appConfig.ui.strategy, appConfig.ui.container, container)

export default defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: 'div'
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: () => ''
    },
    padding: {
      type: String as PropType<keyof typeof container.padding>,
      default: () => container.default.padding
    },
    ui: {
      type: Object as PropType<Partial<typeof config> & { strategy?: Strategy }>,
      default: () => ({})
    }
  },
  setup (props) {
    const { ui, attrs } = useUI('container', toRef(props, 'ui'), config)

    const innerUI = computed(() => {
      return twJoin(
        ui.value.base,
        ui.value.padding[props.padding]
      )
    })

    const outerUI = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper
      ), props.class)
    })

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      innerUI,
      outerUI
    }
  }
})
</script>
