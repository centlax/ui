import type { DeepStyles } from '$lib/types/ui.js';
import type { TagsInputElements } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

export interface BaseProps<T> {
	class?: string | DeepStyles<T>;
	override?: boolean;
}
