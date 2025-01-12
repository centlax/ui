import type { SvelteHTMLElements } from 'svelte/elements';

type Props = SvelteHTMLElements['form'];
export interface XForm extends Props {
	action?: any;
	attrs?: object;
}
