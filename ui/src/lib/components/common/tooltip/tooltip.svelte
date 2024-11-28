<script lang="ts">
	/** Imports */
	import { useToggle } from '$lib/composables/toggle.js';
	import { createTooltip, melt, createSync } from '@melt-ui/svelte';
	import type { TooltipProps } from './tooltip.js';
	import { cn } from '$lib/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';

	let { as = 'span', value = $bindable(false), ...props }: TooltipProps = $props();

	const {
		elements: { trigger, content, arrow },
		states
	} = createTooltip({
		positioning: props['float'],
		arrowSize: props['arrow-size'],
		escapeBehavior: props['escape-behavior'],
		forceVisible: props['force-visible'],
		portal: props['portal'],
		closeOnPointerDown: props['close-on-pointer-down'],
		openDelay: props['open-delay'],
		closeDelay: props['close-delay'],
		disableHoverableContent: props['disable-hoverable-content'],
		group: props['group'],
		defaultOpen: props['default-open'],
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

	const transition = useTransition();
	const txn = $state(transition.set());
</script>

{@render props.children?.()}
<svelte:element this={as} use:melt={$trigger}>
	{@render props.trigger?.()}
</svelte:element>
{#if value}
	<div data-ui="tooltip" {...props} use:melt={$content} class={cn('relative z-10', props.class)}>
		{@render props.content?.()}
		{#if props['arrow-size']}
			<div use:melt={$arrow}></div>
		{/if}
	</div>
{/if}
