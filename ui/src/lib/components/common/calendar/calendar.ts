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
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'w-fit',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'p-3',
		border: 'rounded-lg border border-black/10 dark:border-white/10',
		typography: 'text-sm font-semibold',
		effect: 'shadow-sm'
	}
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
