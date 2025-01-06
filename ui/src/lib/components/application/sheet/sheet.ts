import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Close from './elements/close.svelte';
import Content from './elements/content.svelte';
import Trigger from './elements/trigger.svelte';

type SheetType = typeof Root & {
	Close: SubComponent<typeof Close>;
	Content: SubComponent<typeof Content>;
	Trigger: SubComponent<typeof Trigger>;
};

const Sheet = Root as SheetType;
Sheet.Close = Close as SheetType['Close'];
Sheet.Content = Content as SheetType['Content'];
Sheet.Trigger = Trigger as SheetType['Trigger'];

export default Sheet;
