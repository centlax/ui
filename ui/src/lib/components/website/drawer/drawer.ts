import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Close from './elements/close.svelte';
import Content from './elements/content.svelte';
import Handle from './elements/handle.svelte';
import Trigger from './elements/trigger.svelte';

type DrawerType = typeof Root & {
    Close: SubComponent<typeof Close>;
    Content: SubComponent<typeof Content>;
    Handle: SubComponent<typeof Handle>;
    Trigger: SubComponent<typeof Trigger>;
};

const Drawer = Root as DrawerType;
Drawer.Close = Close as DrawerType['Close'];
Drawer.Content = Content as DrawerType['Content'];
Drawer.Handle = Handle as DrawerType['Handle'];
Drawer.Trigger = Trigger as DrawerType['Trigger'];

export default Drawer;