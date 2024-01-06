import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// @ts-ignore
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  sourcemap: false,
  tailwindcss: {
    exposeConfig: true
  },
  alias: {
    '#ui': resolve('./')
  },
  components: [
    {
      path: '#ui/components',
      prefix: 'U',
      pathPrefix: false,
      pattern: '**/[A-Z]*.{vue,ts}' // Matches any .vue (inside comp dir) file starting with an uppercase letter
    }
  ],
  css: [ '#ui/assets/tailwind.css'],

  modules: [
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  colorMode: {
    classSuffix: ''
  }
})
