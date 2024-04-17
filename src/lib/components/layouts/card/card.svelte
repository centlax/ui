<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let as: string = 'div';
	export let rounded: boolean = true;
	let classProp: string = '';
	export { classProp as class };
	export let northUI: string = '';
	export let centerUI: string = '';
	export let southUI: string = '';
	export let padded: boolean = true;
	const css = {
		base: '',
		background: 'bg-white dark:bg-gray-900',
		divide: 'divide-y divide-gray-200 dark:divide-gray-800',
		ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
		rounded: 'rounded-md lg:rounded-lg',
		shadow: 'shadow',
		padding: 'px-4 py-5 sm:p-6',
		center: {
			base: '',
			background: ''
		},
		north: {
			base: '',
			background: ''
		},
		south: {
			base: '',
			background: ''
		}
	};
	$: cardCSS = twMerge(
		css.base,
		rounded && css.rounded,
		css.divide,
		css.ring,
		css.shadow,
		css.background,
		padded && css.padding,
		classProp
	);

	$: northCSS = twMerge(css.north.base, css.north.background, northUI);
	$: centerCSS = twMerge(css.center.base, css.center.background, centerUI);
	$: southCSS = twMerge(css.south.base, css.south.background, southUI);
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
