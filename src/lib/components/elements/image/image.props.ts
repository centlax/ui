import type { HTMLImgAttributes } from 'svelte/elements';

export interface ImageProps extends Omit<HTMLImgAttributes, 'src'> {
	src?: string | { light?: string; dark?: string };
	alt?: HTMLImgAttributes['alt'];
	class?: HTMLImgAttributes['class'];
}
