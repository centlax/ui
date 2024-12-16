<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { siteHeaderItem, type SiteHeaderItemProps } from './header-item.js';
	import { UIcon, UTooltip } from '$lib/index.js';

	/** Props */
	let { item, ...props }: SiteHeaderItemProps = $props();

	/** Styles */
	const ui = useUI(siteHeaderItem, props.class, props.override);
</script>

{#snippet item$(it: Item)}
	<a href={it.href} class={st(ui.trigger)}>
		{it.title || it.text}
		{#if it.items}
			<UIcon class={st(ui.trigger.chevron)} name="i-fluent-chevron-down-20-filled" />
		{/if}
	</a>
{/snippet}

{#snippet subItem(it: Item)}
	<div class={st(ui.content)}>
		<div class={st(ui.content.west)}>
			<UIcon class={st(ui.content.west.icon)} name={it.icon as string} />
		</div>
		<div class={st(ui.content.east)}>
			<a href="/" class={st(ui.content.east.title)}>
				{it.text}
				<span aria-hidden="true" class="absolute inset-0"></span>
			</a>
			<p class={st(ui.content.east.description)}>
				{it.description}
			</p>
		</div>
	</div>
{/snippet}

{#if !item.items}
	{@render item$(item)}
{:else}
	{@const items = item.items}
	<UTooltip class={cn(st(ui.root), ui.class)} group>
		{#snippet trigger()}
			{@render item$(item)}
		{/snippet}
		{#snippet content()}
			{#each items as it}
				{@render subItem(it)}
			{/each}
		{/snippet}
	</UTooltip>
{/if}
