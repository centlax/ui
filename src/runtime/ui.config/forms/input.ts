export default {
  wrapper: 'relative',
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
  form: 'form-input',
  font: 'font-medium',
  rounded: {
    xs: 'rounded',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-md',
    xl: 'rounded-md'
  },
  placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-base',
    xl: 'text-base'
  },
  gap: {
    xs: 'gap-x-1',
    sm: 'gap-x-1',
    md: 'gap-x-1.5',
    lg: 'gap-x-2',
    xl: 'gap-x-2.5'
  },
  padding: {
    xs: 'px-2 py-1',
    sm: 'px-2 py-1',
    md: 'px-2.5 py-1.5',
    lg: 'px-3 py-2',
    xl: 'px-3.5 py-2.5'
  },
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
    white: {
      outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500'
    },
    gray: {
      outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500'
    }
  },
  variant: {
    outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-600 dark:ring-{color}-500 focus:ring-2 focus:ring-{color}-600 dark:focus:ring-{color}-500',
    none: 'bg-transparent focus:ring-0 focus:shadow-none'
  },
  icon: {
    base: 'flex-shrink-0 text-gray-500 dark:text-gray-600',
    color: 'text-{color}-600 dark:text-{color}-500',
    loading: 'animate-spin',
    size: {
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6'
    },
    leading: {
      wrapper: 'absolute inset-y-0 start-0 flex items-center',
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
      wrapper: 'absolute inset-y-0 end-0 flex items-center',
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
    color: 'gray',
    variant: 'outline',
    loadingIcon: 'i-heroicons-arrow-path-20-solid'
  }
}
