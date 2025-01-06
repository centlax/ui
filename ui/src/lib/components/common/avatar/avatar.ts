import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Group from './elements/group.svelte';

type AvatarType = typeof Root & {
	Group: SubComponent<typeof Group>;
};

const Avatar = Root as AvatarType;
Avatar.Group = Group as AvatarType['Group'];

export default Avatar;
