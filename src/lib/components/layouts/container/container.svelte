<script lang="ts">
	import { ui } from '$lib/ui.config.js';
	import { twMerge } from 'tailwind-merge';

	export let as: string = 'div';
	let classProp: string | string[] = '';
	export { classProp as class };
	const css = {
		base: 'mx-auto max-w-7xl',
		padding: 'px-4 sm:px-6 lg:px-8',
		constrained: ui.layout?.constrained
	};
	$: containerCSS = twMerge(css.base, css.padding, css.constrained, classProp);
</script>

<svelte:element this={as} class={containerCSS}>
	<slot />
</svelte:element>
