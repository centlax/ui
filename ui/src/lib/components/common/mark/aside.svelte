<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { markAside, type MarkAsideProps } from './aside.js';
	import { UMarkAsideItem } from '$lib/components/export.js';

	/** Props */
	let { items, ...props }: MarkAsideProps = $props();

	/** Styles */
	const ui = useUI(markAside, props.class, props.override);
</script>

<aside class={cn(st(ui.root), ui.class)}>
	<div hidden={!props.north} class={st(ui.north)}>
		{@render props.north?.()}
	</div>

	<nav class={st(ui.center)}>
		{#if props.children}
			{@render props.children?.()}
		{:else}
			{#each items as it}
				<UMarkAsideItem item={it} />
			{/each}
		{/if}
	</nav>

	<div hidden={!props.south} class={st(ui.south)}>
		{@render props.south?.()}
	</div>
</aside>
