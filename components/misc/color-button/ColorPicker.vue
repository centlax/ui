<template>
  <UPopover mode="hover">
    <template #default>
      <UButton
        color="gray"
        icon="heroicons:swatch-20-solid"
        icon-color
        v-bind="$attrs"
        square
        aria-label="Color picker"
      />
    </template>

    <template #panel>
      <div class="p-2">
        <div class="grid grid-cols-5 gap-px">
          <Pill
            v-for="color in primaryColors"
            :key="color.value"
            :color="color"
            :selected="primary"
            @select="primary = color"
          />
        </div>

        <hr class="border-primary-300 font-medium dark:border-primary-900 my-2">

        <div class="grid grid-cols-5 gap-px">
          <Pill
            v-for="color in grayColors"
            :key="color.value"
            :color="color"
            :selected="gray"
            @select="gray = color"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import colors from '#tailwind-config/theme/colors'
import { computed } from 'vue'
import Pill from './_pill.vue'


const appConfig = useAppConfig()
const colorMode = useColorMode()
// @ts-ignore
const primaryColors = computed(() => appConfig.ui.colors.filter(color => color !== 'primary').map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 500 : 600] })))

const primary = computed({
  get () {
    return primaryColors.value.find((option: { value: string; }) => option.value === appConfig.ui.primary)
  },
  set (option) {
    // @ts-ignore
    appConfig.ui.primary = option.value
    window.localStorage.setItem('centlax-ui-primary', appConfig.ui.primary)
  }
})
// @ts-ignore
const grayColors = computed(() => ['slate', 'cool', 'zinc', 'neutral', 'stone'].map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 500 : 600] })))

const gray = computed({
  get () {
    return grayColors.value.find(option => option.value === appConfig.ui.gray)
  },
  set (option) {
    // @ts-ignore
    appConfig.ui.gray = option.value
    window.localStorage.setItem('centlax-ui-gray', appConfig.ui.gray)
  }
})
</script>
