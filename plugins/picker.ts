import { hexToRgb } from '../utils'
import colors from '#tailwind-config/theme/colors'
import { defineNuxtPlugin, useAppConfig, useHead } from '#imports'
import { computed, watch } from 'vue'


export default defineNuxtPlugin({
  enforce: 'post',
  setup () {
    const appConfig = useAppConfig()

    const root = computed(() => {
      // @ts-ignore
      const primary: Record<string, string> | undefined = colors[appConfig.ui.primary]
      // @ts-ignore
      const gray: Record<string, string> | undefined = colors[appConfig.ui.gray]

      return `:root {
        ${Object.entries(primary || colors.green).map(([key, value]) => `--color-primary-${key}: ${hexToRgb(value)};`).join('\n')}
        --color-primary-DEFAULT: var(--color-primary-600);

        ${Object.entries(gray || colors.cool).map(([key, value]) => `--color-gray-${key}: ${hexToRgb(value)};`).join('\n')}
        }

        .dark {
          --color-primary-DEFAULT: var(--color-primary-500);
        }
        `
    })

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
