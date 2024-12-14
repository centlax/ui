<script lang="ts">
	/** Imports */
	import { useToggle } from '$lib/composables/toggle.js';
	import { createSync, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { popover, type PopoverProps } from './popover.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { createPopover } from './popover.svelte.js';

	/** Props */
	let { open = $bindable(false), anchor, ...props }: PopoverProps = $props();
	const {
		elements: { trigger, content, arrow, close },
		states,
		options: { positioning }
	} = createPopover(props);

	const sync = createSync(states);
	$effect(() => {
		sync.open(open, (v) => (open = v));
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
	<svelte:element this={props['trigger-as'] || 'span'} use:melt={$trigger}>
		{@render props.trigger?.()}
	</svelte:element>
{/if}

{#if open}
	<svelte:element
		this={props.as || 'div'}
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
	</svelte:element>
{/if}
