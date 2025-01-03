import { createCollapsible, type CreateCollapsibleProps } from '@melt-ui/svelte';
import { getContext, setContext } from 'svelte';
import type { CollapsibleContentProps } from './elements/content.js';
import type { CollapsibleRootProps } from './elements/root.js';
import type { CollapsibleTriggerProps } from './elements/trigger.js';
import { toCamel } from '$lib/utils/props.js';
import { omit } from '@melt-ui/svelte/internal/helpers';

const key = Symbol('collapsible');
export function useCollapsible(
	opts?: {
		root?: CollapsibleRootProps;
		content?: CollapsibleContentProps;
		trigger?: CollapsibleTriggerProps;
	},
	ctx: boolean = false
) {
	let params = $state<CreateCollapsibleProps>();

	$effect.pre(() => {
		if (opts && opts.root) {
			params = omit(toCamel(opts.root), 'open');
		}
	});

	function set() {
		const collapsible = $derived(createCollapsible(params));
		setContext(key, collapsible);
		return collapsible;
	}

	function get() {
		return getContext<ReturnType<typeof createCollapsible>>(key);
	}

	let collapse = $state(ctx ? set() : get());
	return collapse;
}
