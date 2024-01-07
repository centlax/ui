import { commonUI } from '#ui/ui.config/common.ui'
const share = {
  white_gray: 'shadow-sm text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset',
  outline: 'shadow-sm text-gray-900 dark:text-white caret-{color}-600 dark:caret-{color}-500 ring-1 ring-inset ring-{color}-600 dark:ring-{color}-500 focus:ring-2 focus:ring-inset focus:ring-{color}-600 dark:focus:ring-{color}-500'
}
export default {
  wrapper: 'relative',
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
  form: 'form-input',
  font: 'font-medium',
  rounded: commonUI.rounded,
  placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
  size: commonUI.size,
  text: commonUI.text,
  gap: commonUI.gap,
  padding: commonUI.padding,
  leading: {
    padding: {
      xs: 'ps-8',
      sm: 'ps-9',
      md: 'ps-10',
      lg: 'ps-11',
      xl: 'ps-12'
    }
  },
  trailing: {
    padding: {
      xs: 'pe-8',
      sm: 'pe-9',
      md: 'pe-10',
      lg: 'pe-11',
      xl: 'pe-12'
    }
  },
  color: {
    ...commonUI.color,
    white: ['bg-white dark:bg-gray-900 ' + share.white_gray ].toString(),
    gray: ['bg-gray-50 dark:bg-gray-800 ' + share.white_gray].toString()
  },
  variant: {
    outline: {
      auto: ['bg-transparent ' + share.outline].toString(),
      white: ['bg-white dark:bg-gray-900 ' + share.outline].toString(),
      gray: ['bg-gray-50 dark:bg-gray-800 ' + share.outline].toString()
    }
  },
  icon: {
    base: 'flex-shrink-0 text-gray-600 dark:text-gray-500',
    color: 'text-{color}-600 dark:text-{color}-500',
    size: commonUI.icon.size,
    leading: {
      wrapper: 'absolute inset-y-0 left-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        xs: 'px-2',
        sm: 'px-2',
        md: 'px-2.5',
        lg: 'px-3',
        xl: 'px-3.5'
      }
    },
    trailing: {
      wrapper: 'absolute inset-y-0 right-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        xs: 'px-2',
        sm: 'px-2',
        md: 'px-2.5',
        lg: 'px-3',
        xl: 'px-3.5'
      }
    }
  },
  default: {
    size: 'md',
    color: 'white',
    variant: 'outline'
  }
}
