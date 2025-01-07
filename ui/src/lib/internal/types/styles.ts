import type { UnionToIntersection } from '@tanstack/table-core';

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
