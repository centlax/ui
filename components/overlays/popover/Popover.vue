<template>
  <HPopover
    ref="popover"
    v-slot="{ open: headlessOpen, close }"
    :class="ui.wrapper"
    v-bind="$attrs"
    @mouseleave="onMouseLeave"
  >
    <HPopoverButton
      ref="trigger"
      as="div"
      :disabled="disabled"
      :class="ui.trigger"
      role="button"
      @mouseover="onMouseOver"
    >
      <slot :open="(open !== undefined) ? open : headlessOpen" :close="close">
        <button :disabled="disabled">
          Open
        </button>
      </slot>
    </HPopoverButton>

    <Transition v-if="overlay" appear v-bind="ui.overlay.transition">
      <div
        v-if="(open !== undefined) ? open : headlessOpen"
        :class="[ui.overlay.base, ui.overlay.background]"
        @click="$emit('update:open')"
      />
    </Transition>

    <div
      v-if="(open !== undefined) ? open : headlessOpen"
      ref="container"
      :class="[ui.container, ui.width]"
      :style="containerStyle"
      @mouseover="onMouseOver"
    >
      <Transition appear v-bind="ui.transition">
        <div>
          <div v-if="popper.arrow" data-popper-arrow :class="Object.values(ui.arrow)" />

          <HPopoverPanel :class="[ui.base, ui.background, ui.ring, ui.rounded, ui.shadow]" static>
            <slot name="panel" :open="(open !== undefined) ? open : headlessOpen" :close="close" />
          </HPopoverPanel>
        </div>
      </Transition>
    </div>
  </HPopover>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import type { PropType } from 'vue'
import { defu } from 'defu'
import { Popover as HPopover, PopoverButton as HPopoverButton, PopoverPanel as HPopoverPanel } from '@headlessui/vue'
import { usePopper } from '../../../composables/usePopper'
import type { PopperOptions } from '../../../types/popper'
import ui from './popover.css'

defineOptions({
  components: {
    HPopover,
    HPopoverButton,
    HPopoverPanel
  },
  inheritAttrs: false
})
const props = defineProps({
  mode: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click',
    validator: (value: string) => ['click', 'hover'].includes(value)
  },
  open: {
    type: Boolean,
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  overlay: {
    type: Boolean,
    default: false
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

const emit = defineEmits(['update:open', 'open', 'close'])

const popper = computed<PopperOptions>(() => defu(props.mode === 'hover' ? { offsetDistance: 0 } : {}, props.popper, ui.popper as PopperOptions))

const [trigger, container] = usePopper(popper.value)

// https://github.com/tailwindlabs/headlessui/blob/f66f4926c489fc15289d528294c23a3dc2aee7b1/packages/%40headlessui-vue/src/components/popover/popover.ts#L151
const popover = ref<any>(null)
const popoverApi = ref<any>(null)

let openTimeout: NodeJS.Timeout | null = null
let closeTimeout: NodeJS.Timeout | null = null

onMounted(() => {
  const popoverProvides = popover.value?.$.provides
  if (!popoverProvides) {
    return
  }
  const popoverProvidesSymbols = Object.getOwnPropertySymbols(popoverProvides)
  popoverApi.value = popoverProvidesSymbols.length && popoverProvides[popoverProvidesSymbols[0]]
})

const containerStyle = computed(() => {
  const offsetDistance = (props.popper as PopperOptions)?.offsetDistance || (ui.popper as PopperOptions)?.offsetDistance || 8
  const padding = `${offsetDistance}px`

  return props.mode === 'hover' ? {
    paddingTop: padding,
    paddingBottom: padding,
    paddingLeft: padding,
    paddingRight: padding
  } : {}
})

function onMouseOver () {
  if (props.mode !== 'hover' || !popoverApi.value) {
    return
  }

  // cancel programmed closing
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  // dropdown already open
  if (popoverApi.value.popoverState === 0) {
    return
  }
  openTimeout = openTimeout || setTimeout(() => {
    popoverApi.value.togglePopover && popoverApi.value.togglePopover()
    openTimeout = null
  }, props.openDelay)
}

function onMouseLeave () {
  if (props.mode !== 'hover' || !popoverApi.value) {
    return
  }

  // cancel programmed opening
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
  // dropdown already closed
  if (popoverApi.value.popoverState === 1) {
    return
  }
  closeTimeout = closeTimeout || setTimeout(() => {
    popoverApi.value.closePopover && popoverApi.value.closePopover()
    closeTimeout = null
  }, props.closeDelay)
}

watch(() => popoverApi.value?.popoverState, (newValue: number, oldValue: number) => {
  if (oldValue === undefined) return
  emit(newValue === 0 ? 'open' : 'close')
})

</script>
../tooltip/popper
