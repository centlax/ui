import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import OGroup from './elements/o-group.svelte';
import Option from './elements/option.svelte';

type SelectType = typeof Root & {
    OGroup: SubComponent<typeof OGroup>;
    Option: SubComponent<typeof Option>;
};

const Select = Root as SelectType;
Select.OGroup = OGroup as SelectType['OGroup'];
Select.Option = Option as SelectType['Option'];

export default Select;