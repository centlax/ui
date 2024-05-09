import type { Size } from '$lib/types/index.js';
import { css } from './avatar.styles.js';

export interface AvatarProps {
	as?: string | object;
	src: string;
	alt: string;
	text: string;
	icon: string;
	size: Size;
	delay: number;
	index: number;
	status: 'loaded' | 'loading' | 'error';
	chip: { color?: string; position?: keyof typeof css.chip.position; text?: string };
	class?: string | { root?: string; img?: string };
}
