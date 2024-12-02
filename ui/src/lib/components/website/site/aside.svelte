<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteAside, type SiteAsideProps } from './aside.js';
	import { UIcon, USiteAsideItem, UToggle } from '$lib/index.js';

	/** Props */
	let { items, ...props }: SiteAsideProps = $props();

	/** Styles */
	const ui = useUI(siteAside, props.class, props.override);
</script>

<aside role="dialog" aria-modal="true" class={cn(st(ui.root), ui.class)}>
	{#if props.north}
		{@render props.north?.()}
	{:else}
		<div class="flex items-center justify-between">
			{@render props.logo?.()}
			<UToggle as="button" class="">
				<span class="sr-only">Close menu</span>
				<UIcon name="i-fluent-dismiss-24-regular" />
			</UToggle>
		</div>
	{/if}
	<div class="mt-6 flow-root">
		{#each items as it}
			<USiteAsideItem item={it} />
		{/each}
	</div>
	<div></div>
</aside>
