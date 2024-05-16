<script lang="ts" context="module">
	export const css = {
		root: 'relative group w-fit',
		href: 'hover:ring-2 hover:ring-primary-500 hover:bg-gray-200/50 dark:hover:bg-gray-800/50',
		header: {
			base: 'mb-6 flex',
			icon: {
				base: 'size-10 flex-shrink-0',
				text: 'text-primary-500'
			}
		},

		body: {
			base: 'flex-1'
		},
		title: {
			base: 'text-gray-900 dark:text-white text-base',
			font: 'font-semibold truncate',
			flex: 'flex items-center gap-1.5'
		},
		description: 'text-[15px] text-gray-600 dark:text-gray-400 mt-1'
	};
</script>

<script lang="ts">
	// Imports
	import { stringfy, twJoin } from '$lib/utils/index.js';
	import { UCard } from '$lib/index.js';
	import type { Link } from '$lib/types/link.js';

	// Props
	export let link: Link = {};

	// Reactive
	$: cardUI = twJoin(css.root, link.href && css.href);
</script>

<UCard class={{ root: cardUI, divide: 'divide-y-0' }}>
	<a href={link.href} aria-label={link['aria-label']} class="focus:outline-none" tabindex="-1">
		<span class="absolute inset-0" aria-hidden="true" />
	</a>
	<svelte:fragment slot="north">
		{#if $$slots.north}
			<slot name="north" />
		{/if}
	</svelte:fragment>
	{#if link.icon || $$slots.icon}
		<div class={css.header.base}>
			<slot name="icon">
				<span class="{link.icon} {stringfy(css.header.icon)}" />
			</slot>
		</div>
	{/if}

	{#if link.title || $$slots.title}
		<p class={stringfy(css.title)}>
			<slot name="title">
				{link.title}
			</slot>
		</p>
	{/if}

	{#if link.description || $$slots.description}
		<p class={css.description}>
			<slot name="description">
				{link.description}
			</slot>
		</p>
	{/if}
	<slot />
	<svelte:fragment slot="south">
		{#if $$slots.north}
			<slot name="south" />
		{/if}
	</svelte:fragment>
</UCard>
