/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateProgressProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { Writable } from 'svelte/store';

/** options */
export const progressOptions: CreateProgressProps = {
	defaultValue: 0,
	max: 100
};

/** Styles */
const styles = {
	root: {
		layout: 'relative h-2 w-[300px] overflow-hidden rounded-full bg-neutral-800'
	}
} satisfies Styles;
export const progress = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	Omit<TransformKeysToKebab<CreateProgressProps>, 'value'>;

export interface SliderProps extends BaseProps<typeof progress>, Props {
	children?: Snippet;
	value?: Writable<number>;
	color?: string;
}
