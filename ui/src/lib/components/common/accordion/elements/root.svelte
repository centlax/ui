<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { useAccordion } from '../accordion.svelte.js';
	import { type AccordionRootProps } from './root.js';

	/** Props */
	let { ...props }: AccordionRootProps = $props();
	const {
		elements: { root }
	} = useAccordion(true);

	/** Styles */
</script>

<svelte:element this={'div'} use:melt={$root} {...props}>
	{@render props.children?.()}
</svelte:element>
