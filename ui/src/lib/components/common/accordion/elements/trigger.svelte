<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { useAccordion } from '../accordion.svelte.js';
	import { type AccordionTriggerProps } from './trigger.js';
	import { getContext } from 'svelte';

	/** Props */
	let { id, ...props }: AccordionTriggerProps = $props();
	const {
		elements: { trigger }
	} = useAccordion();

	/** Styles */
</script>

<svelte:element this={'button'} use:melt={$trigger(getContext('x'))} {...props}>
	{@render props.children?.()}
</svelte:element>
