export default {
  wrapper: 'flex gap-x-5 w-fit p-2',
  size: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
  },
  rounded: {
    xs: 'rounded',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-md',
    xl: 'rounded-md'
  },
  position: {
    start: 'flex-shrink-0  self-start',
    center: 'flex-shrink-0 self-center',
    end: 'flex-shrink-0 self-end'
  },
  shadow: ' ',
  padding: '',
  color: {
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    white: 'text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800'
  },
  variant: {
    solid: 'bg-{color}-600 dark:bg-{color}-600 text-white dark:text-gray-900',
    outline: 'text-{color}-600 dark:text-{color}-600 ring-1 ring-inset ring-{color}-600 dark:ring-{color}-600',
    soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-600 dark:text-{color}-500',
    subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-600 dark:text-{color}-500 ring-1 ring-inset ring-{color}-600 dark:ring-{color}-500 ring-opacity-25 dark:ring-opacity-25',
    ghost: 'bg-tansparent dark:bg-opacity-10 text-{color}-600 dark:text-{color}-500 ring-1 ring-inset ring-{color}-600 dark:ring-{color}-500 ring-opacity-25 dark:ring-opacity-25'

  },
  button: {
    base: 'hidden'
  },
  icon: {
    info: 'fluent:info-24-regular',
    close: 'fluent:dismiss-24-regular'
  },
  default: {
    size: 'md',
    color: 'white',
    variant: 'solid',
    position: 'center'
  }
}
