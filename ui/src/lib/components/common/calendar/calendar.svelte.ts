import {
	createCalendar as createBoundCalendar,
	createRangeCalendar,
	type Calendar as BoundCalendar,
	type RangeCalendar
} from '@melt-ui/svelte';
import { type BoundValue, type CalendarProps, type CreateBoundCalendarProps } from './calendar.js';
import { getContext, hasContext, setContext } from 'svelte';
import type {
	CalendarDate,
	CalendarDateTime,
	DateValue,
	ZonedDateTime
} from '@internationalized/date';
import type { ChangeFn } from '@melt-ui/svelte/internal/helpers';
import { writable } from 'svelte/store';

type Calendar = {
	bound: BoundCalendar;
	range: RangeCalendar;
};

export function createCalendar<Range extends boolean = false, Multiple extends boolean = false>(
	props: CalendarProps<Range, Multiple>
): Calendar {
	const placeholder = writable(props.placeholder);
	return {
		bound: createBoundCalendar<Multiple>({
			preventDeselect: props['prevent-deselect'],
			minValue: props['min-value'],
			maxValue: props['max-value'],
			defaultValue: props['default-value'] as CreateBoundCalendarProps<Multiple>['defaultValue'],
			onValueChange: props[
				'on-value-change'
			] as CreateBoundCalendarProps<Multiple>['onValueChange'],
			defaultPlaceholder: props['placeholder'],
			multiple: props['multiple'],
			ids: props['ids']
		}) as BoundCalendar,
		range: createRangeCalendar({
			ids: props['ids']
		})
	};
}

const key = Symbol('calendar');
export function ctxCalendar() {
	function set(calendar: Calendar['bound'] | Calendar['range']) {
		setContext(key, calendar);
	}

	function get(): Calendar['bound'] | Calendar['range'] {
		return getContext(key);
	}

	function has(): boolean {
		return hasContext(key);
	}

	return {
		set,
		get,
		has
	};
}
