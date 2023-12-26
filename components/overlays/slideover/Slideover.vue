<template>
  <TransitionRoot as="template" :appear="appear" :show="isOpen">
    <HDialog
      :class="[ui.wrapper, { 'justify-end': side === 'right' }, props.wrapperClass]"
      v-bind="$attrs"
      @close="(e) => !preventClose && close(e)"
    >
      <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="ui.overlay.transition">
        <div :class="[ui.overlay.base, ui.overlay.background]" />
      </TransitionChild>

      <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
        <HDialogPanel :class="[ui.base, ui.width[props.width], ui.background, ui.ring, ui.padding]">
          <slot />
        </HDialogPanel>
      </TransitionChild>
    </HDialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WritableComputedRef, PropType } from 'vue'
import { Dialog as HDialog, DialogPanel as HDialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import ui from './slideover.css'

defineOptions({
  components: {
    HDialog,
    HDialogPanel,
    TransitionRoot,
    TransitionChild
  },
  inheritAttrs: false
})


const props = defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  appear: {
    type: Boolean,
    default: false
  },
  side: {
    type: String as PropType<'left' | 'right'>,
    default: 'right',
    validator: (value: string) => ['left', 'right'].includes(value)
  },
  overlay: {
    type: Boolean,
    default: true
  },
  transition: {
    type: Boolean,
    default: true
  },
  preventClose: {
    type: Boolean,
    default: false
  },
  wrapperClass: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  },
  width: {
    type: String as PropType<keyof typeof ui.width>,
    default: () => 'half'
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const isOpen: WritableComputedRef<boolean> = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

const transitionClass = computed(() => {
  if (!props.transition) {
    return {}
  }

  return {
    ...ui.transition,
    enterFrom: props.side === 'left' ? ui.translate.left : ui.translate.right,
    enterTo: ui.translate.base,
    leaveFrom: ui.translate.base,
    leaveTo: props.side === 'left' ? ui.translate.left : ui.translate.right
  }
})

function close (value: boolean) {
  isOpen.value = value
  emit('close')
}


</script>
