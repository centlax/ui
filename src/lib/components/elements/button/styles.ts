import { shareUI } from '$lib/theme/share.js';
import type { ColorShade } from '$lib/types/index.js';
export interface Variant {
	base: string; // Assuming this could be any string value (e.g., Tailwind CSS classes).
	light: { initial: keyof ColorShade; hover: keyof ColorShade };
	dark: { initial: keyof ColorShade; hover: keyof ColorShade };
}
export const ui = {
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
	variant: {
		/* inital means the default color schema */
		solid: {
			base: 'shadow-sm text-white dark:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
			light: { initial: 500, hover: 700 },
			dark: { initial: 500, hover: 600 }
		},
		ghost: {
			base: '',
			light: { initial: 600, hover: 700 },
			dark: { initial: 500, hover: 600 }
		},
		outline: {
			base: '',
			light: { initial: 600, hover: 700 },
			dark: { initial: 500, hover: 600 }
		},
		soft: {
			base: '',
			light: { initial: 600, hover: 700 },
			dark: { initial: 500, hover: 600 }
		}
	},
	icon: {
		base: 'flex-shrink-0',
		loading: 'animate-spin',
		size: shareUI.icon.size
	}
};
