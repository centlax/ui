import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import Item from './elements/item.svelte';
import Trigger from './elements/trigger.svelte';

type AccordionType = typeof Root & {
	Content: SubComponent<typeof Content>;
	Item: SubComponent<typeof Item>;
	Trigger: SubComponent<typeof Trigger>;
};

const Accordion = Root as AccordionType;
Accordion.Content = Content as AccordionType['Content'];
Accordion.Item = Item as AccordionType['Item'];
Accordion.Trigger = Trigger as AccordionType['Trigger'];

export default Accordion;
