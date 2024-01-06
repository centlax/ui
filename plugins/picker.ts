import { hexToRgb } from '../utils'
import colors from '#tailwind-config/theme/colors'
import { defineNuxtPlugin, useAppConfig, useHead } from '#imports'
import { computed, watch } from 'vue'


export default defineNuxtPlugin({
  enforce: 'post',
  setup () {
    const nuxtApp = useNuxtApp()
    const appConfig = useAppConfig()

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
        ${Object.entries(primary || colors.blue).map(([key, value]) => `--color-primary-${key}: ${hexToRgb(value)};`).join('\n')}
        --color-primary-DEFAULT: var(--color-primary-600);

        ${Object.entries(gray || colors.cool).map(([key, value]) => `--color-gray-${key}: ${hexToRgb(value)};`).join('\n')}
        }

        .dark {
          --color-primary-DEFAULT: var(--color-primary-500);
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

    if (process.client) {
      watch(root, () => {
        window.localStorage.setItem('centlax-ui-root', root.value)
      })

      appConfig.ui.primary = window.localStorage.getItem('centlax-ui-primary') || appConfig.ui.primary
      appConfig.ui.gray = window.localStorage.getItem('centlax-ui-gray') || appConfig.ui.gray
    }
    if (process.server) {
      useHead({
        script: [
          {
            innerHTML: `
                if (localStorage.getItem('centlax-ui-root')) {
                  document.querySelector('style#centlax-ui-colors').innerHTML = localStorage.getItem('centlax-ui-root')
                }`.replace(/\s+/g, ' '),
            type: 'text/javascript',
            tagPriority: -1
          }
        ]
      })
    }
  }
})
