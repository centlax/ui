import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import Trigger from './elements/trigger.svelte';

type CollapseType = typeof Root & {
	Content: SubComponent<typeof Content>;
	Trigger: SubComponent<typeof Trigger>;
};

const Collapse = Root as CollapseType;
Collapse.Content = Content as CollapseType['Content'];
Collapse.Trigger = Trigger as CollapseType['Trigger'];

export default Collapse;
