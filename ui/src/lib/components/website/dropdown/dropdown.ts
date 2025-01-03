import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import OGroup from './elements/o-group.svelte';
import Option from './elements/option.svelte';
import Sub from './elements/sub.svelte';
import Trigger from './elements/trigger.svelte';

type DropdownType = typeof Root & {
	Content: SubComponent<typeof Content>;
	OGroup: SubComponent<typeof OGroup>;
	Option: SubComponent<typeof Option>;
	Sub: SubComponent<typeof Sub>;
	Trigger: SubComponent<typeof Trigger>;
};

const Dropdown = Root as DropdownType;
Dropdown.Content = Content as DropdownType['Content'];
Dropdown.OGroup = OGroup as DropdownType['OGroup'];
Dropdown.Option = Option as DropdownType['Option'];
Dropdown.Sub = Sub as DropdownType['Sub'];
Dropdown.Trigger = Trigger as DropdownType['Trigger'];

export default Dropdown;
