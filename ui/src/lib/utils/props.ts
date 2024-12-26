// kebabToCamel
export function toCamel<T extends Record<string, any>>(obj: T): Record<string, any> {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [
			key.replace(/-([a-z])/g, (_, char) => char.toUpperCase()), // kebab-case to camelCase
			value
		])
	);
}
// camelToKebab
export function toKebab<T extends Record<string, any>>(obj: T): Record<string, any> {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [
			key.replace(/([a-z])([A-Z])/g, (_, lower, upper) => `${lower}-${upper.toLowerCase()}`), // camelCase to kebab-case
			value
		])
	);
}
