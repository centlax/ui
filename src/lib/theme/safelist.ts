import { omit } from '../utils/lodash.js';
import { kebabCase, camelCase, upperFirst } from 'scule';
import { colors } from './colors.js';

// Define colors to exclude
const colorsToExclude: ExcludeColors[] = [
	'inherit',
	'transparent',
	'current',
	'white',
	'black',
	'slate',
	'gray',
	'zinc',
	'neutral',
	'stone',
	'cool'
];

// Define type for excluded colors
export type ExcludeColors =
	| 'inherit'
	| 'transparent'
	| 'current'
	| 'white'
	| 'black'
	| 'slate'
	| 'gray'
	| 'zinc'
	| 'neutral'
	| 'stone'
	| 'cool';

// Define type for safelist colors by excluding the excluded colors
export type SafelistColors = Exclude<keyof typeof colors, ExcludeColors>;

interface SafelistGroup {
	pattern: RegExp;
	variants?: string[];
}

type SafelistByComponent = {
	[component: string]: (colorsAsRegex: string) => SafelistGroup[];
};

const safelistByComponent: SafelistByComponent = {
	badge: (colorsAsRegex) => [
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-50`)
		},
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-500`),
			variants: ['dark']
		},
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-500`)
		},
		{
			pattern: new RegExp(`text-(${colorsAsRegex})-500`)
		},
		{
			pattern: new RegExp(`ring-(${colorsAsRegex})-500`)
		}
	],
	button: (colorsAsRegex: string) => [
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-50`),
			variants: ['hover', 'disabled']
		},
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-100`),
			variants: ['hover']
		},
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-500`),
			variants: ['dark', 'dark:disabled']
		},
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-600`),
			variants: ['disabled', 'dark:hover']
		},
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-600`),
			variants: ['hover']
		},
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-900`),
			variants: ['dark:hover']
		},
		{
			pattern: new RegExp(`bg-(${colorsAsRegex})-950`),
			variants: ['dark', 'dark:hover', 'dark:disabled']
		},
		{
			pattern: new RegExp(`text-(${colorsAsRegex})-400`),
			variants: ['dark', 'dark:disabled']
		},
		{
			pattern: new RegExp(`text-(${colorsAsRegex})-500`),
			variants: ['dark:hover', 'disabled']
		},
		{
			pattern: new RegExp(`text-(${colorsAsRegex})-600`),
			variants: ['hover']
		},
		{
			pattern: new RegExp(`outline-(${colorsAsRegex})-400`),
			variants: ['dark:focus-visible']
		},
		{
			pattern: new RegExp(`outline-(${colorsAsRegex})-500`),
			variants: ['focus-visible']
		},
		{
			pattern: new RegExp(`ring-(${colorsAsRegex})-400`),
			variants: ['dark:focus-visible']
		},
		{
			pattern: new RegExp(`ring-(${colorsAsRegex})-500`),
			variants: ['dark:hover']
		},
		{
			pattern: new RegExp(`ring-(${colorsAsRegex})-500`),
			variants: ['focus-visible']
		}
	],
	
};

const safelistComponentAliasesMap: { [key: string]: string } = {
	USelect: 'UInput',
	USelectMenu: 'UInput',
	UTextarea: 'UInput',
	URadioGroup: 'URadio',
	UMeterGroup: 'UMeter',
	UButtonGroup: 'UButton'
};

const colorsAsRegex = (colors: string[]): string => colors.join('|');

export const excludeColors = (colors: object): string[] => {
	return Object.entries(omit(colors, colorsToExclude))
		.filter(([, value]) => typeof value === 'object')
		.map(([key]) => kebabCase(key));
};
export const safelistColors = excludeColors(colors);

export const generateSafelist = (colors: string[]) => {
	const safelist = Object.keys(safelistByComponent).flatMap((component) =>
		safelistByComponent[component](colorsAsRegex(colors))
	);

	return [
		...safelist,
		// Gray safelist for Avatar & Notification
		'bg-gray-500',
		'dark:bg-gray-400',
		'text-gray-500',
		'dark:text-gray-400'
	];
};

export const customSafelistExtractor = (
	prefix: string,
	content: string,
	colors: string[],
	safelistColors: string[]
) => {
	const classes: string[] = [];
	const regex =
		/<([A-Za-z][A-Za-z0-9]*(?:-[A-Za-z][A-Za-z0-9]*)*)\s+(?![^>]*:color\b)[^>]*\bcolor=["']([^"']+)["'][^>]*>/gs;

	const matches = content.matchAll(regex);

	const components = Object.keys(safelistByComponent).map(
		(component) => `${prefix}${component.charAt(0).toUpperCase() + component.slice(1)}`
	);

	for (const match of matches) {
		const [, component, color] = match;

		const camelComponent = upperFirst(camelCase(component));

		if (!colors.includes(color) || safelistColors.includes(color)) {
			continue;
		}

		let name: string = safelistComponentAliasesMap[camelComponent] || camelComponent;

		if (!components.includes(name)) {
			continue;
		}

		name = name.replace(prefix, '').toLowerCase();
		const matchClasses = safelistByComponent[name](color).flatMap((group: SafelistGroup) => {
			return ['', ...(group.variants || [])].flatMap((variant) => {
				const matches = group.pattern.source.match(/\(([^)]+)\)/g);
				return (
					matches
						?.map((match: string) => {
							const colorOptions = match.substring(1, match.length - 1).split('|');
							return colorOptions.map(
								(color: string) =>
									`${variant ? variant + ':' : ''}` + group.pattern.source.replace(match, color)
							);
						})
						.flat() || []
				);
			});
		});
		classes.push(...matchClasses);
	}
	return classes;
};
