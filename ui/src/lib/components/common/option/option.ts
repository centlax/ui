/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { WhenTrue } from '@melt-ui/svelte/internal/types';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout:
			'relative cursor-pointer rounded-md py-1.5 px-2 text-neutral-800 hover:bg-primary-100 focus:z-10  focus:text-primary-700  data-[highlighted]:bg-primary-200 data-[highlighted]:text-primary-900 data-[disabled]:opacity-50'
	}
} satisfies Styles;
export const option = styles;

/** Props */
export type ListboxOption<Value = unknown> = {
	value: Value;
	label?: string;
};

export type ListboxSelected<Multiple extends boolean, Value> = WhenTrue<
	Multiple,
	ListboxOption<Value>[],
	ListboxOption<Value>
>;
export type OptionValue<
	Value extends unknown,
	Multiple extends boolean = false
> = Multiple extends true ? ListboxOption<Value>[] : ListboxOption<Value>;

type Props = Omit<SvelteHTMLElements['option'], 'class'>;
export interface OptionProps extends BaseProps<typeof option>, Props {
	children?: Snippet;
	value?: string;
	label?: string;
}
