<script lang="ts">
	import { UIcon, USheet } from '$lib/components/export.js';
	import { getContext, type Snippet } from 'svelte';
	import { ctxSiteKey } from '../site.svelte.js';
	const logo: Snippet = getContext(ctxSiteKey);
</script>

<div class="flex items-center justify-between">
	<a href="/" class="-m-1.5 p-1.5">
		{@render logo()}
	</a>
	<USheet.Close aria-label="close menu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
		<UIcon class="size-6 " name="i-fluent-dismiss-24-regular" />
	</USheet.Close>
</div>
