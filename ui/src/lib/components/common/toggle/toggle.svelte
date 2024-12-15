<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import type { ToggleProps } from './toggle.js';

	/** Props */
	let { as = 'span', ...props }: ToggleProps = $props();
</script>

<svelte:element this={as} {...props}>
	{@render props.children()}
</svelte:element>
