<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { UMarkHeaderItem } from '$lib/index.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { markHeader, type MarkHeaderProps } from './header.js';

	/** Props */
	let { items, ...props }: MarkHeaderProps = $props();

	/** Styles */
	const ui = useUI(markHeader, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)}>
	<div aria-label="contain-x-directions">
		<div hidden={!props.west} class={st(ui.west)}>
			{@render props.west?.()}
		</div>

		<nav class={st(ui.center)}>
			{#if props.children}
				{@render props.children?.()}
			{:else if items}
				{#each items as it}
					<UMarkHeaderItem item={it} />
				{/each}
			{/if}
		</nav>

		<div hidden={!props.east} class={st(ui.east)}>
			{@render props.east?.()}
		</div>
	</div>
	<div aria-label="south" hidden={!props.south}>
		{@render props.south?.()}
	</div>
</header>
