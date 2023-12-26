/**
 * "123-foo" will be parsed to 123
 * This is used for the .number modifier in v-model
 */
export function looseToNumber (val: any): any {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}
