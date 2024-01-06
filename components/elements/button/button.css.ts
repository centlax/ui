import { commonUI } from '#ui/ui.config/common.ui'
const share = {
  white_gray: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500 ',
  text: 'text-{color}-600 dark:text-{color}-500',
  ring: 'ring-1 ring-inset focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-600 dark:focus-visible:ring-{color}-500',
  outline: 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-600 dark:focus-visible:outline-{color}-500',
  disable_transparent: 'disabled:bg-transparent  dark:disabled:bg-transparent'
}
export default {
  base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
  font: 'font-semibold',
  rounded: commonUI.rounded,
  truncate: 'text-left break-all line-clamp-1',
  block: 'w-full flex justify-center items-center',
  inline: 'inline-flex items-center',
  size: commonUI.size,
  text: commonUI.text,
  gap: commonUI.gap,
  padding: commonUI.padding,
  square: commonUI.square,
  color: {
    ...commonUI.color,
    white: ['text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 ' + share.white_gray].toString(),
    gray: ['text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 ' + share.white_gray].toString()
  },
  variant: {
    solid: ['shadow-sm text-white dark:text-gray-900 bg-{color}-600 hover:bg-{color}-700 dark:bg-{color}-500 dark:hover:bg-{color}-600 disabled:bg-{color}-500  dark:disabled:bg-{color}-400 ' + share.outline].toString(),
    outline: ['ring-1 ring-current ' + share.text + ' hover:bg-{color}-50 dark:hover:bg-{color}-950 ' + share.disable_transparent + share.ring].toString(),
    soft: [share.text + ' bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2'].toString(),
    ghost: [share.text + ' hover:bg-{color}-50  dark:hover:bg-{color}-950 ' + share.disable_transparent + share.ring].toString()
  },
  icon: {
    base: 'flex-shrink-0',
    loading: 'animate-spin',
    color: 'text-primary-600 dark:text-primary-500',
    size: commonUI.icon.size
  },
  default: {
    size: 'md',
    variant: 'solid',
    color: 'primary',
    loadingIcon: 'heroicons:arrow-path-20-solid'
  }
}
