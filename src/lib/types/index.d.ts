import { colors } from '../theme/colors.js';

export type * from './theme.js';
export type * from './overlay.d.js';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type YDir = 'north' | 'south'; /* vertical/ y plane directions */
export type XDir = 'east' | 'west'; /* horizantal/ x plane directions */
export type Dir = YDir | XDir; /* vertical & horizantal directions */
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Define type for excluded colors
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

// Define type for safelist colors by excluding the excluded colors
type ForeGroundColors = Exclude<keyof typeof colors, ExcludeColors>;

export interface Color {
	fore: ForeGroundColors;
}
