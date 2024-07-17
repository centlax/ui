/** Imports */
import type { DeepStyles, Props, Styles } from '$lib/types/index.js';
import type { HTMLInputAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		typography: 'text-primary-500',
		border: 'rounded border-gray-300 dark:border-gray-700 focus:ring-primary-500',
		sizing: 'size-4'
	}
} satisfies Styles;
export const checkbox = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof checkbox>,
	override: false,
	checked: undefined as HTMLInputAttributes['checked']
} satisfies Props;
