import { colors } from '$lib/theme/colors.js';
import { shareUI, type BaseVariant } from '$lib/theme/share.js';
import type { ColorMode, ColorPallet } from '$lib/types/theme.js';
export type ButtonColor = keyof ColorPallet | 'white' | 'black' | 'gray';
export type ButtonVariant = 'solid' | 'ghost' | 'outline' | 'soft';
export type ButtonMask = {
	fore: ColorMode;
	back: ColorMode;
	hover: { fore: ColorMode; back: ColorMode };
};
export interface Variant {
	solid: (color: keyof ColorPallet) => BaseVariant;
	ghost: (color: keyof ColorPallet) => BaseVariant;
	outline: (color: keyof ColorPallet) => BaseVariant;
	soft: (color: keyof ColorPallet) => BaseVariant;
}

export const css = {
	base: /* focus-visible:outline-0 */ 'font-semibold focus:outline-none disabled:cursor-not-allowed disabled:opacity-80 flex-shrink-0',
	truncate: 'text-left break-all line-clamp-1',
	block: 'w-full flex justify-center items-center',
	inline: 'inline-flex items-center',
	rounded: 'rounded-md',
	variant: {
		base: {
			solid: {
				white: `shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500`,
				gray: `shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500`,
				black: `shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500`
			},
			ghost: {
				white: `text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500`,
				gray: `text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500`
			}
		},
		mask: {
			solid: `shadow-sm text-white dark:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
			ghost: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current`,
			outline: `ring-1 ring-inset ring-current focus-visible:ring-2 focus-visible:ring-current`,
			soft: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current`
		}
	},
	icon: {
		base: 'flex-shrink-0',
		loading: 'animate-spin',
		size: shareUI.icon.size
	}
};

export function handeMask(variant: ButtonVariant, color: ButtonColor): ButtonMask {
	switch (variant) {
		case 'solid':
			return {
				fore: { light: colors['white'], dark: colors['gray'][900] },
				back: { light: colors[color][600], dark: colors[color][500] },
				hover: {
					fore: { light: colors['white'], dark: colors['gray'][900] },
					back: { light: colors[color][700], dark: colors[color][400] }
				}
			};
		case 'ghost':
			return {
				fore: { light: colors[color][600], dark: colors[color][500] },
				back: { light: colors['transparent'], dark: colors['transparent'] },
				hover: {
					fore: { light: colors[color][600], dark: colors[color][500] },
					back: { light: colors[color][100], dark: colors[color][950] }
				}
			};
		case 'outline':
			return {
				fore: { light: colors[color][600], dark: colors[color][500] },
				back: { light: colors['transparent'], dark: colors['transparent'] },
				hover: {
					fore: { light: colors[color][600], dark: colors[color][500] },
					back: { light: colors[color][100], dark: colors[color][950] }
				}
			};
		case 'soft':
			return {
				fore: { light: colors[color][600], dark: colors[color][500] },
				back: { light: colors[color][100], dark: colors[color][950] },
				hover: {
					fore: { light: colors[color][800], dark: colors[color][400] },
					back: { light: colors[color][200], dark: colors[color][900] }
				}
			};
	}
}
