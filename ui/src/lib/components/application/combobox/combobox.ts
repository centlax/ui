import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import OGroup from './elements/o-group.svelte';
import Option from './elements/option.svelte';

type ComboboxType = typeof Root & {
    OGroup: SubComponent<typeof OGroup>;
    Option: SubComponent<typeof Option>;
};

const Combobox = Root as ComboboxType;
Combobox.OGroup = OGroup as ComboboxType['OGroup'];
Combobox.Option = Option as ComboboxType['Option'];

export default Combobox;