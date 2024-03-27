export type Color =
	| 'primary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'white'
	| 'black'
	| 'gray'; /* base color schema to be used for elements */
export type YDir = 'north' | 'south'; /* vertical/ y plane directions */
export type XDir = 'east' | 'west'; /* horizantal/ x plane directions */
export type Dir = YDir | XDir; /* vertical & horizantal directions */
