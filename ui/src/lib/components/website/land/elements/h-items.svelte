<script lang="ts">
	import { UIcon, UPilot } from '$lib/index.js';
	import type { XSiteHItems } from './h-items.js';
	let { data, ...props }: XSiteHItems = $props();
	let open = $state(false);
</script>

<div class="hidden lg:flex lg:gap-x-12">
	{#each data as list}
		<a href="/" class="text-sm/6 font-semibold text-[--ui-text]">{list.text}</a>
	{/each}
</div>
