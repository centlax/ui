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
				layout: 'group',
				effect: '[&>[data-outside-visible-months]+[data-outside-months]]:opacity-10',
				day: {
					flex: 'flex items-center justify-center ',
					sizing: 'size-8',
					spacing: 'm-0.5',
					interactive: clsx(
						'cursor-pointer select-none',
						'data-[outside-month]:pointer-events-none',
						'data-[outside-visible-months]:pointer-events-none',
						'data-[outside-visible-months]:cursor-default',
						'data-[outside-month]:cursor-default'
					),
					border: clsx(
						'rounded-full ring-inset focus:ring focus:ring-primary-400',
						'data-[selection-start]:bg-primary-500',
						'data-[selection-end]:bg-primary-500'
					),
					background: clsx(
						'hover:bg-primary-500/50',
						'data-[highlighted]:bg-primary-500/50',
						'data-[range-highlighted]:bg-primary-200',
						'data-[selected]:bg-primary-500',
						'data-[outside-visible-months]:hover:bg-transparent',
						'data-[outside-month]:hover:bg-transparent'
					),
					typography: clsx(
						'data-[selected]:text-white'
						//'data-[highlighted]:text-white',
					),
					effect: clsx(
						'data-[outside-visible-months]:opacity-40',
						'data-[disabled]:opacity-40 data-[outside-month]:opacity-40'
					)
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
