import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import OGroup from './elements/o-group.svelte';
import Option from './elements/option.svelte';
import Trigger from './elements/trigger.svelte';

type ChooseType = typeof Root & {
	Content: SubComponent<typeof Content>;
	OGroup: SubComponent<typeof OGroup>;
	Option: SubComponent<typeof Option>;
	Trigger: SubComponent<typeof Trigger>;
};

const Choose = Root as ChooseType;
Choose.Content = Content as ChooseType['Content'];
Choose.OGroup = OGroup as ChooseType['OGroup'];
Choose.Option = Option as ChooseType['Option'];
Choose.Trigger = Trigger as ChooseType['Trigger'];

export default Choose;
