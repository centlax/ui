<script lang="ts">
	import { createPagination, melt } from '@melt-ui/svelte';

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages, range }
	} = createPagination({
		count: 100,
		perPage: 10,
		defaultPage: 1,
		siblingCount: 1
	});
</script>

<nav class="flex flex-col items-center gap-4" aria-label="pagination" use:melt={$root}>
	<p class="text-magnum-900 text-center">
		Showing items {$range.start} - {$range.end}
	</p>
	<div class="flex items-center gap-2">
		<button
			class="text-magnum-900 data-[selected]:bg-magnum-900 grid h-8 items-center rounded-md bg-white px-3 text-sm
        shadow-sm hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
        data-[selected]:text-white"
			use:melt={$prevButton}>></button
		>
		{#each $pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span>...</span>
			{:else}
				<button
					class="text-magnum-900 data-[selected]:bg-magnum-900 grid h-8 items-center rounded-md bg-white px-3 text-sm
            shadow-sm hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
          data-[selected]:text-white"
					use:melt={$pageTrigger(page)}>{page.value}</button
				>
			{/if}
		{/each}
		<button
			class="text-magnum-900 data-[selected]:bg-magnum-900 grid h-8 items-center rounded-md bg-white px-3 text-sm
        shadow-sm hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
      data-[selected]:text-white"
			use:melt={$nextButton}>></button
		>
	</div>
</nav>
