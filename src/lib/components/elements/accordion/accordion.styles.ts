import { stylify } from '$lib/utils/index.js';

export const styles = stylify({
	root: {
		flex: 'flex flex-col',
		sizing: 'w-full'
	},
	item: {
		flex: 'flex flex-col',
		sizing: 'w-full',
		icon: {
			spacing: 'ms-auto',
			motion: 'transform transition-transform duration-200'
		},
		header: {
			flex: 'flex'
		},
		panel: {
			typography: 'text-sm text-gray-600 dark:text-gray-400',
			spacing: 'pt-1.5 pb-3'
		}
	},
	default: {
		icon: {
			open: { svg: 'i-heroicons-chevron-down-20-solid' },
			close: { svg: '' }
		},
		sizing: 'w-full',
		spacing: 'mb-1.5'
	}
});
