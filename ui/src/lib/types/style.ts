type OmitDeep<T, KeysToOmit extends string> = {
	[K in keyof T as K extends KeysToOmit ? never : K]: T[K] extends object
		? OmitDeep<T[K], KeysToOmit> // Recursively apply to nested objects
		: T[K];
};

export type OmitDeepStyles<T> = OmitDeep<T, 'is' | 'opt'>;

type PickDeep<T, KeysToPick extends string> = {
	[K in keyof T]: K extends KeysToPick
		? T[K] // if key is
		: T[K] extends object
			? PickDeep<T[K], KeysToPick> // Recursively process nested objects
			: never; // Exclude other keys
};

export type PickDeepStyles<T> = PickDeep<T, 'is' | 'opt'>;

type Strify<T> = {
	[K in keyof T as K extends 'opt' | 'is'
		? never
		: T[K] extends object
			? K
			: never]: T[K] extends object
		? { $: string } & Strify<T[K]> // Add `$` to object keys and recurse
		: never; // Skip non-object values
};
