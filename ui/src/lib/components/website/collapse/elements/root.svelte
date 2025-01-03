<script lang="ts">
	import { createSync, melt } from '@melt-ui/svelte';
	import type { CollapsibleRootProps } from './root.js';
	import { useCollapsible } from '../collapse.svelte.js';

	let { as = 'div', open = $bindable(false), children, ...props }: CollapsibleRootProps = $props();

	const {
		elements: { root },
		states
	} = useCollapsible({ root: props }, true);
	const sync = createSync(states);
	$effect(() => sync.open(open, (v) => (open = v)));
</script>

<svelte:element this={as} use:melt={$root} {...props}>
	{@render children?.()}
</svelte:element>
