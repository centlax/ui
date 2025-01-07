/** Imports  */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
    root: {
       	layout: 'block',
		typography: 'text-sm/6 font-medium text-[--ui-text]',
        svg: '[&>data-[name=icon]]:size-5'
    },
    
} satisfies Styles;
export const fieldLabel$ = styles;

/** Props  */
type Props = Omit<SvelteHTMLElements['label'], 'class'>;
export interface XFieldLabel extends BaseProps<typeof fieldLabel$>, Props {
    attrs?: object;
}
