<script lang="ts">
	/** Imports */
	import { UCollapsible, UIcon } from '$lib/components/export.js';
	import { useUI } from '$lib/composables/ui.js';
	import type { Item } from '$lib/types/item.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { siteAsideItem, type SiteAsideItemProps } from './aside-item.js';

	/** Props */
	let { item, mode = 'pine', ...props }: SiteAsideItemProps = $props();

	/** Styles */
	const ui = useUI(siteAsideItem, props.class, props.override);
	let expand: boolean = $state(false);
	const css = $state({
		root: cn(st(ui.root, ui.opt[mode]))
	});
</script>

{#snippet item$(it: Item, subitem: boolean)}
	{@const active = it.title === 'Product'}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={it.href ? 'a' : 'button'}
		onclick={it.href ? props.dismiss : null}
		href={it.href}
		class={st(ui.trigger, ui.trigger.is[active ? 'active' : 'inactive'])}
		aria-controls="disclosure-{item.index}"
		data-expand={expand}
		data-subitem={subitem}
	>
		{#if !subitem && it.icon}
			<UIcon name={it.icon as string} class={st(ui.trigger.icon)} />
		{/if}
		<span>{it.title || it.text}</span>
		{#if it.items}
			<UIcon
				data-expand={expand}
				class={st(ui.trigger.chevron)}
				name="i-fluent-chevron-right-24-filled"
			/>
		{/if}
	</svelte:element>
{/snippet}

{#if !item.items}
	{@render item$(item, false)}
{:else}
	{@const items = item.items}
	<UCollapsible
		transition={{ duration: 300 }}
		class={css.root}
		bind:value={expand}
		id="disclosure-{item.index}"
	>
		{#snippet trigger()}
			{@render item$(item, false)}
		{/snippet}
		{#snippet content()}
			{#each items as it}
				{@render item$(it, true)}
			{/each}
		{/snippet}
	</UCollapsible>
{/if}
