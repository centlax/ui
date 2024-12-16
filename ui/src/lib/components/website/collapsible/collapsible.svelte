<script lang="ts">
	/** Imports */
	import { createCollapsible, createSync, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { collapsible, type CollapsibleProps } from './collapsible.js';
	import { useUI } from '$lib/composables/ui.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { useToggle } from '$lib/composables/toggle.js';

	/** Props */
	let { value = $bindable(false), ...props }: CollapsibleProps = $props();

	const {
		elements: { root, content, trigger },
		states
	} = createCollapsible({
		disabled: props['disabled'] ?? false,
		forceVisible: props['force-visible'] ?? false,
		defaultOpen: props['default-open'] ?? false,
		open: props['open'],
		onOpenChange: props['on-open-change']
	});

	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});
	const toggle = useToggle();

	/** Styles */
	const ui = useUI(collapsible, props.class, props.override);
	const transition = useTransition();
	const txn = transition.set(props.transition);
</script>

<div data-ui="collapsible" use:melt={$root} class={st(ui.root)}>
	{@render props.children?.()}

	{#if props.trigger}
		<svelte:element this={props['trigger-as'] || 'span'} use:melt={$trigger} class={st(ui.trigger)}>
			{@render props.trigger({ value })}
		</svelte:element>
	{/if}

	{#if value}
		<svelte:element
			this={props.as || 'div'}
			{...props}
			use:melt={$content}
			in:slide={txn.in}
			out:slide={txn.out}
			class={cn(st(ui.content), ui.class)}
		>
			{@render props.content?.()}
		</svelte:element>
	{/if}
</div>
