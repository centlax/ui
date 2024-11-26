<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteAside, type SiteAsideProps } from './aside.js';

	/** Props */
	let { items, ...props }: SiteAsideProps<T> = $props();

	/** Styles */
	const ui = useUI(siteAside, props.class, props.override);
</script>

<aside class={cn(st(ui.root), ui.class)}>
	<div class={st(ui.north)}>
		{@render props.north?.()}
	</div>

	{@render props.children?.()}
	<nav class={st(ui.center)}>
		{#each items as item}
			{@render props.trigger?.(item)}
		{/each}
	</nav>

	<div class={st(ui.south)}>
		{@render props.south?.()}
	</div>
</aside>
