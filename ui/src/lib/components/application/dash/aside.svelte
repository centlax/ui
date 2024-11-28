<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import { type DashAsideProps, dashAside } from './aside.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { UIcon } from '$lib/index.js';
	import type { Item } from '$lib/types/item.js';

	/** Props */
	let { items, north, south, children, ...props }: DashAsideProps<T> = $props();

	/** styles */
	const ui = useUI(dashAside, props.class, props.override);
	let show = false;
</script>

{#snippet item$(it: T)}
	{@const active = it.label === 'Overview' || it.title === 'Overview'}
	<li>
		<a
			onclick={props['item-dismiss']}
			href="/"
			data-active={active}
			class={st(ui.center.item.ul.li.a, ui.center.item.ul.li.a.is[active ? 'active' : 'inactive'])}
		>
			<UIcon name={it.icon as string} class={st(ui.center.item.ul.li.icon)} />

			{it.label || it.title}
		</a>
	</li>
{/snippet}

<aside class={cn(st(ui.root), ui.class)}>
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
						{#if show}
							<div class={st(ui.center.item.title)}>{item.title}</div>
						{/if}
						<ul role="list" class={st(ui.center.item.ul)}>
							{#each item.items as it}
								{@render item$(it)}
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
