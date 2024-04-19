<script lang="ts">
	const items = ['Status bar', 'Live Share', 'Personnel', 'Centlax', 'Svelte', 'UTC'];
</script>

<footer
	class="px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-3xl text-xs ring-1 ring-gray-300/50 dark:ring-gray-600/50 shadow-sm"
>
	<div class="flex overflow-hidden h-5 my-auto gap-10">
		{#each items as item}
			<span class="my-auto text-gray-600 dark:text-gray-300">{item}</span>
		{/each}
	</div>
</footer>
