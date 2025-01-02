import type { ToKebab } from '$lib/types/utils.js';
import type { CreateSelectProps } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

type OmitType<T> = Omit<T, 'class'>;
type Props = OmitType<SvelteHTMLElements['div']> & ToKebab<CreateSelectProps>;
export interface ChooseOptionProps extends Props {
	value: string;
}
