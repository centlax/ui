import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import OGroup from './elements/o-group.svelte';
import Option from './elements/option.svelte';

type ChooseType = typeof Root & {
	OGroup: SubComponent<typeof OGroup>;
	Option: SubComponent<typeof Option>;
};

const Choose = Root as ChooseType;
Choose.OGroup = OGroup as ChooseType['OGroup'];
Choose.Option = Option as ChooseType['Option'];

export default Choose;
