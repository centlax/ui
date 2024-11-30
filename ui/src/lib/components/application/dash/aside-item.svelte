<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import { type DashAsideItemProps, dashAsideItem } from './aside-item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { UIcon, UCollapsible, UTooltip } from '$lib/index.js';
	import type { Item } from '$lib/types/item.js';
	import { writable } from 'svelte/store';

	/** Props */
	let { mode = 'pine', item, children, ...props }: DashAsideItemProps<T> = $props();

	/** styles */
	const ui = useUI(dashAsideItem, props.class, props.override);
	const active = item.label === 'Overview' || item.title === 'Overview';
	const css = $state({
		root: cn(st(ui.root, ui.opt[mode]))
	});
	let tip = writable(false);
</script>

{#snippet trigger$(expand: boolean, it: T, subitem: boolean)}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={it.href ? 'a' : 'button'}
		onclick={it.href ? props.dismiss : null}
		href={it.href as string}
		class={st(ui.trigger, ui.trigger.is[active ? 'active' : 'inactive'])}
		aria-controls="sub-menu-{props.index}"
		id="sub-menu-{props.index}"
		aria-expanded={expand}
		data-subitem={subitem}
		onmouseenter={()=>{
			$tip = false
		}}
	>
		{#if !subitem}
			<UIcon name={it.icon as string} class={st(ui.trigger.icon)} />
		{/if}
		{it.label || it.title}

		{#if it.items}
			<UIcon
				data-expanded={expand}
				class={st(ui.trigger['chevron-icon'])}
				name="i-fluent-chevron-right-20-filled"
			/>
		{/if}
	</svelte:element>
{/snippet}

{#snippet content$(it: T)}
	{@const subitem = mode === 'pine' ? true : false}
	{#if it.items}
		{#each it.items as _it}
			{@render trigger$(false, _it, subitem)}
		{/each}
	{/if}
{/snippet}

{#if !item.items}
	{@render trigger$(false, item, false)}
{:else if mode === 'pine'}
	<UCollapsible
		transition={props.transition ?? { duration: 150 }}
		class={css.root}
		id="sub-menu-{props.index}"
	>
		{#snippet trigger({ value })}
			{@render trigger$(value, item, false)}
		{/snippet}
		{#snippet content()}
			{@render content$(item)}
		{/snippet}
	</UCollapsible>
{:else if mode === 'dual'}
	<UTooltip group open={tip} float={{ placement: 'right', overflowPadding: 0 , strategy: 'fixed'}} class={css.root}>
		{#snippet trigger()}
			{@render trigger$(false, item, false)}
		{/snippet}

		{#snippet content()}
			{@render content$(item)}
		{/snippet}
	</UTooltip>
{/if}
