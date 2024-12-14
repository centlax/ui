/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateTabsProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {},
	list: {
		layout: 'relative',
		trigger: {
			flex: 'relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2',
			tab: {
				layout: 'absolute inset-0 z-10',
				motion: ' bg-white mix-blend-difference'
			}
		}
	},
	content: {}
} satisfies Styles;
export const panel = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class' | 'tabindex'> &
	TransformKeysToKebab<Omit<CreateTabsProps, 'value'>>;
export interface PanelProps extends BaseProps<typeof panel>, Props {
	children?: Snippet;
	tabs: Snippet[];
	value?: string;
	trigger?: Snippet<[Item]>;
	content?: Snippet<[Item]>;
	items?: Item[];
}
