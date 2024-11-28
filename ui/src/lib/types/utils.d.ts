export type GetObjectField<MaybeObject, Key extends string> =
	MaybeObject extends Record<string, unknown> ? MaybeObject[Key] : never;

type CamelToKebab<S extends string> =
	S extends Uppercase<S> // Check if the string is all uppercase
		? Lowercase<S> // Convert to lowercase without adding dashes
		: S extends `${infer T}${infer U}`
			? T extends Lowercase<T>
				? `${T}${CamelToKebab<U>}`
				: `-${Lowercase<T>}${CamelToKebab<U>}`
			: S;

export type TransformKeysToKebab<T> = {
	[K in keyof T as CamelToKebab<Extract<K, string>>]: T[K];
};
