import {
	createCalendar as createBoundCalendar,
	createRangeCalendar,
	type Calendar as BoundCalendar,
	type CreateRangeCalendarProps,
	type RangeCalendar
} from '@melt-ui/svelte';
import {
	type CalendarProps,
	type ChangeRangeValue,
	type CreateBoundCalendarProps,
	type RangeValue
} from './calendar.js';
import { getContext, hasContext, setContext } from 'svelte';

const baseDefaults = {
	isDateDisabled: undefined,
	isDateUnavailable: undefined,
	// value: undefined,
	preventDeselect: false,
	numberOfMonths: 1,
	pagedNavigation: false,
	weekStartsOn: 0 as 0 | 1 | 2 | 3 | 4 | 5 | 6,
	fixedWeeks: false,
	calendarLabel: 'Event Date',
	locale: 'en',
	minValue: undefined,
	maxValue: undefined,
	disabled: false,
	readonly: false,
	weekdayFormat: 'narrow' as Intl.DateTimeFormatOptions['weekday']
};

export const defaults = {
	share: baseDefaults,
	bound: { ...baseDefaults },
	range: {
		...baseDefaults,
		defaultValue: {
			start: undefined,
			end: undefined
		}
	}
};

type Calendar = {
	bound: BoundCalendar;
	range: RangeCalendar;
};

export function createCalendar<Range extends boolean = false, Multiple extends boolean = false>(
	props: CalendarProps<Range, Multiple>
): Calendar {
	const share: CreateBoundCalendarProps<Multiple> & CreateRangeCalendarProps = $state({
		preventDeselect: props['prevent-deselect'] ?? defaults.share['preventDeselect'],
		minValue: props['min-value'] ?? defaults.share['minValue'],
		maxValue: props['max-value'] ?? defaults.share['maxValue'],
		defaultPlaceholder: props['placeholder'],
		onPlaceholderChange: props['on-placeholder-change'],
		pagedNavigation: props['paged-navigation'] ?? defaults.share['pagedNavigation'],
		weekStartsOn: props['week-starts-on'] ?? defaults.share['weekStartsOn'],
		weekdayFormat: props['weekday-format'] ?? defaults.share['weekdayFormat'],
		isDateDisabled: props['is-date-disabled'] ?? defaults.share['isDateDisabled'],
		isDateUnavailable: props['is-date-unavailable'] ?? defaults.share['isDateUnavailable'],
		fixedWeeks: props['fixed-weeks'] ?? defaults.share['fixedWeeks'],
		numberOfMonths: props['number-of-months'] ?? defaults.share['numberOfMonths'],
		calendarLabel: props['calendar-label'] ?? defaults.share['calendarLabel'],
		locale: props['locale'] ?? defaults.share['locale'],
		disabled: props['disabled'] ?? defaults.share['disabled'],
		readonly: props['readonly'] ?? defaults.share['readonly'],
		ids: props['ids']
	});
	return {
		bound: createBoundCalendar<Multiple>({
			defaultValue: props['default-value'] as CreateBoundCalendarProps<Multiple>['defaultValue'],
			onValueChange: props[
				'on-value-change'
			] as CreateBoundCalendarProps<Multiple>['onValueChange'],
			multiple: props['multiple'],
			...share
		}) as BoundCalendar,
		range: createRangeCalendar({
			defaultValue: (props['default-value'] as RangeValue) ?? defaults.range['defaultValue'],
			onValueChange: props['on-value-change'] as ChangeRangeValue,
			...share
		})
	};
}

export function ctxCalendar() {
	const key = 'calendar';
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
