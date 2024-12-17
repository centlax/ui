/** Imports */
import type { FlyAndScaleParams } from '$lib/theme/transition/fly-scale.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateDialogProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { FadeParams } from 'svelte/transition';
import { shared } from '$lib/styles/overlay/overlay.svelte.js';

/** Styles */
const styles = {
	root: {},
	overlay: shared.overlay,
	content: {
		flex: 'fixed z-50 left-[50%] top-[50%]  -translate-x-1/2 -translate-y-1/2 focus:outline-none'
	}
} satisfies Styles;
export const modal = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	Omit<TransformKeysToKebab<CreateDialogProps>, 'ids'>;

export interface ModalProps extends BaseProps<typeof modal>, Props {
	children?: Snippet;
	trigger?: Snippet;
	content?: Snippet;
	value?: boolean;
	transition?: TransitionParams<FlyAndScaleParams>;
	'overlay-transition'?: TransitionParams<FadeParams>;
	overlay?: Snippet;
	as?: keyof HTMLElementTagNameMap;
}
