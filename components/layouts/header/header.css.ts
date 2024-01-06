import { commonUI } from '#ui/ui.config/common.ui'
export default {
  wrapper: 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50',
  header: 'flex items-center justify-between gap-3 h-[4rem]',
  left: 'flex justify-start items-center gap-1.5',
  size: commonUI.size,
  hide: {
    xs: 'hidden sm:flex',
    sm: 'hidden sm:flex',
    md: 'hidden md:flex',
    lg: 'hidden lg:flex',
    xl: 'hidden xl:flex'
  },
  show: {
    xs: 'flex sm:hidden',
    sm: 'flex sm:hidden',
    md: 'flex md:hidden',
    lg: 'flex lg:hidden',
    xl: 'flex xl:hidden'
  },
  right: 'flex justify-end items-center gap-x-3 sm:gap-x-3.5 md:gap-x-4',
  center: 'flex gap-x-2',
  logo: 'flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5',
  panel: 'flex gap-y-2 py-4',
  button: {
    base: 'hidden',
    icon: {
      open: 'fluent:navigation-24-regular',
      close: 'fluent:dismiss-24-regular'
    }
  }
}
