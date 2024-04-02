import type { Size } from '$lib/types/index.js';

export type UI = {
	size: Size;
	icon?: {
		load?: string;
	};
	layout?: {
		constrained?: string;
	};
};

export const ui: UI = {
	size: 'sm', // TypeScript will ensure this is a valid Size
	icon: {
		load: 'i-fluent-arrow-sync-24-regular'
	},
	layout: {
		constrained: 'max-w-7xl'
	}
};
