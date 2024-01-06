<template>
  <div ref="trigger" :class="ui.wrapper" v-bind="$attrs" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <slot :open="open">
      Hover
    </slot>

    <div v-if="open && !prevent" ref="container" :class="[ui.container, ui.width]">
      <Transition appear v-bind="ui.transition">
        <div>
          <div v-if="popper.arrow" data-popper-arrow :class="Object.values(ui.arrow)" />

          <div :class="[ui.base, ui.background, ui.color, ui.rounded, ui.shadow, ui.ring]">
            <slot name="text">
              {{ text }}
            </slot>

            <span v-if="shortcuts?.length" :class="ui.shortcuts">
              <span :class="ui.middot">&middot;</span>
            </span>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { defu } from 'defu'
import { usePopper } from '../../../composables/usePopper'
import ui from './tooltip.css'
import type { PopperOptions } from '../../../types/popper'


defineOptions({
  inheritAttrs: false
})


const props = defineProps({
  text: {
    type: String,
    default: null
  },
  prevent: {
    type: Boolean,
    default: false
  },
  shortcuts: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  popper: {
    type: Object as PropType<PopperOptions>,
    default: () => ({})
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  }

})

const popper = computed<PopperOptions>(() => defu({}, props.popper, ui.popper as PopperOptions))

const [trigger, container] = usePopper(popper.value)

const open = ref(false)

let openTimeout: NodeJS.Timeout | null = null
let closeTimeout: NodeJS.Timeout | null = null

// Methods

function onMouseOver () {
  // cancel programmed closing
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  // dropdown already open
  if (open.value) {
    return
  }
  openTimeout = openTimeout || setTimeout(() => {
    open.value = true
    openTimeout = null
  }, props.openDelay)
}

function onMouseLeave () {
  // cancel programmed opening
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
  // dropdown already closed
  if (!open.value) {
    return
  }
  closeTimeout = closeTimeout || setTimeout(() => {
    open.value = false
    closeTimeout = null
  }, props.closeDelay)
}

</script>
