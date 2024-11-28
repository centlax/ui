<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import type { Item } from '$lib/types/item.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { menu, type MenuProps } from './menu.js';

	/** Props */
	let { as = 'li', item, children, ...props }: MenuProps<T> = $props();
	/** Styles */
	const ui = useUI(menu, props.class, props.override);
</script>

<svelte:element this={as} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</svelte:element>
