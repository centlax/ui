export default {
  wrapper: '',
  label: {
    wrapper: 'flex content-center items-center justify-between',
    base: 'block font-medium text-gray-700 dark:text-gray-200',
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-600 dark:after:text-red-500`
  },
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base'
  },
  container: 'mt-1 relative',
  description: 'text-gray-600 dark:text-gray-500',
  hint: 'text-gray-600 dark:text-gray-500',
  help: 'mt-2 text-gray-600 dark:text-gray-500',
  error: 'mt-2 text-red-600 dark:text-red-500',
  default: {
    size: 'md'
  }
}
