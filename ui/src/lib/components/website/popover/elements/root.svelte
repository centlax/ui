<script lang="ts">
	/** Imports */
	import { createSync, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { popover, type PopoverProps } from './root.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { createPopover } from '../popover.svelte.js';
	import { nodate } from '$lib/utils/internal/elements/node.svelte.js';

	/** Props */
	let { as = 'div', open = $bindable(false), ...props }: PopoverProps = $props();

	const {
		elements: { trigger, content, arrow, close },
		states,
		options: {}
	} = createPopover(props);

	const sync = createSync(states);
	$effect(() => sync.open(open, (v) => (open = v)));

	let node = $state<HTMLElement | null>();
	$effect(() => {
		node = document.getElementById('shimmy');
		if (node) {
			nodate(node, $trigger);
		}
	});

	/** Styles */
	const ui = useUI(popover, props.class, props.override);
	const transition = useTransition();
	let txn = $state(
		transition.set(props['transition'], {
			duration: 300
		})
	);
</script>

{#if open}
	<svelte:element
		this={as}
		{...props}
		use:melt={$content}
		in:fade={txn.in}
		out:fade={txn.out}
		class={cn(st(ui.root), ui.class)}
	>
		{@render props.children?.()}
	</svelte:element>
{/if}
