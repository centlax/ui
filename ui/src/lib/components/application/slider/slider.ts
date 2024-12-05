/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateSliderProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { Writable } from 'svelte/store';

/** options */
export const sliderOptions: CreateSliderProps = {
	defaultValue: [],
	min: 0,
	max: 100,
	step: 1,
	orientation: 'horizontal',
	dir: 'ltr',
	disabled: false,
	autoSort: true,
	rootElement: undefined
};

/** Styles */
const styles = {
	root: {
		layout: 'relative',
		flex: 'flex items-center',
		sizing: 'h-[20px] w-[200px]'
	},
	track: {
		sizing: 'h-[5px] w-full',
		background: 'bg-black/40',
		range: {
			background: 'bg-color-500',
			sizing: 'h-[5px]'
		}
	},
	trick: {
		sizing: 'size-[5px]',
		background: 'data-[bounded]:bg-primary-800/75 bg-white/50',
		border: 'rounded-full'
	},
	thumb: {
		background: 'bg-color-500',
		border: 'rounded-full cursor-grab focus:ring-4 focus:!ring-black/40',
		sizing: 'size-5',
		typography: 'text-white'
	}
} satisfies Styles;
export const slider = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['span'], 'class'> &
	Omit<TransformKeysToKebab<CreateSliderProps>, 'value'>;

export interface SliderProps extends BaseProps<typeof slider>, Props {
	children?: Snippet;
	value?: Writable<number[]>;
	color?: string;
	ticks?: boolean;
}
