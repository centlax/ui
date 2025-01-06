import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

const styles = {
	root: {
		layout: 'relative',
		flex: 'flex flex-col'
	}
} satisfies Styles;
export const siteFBlock = styles;

type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface XSiteFBlock extends BaseProps<typeof siteFBlock>, Props {
	description?: string;
	title?: string;
}
