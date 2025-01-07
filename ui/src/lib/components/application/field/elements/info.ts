/** Imports  */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'flex items-center gap-x-1',
		typography: 'text-sm text-neutral-500',
		svg: '[&>[data-name=icon]]:size-4'
	},
	
} satisfies Styles;
export const fieldInfo$ = styles;

/** Props  */
type Props = Omit<SvelteHTMLElements['p'], 'class'>;
export interface XFieldInfo extends BaseProps<typeof fieldInfo$>, Props {
	attrs?: object;
}
