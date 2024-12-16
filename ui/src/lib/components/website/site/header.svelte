<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { siteHeader, type SiteHeaderProps } from './header.js';
	import { USiteHeaderItem } from '$lib/index.js';

	/** Props */
	let { items, ...props }: SiteHeaderProps = $props();

	/** Styles */
	const ui = useUI(siteHeader, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)} aria-label="global">
	<div data-slot={props.west} class={st(ui.west)}>
		{@render props.west?.()}
	</div>

	<nav data-slot={props.children} class={st(ui.center)}>
		{#if props.children}
			{@render props.children?.()}
		{:else if items}
			{#each items as it}
				<USiteHeaderItem item={it} />
			{/each}
		{/if}
	</nav>
	<div data-slot={props.east} class={st(ui.east)}>
		{@render props.east?.()}
	</div>
</header>
