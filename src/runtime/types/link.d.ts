import type { NuxtLinkProps } from '#app'

export interface Link extends NuxtLinkProps {
  active?: boolean
  exact?: boolean
  exactQuery?: boolean
  exactMatch?: boolean
  inactiveClass?: string
  label: string
  description?: string
  class?: string
  disabled?: boolean
  icon?: string
  iconClass?: string
  avatar?: Avatar
  badge?: string
  children?: Link[]
  click?: Function
}
