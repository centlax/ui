export default {
  wrapper: 'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50',
  header: 'flex items-center justify-between gap-3 h-[4rem]',
  left: 'flex justify-start items-center gap-1.5',
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
  right: 'flex justify-end items-center gap-1.5',
  logo: 'flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5',
  panel: {
    wrapper: 'fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden',
    header: 'px-0',
    body: 'px-0 py-6'
  },
  button: {
    base: 'hidden',
    icon: {
      open: 'i-fluent-navigation-24-regular',
      close: 'i-fluent-dismiss-24-regular'
    }
  }
}
