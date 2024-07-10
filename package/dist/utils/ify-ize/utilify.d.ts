import type { Utility, Styles } from '../../types/utility.js';
/**
 * Enforces the type constraint of all keys being objects in the provided styles object.
 * This function is used to ensure type safety when defining styles objects.
 * @template T The type of the styles object.
 * @param {T} styles The styles object to enforce the type constraint on.
 * @returns {T} The styles object with the type constraint enforced.
 */
export declare function stylify<T extends Styles>(styles: T): T;
export { stringify as strify };
/**
 * Type definition for a variant object.
 * This type represents an object where the primary key 'color' holds a `ClassType` value,
 * and any other keys are also associated with `ClassType` values.
 */
type Variant = {
    color: Utility;
    [key: string]: Utility;
};
/**
 * Function to retrieve the appropriate `ClassType` based on the given color from a variant object.
 *
 * @param variant - The variant object containing different color variants.
 * @param color - The key representing the desired color variant.
 * @returns The `ClassType` corresponding to the given color, or the default color if the color is not found.
 * @throws Will throw an error if the `variant` is not a non-null object.
 */
export declare function variantify(variant: Variant, color: any): Utility;
export { variantify as varify };
/**
/**
 * Converts multiple objects into a single string by concatenating non-object property values.
 * If the input is not an object, it returns an empty string.
 * @param {...Object} objs The objects to be converted into a string.
 * @returns A string representation of the non-object properties of the input objects.
 */
export declare function stringify(...objs: Utility[]): string;
