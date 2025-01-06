/** Imports */
import type { Styles } from '$lib/types/ui.js';
import type { UnionToIntersection } from '@tanstack/table-core';

/** Styles */
const styles = {
	root: {
		layout: 'relative overflow-hidden backdrop-blur-sm',
		flex: 'flex justify-center items-center'
	},
	is: {
		square: {},
		block: {}
	},
	opt: {
		size: {
			sm: {
				flex: 'gap-x-1',
				typography: 'text-sm',
				spacing: 'px-2 py-1',
				border: 'rounded'
			},
			md: {
				flex: 'gap-x-1.5',
				typography: 'text-sm',
				spacing: 'px-2.5 py-1.5',
				border: 'rounded-md'
			}
		},
		variant: {
			solid: {
				background: 'bg-color-500 data-events:hover:bg-color-600',
				border: `ring-1 ring-inset ring-color-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`,
				effect: 'shadow-sm'
			},
			outline: {
				typography: 'text-color-500 ',
				effect: 'shadow-sm'
			}
		}
	},
	load: {
		layout: 'absolute inset-0',
		flex: 'flex items-center justify-center',
		background: 'bg-inherit',
		icon: {
			animation: 'animate-spin',
			svg: 'i-fluent-arrow-sync-24-filled',
			sizing: 'size-6'
		},
		is: {
			square: {},
			wow: {}
		},
		opt: {
			track: {
				sm: {
					flex: 'gap-x-1',
					typography: 'text-sm',
					spacing: 'px-2 py-1',
					border: 'rounded'
				},
				md: {
					flex: 'gap-x-1.5',
					typography: 'text-sm',
					spacing: 'px-2.5 py-1.5',
					border: 'rounded-md'
				}
			},
			variant: {
				solid: {
					background: 'bg-color-500 data-events:hover:bg-color-600',
					border: `ring-1 ring-inset ring-color-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`,
					effect: 'shadow-sm'
				},
				outline: {
					typography: 'text-color-500 ',
					effect: 'shadow-sm'
				}
			}
		}
	}
} satisfies Styles;

type FlattenIsAndOpt<T> = T extends object
	? {
			[K in keyof T]: K extends 'is'
				? { [Key in keyof T[K]]: boolean } // Map `is` to `boolean`
				: K extends 'opt'
					? { [Key in keyof T[K]]: keyof T[K][Key] } // Map `opt` to keys of nested objects (inferred types)
					: FlattenIsAndOpt<T[K]>; // Recurse for nested objects
		}[keyof T]
	: never;

export type ButtonStyles<T> = UnionToIntersection<FlattenIsAndOpt<T>>;

export function w<T extends typeof styles>(params: ButtonStyles<T>) {
	return params;
}
