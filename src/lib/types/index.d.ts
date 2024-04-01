export type * from './theme.js';

export type Color = 'primary' | 'success' | 'warning' | 'danger';
export type State = 'success' | 'warning' | 'danger' | undefined;
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type YDir = 'north' | 'south'; /* vertical/ y plane directions */
export type XDir = 'east' | 'west'; /* horizantal/ x plane directions */
export type Dir = YDir | XDir; /* vertical & horizantal directions */
