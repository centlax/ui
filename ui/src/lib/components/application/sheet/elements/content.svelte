<script lang="ts">
	/** Imports */
	import { melt  } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';
	import { fromTransition, sheet$, type SheetContentProps } from './content.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';
	import { useSheet } from '../sheet.svelte.js';
	import { UOverlay } from '$lib/index.js';

	/** Props */
	let { as = 'div', from = 'east', ...props }: SheetContentProps = $props();

	const {
		elements: { overlay, content, portalled },
		states: { open }
	} = useSheet();

	/** Styles */
	const ui = useUI(sheet$, props.class, props.override);
	const css = $state({
		content: cn(st(ui.root, ui.root.opt.from[from]), ui.class)
	});

	const transition = useTransition();
	const txn = $state(transition.set(props['transition'], fromTransition(from)));
</script>

{#if $open}
	<div class={st(ui.root)} use:melt={$portalled}>
		<UOverlay melt={$overlay} />
		<svelte:element
			this={as}
			{...props}
			class={css.content}
			in:fly={txn.in}
			out:fly={txn.out}
			use:melt={$content}
		>
			{@render props.children?.()}
		</svelte:element>
	</div>
{/if}
