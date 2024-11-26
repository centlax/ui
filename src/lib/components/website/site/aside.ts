/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'divide-y divide-neutral-500/10',
		sizing: 'bg-white h-full overflow-y-auto px-6 py-6 sm:ring-1 sm:ring-neutral-900/10'
	},

	north: {
		layout: 'flex items-center justify-between'
	},
	center: {
		spacing: '-my-6 mt-6 flow-root space-y-2  py-6',
		trigger: {},
		content: {}
	},
	south: {
		spacing: 'py-6'
	}
} satisfies Styles;
export const siteAside = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'>;
export interface SiteAsideProps<T extends Item<T>> extends BaseProps<typeof siteAside>, Props {
	items: T[];
	children?: Snippet;
	trigger?: Snippet<[T]>;
	content?: Snippet<[T]>;
	north?: Snippet;
	south?: Snippet;
}
