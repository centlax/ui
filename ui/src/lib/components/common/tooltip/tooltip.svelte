<script lang="ts">
	/** Imports */
	import { useToggle } from '$lib/composables/toggle.js';
	import { createTooltip, melt, createSync } from '@melt-ui/svelte';
	import { tooltip, type TooltipProps } from './tooltip.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { value = $bindable(false), ...props }: TooltipProps = $props();

	const {
		elements: { trigger, content, arrow },
		states
	} = createTooltip({
		positioning: props['float'] ?? { placement: 'top' },
		arrowSize: props['arrow-size'],
		escapeBehavior: props['escape-behavior'] ?? 'close',
		forceVisible: props['force-visible'] ?? false,
		portal: props['portal'] ?? 'body',
		closeOnPointerDown: props['close-on-pointer-down'] ?? true,
		openDelay: props['open-delay'],
		closeDelay: props['close-delay'],
		disableHoverableContent: props['disable-hoverable-content'] ?? false,
		group: props['group'],
		defaultOpen: props['default-open'] ?? false,
		open: props['open'],
		onOpenChange: props['on-open-change'],
		ids: props['ids']
	});

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
		{#if props['arrow-size']}
			<div class={st(ui.arrow)} use:melt={$arrow}></div>
		{/if}
	</svelte:element>
{/if}
