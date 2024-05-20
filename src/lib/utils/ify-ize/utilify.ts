// utilify.ts
import type { ClassType, Styles } from '$lib/types/classes.js';
// Export with an alias

/**
 * Enforces the type constraint of all keys being objects in the provided styles object.
 * This function is used to ensure type safety when defining styles objects.
 * @template T The type of the styles object.
 * @param {T} styles The styles object to enforce the type constraint on.
 * @returns {T} The styles object with the type constraint enforced.
 */
export function stylify<T extends Styles>(styles: T): T {
	return styles as T;
}

/**
 * Returns the provided key if it exists in the colors object, otherwise returns the default value 'color'.
 * @param colors The object to search for the key.
 * @param color The key to search for in the object.
 * @returns The key if found in the object, otherwise returns the default value 'color'.
 * @throws Will throw an error if the colors parameter is not a valid non-null object.
 */
export function colorify(colors: object, color: any): keyof typeof colors {
	type Color = keyof typeof colors;

	if (!colors || typeof colors !== 'object') {
		throw new Error('Invalid object input. Object must be a non-null object.');
	}
	if (!color || !Object.keys(colors).includes(color)) {
		return 'color' as Color; // Return default value 'color' if the key is not found
	}

	return color as Color; // Return the key if found in the object
}

/**
 * Type definition for a variant object.
 * This type represents an object where the primary key 'color' holds a `ClassType` value,
 * and any other keys are also associated with `ClassType` values.
 */
type Variant = {
	color: ClassType; // Primary key representing the default color variant.
	[key: string]: ClassType; // Any additional keys representing other color variants.
};

/**
 * Function to retrieve the appropriate `ClassType` based on the given color from a variant object.
 *
 * @param variant - The variant object containing different color variants.
 * @param color - The key representing the desired color variant.
 * @returns The `ClassType` corresponding to the given color, or the default color if the color is not found.
 * @throws Will throw an error if the `variant` is not a non-null object.
 */
export function variantify(variant: Variant, color: any): string {
	// Check if the variant is a valid non-null object.
	if (!variant || typeof variant !== 'object') {
		throw new Error('Invalid object input. Object must be a non-null object.');
	}
	// Check if the color is a valid key within the variant object.
	// If not, return the default color variant.
	if (!color || !Object.keys(variant).includes(color)) {
		return stringify(variant.color);
	}
	// Return the `ClassType` associated with the specified color.
	return stringify(variant[color]);
}

/**
/**
 * Converts multiple objects into a single string by concatenating non-object property values.
 * If the input is not an object, it returns an empty string.
 * @param {...Object} objs The objects to be converted into a string.
 * @returns A string representation of the non-object properties of the input objects.
 */
export function stringify(...objs: ClassType[]): string {
	return objs
		.flatMap((obj) =>
			typeof obj === 'object' ? Object.values(obj).filter((value) => typeof value !== 'object') : []
		)
		.join(' ');
}

/**
 * Processes the provided icon and returns an object containing every key from the input object.
 * If the icon is a string, it uses that string as the base key.
 * @param icon The icon to process, either a string or an object with any set of keys.
 * @returns An object containing the original icon and every key from the input object, with the base key if the icon is a string.
 * @throws Will throw an error if the icon is not a valid string or object.
 */
export function iconify<T>(icon: T) {
	let base: string = typeof icon === 'string' ? icon : '';
	if (typeof icon === 'object') {
		return { base, ...icon };
	}
}
