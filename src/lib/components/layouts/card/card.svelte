<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let as: string = 'div';
	let cardUI: string = '';
	export { cardUI as class };
	export let northUI: string = '';
	export let centerUI: string = '';
	export let southUI: string = '';
	const css = {
		base: '',
		background: 'bg-white dark:bg-gray-900',
		divide: 'divide-y divide-gray-200 dark:divide-gray-800',
		ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
		rounded: 'rounded-lg',
		shadow: 'shadow',
		center: {
			base: '',
			background: '',
			padding: 'px-4 py-5 sm:p-6'
		},
		north: {
			base: '',
			background: '',
			padding: 'px-4 py-5 sm:px-6'
		},
		south: {
			base: '',
			background: '',
			padding: 'px-4 py-4 sm:px-6'
		}
	};
	$: cardCSS = twMerge(
		css.base,
		css.rounded,
		css.divide,
		css.ring,
		css.shadow,
		css.background,
		cardUI
	);

	$: northCSS = twMerge(css.north.base, css.north.padding, css.north.background, northUI);
	$: centerCSS = twMerge(css.center.base, css.center.padding, css.center.background, centerUI);
	$: southCSS = twMerge(css.south.base, css.south.padding, css.south.background, southUI);
</script>

<svelte:element this={as} class={cardCSS}>
	{#if $$slots.north}
		<div class={northCSS}>
			<slot name="north" />
		</div>
	{/if}
	<div class={centerCSS}>
		<slot />
	</div>
	{#if $$slots.south}
		<div class={southCSS}>
			<slot name="south" />
		</div>
	{/if}
</svelte:element>
