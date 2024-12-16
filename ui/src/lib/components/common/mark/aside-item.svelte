<script lang="ts" generics="Main extends boolean = false">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/internal/utils/wind.js';
	import { markAsideItem, type MarkAsideItemProps } from './aside-item.js';

	/** Props */
	let { as = 'li', item, mode = 'pine', ...props }: MarkAsideItemProps = $props();

	/** Styles */
	const ui = useUI(markAsideItem, props.class, props.override);
	// -ml-px block border-l border-current pl-4 font-semibold text-sky-500 dark:text-sky-400
</script>

<svelte:element this={as} class={cn(st(ui.root), ui.class)}>
	<h5 class="mb-8 font-semibold text-neutral-900 lg:mb-3 dark:text-neutral-200">
		{item.title}
	</h5>
	<ul class="space-y-6 border-l border-neutral-100 lg:space-y-2 dark:border-neutral-800">
		{#if item.items}
			{#each item.items as it, i}
				<li>
					<a class={st(ui.is[i === 1 ? 'active' : 'inactive'])} href="/">{it.text}</a>
				</li>
			{/each}
		{/if}
	</ul>
</svelte:element>
