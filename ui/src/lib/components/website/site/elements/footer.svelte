<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import { getContext, type Snippet } from 'svelte';
	import { siteFooter, type SiteFootProps } from './footer.js';
	import { ctxSiteKey } from '../site.svelte.js';

	let { children, ...props }: SiteFootProps = $props();

	/** Styles */
	const ui = useUI(siteFooter, props.class, props.override);
	const logo: Snippet = getContext(ctxSiteKey)
</script>

<footer class="bg-[--ui-bg] border-t border-[--ui-border]">
	<div class="mx-auto pb-8 pt-10 lg:px-8 ">
	  <div class="xl:grid xl:grid-cols-3 xl:gap-8">
		
		{@render children?.()}
	  </div>
	  <div class="mt-12 border-t border-[--ui-border] pt-4 ">
		<p class="text-sm/6 text-gray-600">&copy; 2024 Centlax, Inc. All rights reserved.</p>
	  </div>
	</div>
  </footer>
  
