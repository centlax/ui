import { CalendarDate } from '@internationalized/date';

export const calendarDefaults = {
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
