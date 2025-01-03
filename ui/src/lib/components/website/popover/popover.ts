import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import Trigger from './elements/trigger.svelte';

type PopoverType = typeof Root & {
	Content: SubComponent<typeof Content>;
	Trigger: SubComponent<typeof Trigger>;
};

const Popover = Root as PopoverType;
Popover.Content = Content as PopoverType['Content'];
Popover.Trigger = Trigger as PopoverType['Trigger'];

export default Popover;
