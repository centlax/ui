import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Content from './elements/content.svelte';
import Empty from './elements/empty.svelte';
import OGroup from './elements/o-group.svelte';
import Option from './elements/option.svelte';
import Trigger from './elements/trigger.svelte';

type CommandType = typeof Root & {
    Content: SubComponent<typeof Content>;
    Empty: SubComponent<typeof Empty>;
    OGroup: SubComponent<typeof OGroup>;
    Option: SubComponent<typeof Option>;
    Trigger: SubComponent<typeof Trigger>;
};

const Command = Root as CommandType;
Command.Content = Content as CommandType['Content'];
Command.Empty = Empty as CommandType['Empty'];
Command.OGroup = OGroup as CommandType['OGroup'];
Command.Option = Option as CommandType['Option'];
Command.Trigger = Trigger as CommandType['Trigger'];

export default Command;