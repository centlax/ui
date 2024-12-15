import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { DateValue } from '@internationalized/date';
import type { CreateDateRangeFieldProps, DateField, DateRange } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'relative',
		flex: 'flex'
	}
} satisfies Styles;
export const inputDate = styles;

/** Types */
export type InputDateValue<Range extends boolean> = Range extends true ? DateRange : DateValue;
export type SatisfyInputDateValue = (DateValue & DateRange) | undefined;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
//TransformKeysToKebab<Omit<, 'readonlySegments'>>;
export interface InputDateProps<Range extends boolean> extends BaseProps<typeof styles>, Props {
	picker?: boolean;
	range?: Range & boolean;
	value?: InputDateValue<Range>;
}
