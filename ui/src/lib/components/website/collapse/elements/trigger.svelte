<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import type { CollapsibleTriggerProps } from './trigger.js';
	import { useCollapsible } from '../collapse.svelte.js';

	/** Props */
	let { as = 'button', children, ...props }: CollapsibleTriggerProps = $props();
	const {
		elements: { trigger }
	} = useCollapsible();
</script>

<svelte:element this={as} use:melt={$trigger} {...props}>
	{@render children?.()}
</svelte:element>
