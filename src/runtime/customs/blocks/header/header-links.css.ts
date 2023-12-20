export default {
  wrapper: 'flex items-center gap-x-8',
  base: 'text-base font-semibold flex items-center gap-1',
  active: 'text-primary',
  inactive: 'hover:text-primary',
  trailingIcon: {
    name: 'i-heroicons-chevron-down-20-solid',
    base: 'w-5 h-5 transform transition-transform duration-200 flex-shrink-0',
    active: 'rotate-180',
    inactive: ''
  },
  externalIcon: {
    name: 'i-heroicons-arrow-up-right-20-solid',
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  popover: {
    mode: 'hover',
    openDelay: 0,
    ui: {
      width: 'max-w-[16rem]'
    }
  },
  pop: {
    wrapper: 'p-2 space-y-1',
    base: 'block px-2 py-1.5 rounded-md flex items-start gap-1.5',
    active: 'bg-gray-200/80 dark:bg-gray-800/80 text-primary',
    inactive: 'hover:bg-gray-100/80 dark:hover:bg-gray-800/80',
    label: 'font-semibold text-sm inline-block relative',
    description: 'text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2',
    icon: {
      base: 'w-5 h-5 flex-shrink-0 mt-1 text-primary'
    },
    externalIcon: {
      name: 'i-heroicons-arrow-up-right-20-solid',
      base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
    }
  }
}
