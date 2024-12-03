/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { DateValue } from '@internationalized/date';
import type { CreateCalendarProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'w-fit',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'p-3',
		border: 'rounded-lg ring-1 ring-black/10 dark:ring-white/10',
		effect: 'shadow-sm',
		typography: 'text-sm font-semibold'
	},
	header: {
		flex: 'flex items-center justify-between px-1.5',
		heading: {
			layout: 'relative',
			flex: 'text-center font-medium truncate mx-auto'
		},
		prev: {
			flex: 'flex'
		},
		next: {
			flex: 'flex'
		}
	},
	main: {
		flex: 'flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0',
		month: {
			flex: '',
			head: {
				custom: '',
				typography: 'text-primary-500',
				week: {
					custom: '',
					day: {}
				}
			},
			body: {
				typography: 'text-sm font-medium',
				week: {
					flex: 'relative text-center text-sm',
					day: {
						typography: 'text-center',
						is: {
							outside: {
								effect: 'opacity-10'
							}
						}
					}
				}
			}
		}
	}
} satisfies Styles;
export const calendar = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	Omit<TransformKeysToKebab<CreateCalendarProps>, 'value'>;
export interface CalendarProps extends BaseProps<typeof calendar>, Props {
	children?: Snippet;
	prev?: Snippet;
	next?: Snippet;
	value?: DateValue;
	heading?: Snippet<[string]>;
}
