<script lang="ts">
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { landFooter$, type XLandFooter } from './footer.js';

	let { children, ...props }: XLandFooter = $props();

	/** Styles */
	const ui = useUI(landFooter$, props.class, props.override);
</script>

<footer class="w-full border-t border-[--ui-border] bg-[--ui-bg] py-10">
	<div class="container xl:grid xl:grid-cols-3 xl:gap-8">
		{@render children?.()}
	</div>
	<div class="container mt-12 border-t border-[--ui-border] pt-4">
		<p class="text-sm leading-5 text-gray-700 dark:text-neutral-300">Centlax &copy; 2024 Centlax</p>
	</div>
</footer>
