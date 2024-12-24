import { useUI } from '$lib/composables/ui.js';
import type { DeepStyles } from '$lib/types/ui.js';
import { cn, st } from './wind.js';

export function uify<T extends Record<string, unknown>>(
	styles: T,
	oclass: string | undefined | DeepStyles<T>,
	override?: boolean
): string {
	const ui = useUI(styles, oclass, override);
	return cn(st(ui.root), ui.class) as string;
}
export type ToStrClass<T> = Omit<T, 'class'> & { class: string };
