/* Imports */
import { shared } from '$lib/theme/styles/overlay/overlay.svelte.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DrawerRootProps } from 'vaul-svelte';

/** Styles */
const styles = {
	root: {},
	overlay: shared.overlay,
	handel: {
		flex: 'shrink-0 rounded-full',
		border: 'rounded-full',
		background: 'bg-neutral-200 dark:bg-neutral-800',
		sizing: 'mx-auto mt-4 h-2 w-[100px]'
	},
	content: {
		layout: 'fixed z-50',
		flex: 'focus:outline-none',
		background: 'bg-white dark:bg-neutral-900',
		border: 'ring ring-black/10 dark:ring-white/10',
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
export const drawer = styles;

/* Props */
export const fromTransition = (dir: 'north' | 'south' | 'east' | 'west') => {
	const axis = dir === 'north' || dir === 'south' ? 'y' : 'x';
	const sign = dir === 'north' || dir === 'west' ? '-' : '';
	const value = `${sign}100%`;

	return {
		in: { [axis]: value, duration: 500, opacity: 1 },
		out: { [axis]: value, duration: 300, opacity: 1 }
	};
};

type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'>;
type DrawerBaseProps = Pick<
	DrawerRootProps,
	| 'activeSnapPoint'
	| 'closeThreshold'
	| 'direction'
	| 'dismissible'
	| 'fadeFromIndex'
	| 'fixed'
	| 'modal'
	| 'nested'
	| 'direction'
	| 'open'
	| 'scrollLockTimeout'
	| 'shouldScaleBackground'
	| 'snapPoints'
>;
export interface DrawerProps
	extends BaseProps<typeof drawer>,
		Props,
		TransformKeysToKebab<DrawerBaseProps> {
	trigger?: Snippet;
	content?: Snippet;
	from?: 'east' | 'west' | 'north' | 'south';
}
