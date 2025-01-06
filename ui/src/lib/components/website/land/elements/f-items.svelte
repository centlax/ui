<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { siteFooterItem, type XSiteFItems } from './f-items.js';

	/** Props */
	let { data, ...props }: XSiteFItems = $props();

	/** Styles */
	const ui = useUI(siteFooterItem, props.class, props.override);
</script>

<nav class="mt-16 grid grid-cols-4 gap-8 lg:col-span-2 xl:mt-0">
	{#each data as list}
		<div>
			<h3 class="text-sm/6 font-semibold text-neutral-900">{list.title}</h3>
			<ul role="list" class="mt-6 space-y-4">
				{#if list.items}
					{#each list.items as li}
						<li>
							<a href="/" class="text-sm/6 text-neutral-600 hover:text-neutral-900">{li.text}</a>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	{/each}
</nav>
