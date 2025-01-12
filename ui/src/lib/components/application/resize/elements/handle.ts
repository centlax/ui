/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import clsx from 'clsx';
import type { PaneResizerPropsWithoutHTML } from 'paneforge';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles
 *
 * data-direction
 */
const styles = {
	root: {
		layout: 'group relative after:absolute after:inset-y-0 after:left-1/2 after:-translate-x-1/2',
		flex: 'flex items-center justify-center',
		background: 'hover:ring-primary-500',
		sizing: clsx(
			'after:w-1 hover:ring-2',
			'focus-visible:ring-1 focus-visible:ring-offset-1',
			'data-[direction=vertical]:w-full data-[direction=vertical]:after:w-full',
			'data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1',
			' data-[direction=vertical]:after:-translate-y-1/2 ',
			'data-[direction=vertical]:after:translate-x-0'
		),
	}
} satisfies Styles;
export const resizeHandle$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class' | 'children'> &
	BaseProps<typeof resizeHandle$>;
export interface XResizeHandle extends Props, PaneResizerPropsWithoutHTML {
	id?: string;
}
