import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './public/**/*.svg',
    './pages/**/*.vue',
    './templates/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}',
    './.playground/**/*.{js,vue}',
    'nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        primary: colors.blue,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red
      }
    }
  },
  safelist: [
    {
      pattern: /(bg|text)-(primary|warning|danger|success)-(50|100|200|300|400|500|600|700|800|900|950)/
    }
  ]
}
