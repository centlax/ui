<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import type { MenuProps } from './menu.js';

	/** Props */
	let { as = 'li', item, children, ...props }: MenuProps<T> = $props();
	/** Styles */
</script>

<svelte:element this={as}>
	{@render children?.()}
</svelte:element>
