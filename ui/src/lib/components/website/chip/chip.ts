/** Imports */

import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'block',
		sizing: 'size-1.5',
		border: 'rounded-full ring-2 ring-white dark:ring-neutral-900',
		background: 'bg-neutral-500',
		typography: 'text-xs'
	},
	opt: {
		float: {
			'top-right': {
				layout: 'absolute top-0 right-0'
			},
			'bottom-right': {
				layout: 'absolute bottom-0 right-0'
			},
			'top-left': {
				layout: 'absolute top-0 left-0'
			},
			'bottom-left': {
				layout: 'absolute bottom-0 left-0'
			}
		}
	}
} satisfies Styles;
export const chip = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'>;
export interface ChipProps extends BaseProps<typeof chip>, Props {
	children?: Snippet;
	float?: keyof typeof chip.opt.float;
}
