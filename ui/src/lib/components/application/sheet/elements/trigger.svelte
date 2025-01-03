<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { useSheet } from '../sheet.svelte.js';
	import type { SheetTriggerProps } from './trigger.js';

	/** Props */
	let { children, ...props }: SheetTriggerProps = $props();
	const {
		elements: { trigger }
	} = useSheet();
</script>

<svelte:element this={'button'} {...props} use:melt={$trigger}>
	{@render children?.()}
</svelte:element>
