import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import OGroup from './elements/o-group.svelte';
import Option from './elements/option.svelte';
import Trigger from './elements/trigger.svelte';

type ComboboxType = typeof Root & {
    Content: SubComponent<typeof Content>;
    OGroup: SubComponent<typeof OGroup>;
    Option: SubComponent<typeof Option>;
    Trigger: SubComponent<typeof Trigger>;
};

const Combobox = Root as ComboboxType;
Combobox.Content = Content as ComboboxType['Content'];
Combobox.OGroup = OGroup as ComboboxType['OGroup'];
Combobox.Option = Option as ComboboxType['Option'];
Combobox.Trigger = Trigger as ComboboxType['Trigger'];

export default Combobox;