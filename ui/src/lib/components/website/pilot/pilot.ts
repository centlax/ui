import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import Item from './elements/item.svelte';
import Trigger from './elements/trigger.svelte';

type PilotType = typeof Root & {
	Content: SubComponent<typeof Content>;
	Item: SubComponent<typeof Item>;
	Trigger: SubComponent<typeof Trigger>;
};

const Pilot = Root as PilotType;
Pilot.Content = Content as PilotType['Content'];
Pilot.Item = Item as PilotType['Item'];
Pilot.Trigger = Trigger as PilotType['Trigger'];

export default Pilot;
