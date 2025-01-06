<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import { getContext, type Snippet } from 'svelte';
	import { siteFooter, type SiteFootProps } from './footer.js';
	import { ctxSiteKey } from '../land.svelte.js';

	let { children, ...props }: SiteFootProps = $props();

	/** Styles */
	const ui = useUI(siteFooter, props.class, props.override);
	const logo: Snippet = getContext(ctxSiteKey);
</script>

<footer class="mx-auto border-t border-[--ui-border] bg-[--ui-bg] pb-8 pt-10 lg:px-8">
	<div class="xl:grid xl:grid-cols-3 xl:gap-8">
		{@render children?.()}
	</div>
	<div class="mt-12 border-t border-[--ui-border] pt-4">
		<p class="text-sm leading-5 text-gray-700 dark:text-neutral-300">Centlax &copy; 2024 Centlax</p>
	</div>
</footer>
