// utilize.ts

/**
 * Returns a string of Tailwind color shades (50-950) for a given color.
 * @param color The color name or primary color.
 * @returns A string of CSS variables as shades of color, e.g., --color-500: var(--color-sky-500).
 * @example of return, given color of sky:
 */
export function colorize(color: string = 'primary'): string {
	// Define the shades array with Tailwind color shades from 50 to 950
	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

	// Map through the shades array and generate CSS variable strings
	return shades.map((shade) => `--color-${shade}: var(--color-${color}-${shade});`).join(' '); // Join the custom properties into a single string
}
