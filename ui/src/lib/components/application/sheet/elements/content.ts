/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateDialogProps } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { FlyParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {
		flex: 'fixed z-50',
		border: 'focus:outline-none',
		opt: {
			from: {
				north: { layout: 'inset-x-0 top-0' },
				south: { layout: 'inset-x-0 bottom-0' },
				west: { layout: 'inset-y-0 left-0' },
				east: { layout: 'inset-y-0 right-0' }
			}
		}
	}
} satisfies Styles;
export const sheet$ = styles;

/** Props */
export const fromTransition = (dir: 'north' | 'south' | 'east' | 'west') => {
	const axis = dir === 'north' || dir === 'south' ? 'y' : 'x';
	const sign = dir === 'north' || dir === 'west' ? '-' : '';
	const value = `${sign}100%`;

	return {
		in: { [axis]: value, duration: 500, opacity: 1 },
		out: { [axis]: value, duration: 300, opacity: 1 }
	};
};

type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	Omit<TransformKeysToKebab<CreateDialogProps>, 'open' | 'onOpenChange' | 'ids'>;

export interface SheetContentProps extends BaseProps<typeof sheet$>, Props {
	open?: boolean;
	transition?: TransitionParams<FlyParams>;
	from?: 'north' | 'south' | 'east' | 'west';
	as?: keyof HTMLElementTagNameMap;
}
