import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import OGroup from './elements/o-group.svelte';
import Option from './elements/option.svelte';

type CommandType = typeof Root & {
    OGroup: SubComponent<typeof OGroup>;
    Option: SubComponent<typeof Option>;
};

const Command = Root as CommandType;
Command.OGroup = OGroup as CommandType['OGroup'];
Command.Option = Option as CommandType['Option'];

export default Command;