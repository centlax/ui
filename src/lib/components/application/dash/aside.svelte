<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import { type DashAsideProps, dashAside } from './aside.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { UCollapsible, UIcon, UPopover } from '$lib/index.js';
	import type { Item } from '$lib/types/item.js';

	/** Props */
	let { items, mode = $bindable('pine'), ...props }: DashAsideProps<T> = $props();

	/** styles */
	const ui = useUI(dashAside, props.class, props.override);
	let css = $state({
		aside: cn(st(ui.root), ui.class),
		icon: (value?: boolean) => {
			return st(
				ui.trigger.is.icon,
				value ? ui.trigger.is['icon-default'] : ui.trigger.is['icon-default']
			);
		},
		content: st(
			ui.content,
			// @ts-ignore
			ui.content.opt[mode]
		)
	});
</script>

{#snippet trigger$(item: T, value?: boolean)}
	<svelte:element this={'button'} class={st(ui.trigger)}>
		{@render props.trigger?.(item)}

		{#if item.items && mode === 'pine'}
			<UIcon class={css.icon(value)} name="i-fluent-ios-arrow-rtl-24-filled" />
		{/if}
	</svelte:element>
{/snippet}

{#snippet content$(its?: T[])}
	{#if its}
		{#each its as it}
			<svelte:element this={'button'} class={css.content}>
				{@render props.content?.(it)}
			</svelte:element>
		{/each}
	{/if}
{/snippet}

{#snippet pine(item: T)}
	<UCollapsible as="ul" class={st(ui.collapsible)} transition={{ duration: 150 }}>
		{#snippet trigger(value)}
			{@render trigger$(item, value)}
		{/snippet}

		{#snippet content()}
			{@render content$(item.items)}
		{/snippet}
	</UCollapsible>
{/snippet}

{#snippet dual(it: T)}
	<UPopover as="ul" class={st(ui.popover)} float={{ placement: 'left-end' }}>
		{#if it.items}
			l
		{:else}
			{@render trigger$(it)}
		{/if}

		{#snippet content()}
			{#if mode === 'sake'}
				{@render props.title?.(it)}
			{/if}
			{@render content$(it.items)}
		{/snippet}
	</UPopover>
{/snippet}

{#snippet sake(it: T)}
	{@render dual(it)}
{/snippet}

<aside data-ui="layout" {...props} class={css.aside} title="dash-layout">
	{@render props.north?.()}
	<div class={st(ui.div)} aria-label="navigation">
		{#each items as item}
			<nav class={st(ui.div.nav)}>
				{#if item.items}
					{@render props.title?.(item)}
					<ul role="list" class={st(ui.div.nav)}>
						{#each item.items as _item}
							<li class={st(ui.div.nav.ul.item)}>
								{#if mode === 'pine'}
									{@render pine(_item)}
								{:else if mode === 'dual'}
									{@render dual(_item)}
								{:else if mode === 'sake'}
									{@render sake(_item)}
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			</nav>
		{/each}
	</div>
	{@render props.south?.()}
</aside>
