/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import { statify } from '$lib/utils/wind.js';
import type { CreateCheckboxProps } from '@melt-ui/svelte';
import clsx from 'clsx';
import type { Snippet } from 'svelte';
import type { HTMLInputAttributes, SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		typography: 'text-white',
		flex: 'flex justify-center items-center',
		border: clsx(
			'rounded-full ring-1 ring-color-400',
			'data-[state=unchecked]:ring-black/10 dark:data-[state=unchecked]:ring-white/10',
			'focus-visible:outline focus-visible:outline-2',
			'focus-visible:outline-offset-2 focus-visible:outline-color-500'
		),
		accessible: 'forced-colors:appearance-auto',
		background: 'bg-color-500 data-[state=unchecked]:bg-transparent',
		spacing: 'p-[0.025rem]',
		sizing: 'size-6'
	},
	icon: {
		flex: 'shrink-0',
		sizing: 'size-[1rem]',
		spacing: 'm-0.5',
		svg: clsx(
			'data-[state=checked]:i-fluent-checkmark-12-filled',
			'data-[state=indeterminate]:i-fluent-minimize-12-filled'
		)
	}
} satisfies Styles;
export const checkbox = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['button'], 'class'> &
	TransformKeysToKebab<Omit<CreateCheckboxProps, 'checked'>>;
export interface CheckboxProps extends BaseProps<typeof checkbox>, Props {
	children?: Snippet;
	color?: string;
	checked?: boolean | 'indeterminate';
}
