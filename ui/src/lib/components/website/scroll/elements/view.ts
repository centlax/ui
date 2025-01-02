/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateScrollAreaProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout:
			'text-primary-900 relative h-72 w-52 overflow-hidden rounded-md border bg-white shadow-lg'
	},
	viewport: {
		layout: 'rounded-[inherit]',
		sizing: 'size-full'
	},
	content: {},
	y: {
		bar: {
			layout:
				'bg-primary-800/10 flex h-full w-2.5 touch-none select-none border-l border-l-transparent p-px transition-colors'
		},
		thumb: {
			layout: 'relative flex-1 rounded-full',
			background: 'bg-primary-600'
		}
	},
	x: {
		bar: {
			layout:
				'bg-primary-800/10 flex h-2.5 w-full touch-none select-none border-t border-t-transparent p-px'
		},
		thumb: {
			layout: 'bg-primary-600 relative rounded-full'
		}
	},
	corner: {}
} satisfies Styles;
export const scrollView = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> & TransformKeysToKebab<CreateScrollAreaProps>;
export interface ScrollViewProps extends BaseProps<typeof scrollView>, Props {
	children: Snippet;
}
