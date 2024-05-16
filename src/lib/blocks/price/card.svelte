<script lang="ts" context="module">
	export type Features = {
		title?: string;
		icon?: string;
		items?: string[];
	};
	export const styles = {
		card: 'space-y-4 lg:space-y-6',
		badge: {
			position: 'shadow absolute top-0 left-1/2  -translate-x-1/2 ',
			base: ' w-32 -mt-5 px-3 py-2 bg-white dark:bg-gray-900',
			border: 'border border-gray-200 dark:border-gray-800',
			rounded: 'rounded-full',
			font: 'font-semibold',
			text: 'text-center text-gray-700 dark:text-gray-300 text-sm'
		},
		header: {
			base: 'flex flex-col gap-y-4',
			name: 'text-lg text-primary-500 font-medium leading-8',
			price: {
				base: 'flex items-baseline gap-x-1',
				cost: 'text-5xl font-bold tracking-tight text-gray-900 dark:text-white',
				time: 'text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400'
			},
			description: 'text-gray-600 dark:text-gray-400'
		},
		features: {
			base: 'space-y-3',
			title: 'pb-2 text-gray-800 dark:text-gray-200 font-medium',
			item: {
				base: 'flex items-center gap-5',
				text: 'text-gray-800 dark:text-gray-400'
			},
			icon: {
				base: 'i-fluent-checkmark-20-regular',
				name: 'size-5 text-primary-500'
			}
		}
	};
</script>

<script lang="ts">
	// Imports
	import { UButton, UCard } from '$lib/index.js';
	import { stringfy, twJoin } from '$lib/utils/index.js';
	import type { ComponentProps } from 'svelte';
	import { useUI } from '$lib/composables/useUI.js';
	import type { DeepPartial } from '$lib/types/index.js';

	// Props
	let _class: string | DeepPartial<typeof styles> = '';
	export { _class as class };
	export let popular: boolean = false;
	export let name: string = '';
	export let price: string | number | string[] | number[] = '';
	export let description: string = '';
	export let button: ComponentProps<UButton> = {};
	export let time: string = 'month';
	export let features: Features = {};

	// Config
	const { css, classer } = useUI(styles, _class);
</script>

<UCard class={{ root: classer, default: { base: css.card } }}>
	<div class={css.header.base}>
		{#if popular}
			<span class={stringfy(css.badge)}> Most popular </span>
		{/if}

		<div class={css.header.base}>
			<span class={css.header.name}>{name}</span>
			<p class={css.header.price.base}>
				<span class={css.header.price.cost}>${price}</span>
				<span class={css.header.price.time}>/{time}</span>
			</p>
			<p class={css.header.description}>{description}</p>
		</div>
	</div>

	<slot />

	<UButton {...{ size: 'md', block: true, label: 'Get Started', ...button }} />

	{#if features?.items?.length}
		<ul class={css.features.base}>
			<li class={css.features.title}>{features.title || 'Features'}</li>
			{#each features.items as item}
				<li class={stringfy(css.features.item)}>
					<span class={twJoin(stringfy(css.features.icon), features.icon)} />
					{item}
				</li>
			{/each}
		</ul>
	{/if}
</UCard>
