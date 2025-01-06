import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Group from './elements/group.svelte';

type FieldType = typeof Root & {
    Group: SubComponent<typeof Group>;
};

const Field = Root as FieldType;
Field.Group = Group as FieldType['Group'];

export default Field;