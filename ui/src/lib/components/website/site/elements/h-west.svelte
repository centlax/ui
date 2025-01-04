<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { ctxSiteKey, useSite } from '../site.svelte.js';
	import type { SiteHeaderWestProps } from './h-west.js';
	import { UIcon } from '$lib/components/export.js';

	let { children, ...props }: SiteHeaderWestProps = $props();

	const logo: Snippet = getContext(ctxSiteKey);
</script>

<div class="flex lg:flex-1">
	<a href="/" class="-m-1.5 p-1.5">
		<span class="sr-only">Your Company</span>
		{@render logo()}
	</a>
</div>
<div class="flex lg:hidden">
	<button
		onclick={props['on-open-aside']}
		type="button"
		class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
	>
		<UIcon class="size-6" name="i-fluent-text-align-justify-24-regular" />
	</button>
</div>
