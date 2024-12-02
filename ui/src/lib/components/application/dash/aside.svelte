<script lang="ts">
	/** Imports */
	import { type DashAsideProps, dashAside } from './aside.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { UDashAsideItem } from '$lib/index.js';
	import { Pane, PaneResizer } from 'paneforge';

	/** Props */
	let { items, north, south, children, ...props }: DashAsideProps = $props();

	/** styles */
	const ui = useUI(dashAside, props.class, props.override);
</script>

<aside id="dash-aside" class={cn(st(ui.root), ui.class)}>
	{#if north}
		<div class={st(ui.north)}>
			{@render north?.()}
		</div>
	{/if}

	{#if children}
		{@render children?.()}
	{:else}
		<nav role="list" class={st(ui.center)}>
			{#each items as item}
				<div class={st(ui.center.item)}>
					{#if item.items}
						{#if props['show-title']}
							<h3 class={st(ui.center.item.title)}>{item.title}</h3>
						{/if}
						<ul role="list" class={st(ui.center.item.items)}>
							{#each item.items as it, i}
								<UDashAsideItem dismiss={props['item-dismiss']} item={it} index={i} />
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</nav>
	{/if}

	{#if south}
		<div class={st(ui.south)}>
			{@render south?.()}
		</div>
	{/if}
</aside>
