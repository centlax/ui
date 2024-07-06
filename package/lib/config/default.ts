import * as components from '$lib/config/imports/props.js';

export const config = {
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
			/** added */
			'primary',
			'success',
			'warning',
			'danger'
		] as const,
		base: ['slate', 'cool', 'zinc', 'neutral', 'stone']
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
	components: components
};
