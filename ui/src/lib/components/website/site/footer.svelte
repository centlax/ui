<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import { siteFooter, type SiteFootProps } from './footer.js';
	import { cn, st } from '$lib/internal/utils/wind.js';
	import { USiteFooterItem } from '$lib/components/export.js';

	let { items, ...props }: SiteFootProps = $props();

	/** Styles */
	const ui = useUI(siteFooter, props.class, props.override);
</script>

<footer class={cn(st(ui.root), ui.class)}>
	<div hidden={!props.north} class={st(ui.north)}>
		{@render props.north?.()}
	</div>

	<div class={st(ui.contain)}>
		<div hidden={!props.west} class={st(ui.contain.west)}>
			{@render props.west?.()}
		</div>
		<nav class={st(ui.contain.center)}>
			{#if props.children}
				{@render props.children?.()}
			{:else if items}
				{#each items as it}
					<USiteFooterItem item={it} />
				{/each}
			{/if}
		</nav>

		<div hidden={!props.east} class={st(ui.contain.east)}>
			{@render props.east?.()}
		</div>
	</div>

	<div hidden={!props.south} class={st(ui.south)}>
		{@render props.south?.()}
	</div>
</footer>
