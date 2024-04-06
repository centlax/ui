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

export const ui: UI = {
	size: 'sm', // TypeScript will ensure this is a valid Size,
	colors: {
		primary: 'indigo',
		gray: 'cool'
	},
	icon: {
		load: 'i-fluent-arrow-sync-24-regular'
	},
	layout: {
		constrained: 'max-w-screen-2xl'
	}
};
