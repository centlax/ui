import type ULink from './link'
import type Avatar from './avatar'

export interface TLink extends ULink {
[x: string]: string
  label: string
  description?: string
  class?: string
  disabled?: boolean
  icon?: string
  iconClass?: string
  avatar?: Avatar
  badge?: string
  children?: TLink[]
  click?: Function
}
