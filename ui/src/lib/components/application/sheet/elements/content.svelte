<script lang="ts">
	/** Imports */
	import { melt, createSync } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { fromTransition, sheet$, type SheetProps } from './content.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';
	import { useSheet } from '../sheet.svelte.js';

	/** Props */
	let { as = 'div', open = $bindable(false), from = 'east', ...props }: SheetProps = $props();

	const {
		elements: { overlay, content, portalled, trigger, close },
		states
	} = useSheet(props);
	const sync = createSync(states);
	$effect(() => {
		sync.open(open, (v) => (open = v));
	});

	/** Styles */
	const ui = useUI(sheet$, props.class, props.override);
	const css = $state({
		// @ts-ignore
		content: cn(st(ui.content, ui.content.opt.from[from]), ui.class)
	});

	const transition = useTransition();
	const txn = $state(transition.set(props['transition'], fromTransition(from)));
</script>

{#if open}
	<div class={st(ui.root)} use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class={st(ui.overlay)}
			transition:fade={{ duration: 200 }}
			aria-hidden="true"
		></div>

		<div {...props} class={css.content} in:fly={txn.in} out:fly={txn.out} use:melt={$content}>
			{@render props.children?.()}
		</div>
	</div>
{/if}
