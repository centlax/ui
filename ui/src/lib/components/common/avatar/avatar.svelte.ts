import { createAvatar } from '@melt-ui/svelte';
import type { XAvatar } from './elements/root.js';
import { toCamel } from '$lib/utils/props.js';

export function useAvatar(props: XAvatar) {
	return createAvatar(toCamel(props));
}
