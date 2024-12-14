import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateDateRangeFieldProps, DateField } from '@melt-ui/svelte';
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
export interface InputDateTypes {
	content: DateField['states']['segmentContents'];
}

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	TransformKeysToKebab<Omit<CreateDateRangeFieldProps, 'readonlySegments'>>;
export interface InputDateProps<Picker extends boolean, Range extends boolean>
	extends BaseProps<typeof styles>,
		Props {
	picker?: Picker;
	range?: Range;
}
