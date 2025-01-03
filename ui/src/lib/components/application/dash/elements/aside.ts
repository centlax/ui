/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
/**
 * aside-class:"flex h-full max-w-[20rem] grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6",
 * sheet-close-cointariner:	"absolute left-full top-0 flex h-full w-10 items-start justify-center bg-neutral-900/10 pt-5",
 * sheet-close:"absolute left-full top-0 flex h-full w-10 items-start justify-center bg-neutral-900/10 pt-5"
 * closebutton:class="-m-2.5 p-2.5"
 * closebuttonIconclass="size-6 text-white"
 * name="i-fluent-dismiss-24-regular"
 */
const styles = {
	root: {
		layout: '@container/aside overflow-y-auto overflow-x-hidden',
		flex: 'flex h-full grow flex-col gap-y-5',
		border: 'ring-1 ring-black/10 dark:ring-white/10',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'px-6 pb-4'
	},
	fixed: {},
	sheet: {
		layout: 'h-full w-full sm:w-[--dash-width] lg:z-50 lg:flex lg:flex-col',
		close: {
			layout: '-m-2.5 p-2.5'
		}
	}
} satisfies Styles;
export const dashAside = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'>;
export interface DashAsideProps extends BaseProps<typeof dashAside>, Props {
	open?: boolean;
}
