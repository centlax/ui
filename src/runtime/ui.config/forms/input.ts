export default {
  wrapper: 'relative',
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
  font: 'font-medium',
  form: 'form-input',
  rounded: {
    xs: 'rounded',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-md',
    xl: 'rounded-md'
  },
  placeholder: 'placeholder-gray-500 dark:placeholder-gray-600',
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-sm',
    xl: 'text-base'
  },
  gap: {
    xs: 'gap-x-1.5',
    sm: 'gap-x-1.5',
    md: 'gap-x-2',
    lg: 'gap-x-2.5',
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
    outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-primary-600 dark:ring-primary-500 focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500',
    none: 'bg-transparent focus:ring-0 focus:shadow-none'
  },
  icon: {
    base: 'flex-shrink-0 text-gray-500 dark:text-gray-600',
    color: 'text-primary-600 dark:text-primary-500',
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
        xs: 'px-2.5',
        sm: 'px-2.5',
        md: 'px-3',
        lg: 'px-3.5',
        xl: 'px-3.5'
      }
    },
    trailing: {
      wrapper: 'absolute inset-y-0 end-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        xs: 'px-2.5',
        sm: 'px-2.5',
        md: 'px-3',
        lg: 'px-3.5',
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
