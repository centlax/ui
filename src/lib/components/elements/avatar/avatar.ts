import type { DeepPartial, Size } from '$lib/types/index.js';
import { styles } from './avatar.styles.js';

export interface Avatar {
	as?: string | object;
	src: string;
	alt: string;
	text: string;
	icon: string;
	size: Size;
	delay: number;
	index: number;
	status: 'loaded' | 'loading' | 'error';
	chip: { color?: string; position?: keyof typeof styles.chip.position; text?: string };
	class: string | DeepPartial<typeof styles>;
}
