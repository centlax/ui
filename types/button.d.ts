import ui from '../components/elements/button/button.css'

export type ButtonSize = keyof typeof ui.size
export type ButtonColor = keyof typeof ui.color
export type ButtonVariant = keyof typeof ui.variant

export interface Button {
  label?: string
  to?: string
  block?: boolean
  loading?: boolean
  disabled?: boolean
  padded?: boolean
  square?: boolean
  truncate?: boolean
  iconColor?: boolean
  icon?: string | null
  trailingIcon?: string | null
  size?: ButtonSize
  color?: ButtonColor
  variant?: ButtonVariant
  loadingIcon?: string
  class?: string | string[]
}
