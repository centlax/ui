<script lang="ts">
	/** Imports */
	import { UIcon } from '$lib/index.js';
	import type { Item as BaseItem } from '$lib/types/item.js';
	import type { DashAsideItemsProps } from './a-items.js';

	/** Types */
	type Item = BaseItem<{ badge?: string; icon?: string }>;

	/** Props */
	let { data, ...props }: DashAsideItemsProps<Item> = $props();
</script>

{#snippet item(it: Item)}
	<li>
		<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
		<a
			href="/"
			class="group flex gap-x-3 rounded-md
			{it.text?.startsWith('Dash')
				? 'bg-gray-50 text-indigo-600'
				: 'text-[--ui-text-toned] hover:bg-gray-50 hover:text-indigo-600 dark:hover:bg-neutral-800 dark:hover:text-white'} 
			px-2.5 py-1.5 text-sm/6 font-semibold"
		>
			<UIcon
				data-filled={false}
				class="block size-6 shrink-0 {it.text?.startsWith('Dash')
					? 'text-indigo-600'
					: 'text-[--ui-text-toned] group-hover:text-indigo-600'} "
				name={it.icon || ''}
			/>

			{it.text}

			{#if it.badge}
				<span
					class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium text-gray-600 ring-1 ring-inset ring-gray-200"
					aria-hidden="true">{it.badge}</span
				>
			{/if}
		</a>
	</li>
{/snippet}

<nav class="flex flex-1 flex-col gap-y-7" {...props}>
	{#each data as { items, title }}
		<div
			data-last={data.length > 1}
			role="list"
			class="flex flex-1 flex-col gap-y-7 data-[last=true]:last:justify-end"
		>
			<h3 hidden>{title}</h3>
			{#if items}
				<ul role="list" class="-mx-2 space-y-1">
					{#each items as it}{@render item(it)}{/each}
				</ul>
			{/if}
		</div>
	{/each}
</nav>
