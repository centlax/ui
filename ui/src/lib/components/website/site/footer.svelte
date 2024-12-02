<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import { siteFooter, type SiteFootProps } from './footer.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { USiteFooterItem } from '$lib/components/export.js';

	let { items, ...props }: SiteFootProps = $props();

	/** Styles */
	const ui = useUI(siteFooter, props.class, props.override);
</script>

<footer class={cn(st(ui.root), ui.class)}>
	{#if props.north?.()}
		<div class={st(ui.north)}>
			{@render props.north?.()}
		</div>
	{/if}

	<div class={st(ui.contain)}>
		{#if props.west}
			<div class={st(ui.contain.west)}>
				{@render props.west?.()}
			</div>
		{/if}

		{#if props.children}
			{@render props.children?.()}
		{:else}
			<nav class={st(ui.contain.center)}>
				{#each items as it}
					<USiteFooterItem item={it} />
				{/each}
			</nav>
		{/if}

		{#if props.east}
			<div class={st(ui.contain.east)}>
				{@render props.east?.()}
			</div>
		{/if}
	</div>

	{#if props.south}
		<div class={st(ui.south)}>
			{@render props.south?.()}
		</div>
	{/if}
</footer>
