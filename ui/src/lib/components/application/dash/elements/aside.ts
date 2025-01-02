/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: '@container/aside overflow-y-auto overflow-x-hidden',
		flex: 'flex h-full grow flex-col gap-y-5',
		border: 'ring-1 ring-black/10 dark:ring-white/10',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'px-6 pb-4'
	}
} satisfies Styles;
export const dashAside = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'>;
export interface DashAsideProps extends BaseProps<typeof dashAside>, Props {}
