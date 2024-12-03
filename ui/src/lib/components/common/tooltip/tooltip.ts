/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { CamelToKebab, TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateTooltipProps, TooltipElements } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'relative z-10'
	},
	trigger: {},
	arrow: {}
} satisfies Styles;
export const tooltip = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	TransformKeysToKebab<Omit<CreateTooltipProps, 'positioning'>>;
export interface TooltipProps extends BaseProps<typeof tooltip>, Props {
	children?: Snippet;
	content?: Snippet;
	trigger?: Snippet<[]>;
	float?: CreateTooltipProps['positioning'];
	value?: boolean;
	as?: keyof HTMLElementTagNameMap;
	'trigger-as'?: keyof HTMLElementTagNameMap;
}
