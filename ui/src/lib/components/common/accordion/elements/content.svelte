<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { useAccordion } from '../accordion.svelte.js';
	import { type AccordionContentProps } from './content.js';
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	/** Props */
	let { id, ...props }: AccordionContentProps = $props();
	const {
		elements: { content },
		helpers: { isSelected }
	} = useAccordion();

	/** Styles */
</script>

{#if $isSelected(getContext('x'))}
	<svelte:element this={'div'} transition:slide use:melt={$content(getContext('x'))} {...props}>
		{@render props.children?.()}
	</svelte:element>
{/if}
