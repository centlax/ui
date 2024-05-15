import type { Link } from '$lib/types/link.js';
import { styles } from './accordion.styles.js';
import type { DeepPartial } from '$lib/types/index.js';

export interface Accordion {
	links: Link[];
	icon: {
		open?: string;
		close?: string;
	};
	open: boolean;
	unmount: boolean;
	multiple: boolean;
	disabled: boolean;
	visible: boolean;
	value: string | string[] | undefined;
	class: string | DeepPartial<typeof styles>;
}
