
export default {
  base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
  font: 'font-semibold',
  rounded: {
    xs: 'rounded',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-md',
    xl: 'rounded-md'
  },
  truncate: 'text-left break-all line-clamp-1',
  block: 'w-full flex justify-center items-center',
  inline: 'inline-flex items-center',
  size: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
  },
  text: {
    xs: 'sm:text-xs',
    sm: 'sm:text-sm',
    md: 'text-base sm:text-sm',
    lg: 'text-base sm:text-sm',
    xl: 'text-base sm:text-sm'
  },
  gap: {
    xs: 'gap-x-1.5',
    sm: 'gap-x-1.5',
    md: 'gap-x-2',
    lg: 'gap-x-2.5',
    xl: 'gap-x-2.5'
  },
  padding: {
    xs: 'px-2.5 py-1.5',
    sm: 'px-2.5 py-1.5',
    md: 'px-3 py-2',
    lg: 'px-3.5 py-2.5',
    xl: 'px-3.5 py-2.5'
  },
  square: {
    xs: 'p-1.5',
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
    xl: 'p-2.5'
  },
  color: {
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    white: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500',
    gray: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500'
  },
  variant: {
    solid: 'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-600 dark:focus-visible:outline-{color}-500',
    outline: 'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-600 dark:focus-visible:ring-{color}-500',
    soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-600 dark:focus-visible:ring-{color}-500',
    ghost: 'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-600 dark:focus-visible:ring-{color}-500'
  },
  icon: {
    base: 'flex-shrink-0',
    loading: 'animate-spin',
    size: {
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6'
    }
  },
  default: {
    size: 'md',
    variant: 'solid',
    color: 'primary',
    loadingIcon: 'heroicons:arrow-path-20-solid'
  }
}
