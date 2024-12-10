/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type {
	CalendarDate,
	CalendarDateTime,
	DateValue,
	ZonedDateTime
} from '@internationalized/date';
import type { CreateCalendarProps, DateRange } from '@melt-ui/svelte';
import type { WhenTrue } from '@melt-ui/svelte/internal/types';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { Writable } from 'svelte/store';

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
type CalendarValue<
	Range extends boolean = false,
	Multiple extends boolean = false
> = Range extends true ? DateRange : Multiple extends true ? DateValue[] : DateValue;
export type MeltValue<T extends boolean> =
	| WhenTrue<T, DateValue[], DateValue, DateValue | DateValue[]>
	| undefined;
type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	TransformKeysToKebab<Omit<CreateCalendarProps, 'multiple' | 'value'>>;
export interface CalendarProps<Range extends boolean, Multiple extends boolean>
	extends BaseProps<typeof calendar>,
		Props {
	children?: Snippet;
	multiple?: Multiple;
	range?: Range;
	value?: Writable<CalendarValue<Range, Multiple>>;
	header?: Snippet;
	main?: Snippet;
	footer?: Snippet;
	as?: keyof HTMLElementTagNameMap;
}
