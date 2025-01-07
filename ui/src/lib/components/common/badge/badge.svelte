<script lang="ts">
	/** Imports */
	import { type XBadge, badge$ } from './badge.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';
	import type { ToKebab } from '$lib/types/utils.js';

	/** Props */
	let { as = 'span', ...props }: ToKebab<XBadge> = $props();

	/** Styles */
	const ui = useUI(badge$, props.class, props.override);
</script>

<svelte:element this={as} data-name="badge" {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</svelte:element>
