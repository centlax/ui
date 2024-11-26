/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateDialogProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { FadeParams, FlyParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {
		flex: ''
	},
	overlay: {
		flex: 'fixed inset-0 z-50 transition-colors bg-black/50 backdrop-blur-sm'
	},
	content: {
		flex: 'fixed z-50 focus:outline-none',
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
export const sheet = styles;

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

type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> &
	Omit<TransformKeysToKebab<CreateDialogProps>, 'value' | 'onOpenChange' | 'ids'>;

export interface SheetProps extends BaseProps<typeof sheet>, Props {
	children?: Snippet;
	content?: Snippet;
	value?: boolean;
	transition?: TransitionParams<FlyParams>;
	'overlay-transition'?: TransitionParams<FadeParams>;
	from?: 'north' | 'south' | 'east' | 'west';
	as?: keyof HTMLElementTagNameMap;
	[key: string]: unknown;
}
