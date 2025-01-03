import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Group from './elements/group.svelte';

type RadioType = typeof Root & {
	Group: SubComponent<typeof Group>;
};

const Radio = Root as RadioType;
Radio.Group = Group as RadioType['Group'];

export default Radio;
