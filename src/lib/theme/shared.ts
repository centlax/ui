// shareUI.ts
import type { ColorMode } from '$lib/types/theme.js';

// @unocss-include
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

export const sharedUI = {
	font: 'font-medium',
	rounded: {
		md: 'rounded-md',
		full: 'rounded-full'
	},
	size: {
		xs: 'xs',
		sm: 'sm',
		md: 'md',
		lg: 'lg',
		xl: 'xl'
	},
	text: {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-sm',
		lg: 'text-sm',
		xl: 'text-base'
	},
	gap: {
		xs: 'gap-x-1.5',
		sm: 'gap-x-1.5',
		md: 'gap-x-2',
		lg: 'gap-x-2.5',
		xl: 'gap-x-2.5'
	},
	padding: {
		rectangle: {
			xs: 'px-2.5 py-1.5',
			sm: 'px-2.5 py-1.5',
			md: 'px-3 py-2',
			lg: 'px-3.5 py-2.5',
			xl: 'px-3.5 py-2.5'
		},
		square: {
			xs: 'p-1.5',
			sm: 'p-1.5',
			md: 'p-2',
			lg: 'p-2.5',
			xl: 'p-2.5'
		}
	},
	icon: {
		size: {
			xs: 'size-4',
			sm: 'size-5',
			md: 'size-5',
			lg: 'size-5',
			xl: 'size-6'
		},
		padding: {
			x: {
				xs: 'px-2.5',
				sm: 'px-2.5',
				md: 'px-3',
				lg: 'px-3.5',
				xl: 'px-3.5'
			}
		}
	}
};

export const arrowUI = {
	base: 'invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
	ring: 'before:ring-1 before:ring-gray-200 dark:before:ring-gray-800',
	rounded: 'before:rounded-sm',
	background: 'before:bg-gray-200 dark:before:bg-gray-800',
	shadow: 'before:shadow',
	// eslint-disable-next-line quotes
	placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};

export const iconUI = {
	dark: 'heroicons:moon-20-solid',
	light: 'heroicons:sun-20-solid',
	system: 'heroicons:computer-desktop-20-solid',
	search: 'heroicons:magnifying-glass-20-solid',
	external: 'heroicons:arrow-up-right-20-solid',
	chevron: 'heroicons:chevron-down-20-solid',
	hash: 'heroicons:hashtag-20-solid'
};
