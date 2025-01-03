<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { useSheet } from '../sheet.svelte.js';
	import type { SheetCloseProps } from './close.js';

	/** Props */
	let { as = 'button', children, ...props }: SheetCloseProps = $props();
	const {
		elements: { close }
	} = useSheet();
</script>

<svelte:element this={as} {...props} use:melt={$close}>
	{@render children?.()}
</svelte:element>
