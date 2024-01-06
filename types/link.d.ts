import type { NuxtLinkProps } from '#app'

// if not Omit noPrefefech or prefech ==> vue warns not to use both,
// given if both used, noPrefetch will be ignore anyways.

export interface Link extends Omit<NuxtLinkProps, 'noPrefetch'> {
  as?: string
  label?: string
  primary?: boolean
}

export interface NavLink extends Link {
  description?: string
  class?: string
  disabled?: boolean
  icon?: string
  iconClass?: string
  children?: NavLink[]
}
