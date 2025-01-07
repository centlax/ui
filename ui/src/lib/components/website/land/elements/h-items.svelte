<script lang="ts">
	import type { XSiteHItems } from './h-items.js';
	let { data, ...props }: XSiteHItems = $props();
</script>

<div {...props} class="hidden lg:flex lg:gap-x-12">
	{#each data as list}
		<a href="/" class="text-sm/6 font-semibold text-[--ui-text]">{list.text}</a>
	{/each}
</div>
