import type { Size } from '$lib/types/index.js';
import type { Colors } from './types/index.js';
export type UI = {
	size: Size;
	colors?: {
		primary?: Colors['fore'];
		gray?: Colors['back'];
	};
	icon?: {
		load?: string;
	};
	layout?: {
		constrained?: string;
	};
};

export const ui = {
	size: 'sm', // TypeScript will ensure this is a valid Size,
	colors: {
		primary: 'indigo',
		gray: 'cool'
	},
	icon: {
		load: 'i-fluent-arrow-sync-24-regular',
		dark: 'i-heroicons-moon-20-solid',
		light: 'i-heroicons-sun-20-solid',
		system: 'i-heroicons-computer-desktop-20-solid',
		search: 'i-heroicons-magnifying-glass-20-solid',
		external: 'i-heroicons-arrow-up-right-20-solid',
		chevron: 'i-fluent-chevron-down-20-regular',
		hash: 'i-heroicons-hashtag-20-solid',
		menu: 'i-heroicons-bars-3-20-solid',
		close: 'i-heroicons-x-mark-20-solid',
		check: 'i-heroicons-check-circle-20-solid'
	},
	layout: {
		constrained: 'max-w-screen-2xl'
	}
};
