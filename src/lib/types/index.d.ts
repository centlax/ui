// types/index.d.ts
import { colors } from '../theme/colors.js';
// Exporting types from other files
export type * from './theme.d.js';
export type * from './overlay.d.js';
export type * from './classes.d.js';
/**
 * Define size options
 */

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Define vertical plane directions
 */
export type YDir = 'north' | 'south'; /* vertical/ y plane directions */

/**
 * Define horizontal plane directions
 */
export type XDir = 'east' | 'west'; /* horizontal/ x plane directions */

/**
 * Define directions (vertical & horizontal)
 */
export type Dir = YDir | XDir; /* vertical & horizontal directions */

/**
 * Define a type for deep partial objects
 */
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Define type for excluded colors
 */

type ExcludeColors =
	| 'inherit'
	| 'transparent'
	| 'current'
	| 'white'
	| 'black'
	| 'slate'
	| 'gray'
	| 'zinc'
	| 'neutral'
	| 'stone'
	| 'cool'
	| 'color';

/**
 * Define type for safe list colors by excluding the excluded colors
 */
type ForeColor = Exclude<keyof typeof colors, ExcludeColors>;

/**
 *  Define interface for color with foreground color
 */
export interface Color {
	fore: ForeColor;
}
