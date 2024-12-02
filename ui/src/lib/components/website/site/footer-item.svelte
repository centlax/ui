<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import { siteFooterItem, type SiteFooterItemProps } from './footer-item.js';
	import { cn, st } from '$lib/utils/wind.js';

	let { item, ...props }: SiteFooterItemProps = $props();

	/** Styles */
	const ui = useUI(siteFooterItem, props.class, props.override);
</script>

{#if item.items}
	<div class={cn(st(ui.root), ui.class)}>
		<h3 class={st(ui.trigger)}>
			{item.title}
		</h3>
		<div role="list" class={st(ui.content)}>
			{#each item.items as it}
				<a href={it.href} class={st(ui.content.item)}>
					{it.text}
				</a>
			{/each}
		</div>
	</div>
{/if}
