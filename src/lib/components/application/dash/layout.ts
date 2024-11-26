/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'h-full',
		background: 'bg-white dark:bg-neutral-900'
	},
	aside: {
		flex: 'hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[18rem] lg:flex-col',
		sheet: {
			flex: 'inset-y-0 left-0 h-full w-72'
		}
	},
	main: {
		flex: 'lg:pl-72'
	},
	header: {
		flex: 'sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6'
	}
} satisfies Styles;
export const dashLayout = styles;

/** Props */

type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

export interface DashLayoutProps extends BaseProps<typeof dashLayout>, Props {
	children: Snippet;
	aside?: Snippet;
	south?: Snippet;
}
