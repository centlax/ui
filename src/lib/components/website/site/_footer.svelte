<script lang="ts" generics="T extends Item<T>">
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';

	import { siteFooter, type SiteFootProps } from './footer.js';

	let { items, ...props }: SiteFootProps<T> = $props();

	/** Styles */
	const ui = useUI(siteFooter, props.class, props.override);

	const is = $state({
		slot: {
			east: props.east,
			west: props.west
		}
	});
</script>

<!-- <footer class={cn(st(ui.root), ui.class)}>
	<div class={st(ui.north)}>
		{@render props.north?.()}
	</div>
		<div class={st(ui.west)}>
			{@render props.west?.()}
		</div>
		<div class={st(ui.center)}>
			{#each items as item}
				<div class="flex">
					<div>
						<h3 class="text-sm/6 font-semibold text-white">{item.title}</h3>

						{#if item.items}
							<ul role="list" class="mt-6 space-y-4">
								{#each item.items as _item}
									{@render props.trigger?.(_item)}
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		<div class={st(ui.east)}>
			{@render props.east?.()}
		</div>
	
	<div class={st(ui.south)}>
		{@render props.south?.()}
	</div>
</footer> -->

<footer class="relative mt-10 overflow-auto rounded-xl bg-neutral-900 p-8">
	<div class="grid grid-flow-row-dense grid-cols-3 gap-4 text-white">
		<div
			class="col-span-3 row-span-1 grid place-content-center rounded-lg bg-fuchsia-500/50 p-4 shadow-lg"
		></div>

		<!-- 02 01 -->

		<div
			class="col-span-3 row-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400 lg:col-span-1"
		>
			02 01
		</div>

		<!-- 02 02 -->
		{#if props.children}
			{@render props.children?.()}
		{:else}
			<div class="col-span-3 grid grid-cols-4 gap-8 bg-red-500/5 p-4 lg:col-span-1">
				<div class="hidden lg:flex">
					{#each items as item}
						<div class="mb-10">
							{@render props.trigger?.(item)}
							{#if item.items}
								<ul role="list" class="mt-6 space-y-4">
									{#each item.items as _item}
										{@render props.content?.(_item)}
									{/each}
								</ul>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div
			class="col-span-3 row-span-1 grid place-content-center rounded-lg bg-fuchsia-300/5 p-4 lg:col-span-1"
		></div>
		<div
			class="col-span-3 row-span-1 grid place-content-center rounded-lg bg-fuchsia-500/50 p-4 shadow-lg"
		></div>
	</div>
</footer>
