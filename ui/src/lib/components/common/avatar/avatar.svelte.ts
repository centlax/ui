import { createAvatar, melt } from '@melt-ui/svelte';
import type { AvatarProps } from './elements/root.js';
import { toCamel } from '$lib/utils/props.js';

export function useAvatar(props: AvatarProps) {
	return createAvatar(toCamel(props));
}
