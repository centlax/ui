<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteHead, type SiteHeadProps } from './header.js';
	import { UToggle, UTooltip } from '$lib/index.js';

	/** Props */
	let { items, ...props }: SiteHeadProps<T> = $props();

	/** Styles */
	const ui = useUI(siteHead, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)}>
	<div class={st(ui.west)}>
		{@render props.west?.()}
	</div>
	<nav class={st(ui.center)}>
		{#each items as item}
			<UTooltip
				class="flex flex-col bg-white ring-1 ring-white/10 dark:bg-neutral-900 "
				floaf={{ placement: 'bottom' }}
			>
				<UToggle>
					{@render props.trigger?.(item)}
				</UToggle>

				{#snippet content()}
					{#if item.items}
						{#each item.items as _item}
							{@render props.content?.(_item)}
						{/each}
					{/if}
				{/snippet}
			</UTooltip>
		{/each}
	</nav>
	<div class={st(ui.east)}>
		{@render props.east?.()}
	</div>
</header>
