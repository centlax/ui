/** Imports */
import type { MainProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'isolate flex -space-x-1 overflow-hidden'
	}
} satisfies Styles;
export const avatarGroup = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface AvatarGroupProps extends MainProps<typeof avatarGroup>, Props {}
