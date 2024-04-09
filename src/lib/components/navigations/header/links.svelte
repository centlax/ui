<script lang="ts">
	import { ULink, UTooltip } from '$lib/index.js';
	import type { Link } from '$lib/types/link.d.js';
	import { twJoin } from 'tailwind-merge';
	const css = {
		base: 'text-sm font-medium leading-6 text-gray-900 dark:text-white',
		tooltip: {
			wrapper: 'p-2 space-y-1 bg-gray-100/80 dark:bg-gray-950/30 rounded-md',
			base: 'block cusor-pointer px-2 py-1.5 rounded-md flex gap-2 ',
			hover: 'hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:text-primary',
			label: 'font-medium text-sm inline-block relative',
			description: 'text-sm leading-snug text-gray-600 dark:text-gray-400 line-clamp-2',
			icon: {
				base: 'w-5 h-5 flex-shrink-0 mt-1 text-primary'
			},
			externalIcon: {
				name: 'heroicons:arrow-up-right-20-solid',
				base: 'size-4 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
			}
		}
	};
	export let links: Link[];
	$: tooltipCSS = twJoin(css.tooltip.base, css.tooltip.hover);
</script>

{#each links as link}
	{#if link.children}
		<UTooltip side="bottom">
			<ULink slot="trigger" href={link.href} class={css.base} label={link.label} />
			<div class={css.tooltip.wrapper}>
				{#each link.children as child}
					<a href={child.href} class={tooltipCSS}>
						{child.label}
					</a>
				{/each}
			</div>
		</UTooltip>
	{:else}
		<ULink href={link.href} class={css.base} label={link.label} />
	{/if}
{/each}
