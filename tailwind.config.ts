import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { generateSafelist } from './utils/safelist'
export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './public/**/*.svg',
    './pages/**/*.vue',
    './ui.config/**/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@headlessui/tailwindcss')
  ],
  safelist: [
    ...generateSafelist(['primary', 'success', 'warning', 'danger'])
  ]
}
