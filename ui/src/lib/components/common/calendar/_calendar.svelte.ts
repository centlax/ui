import { CalendarDate, type DateValue } from '@internationalized/date';
import {
	createCalendar as _createCalendar,
	type CreateCalendarProps,
	createRangeCalendar
} from '@melt-ui/svelte';
import { calendar, type CalendarProps, type MeltValue } from './__calendar.js';
import { getContext, hasContext, setContext } from 'svelte';
import type { WhenTrue } from '@melt-ui/svelte/internal/types';
import { writable, type Writable } from 'svelte/store';

const defaults: CreateCalendarProps = {
	isDateDisabled: undefined,
	isDateUnavailable: undefined,
	defaultValue: new CalendarDate(2024, 1, 11),
	value: undefined,
	preventDeselect: false,
	numberOfMonths: 1,
	pagedNavigation: false,
	weekStartsOn: 0,
	fixedWeeks: false,
	calendarLabel: 'Event Date',
	locale: 'en',
	minValue: undefined,
	maxValue: undefined,
	disabled: false,
	readonly: false,
	weekdayFormat: 'narrow'
};

export function createCalendar<Range extends boolean = false, Multiple extends boolean = false>(
	props: CalendarProps<Range, Multiple>
) {
	const v = writable(props.value);
	return props.range ? _createCalendar<Multiple>({}) : createRangeCalendar({});
}
type Calendar = ReturnType<typeof createCalendar>;


export function ctxCalendar() {
	const key = Symbol('calendar');
	function set(calendar: Calendar) {
		setContext(key, calendar);
	}

	function get(): Calendar {
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
