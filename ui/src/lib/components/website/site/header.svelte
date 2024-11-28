<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteHead, type SiteHeadProps } from './header.js';
	import { UIcon, UToggle, UTooltip } from '$lib/index.js';

	/** Props */
	let { items, ...props }: SiteHeadProps<T> = $props();

	/** Styles */
	const ui = useUI(siteHead, props.class, props.override);
</script>

{#snippet item(it: T)}
	<a href="/" class="text-sm/6 font-semibold text-neutral-900 dark:text-white">{it.label}</a>
{/snippet}

<header id="site-header" class="flex w-full items-center justify-between py-6" aria-label="global">
	<div class="flex lg:flex-1">
		{@render props.logo?.()}
	</div>
	<div class="flex lg:hidden">
		<UToggle as="button" class="flex lg:hidden">
			<span class="sr-only">Open main menu</span>
			<UIcon class="size-6" name="i-fluent-text-align-justify-24-regular" />
		</UToggle>
	</div>
	<nav class="hidden lg:flex lg:gap-x-12">
		{#each items as it}
			{@render item(it)}
		{/each}
	</nav>
	<div class="hidden lg:flex lg:flex-1 lg:justify-end">
		<a href="/" class="text-sm/6 font-semibold">Log in <span aria-hidden="true">&rarr;</span></a>
	</div>
</header>
