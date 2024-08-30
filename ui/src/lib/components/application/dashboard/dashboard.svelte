<script lang="ts">
</script>

<div {...$$restProps} class="flex flex-row bg-white dark:bg-black h-screen overflow-hidden">
	<aside class="bg-white dark:bg-gray-900/50">
		<slot name="sidebar" />
	</aside>

	<main class="flex-grow h-full bg-white dark:bg-gray-900/80">
		<slot />
	</main>
</div>
