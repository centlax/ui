import type { DeepPartial } from '$lib/types/ui.js';

export const colors = {
	foreground: [
		'red',
		'orange',
		'amber',
		'yellow',
		'lime',
		'green',
		'emerald',
		'teal',
		'cyan',
		'sky',
		'blue',
		'indigo',
		'violet',
		'purple',
		'fuchsia',
		'pink',
		'rose',
		'primary',
		'success',
		'warning',
		'danger'
	] as const,
	background: ['slate', 'gray', 'zinc', 'warm', 'stone'] as const
};

type ForegroundColors = (typeof colors.foreground)[number];
type BackgroundColors = (typeof colors.background)[number];

export const defaultConfig = {
	colors: {
		primary: 'sky' as ForegroundColors | (string & {}), // Allow predefined + custom strings
		neutral: 'warm' as BackgroundColors | (string & {}), // Allow predefined + custom strings
		success: 'green' as ForegroundColors | (string & {}),
		warning: 'yellow' as ForegroundColors | (string & {}),
		danger: 'red' as ForegroundColors | (string & {}),
		mask: colors.foreground, // Mask allows all foreground colors
		base: colors.background // Base allows all background colors
	},
	prefix: 'U',
	icons: {
		dark: 'i-heroicons-moon-20-solid',
		light: 'i-heroicons-sun-20-solid',
		load: 'i-fluent-arrow-sync-20-regular',
		search: 'i-heroicons-magnifying-glass-20-solid',
		external: 'i-heroicons-arrow-up-right-20-solid',
		chevron: 'i-heroicons-chevron-down-20-solid',
		hash: 'i-heroicons-hashtag-20-solid',
		menu: 'i-heroicons-bars-3-20-solid',
		close: 'i-heroicons-x-mark-20-solid',
		check: 'i-heroicons-check-circle-20-solid'
	}
};
// Define configuration types
export type DefaultConfig = typeof defaultConfig; // Full default config type
export type UserConfig = DeepPartial<DefaultConfig>; // User-configurable subset
export type UI = UserConfig; // Alias for user configuration
