import { computed } from 'vue'
import { hexToRgb } from '../utils'
import { defineNuxtPlugin, useAppConfig, useNuxtApp, useHead } from '#imports'
import colors from '#tailwind-config/theme/colors'

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const nuxtApp = useNuxtApp()

  const root = computed(() => {
    // @ts-ignore
    const primary: Record<string, string> | undefined = colors[appConfig.ui.primary]
    // @ts-ignore
    const gray: Record<string, string> | undefined = colors[appConfig.ui.gray]

    if (!primary) {
      console.warn(`[@centlax/ui-color] Primary color '${appConfig.ui.primary}' not found in Tailwind config`)
    }
    if (!gray) {
      console.warn(`[@centlax/ui-color] Gray color '${appConfig.ui.gray}' not found in Tailwind config`)
    }

    return `:root {
${Object.entries(primary || colors.green).map(([key, value]) => `--color-primary-${key}: ${hexToRgb(value)};`).join('\n')}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(gray || colors.cool).map(([key, value]) => `--color-gray-${key}: ${hexToRgb(value)};`).join('\n')}
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
`
  })

  // Head
  const headData: any = {
    style: [{
      innerHTML: () => root.value,
      tagPriority: -2,
      id: 'centlax-ui-colors'
    }]
  }

  // SPA mode
  if (process.client && nuxtApp.isHydrating && !nuxtApp.payload.serverRendered) {
    const style = document.createElement('style')

    style.innerHTML = root.value
    style.setAttribute('data-centlax-ui-colors', '')
    document.head.appendChild(style)

    headData.script = [{
      innerHTML: 'document.head.removeChild(document.querySelector(\'[data-centlax-ui-colors]\'))'
    }]
  }

  useHead(headData)
})
