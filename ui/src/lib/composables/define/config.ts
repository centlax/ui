// Define the UserConfig type based on a specific structure
import type { DeepPartial } from "$lib/import.js";
export const userConfig = {
	// Example config structure (adjust as needed)
	props: {
		override: false,
		size: 'md' as 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	},
	colors: {
		primary: 'sky',
		gray: 'cool',
		success: 'green',
		warning: 'yellow',
		danger: 'red',
		mask: [
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
		base: ['slate', 'cool', 'zinc', 'neutral', 'stone'] as const
	},
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
	},
	components: {} // Add your components configuration here
};

// Create a type from the structure of userConfig
export type UserConfig = typeof userConfig;

// Define a function to create a configuration object of type UserConfig
export function defineConfig(config: DeepPartial<UserConfig>): DeepPartial<UserConfig> {
	return config;
}
