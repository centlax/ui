import { createDateField, createDateRangeField as createDateRange } from '@melt-ui/svelte';
import type { InputDateProps } from './date.js';

type DateField = ReturnType<typeof createDateField>;
type DateRange = ReturnType<typeof createDateRange>;
const {
	elements: { startSegment }
} = createDateRange();

export function createInputDate<Picker extends boolean, Range extends boolean>(
	props: InputDateProps<Picker, Range>
) {
	const field = createDateField();
	const range = createDateRange();

	return {
		share: {
			elements: {
				root: props.range ? range.elements.field : field.elements.field
			},
			options: {
				locale: props.range ? range.options.locale : field.options.locale
			}
		},
		field,
		range
	};
}
