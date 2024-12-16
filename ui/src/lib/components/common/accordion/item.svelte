<script lang="ts">
	/** Imports */
	import { slide } from 'svelte/transition';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { accordionItem, type AccordionItemProps } from './item.js';
	import { ctxAccordion } from './accordion.svelte.js';
	import { melt } from '@melt-ui/svelte';

	/** Imports */
	let { id, ...props }: AccordionItemProps = $props();
	let accordion = ctxAccordion();
	const {
		elements: { content, item, trigger, root, heading },
		helpers: { isSelected }
	} = accordion.get();

	/** Styles */
	const ui = useUI(accordionItem, props.class, props.override);
	const transition = useTransition();
	const txn = $state(
		transition.set(props.transition, {
			duration: 200
		})
	);
</script>

<div use:melt={$item(id)} class={cn(st(ui.root), ui.class)}>
	<svelte:element this={'span'} use:melt={$trigger(id)} class={st(ui.trigger)}>
		{@render props.trigger?.()}
	</svelte:element>

	{#if $isSelected(id)}
		<svelte:element
			this={'div'}
			{...props}
			use:melt={$content(id)}
			in:slide={txn.in}
			out:slide={txn.out}
			class={cn(st(ui.content), ui.class)}
		>
			{@render props.content?.()}
		</svelte:element>
	{/if}
</div>
