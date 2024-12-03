<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteHeaderItem, type SiteHeaderItemProps } from './header-item.js';
	import { UIcon, UToggle, UTooltip } from '$lib/index.js';

	/** Props */
	let { item, ...props }: SiteHeaderItemProps = $props();

	/** Styles */
	const ui = useUI(siteHeaderItem, props.class, props.override);
</script>

{#snippet item$(it: Item)}
	<button
		type="button"
		class="flex items-center gap-x-1 text-sm/6 font-semibold text-neutral-900 dark:text-white"
		aria-expanded="false"
	>
		{it.title || it.text}
		{#if it.items}
			<UIcon class="size-5 flex-none text-neutral-400" name="i-fluent-chevron-down-20-filled" />
		{/if}
	</button>
{/snippet}

{#snippet subItem(it: Item)}
	<div
		class="group relative flex items-center gap-x-6 rounded-[calc(theme(borderRadius.lg)-1px)] p-2 text-sm/6 hover:bg-neutral-100 dark:hover:bg-neutral-800"
	>
		<div
			class="flex size-10 flex-none items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-black/10 group-hover:bg-white dark:bg-neutral-800 dark:ring-white/5 dark:group-hover:bg-neutral-900"
		>
			<UIcon class="size-6 text-neutral-600 group-hover:text-indigo-600" name="" />
		</div>
		<div class="flex-auto">
			<a href="/" class="block font-semibold text-neutral-900">
				{it.label}
				<span class="absolute inset-0"></span>
			</a>
			<p class="mt-1 text-neutral-600">Get a better understanding of your traffic</p>
		</div>
	</div>
{/snippet}

{#if !item.items}
	{@render item$(item)}
{:else}
	{@const items = item.items}
	<UTooltip
		class=" w-screen max-w-md overflow-hidden rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/10 backdrop-blur-lg dark:bg-neutral-900/90 dark:ring-white/10"
		arrow-size={10}
		group
	>
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
