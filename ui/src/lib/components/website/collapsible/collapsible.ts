import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import Trigger from './elements/trigger.svelte';

type CollapsibleType = typeof Root & {
    Content: SubComponent<typeof Content>;
    Trigger: SubComponent<typeof Trigger>;
};

const Collapsible = Root as CollapsibleType;
Collapsible.Content = Content as CollapsibleType['Content'];
Collapsible.Trigger = Trigger as CollapsibleType['Trigger'];

export default Collapsible;