import type { Size } from '$lib/types/index.js';
import { sharedUI } from './theme/shared.js';

export const ui = {
	share: sharedUI
};

export const config = {
	strategy: {
		override: 'merge' as 'fully' | 'merge'
	},
	layout: {
		constrained: 'max-w-screen-2xl'
	},
	size: 'sm' as Size, // TypeScript will ensure this is a valid Size,
	colors: {
		primary: 'indigo',
		gray: 'cool'
	},
	shared: sharedUI,
	header: {
		height: '4rem'
	},
	icon: {
		loading: 'i-fluent-arrow-sync-20-regular',
		dark: 'dark:i-fluent-weather-moon-20-filled',
		light: 'i-fluent-weather-sunny-20-filled',
		system: 'i-heroicons-computer-desktop-20-solid',
		search: 'i-heroicons-magnifying-glass-20-solid',
		external: 'i-heroicons-arrow-up-right-20-solid',
		chevron: 'i-fluent-chevron-down-20-filled',
		hash: 'i-heroicons-hashtag-20-solid',
		menu: 'i-fluent-navigation-20-regular',
		open: 'i-fluent-navigation-20-regular',
		close: 'i-fluent-dismiss-20-regular',
		check: 'i-heroicons-check-circle-20-solid'
	}
};
