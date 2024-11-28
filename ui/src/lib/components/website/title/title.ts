/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		typography: 'text-neutral-900 dark:text-white'
	},
	opt: {
		level: {
			1: {
				typography: 'text-2xl/8 sm:text-xl/8 font-semibold '
			},
			2: {
				typography: 'text-xl/6 sm:text-lg/6 font-semibold '
			},
			3: {
				typography: 'text-lg/5 sm:text-base/5 font-medium '
			},
			4: {
				typography: 'text-base/4 sm:text-sm/4 font-medium '
			},
			5: {
				typography: 'text-sm/3 sm:text-xs/2 font-medium '
			},
			6: {
				typography: 'text-xs/2 sm:text-xs/3 font-medium '
			}
		}
	}
} satisfies Styles;
export const heading = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLHeadingElement>, 'class'>;
export interface HeadingProps extends BaseProps<typeof heading>, Props {
	children?: Snippet;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	sub?: boolean;
}
