import type { Size } from '$lib/types/index.js';

export type UI = {
	size: Size;
};

export const ui: UI = {
	size: 'sm' // TypeScript will ensure this is a valid Size
};
