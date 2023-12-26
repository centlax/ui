// @ts-ignore
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// @ts-ignore
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { '#ui': resolve('./') },
  components: [
    {
      path: '#venus/components',
      prefix: 'U', pathPrefix: false,
      pattern: '**/[A-Z]*.{vue,ts}' // Matches any .vue (inside comp dir) file starting with an uppercase letter
    }
  ],
  css: [
    '#venus/assets/css/main.css',
    '#venus/assets/css/scrollbars.css'
  ],
  modules: [
    '@centlax/ui-color'
  ],
  colorMode: {
    classSuffix: ''
  }
})
