import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateDateFieldProps, CreateDateRangeFieldProps } from '@melt-ui/svelte';
import type { WhenTrue } from '@melt-ui/svelte/internal/types';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {} satisfies Styles;
export const inputDate = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	TransformKeysToKebab<Omit<CreateDateRangeFieldProps, 'readonlySegments'>>;
export interface InputDateProps extends BaseProps<typeof styles>, Props {
	picker?: boolean;
	range?: boolean;
	'read-only-segments'?:
		| CreateDateFieldProps['readonlySegments']
		| CreateDateRangeFieldProps['readonlySegments'];
	name?:
		| CreateDateFieldProps['name']
		| { end: CreateDateRangeFieldProps['endName']; start: CreateDateRangeFieldProps['startName'] };
}
