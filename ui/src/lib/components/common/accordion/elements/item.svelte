<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { useAccordion } from '../accordion.svelte.js';
	import { type AccordionItemProps } from './item.js';
	import { generateId } from '@melt-ui/svelte/internal/helpers';
	import { setContext } from 'svelte';

	/** Props */
	let { id, ...props }: AccordionItemProps = $props();
	const {
		elements: { item }
	} = useAccordion();

	/** Styles */
	setContext('x', id);
</script>

<svelte:element this={'div'} use:melt={$item(id)} {...props}>
	{@render props.children?.()}
</svelte:element>
