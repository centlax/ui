<script lang="ts">
	import { UIcon, ULink, UTooltip } from '$lib/index.js';
	import type { Link } from '$lib/types/link.d.js';
	import { twJoin } from 'tailwind-merge';
	import { createEventDispatcher } from 'svelte';
	import { getContext } from 'svelte';

	export let links: Link[];
	const dispatch = createEventDispatcher();

	export let popper: boolean = true;
	const css = {
		base: 'text-sm font-semibold leading-6 text-gray-900 dark:text-white',
		tooltip: {
			wrapper: 'p-2 space-y-1 bg-gray-100/80 dark:bg-gray-950/30 rounded-md',
			base: 'block cusor-pointer px-2 py-1.5 rounded-md flex gap-2 ',
			hover: 'hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:text-primary',
			label: 'font-medium text-sm inline-block relative',
			description: 'text-sm leading-snug text-gray-600 dark:text-gray-400 line-clamp-2',
			icon: {
				base: 'w-5 h-5 flex-shrink-0 mt-1 text-primary',
				add: 'i-fluent-add-24-regular',
				minus: 'i-fluent-subtract-24-regular'
			},
			externalIcon: {
				name: 'heroicons:arrow-up-right-20-solid',
				base: 'size-4 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
			}
		},
		icon: {
				add: 'i-fluent-add-24-regular',
				minus: 'i-fluent-subtract-24-regular'
		},
	};
	$: tooltipCSS = twJoin(css.tooltip.base, css.tooltip.hover);
	$: open = false;
</script>

{#each links as link}
	{#if link.children && popper}
		<UTooltip>
			<ULink slot="trigger" href={link.href} class={css.base} label={link.label} />
			<div class={css.tooltip.wrapper}>
				{#each link.children as child}
					<a href={child.href} class={tooltipCSS}>
						{child.label}
					</a>
				{/each}
			</div>
		</UTooltip>
	{:else if !popper}
		<ULink
			on:mouseenter={() => (open = true) && (dispatch('children', { link: link.children }))}
			href="/"
			class={css.base}>
			{link.label} 
		{#if link.children}
		<UIcon name={open ? css.icon.add: css.icon.minus}/>
		{/if}
		</ULink>
	{:else}
		<ULink href={link.href} class={css.base} label={link.label} />
	{/if}
{/each}
