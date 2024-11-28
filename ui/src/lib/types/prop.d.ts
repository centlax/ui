import type { DeepStyles } from '$lib/types/ui.js';
export interface BaseProps<T> {
	class?: string | DeepStyles<T>;
	override?: boolean;
}
