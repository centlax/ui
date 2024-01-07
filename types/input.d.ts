import ui from '../components/forms/input/input.css'

export type InputSize = keyof typeof ui.size
export type InputColor = keyof typeof ui.color
export type InputVariant = keyof typeof ui.variant

export interface Input {
  modelValue: string | number
  type?: string
  id?: string | undefined
  name?: string | undefined
  placeholder?: string | undefined
  required?: boolean
  disabled?: boolean
  autofocus?: boolean
  autofocusDelay?: number
  icon?: string | null
  trailingIcon?: string | null
  padded?: boolean;
  size?: InputSize
  color?: InputColor
  variant?: InputVariant
  outlineAuto?: boolean;
  inputClass?: string | string[]
  class?: string | string[]
  modelModifiers?: { trim?: boolean; lazy?: boolean; number?: boolean }
  ///
  eagerValidation?: boolean
  legend?: string | null
}
