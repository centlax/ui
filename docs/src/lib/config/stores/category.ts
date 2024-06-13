export const categories = [
	{
		name: 'application',
		label: 'Application'
	},
	{
		name: 'common',
		label: 'Common'
	},
	{
		name: 'website',
		label: 'Website'
	}
] as const;

export type Category = (typeof categories)[number];

export function isCategory(c: string): c is Category['name'] {
	return categories.some((category) => category.name === c);
}
