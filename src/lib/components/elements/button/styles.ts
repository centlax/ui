import { shareUI } from '$lib/theme/share.js';
import type { ColorMode, ColorPallet } from '$lib/types/theme.js';
import { colors } from '$lib/theme/colors.js';
export type BaseVariant = {
	base?: string;
	color: {
		fore: /* foreground-color */ ColorMode;
		back: /* backround-color */ ColorMode;
		hover: {
			fore: ColorMode;
			back: ColorMode;
		};
	};
};
export interface Variant {
	solid: (color: keyof ColorPallet) => BaseVariant;
	ghost: (color: keyof ColorPallet) => BaseVariant;
	outline: (color: keyof ColorPallet) => BaseVariant;
	soft: (color: keyof ColorPallet) => BaseVariant;
}
const variant: Variant = {
	/* inital means the default color schema */
	solid: (color: keyof ColorPallet): BaseVariant => {
		// Assuming `colors[color]` returns an object with `light` and `dark` properties
		return {
			base: 'shadow-sm text-white dark:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
			color: {
				fore: { light: colors['gray'][950], dark: colors['white'] },
				back: { light: colors[color][600], dark: colors[color][500] }, // Example, adjust as needed
				hover: {
					fore: { light: colors['gray'][950], dark: colors['white'] },
					back: { light: colors[color][700], dark: colors[color][600] } // Adjust as needed
				}
			}
		};
	},
	ghost: (color: keyof ColorPallet): BaseVariant => {
		return {
			base: 'focus-visible:ring-2 focus-visible:ring-inset ring-current',
			color: {
				fore: { light: colors[color][600], dark: colors[color][500] },
				back: { light: colors['transparent'], dark: colors['transparent'] }, // Example, adjust as needed
				hover: {
					fore: { light: colors[color][600], dark: colors[color][500] },
					back: { light: colors[color][50], dark: colors[color][950] } // Adjust as needed
				}
			}
		};
	},
	outline: (color: keyof ColorPallet): BaseVariant => {
		return {
			base: 'ring-1 ring-inset ring-current disabled:bg-transparent dark:disabled:bg-transparent focus-visible:ring-2',
			color: {
				fore: { light: colors[color][600], dark: colors[color][500] },
				back: { light: colors['transparent'], dark: colors['transparent'] }, // Example, adjust as needed
				hover: {
					fore: { light: colors[color][600], dark: colors[color][500] },
					back: { light: colors[color][50], dark: colors[color][950] } // Adjust as needed
				}
			}
		};
	},
	soft: (color: keyof ColorPallet): BaseVariant => {
		// Assuming `colors[color]` returns an object with `light` and `dark` properties
		return {
			base: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current',
			color: {
				fore: { light: colors[color][600], dark: colors[color][500] },
				back: { light: colors[color][50], dark: colors[color][950] }, // Example, adjust as needed
				hover: {
					fore: { light: colors[color][700], dark: colors[color][400] },
					back: { light: colors[color][100], dark: colors[color][900] } // Adjust as needed
				}
			}
		};
	}
};
export const css = {
	base: 'font-semibold focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
	truncate: 'text-left break-all line-clamp-1',
	block: 'w-full flex justify-center items-center',
	inline: 'inline-flex items-center',
	/* in work at progress */
	shape: {
		default: '',
		ellipse: '',
		Circle: ''
	},
	variant: variant,
	icon: {
		base: 'flex-shrink-0',
		loading: 'animate-spin',
		size: shareUI.icon.size
	}
};
