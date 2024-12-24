import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Close from './elements/close.svelte';
import Content from './elements/content.svelte';
import Trigger from './elements/trigger.svelte';

type PopoverType = typeof Root & {
	Close: SubComponent<typeof Close>;
	Content: SubComponent<typeof Content>;
	Trigger: SubComponent<typeof Trigger>;
};

const Popover = Root as PopoverType;
Popover.Close = Close as PopoverType['Close'];
Popover.Content = Content as PopoverType['Content'];
Popover.Trigger = Trigger as PopoverType['Trigger'];

export default Popover;
