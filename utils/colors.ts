import { omit } from './lodash'
import { kebabCase } from 'scule'

const colorsToExclude = [
  'inherit',
  'transparent',
  'current',
  'white',
  'black',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'cool'
]

export const excludeColors = (colors: object): string[] => {
  return Object.entries(omit(colors, colorsToExclude))
    .filter(([, value]) => typeof value === 'object')
    .map(([key]) => kebabCase(key))
}
