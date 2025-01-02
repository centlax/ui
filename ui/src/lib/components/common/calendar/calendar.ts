/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { DateValue } from '@internationalized/date';

import type {
	CreateCalendarProps as BoundProps,
	CreateRangeCalendarProps as RangeProps,
	DateRange
} from '@melt-ui/svelte';
import type { ChangeFn } from '@melt-ui/svelte/internal/helpers';
import clsx from 'clsx';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'overflow-hidden',
		sizing: 'w-fit',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'p-3',
		border: 'rounded-lg border border-black/10 dark:border-white/10',
		typography: 'text-sm font-semibold',
		effect: 'shadow-sm'
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
		popover: {
			flex: 'w-full max-w-[12rem] rounded  bg-neutral-800/10 p-1.5 text-sm font-medium outline-none ring-1 ring-white/10 backdrop-blur-lg'
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
	},
	footer: {}
} satisfies Styles;
export const calendar = styles;

/** Props */
export type CreateBoundCalendarProps<T extends boolean = false> = BoundProps<T>;
export type CreateRangeCalendarProps = RangeProps;
export type BoundValue = DateValue | DateValue[] | undefined;
export type RangeValue = DateRange | undefined;
export type ChangeBoundValue = DateValue | DateValue[] | undefined;
export type ChangeRangeValue = ChangeFn<DateRange> | undefined;
export type OmitCalendarProps<T> = Omit<
	T,
	'placeholder' | 'defaultPlaceholder' | 'value' | 'multiple' | 'defaultValue' | 'onValueChange'
>;

export type CalendarValue<
	Range extends boolean = false,
	Multiple extends boolean = false
> = Range extends true ? DateRange : Multiple extends true ? DateValue[] : DateValue;

type BaseCalendarProps<T extends boolean> = TransformKeysToKebab<
	OmitCalendarProps<CreateBoundCalendarProps<T> & CreateRangeCalendarProps>
>;

type Props = Omit<SvelteHTMLElements['div'], 'class' | 'placeholder'> & BaseProps<typeof calendar>;
export interface CalendarProps<Range extends boolean, Multiple extends boolean>
	extends BaseCalendarProps<Multiple>,
		Props {
	children?: Snippet;
	multiple?: Multiple;
	range?: Range;
	value?: CalendarValue<Range, Multiple>;
	'default-value'?: CalendarValue<Range, Multiple>;
	'on-value-change'?: ChangeFn<CalendarValue<Range, Multiple>>;
	placeholder?: DateValue;
	header?: Snippet;
	main?: Snippet;
	footer?: Snippet;
	as?: keyof HTMLElementTagNameMap;
}
