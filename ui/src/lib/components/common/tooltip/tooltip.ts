/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateTooltipProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {};
export const tooltip = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['div'], 'class'> & TransformKeysToKebab<CreateTooltipProps>;
export interface TooltipProps extends BaseProps<typeof tooltip>, Props {
	children?: Snippet;
	content?: Snippet;
	trigger?: Snippet;
	float?: CreateTooltipProps['positioning'];
	value?: boolean;
	as?: keyof HTMLElementTagNameMap;
}
