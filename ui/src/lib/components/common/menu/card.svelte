<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { menuCard, type MenuCardProps } from './card.js';

	/** Props */
	let { as = 'div', children, ...props }: MenuCardProps = $props();

	/** Styles */
	const ui = useUI(menuCard, props.class, props.override);
</script>

<svelte:element this={as} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</svelte:element>
