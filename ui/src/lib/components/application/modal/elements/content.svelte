<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Dialog as Primitive } from 'bits-ui';
	import { modal$, type XModalContent } from './content.js';
	import { useTransition } from '$lib/composables/transition.svelte.js';
	import { flyAndScale } from '$lib/theme/transition/fly-scale.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.svelte.js';

	/** Props */
	let { attrs, as = 'div', children, ...props }: ToKebab<XModalContent> = $props();

	/** Styles */
	const ui = useUI(modal$, props.class, props.override);
	const transition = useTransition();
	const txn = $state(transition.set(props.transition, { duration: 150, y: 8, start: 0.96 }));
</script>

<Primitive.Portal>
	<Primitive.Overlay />
	<Primitive.Content forceMount {...toCamel(props)} class={cn(st(ui.root), ui.class)}>
		{#snippet child({ props: bits, open })}
			{#if open}
				<svelte:element
					this={as}
					in:flyAndScale={txn.in}
					out:flyAndScale={txn.out}
					{...bits}
					{...attrs}
				>
					{@render children?.()}
				</svelte:element>
			{/if}
		{/snippet}
	</Primitive.Content>
</Primitive.Portal>
