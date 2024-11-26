<script lang="ts">
	/** Imports */
	import { useToggle } from '$lib/composables/toggle.js';
	import { createPopover, createSync, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { popover, type PopoverProps } from './popover.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';

	/** Props */
	let { as = 'div', value = $bindable(false), ...props }: PopoverProps = $props();

	const {
		elements: { trigger, content, arrow, close, overlay },
		states
	} = createPopover({
		positioning: props['float'] ?? { placement: 'bottom' },
		disableFocusTrap: props['disable-focus-trap'] ?? false,
		arrowSize: props['arrow-size'] ?? 8,
		escapeBehavior: props['escape-behavior'] ?? 'close',
		closeOnOutsideClick: props['close-on-outside-click'] ?? true,
		preventScroll: props['prevent-scroll'] ?? true,
		preventTextSelectionOverflow: props['prevent-text-selection-overflow'] ?? true,
		portal: props['portal'] ?? 'body',
		forceVisible: props['force-visible'] ?? false,
		openFocus: props['open-focus'],
		closeFocus: props['close-focus'],
		defaultOpen: props['default-open'] ?? false
	});

	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});
	const toogle = useToggle();
	toogle.set(states.open, $trigger, $close);

	/** Styles */
	const ui = useUI(popover, props.class, props.override);

	const transition = useTransition();
	let txn = $state({
		content: transition.set(props['transition'], {
			duration: 100
		})
	});
</script>

{@render props.children?.()}

{#if props.trigger}
<svelte:element this={as} use:melt={$trigger}>
	{@render props.trigger?.()}
</svelte:element>	
{/if}

{#if value}
	<div
		data-ui="popover"
		{...props}
		use:melt={$content}
		in:fade={txn.content.in}
		out:fade={txn.content.out}
		class={cn(st(ui.root), ui.class)}
	>
		{#if props['arrow-size']}
			<div class={st(ui.arrow)} use:melt={$arrow}></div>
		{/if}
		{@render props.content?.()}
</div>
{/if}
