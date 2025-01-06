<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Dialog as Primitive } from 'bits-ui';
	import { fromTransition, sheet$, type XSheetContent } from './content.js';
	import { useTransition } from '$lib/composables/transition.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { fly } from 'svelte/transition';

	/** Props */
	let { attrs, as = 'div', side = 'right', children, ...props }: ToKebab<XSheetContent> = $props();

	/** Styles */
	const ui = useUI(sheet$, props.class, props.override);
	const css = $state({
		content: cn(st(ui.root, ui.root.opt.from[side]), ui.class)
	});
	const transition = useTransition();
	const txn = $state(transition.set(props.transition, fromTransition(side)));
</script>

<Primitive.Portal>
	<Primitive.Overlay />
	<Primitive.Content forceMount {...toCamel(props)} class={css.content}>
		{#snippet child({ props: bits, open })}
			{#if open}
				<svelte:element this={as} in:fly={txn.in} out:fly={txn.out} {...bits} {...attrs}>
					{@render children?.()}
				</svelte:element>
			{/if}
		{/snippet}
	</Primitive.Content>
</Primitive.Portal>
