<script lang="ts">
	/** Imports */
	import { createSync, melt } from '@melt-ui/svelte';
	import { pagination, type PaginationProps } from './pagination.js';
	import { createPagination } from './pagination.svelte.js';
	import { UIcon } from '$lib/components/export.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { page = $bindable(), ...props }: PaginationProps = $props();

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states,
		options: { count }
	} = createPagination(props);
	const { pages, range } = states;
	const sync = createSync({ page: states['page'] });
	$effect(() => {
		if (page) sync.page(page, (p) => (page = p));
	});

	/** Styles */
	const ui = useUI(pagination, props.class, props.override);
</script>

<nav
	aria-label="pagination"
	use:melt={$root}
	class="flex w-full items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
>
	<div class="flex flex-1 justify-between sm:hidden">
		<button
			class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
			>Previous</button
		>
		<button
			class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
			>Next</button
		>
	</div>
	<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
		<div>
			<p class="text-sm text-gray-700">
				Showing
				<span class="font-medium">{$range.start}</span>
				to
				<span class="font-medium">{$range.end}</span>
				of
				<span class="font-medium">{$count}</span>
				results
			</p>
		</div>

		<div class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
			<button
				class="relative inline-flex h-[--ui-size] w-[--ui-nav-width] items-center justify-center rounded-l-md text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
				use:melt={$prevButton}
			>
				<UIcon class="size-5" name="i-fluent-chevron-left-20-filled" />
			</button>
			{#each $pages as item (item.key)}
				{#if item.type === 'ellipsis'}
					<span
						class="relative inline-flex size-[--ui-size] items-center justify-center text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
						>•••</span
					>
				{:else}
					<button
						class={item.value === (props['default-page'] || page)
							? 'bg-primary-600 focus-visible:outline-primary-600 relative z-10 size-[--ui-size] text-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
							: 'relative h-[--ui-size] w-[--ui-num-width] text-center text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}
						use:melt={$pageTrigger(item)}>{item.value}</button
					>
				{/if}
			{/each}
			<button
				class="relative inline-flex h-[--ui-size] w-[--ui-nav-width] items-center justify-center rounded-r-md text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
				use:melt={$nextButton}
			>
				<UIcon class="size-5" name="i-fluent-chevron-right-20-filled" />
			</button>
		</div>
	</div>
</nav>

<style>
	nav {
		--ui-size: var(--size, 2rem);
		--ui-nav-width: calc(var(--ui-size) * 0.9);
		--ui-num-width: calc(var(--ui-size) * 1.1);
	}
</style>
