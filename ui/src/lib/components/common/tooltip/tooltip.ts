import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import Trigger from './elements/trigger.svelte';

type TooltipType = typeof Root & {
    Content: SubComponent<typeof Content>;
    Trigger: SubComponent<typeof Trigger>;
};

const Tooltip = Root as TooltipType;
Tooltip.Content = Content as TooltipType['Content'];
Tooltip.Trigger = Trigger as TooltipType['Trigger'];

export default Tooltip;