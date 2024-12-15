<script lang="ts">
	/** Imports */
	import { useToggle } from '$lib/composables/toggle.js';
	import { melt, createSync, createTooltip } from '@melt-ui/svelte';
	import { tooltip, type TooltipProps } from './tooltip.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { value = $bindable(false), ...props }: TooltipProps = $props();

	const {
		elements: { trigger, content, arrow },
		states
	} = createTooltip(props);

	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});
	const toggle = useToggle();
	toggle.set(states.open, $trigger, $trigger);

	/** Styles */
	const ui = useUI(tooltip, props.class, props.override);
</script>

{@render props.children?.()}

<svelte:element this={props['trigger-as'] || 'span'} class={st(ui.trigger)} use:melt={$trigger}>
	{@render props.trigger?.()}
</svelte:element>
{#if value}
	<svelte:element
		this={props.as || 'div'}
		data-ui="tooltip"
		{...props}
		use:melt={$content}
		class={cn(st(ui.root), ui.class)}
	>
		{@render props.content?.()}
		<div hidden={!props['arrow-size']} class={st(ui.arrow)} use:melt={$arrow}></div>
	</svelte:element>
{/if}
