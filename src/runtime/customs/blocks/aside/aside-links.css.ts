import { share } from '../../../shared'
export default {
  wrapper: 'space-y-6 mb-3 lg:mb-6',
  base: 'flex items-center gap-1.5 lg:gap-2 group',
  active: 'text-primary font-semibold',
  inactive: 'text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-semibold hover:font-bold',
  icon: {
    wrapper: 'rounded-md p-1 inline-flex ring-inset ring-1',
    base: 'w-5 h-5 flex-shrink-0',
    active: 'bg-primary ring-primary text-background',
    inactive: 'bg-gray-100/80 dark:bg-gray-800/80 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background'
  },
  externalIcon: {
    name: share.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  label: 'text-base relative'
}
