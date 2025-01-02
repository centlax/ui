import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Item from './elements/item.svelte';

type TreeType = typeof Root & {
    Item: SubComponent<typeof Item>;
};

const Tree = Root as TreeType;
Tree.Item = Item as TreeType['Item'];

export default Tree;