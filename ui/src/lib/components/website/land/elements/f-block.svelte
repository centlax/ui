<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import { getContext, type Snippet } from 'svelte';
	import { siteFooter, type SiteFootProps } from './footer.js';
	import { ctxSiteKey } from '../land.svelte.js';
	import type { XSiteFBlock } from './f-block.js';

	let { children, ...props }: XSiteFBlock = $props();

	const logo: Snippet = getContext(ctxSiteKey);
</script>

<div class="space-y-3">
	{@render logo()}
	<h3 class="text-sm/6 font-semibold text-[--ui-text]">{props.title}</h3>
	<p class="text-balance text-sm/6 text-gray-700">
		{props.description}
	</p>
	{@render children?.()}
</div>
