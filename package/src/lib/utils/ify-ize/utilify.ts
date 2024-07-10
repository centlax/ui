// utilify.ts
import type { Utility, Styles } from '$lib/types/utility.js';
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
export { stringify as strify };

/**
 * Type definition for a variant object.
 * This type represents an object where the primary key 'color' holds a `ClassType` value,
 * and any other keys are also associated with `ClassType` values.
 */
type Variant = {
	color: Utility; // Primary key representing the default color variant.
	[key: string]: Utility; // Any additional keys representing other color variants.
};

/**
 * Function to retrieve the appropriate `ClassType` based on the given color from a variant object.
 *
 * @param variant - The variant object containing different color variants.
 * @param color - The key representing the desired color variant.
 * @returns The `ClassType` corresponding to the given color, or the default color if the color is not found.
 * @throws Will throw an error if the `variant` is not a non-null object.
 */
export function variantify(variant: Variant, color: any): Utility {
	// Check if the variant is a valid non-null object.
	if (!variant || typeof variant !== 'object') {
		throw new Error('Invalid object input. Object must be a non-null object.');
	}
	// Check if the color is a valid key within the variant object.
	// If not, return the default color variant.
	if (!color || !Object.keys(variant).includes(color)) {
		return variant.color;
	}
	// Return the `ClassType` associated with the specified color.
	return variant[color];
}
export { variantify as varify };
/**
/**
 * Converts multiple objects into a single string by concatenating non-object property values.
 * If the input is not an object, it returns an empty string.
 * @param {...Object} objs The objects to be converted into a string.
 * @returns A string representation of the non-object properties of the input objects.
 */
export function stringify(...objs: Utility[]): string {
	return objs
		.flatMap((obj) =>
			typeof obj === 'object' ? Object.values(obj).filter((value) => typeof value !== 'object') : []
		)
		.join(' ');
}
