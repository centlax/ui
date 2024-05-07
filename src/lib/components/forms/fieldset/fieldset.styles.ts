import { sharedUI } from '$lib/theme/shared.js';
export const css = {
	wrapper: '',
	north: 'flex content-center items-center justify-between',
	label: {
		base: 'block font-medium text-gray-700 dark:text-gray-200',
		required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
	},
	text: sharedUI.text,
	container: 'mt-1 relative',
	hint: 'text-primary-600 dark:text-primary-500 font-medium',
	help: 'text-gray-600 dark:text-gray-500',
	error: 'text-red-600 dark:text-red-500'
};
