import { type CreateCalendarProps } from '@melt-ui/svelte';
import type { CalendarProps } from './calendar.js';

function kebabToCamel(key: string): string {
	return key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

export function calendarOptions(props: CalendarProps): CreateCalendarProps {
	// Dynamically map props
	console.log(props);
	const options = Object.keys(props).reduce((acc, kebabKey) => {
		// Convert kebab-case keys to camelCase
		const camelKey = kebabToCamel(kebabKey);
		// Assign values from kebab-case props to camelCase keys in options
		// @ts-ignore
		acc[camelKey] = props[kebabKey as keyof CalendarProps];
		return acc;
	}, {} as CreateCalendarProps);

	return options;
}
