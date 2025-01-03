import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Group from './elements/group.svelte';

type ToggleType = typeof Root & {
	Group: SubComponent<typeof Group>;
};

const Toggle = Root as ToggleType;
Toggle.Group = Group as ToggleType['Group'];

export default Toggle;
