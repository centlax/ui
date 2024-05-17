<script lang="ts" context="module">
	export const styles = {
		root: 'space-y-16',
		north: {
			base: 'mx-auto max-w-4xl text-center space-y-4 lg:space-y-6',
			name: 'text-base font-semibold leading-7 text-primary-500',
			title: 'text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl',
			descritpion: 'mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400',
			switch: 'mx-auto'
		},
		center: {
			base: 'sm:grid md:grid-cols-2 lg:flex gap-8 mx-auto',
			card: {
				base: 'mb-10 w-full sm:mb-0 md:w-fit'
			}
		},
		south: {
			base: 'mx-auto w-fit space-x-4'
		}
	};
</script>

<script lang="ts">
	// Imports
	import { type ComponentProps } from 'svelte';
	import { UPriceCard, USwitch } from '$lib/index.js';
	import { stringfy, twJoin } from '$lib/utils/index.js';
	import { useUI } from '$lib/composables/useUI.js';
	import type { DeepPartial } from '$lib/types/index.js';

	// Props
	let _class: string | DeepPartial<typeof styles> = '';
	let _switch: ComponentProps<USwitch> = {};
	export { _class as class };
	export { _switch as switch };
	export let plans: ComponentProps<UPriceCard>[] = [];
	export let name: string = '';
	export let title: string = '';
	export let description: string = '';
	export let custom: boolean = false;

	// Config
	const { css, classer } = useUI(styles, _class);
</script>

<section class={twJoin(css.root, classer)}>
	<div class={css.north.base}>
		<h2 class={css.north.name}>{name}</h2>
		<p class={css.north.title}>{title}</p>
		<p class={css.north.descritpion}>{description}</p>
		<USwitch {...{ class: css.north.switch, ..._switch }} />
	</div>

	{#if plans?.length}
		<div class={stringfy(css.center)}>
			{#each plans as plan}
				<UPriceCard {...{ class: css.center.card.base, ...plan }} />
			{/each}
		</div>
	{/if}

	<slot />

	{#if custom || $$slots.south}
		<div class={stringfy(css.south)}>
			<slot name="south" />
		</div>
	{/if}
</section>
