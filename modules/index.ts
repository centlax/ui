// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import { defineNuxtModule, installModule } from 'nuxt/kit'
import defaultColors from 'tailwindcss/colors.js'
import createTemplates from '../utils/templates'
import { excludeColors } from '../utils/colors'
import pkg from '../package.json'

// @ts-ignore
delete defaultColors.lightBlue
// @ts-ignore
delete defaultColors.warmGray
// @ts-ignore
delete defaultColors.trueGray
// @ts-ignore
delete defaultColors.coolGray
// @ts-ignore
delete defaultColors.blueGray

type UI = {
  primary?: string
  gray?: string
  colors?: string[]
  [key: string]: any
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    ui?: UI
  }
}

export interface ModuleOptions {
  /**
   * @default 'u'
   */
  prefix?: string

  /**
   * @default false
   */
  global?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: pkg.name
  },
  async setup (options, nuxt) {
    // @ts-ignore
    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      tailwindConfig.theme = tailwindConfig.theme || {}
      tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
      tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {}

      const globalColors: any = {
        ...(tailwindConfig.theme.colors || defaultColors),
        ...tailwindConfig.theme.extend?.colors
      }
      // @ts-ignore
      globalColors.primary = tailwindConfig.theme.extend.colors.primary = {
        50: 'rgb(var(--color-primary-50) / <alpha-value>)',
        100: 'rgb(var(--color-primary-100) / <alpha-value>)',
        200: 'rgb(var(--color-primary-200) / <alpha-value>)',
        300: 'rgb(var(--color-primary-300) / <alpha-value>)',
        400: 'rgb(var(--color-primary-400) / <alpha-value>)',
        500: 'rgb(var(--color-primary-500) / <alpha-value>)',
        600: 'rgb(var(--color-primary-600) / <alpha-value>)',
        700: 'rgb(var(--color-primary-700) / <alpha-value>)',
        800: 'rgb(var(--color-primary-800) / <alpha-value>)',
        900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        950: 'rgb(var(--color-primary-950) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-primary-DEFAULT) / <alpha-value>)'
      }

      if (globalColors.gray) {
        // @ts-ignore
        globalColors.cool = tailwindConfig.theme.extend.colors.cool = defaultColors.gray
      }

      // @ts-ignore
      globalColors.gray = tailwindConfig.theme.extend.colors.gray = {
        50: 'rgb(var(--color-gray-50) / <alpha-value>)',
        100: 'rgb(var(--color-gray-100) / <alpha-value>)',
        200: 'rgb(var(--color-gray-200) / <alpha-value>)',
        300: 'rgb(var(--color-gray-300) / <alpha-value>)',
        400: 'rgb(var(--color-gray-400) / <alpha-value>)',
        500: 'rgb(var(--color-gray-500) / <alpha-value>)',
        600: 'rgb(var(--color-gray-600) / <alpha-value>)',
        700: 'rgb(var(--color-gray-700) / <alpha-value>)',
        800: 'rgb(var(--color-gray-800) / <alpha-value>)',
        900: 'rgb(var(--color-gray-900) / <alpha-value>)',
        950: 'rgb(var(--color-gray-950) / <alpha-value>)'
      }
      const colors = excludeColors(globalColors)
      // @ts-ignore
      nuxt.options.appConfig.ui = {
        primary: 'blue',
        gray: 'cool',
        colors
      }
    })
    createTemplates(nuxt)
    await installModule('nuxt-icon')
    await installModule('@nuxtjs/color-mode', { classSuffix: '' })
    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkMode: 'class',
        plugins: [
          require('@tailwindcss/forms'),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss')
        ]

      }
    })
  }
})
