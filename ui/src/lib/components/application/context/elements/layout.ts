/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateContextMenuProps, CreateSliderProps } from '@melt-ui/svelte';
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
	root: {}
} satisfies Styles;
export const context = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['span'], 'class'> &
	Omit<TransformKeysToKebab<CreateContextMenuProps>, 'value'>;

export interface ContextProps extends BaseProps<typeof context>, Props {
	children: Snippet;
	value?: Writable<number[]>;
	color?: string;
	ticks?: boolean;
}
