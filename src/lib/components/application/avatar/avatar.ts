/** Imports */
import type { CreateAvatarProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Props */
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	src?: CreateAvatarProps['src'];
	alt?: string;
	text?: string;
}
