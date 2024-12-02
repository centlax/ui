/** Imports */
import type { CreatePinInputProps } from '@melt-ui/svelte';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Props */
type Props = Omit<SvelteHTMLElements['input'], 'class'> &
	Omit<TransformKeysToKebab<CreatePinInputProps>, 'value'>;
export interface InputPinProps extends Props {
	value?: string[];
}
