/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateSelectProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {},
	card: {
		layout:
			'z-10 flex max-h-[300px] flex-col overflow-y-auto rounded-lg bg-white p-1 shadow focus:!ring-0'
	}
} satisfies Styles;
export const choose = styles;

/** Props */

type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> &
	TransformKeysToKebab<Omit<CreateSelectProps, 'open' | 'selected' | 'positioning'>>;
export interface ChooseProps extends BaseProps<typeof choose>, Props {
	children?: Snippet;
	as?: keyof HTMLElementTagNameMap;
	open?: boolean;
	float?: CreateSelectProps['positioning'];
	selected?: Item;
}
