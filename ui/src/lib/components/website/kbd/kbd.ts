/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'inline-flex items-center',
		typography: 'font-sans text-xs text-neutral-600 dark:text-neutral-400',
		border: 'rounded border border-black/10 dark:border-white/10',
		spacing: 'p-1'
	}
} satisfies Styles;
export const kbd = styles;

/** Props */
type Value<Multiple extends boolean = false> = Multiple extends false ? string : string[];
type Props = Omit<SvelteHTMLElements['kbd'], 'class'>;
export interface KbdProps<Multiple extends boolean> extends BaseProps<typeof kbd>, Props {
	multiple?: Multiple;
	value: Value<Multiple>;
}
