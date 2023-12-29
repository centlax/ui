/**
 * "123-foo" will be parsed to 123
 * This is used for the .number modifier in v-model
 */
export function looseToNumber (val: any): any {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

export function hexToRgb (hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : null
}

export const variantUI = computed(() => (color: string, uiColor: string, variant: string) => {
  if (color === 'white' || color === 'gray') {
    return uiColor
  } else {
    if (variant) {
      return variant.replaceAll('{color}', color)
    } else {
      // Handle the case when ui.variant[variant] is undefined
      console.error(`Variant '${variant}' not found.`)
      return '' // or some default value
    }
  }
})
