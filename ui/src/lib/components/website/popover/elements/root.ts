/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { ToKebab, TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreatePopoverProps, PopoverElements } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { FadeParams } from 'svelte/transition';
import type { Action, ActionReturn } from 'svelte/action';
import type { MeltActionReturn } from '@melt-ui/svelte/internal/types';
import type { PopoverRootPropsWithoutHTML } from 'bits-ui';

/** Styles */
const styles = {
	root: {
		layout: 'z-10'
	},
	overlay: {},
	arrow: {}
} satisfies Styles;
export const popoverRoot = styles;

/** Props */
type Props = ToKebab<PopoverRootPropsWithoutHTML>;
export interface PopoverRoot extends BaseProps<typeof popoverRoot>, Props {}
