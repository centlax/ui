<script lang="ts">
	import { ui } from '$lib/ui.config.js';
	import { twJoin, twMerge } from 'tailwind-merge';

	export let as: string = 'div';
	export let padding: boolean = true;
	let classProp: string | string[] = '';
	export { classProp as class };
	const css = {
		base: 'mx-auto max-w-7xl',
		padding: 'px-4 sm:px-6 lg:px-8',
		constrained: ui.layout?.constrained
	};
	$: containerCSS = twMerge(
		twJoin(css.base, padding ? css.padding : undefined, css.constrained, classProp),
		classProp
	);
</script>

<svelte:element this={as} class={containerCSS}>
	<slot />
</svelte:element>
