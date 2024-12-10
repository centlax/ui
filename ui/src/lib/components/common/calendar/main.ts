/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import { statify } from '$lib/utils/wind.js';
import clsx from 'clsx';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0'
	},
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
					layout: 'relative',
					flex: 'flex  items-center justify-center',
					typography: clsx('whitespace-nowrap', 'data-[selected]:text-primary-900'),
					background: clsx(
						'hover:bg-primary-500/50',
						'data-[range-highlighted]:bg-primary-200 dark:data-[range-highlighted]:bg-primary-800',
						'data-[selected]:bg-primary-300'
					),
					border: statify({
						default: 'rounded-full',
						focus: 'focus:outline-none focus:ring-2 focus:ring-primary-500'
					}),
					spacing: 'm-0.5',
					sizing: 'size-8',
					effect: clsx(
						'data-[disabled]:opacity-40',
						'data-[outside-months]:opacity-40 ',
						'data-[outside-visible-months]:opacity-0'
					),
					interactive: 'data-[outside-visible-months]:pointer-events-none'
				}
			}
		}
	}
} satisfies Styles;
export const calendarMain = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['main'], 'class'>;
export interface CalendarMainProps extends BaseProps<typeof calendarMain>, Props {
	children?: Snippet;
}
