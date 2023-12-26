<template>
  <svg
    :class="logoUI"
    width="510"
    height="510"
    viewBox="0 0 510 510"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M254.897 504.393L5.34753 274.531L5.34753 162.491L52.1147 122.993L52.1147 83.9875L101.22 44.489H146.526L194.755 4.9903L242.106 4.9903L239.183 438.982L254.897 465.171V504.393Z"
    />
    <path
      d="M52.1135 123.13L5.34753 162.675L5.34753 274.845L254.891 504.975V465.707L241.223 439.559M52.1135 123.13L52.1135 84.0796L101.218 44.535H146.522M52.1135 123.13L146.522 284.566ZM146.522 44.535L194.749 4.9903L241.223 4.9903L241.223 439.559M146.522 44.535L146.522 284.566ZM241.223 439.559L146.522 284.566Z"
    />
    <path
      d="M52.1135 123.13L5.34753 162.675L5.34753 274.845L254.891 504.975V465.707L241.223 439.559M52.1135 123.13L52.1135 84.0796L101.218 44.535H146.522M52.1135 123.13L146.522 284.566M241.223 439.559L241.223 4.9903L194.749 4.9903L146.522 44.535M241.223 439.559L146.522 284.566M146.522 44.535L146.522 284.566"
      :stroke-width="props.strokeWidth"
      stroke-linejoin="round"
    />
    <path
      d="M255.798 504.408L505.348 274.546V162.507L458.58 123.008V84.0026L409.475 44.5041L364.169 44.5041L315.941 5.00543L268.589 5.00543L271.512 438.997L255.798 465.186V504.408Z"
    />
    <path
      d="M458.582 123.145L505.348 162.69V274.86L255.804 504.99V465.722L269.472 439.574M458.582 123.145V84.0947L409.477 44.5501L364.173 44.5501M458.582 123.145L364.173 284.581ZM364.173 44.5501L315.946 5.00543L269.472 5.00543L269.472 439.574M364.173 44.5501V284.581ZM269.472 439.574L364.173 284.581Z"
    />
    <path
      d="M458.582 123.145L505.348 162.69V274.86L255.804 504.99V465.722L269.472 439.574M458.582 123.145V84.0947L409.477 44.5501L364.173 44.5501M458.582 123.145L364.173 284.581M269.472 439.574L269.472 5.00543L315.946 5.00543L364.173 44.5501M269.472 439.574L364.173 284.581M364.173 44.5501V284.581"
      :stroke-width="props.strokeWidth"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { twMerge, twJoin } from 'tailwind-merge'
import { computed, type PropType } from 'vue'

const ui = {
  base: 'fill-primary-600 dark:fill-primary-500 stroke-white dark:stroke-gray-900',
  size: {
    xs: 'h-[26px] w-[26px]',
    sm: 'h-[30px] w-[30px]',
    md: 'h-[38px] w-[38px]',
    lg: 'h-[42px] w-[42px]',
    xl: 'h-[46px] w-[46px]'
  },
  default: {
    size: 'md'
  }
}

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<keyof typeof ui.size>,
    default: () => 'md'
  },
  strokeWidth: {
    type: Number,
    default: 10
  }
})

const logoUI = computed(() => {
  return twMerge(twJoin(
    ui.base,
    ui.size[props.size]
  ), props.class)
})
</script>
