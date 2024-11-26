<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteHead, type SiteHeadProps } from './header.js';
	import { UIcon, UTooltip } from '$lib/index.js';

	/** Props */
	let { items, ...props }: SiteHeadProps<T> = $props();

	/** Styles */
	const ui = useUI(siteHead, props.class, props.override);
</script>

{#snippet item(it: T)}
	<a href="/" class="text-sm/6 font-semibold text-neutral-900 dark:text-white">{it.label}</a>
{/snippet}

<div class="flex items-center justify-between bg-transparent py-6" aria-label="Global">
	<div class="flex lg:flex-1">
		{@render props.logo?.()}
	</div>
	<div class="flex lg:hidden">
		<button
			type="button"
			class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="size-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
				data-slot="icon"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</div>
	<nav class="hidden lg:flex lg:gap-x-12">
		{#each items as it}
			{@render item(it)}
		{/each}
	</nav>
	<div class="hidden lg:flex lg:flex-1 lg:justify-end">
		<a href="/" class="text-sm/6 font-semibold">Log in <span aria-hidden="true">&rarr;</span></a>
	</div>
</div>
