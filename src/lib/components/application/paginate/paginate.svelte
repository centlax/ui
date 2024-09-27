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

<nav aria-label="pagination" use:melt={$root}>
	<p>
		Showing items {$range.start} - {$range.end}
	</p>
	<div>
		<button use:melt={$prevButton}></button>
		{#each $pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span>...</span>
			{:else}
				<button use:melt={$pageTrigger(page)}>{page.value}</button>
			{/if}
		{/each}
		<button use:melt={$nextButton}></button>
	</div>
</nav>
