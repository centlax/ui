<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteHeader, type SiteHeaderProps } from './header.js';
	import { UIcon, USiteHeaderItem, UToggle } from '$lib/index.js';

	/** Props */
	let { items, ...props }: SiteHeaderProps = $props();

	/** Styles */
	const ui = useUI(siteHeader, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)} aria-label="global">
	<div class={st(ui.west)}>
		{@render props.logo?.()}
		<UToggle as="button" class="flex lg:hidden">
			<span class="sr-only">Open main menu</span>
			<UIcon class="size-6" name="i-fluent-text-align-justify-24-regular" />
		</UToggle>
	</div>
	<nav class={st(ui.center)}>
		{#each items as it}
			<USiteHeaderItem item={it} />
		{/each}
	</nav>
	<div class={st(ui.east)}>
		{@render props.east?.()}
	</div>
</header>
