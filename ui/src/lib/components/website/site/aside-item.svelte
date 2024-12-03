<script lang="ts">
	/** Imports */
	import { UCollapsible, UIcon } from '$lib/components/export.js';
	import { useUI } from '$lib/composables/ui.js';
	import type { Item } from '$lib/types/item.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteAsideItem, type SiteAsideItemProps } from './aside-item.js';

	/** Props */
	let { item, ...props }: SiteAsideItemProps = $props();

	/** Styles */
	const ui = useUI(siteAsideItem, props.class, props.override);
	let expand: boolean = $state(false);
</script>

{#snippet item$(it: Item, subitem: boolean)}
	<button
		class="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm/6 font-semibold hover:bg-neutral-50 data-[subitem=true]:pl-9 dark:hover:bg-neutral-800"
		aria-controls="disclosure-{item.index}"
		aria-expanded="false"
		data-expand={expand}
		data-subitem={subitem}
	>
		{item.title || item.text}
		{#if it.items}
			<UIcon
				data-expand={expand}
				class="size-5 flex-none data-[expand=true]:rotate-90"
				name="i-fluent-chevron-right-24-filled"
			/>
		{/if}
	</button>
{/snippet}

<div class="-mx-2 space-y-1">
	{#if !item.items}
		{@render item$(item, false)}
	{:else}
		{@const items = item.items}
		<UCollapsible
			transition={{ duration: 300 }}
			bind:value={expand}
			class="mt-2 space-y-2"
			id="disclosure-1"
		>
			{#snippet trigger()}
				{@render item$(item, false)}
			{/snippet}
			{#snippet content()}
				<!-- 'Product' sub-menu, show/hide based on menu state. -->
				{#each items as it}
					{@render item$(it, true)}
				{/each}
			{/snippet}
		</UCollapsible>
	{/if}
</div>
