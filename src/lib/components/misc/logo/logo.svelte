<script lang="ts">
	import { twJoin, twMerge } from 'tailwind-merge';
	import type { Size } from '$lib/types/index.js';
	import { config } from '$lib/ui.config.js';
	export let mode: 'filled' | 'regular' = 'filled';
	export let size: Size = config.size;
	export let move: boolean = false;
	let classProp = '';
	export { classProp as class };
	const css = {
		base: 'transition duration-300 ease-in-out rotate-[45deg] transform-gpu',
		color: 'text-primary-600 dark:text-primary-500',
		hover: 'group-hover/logo:rotate-[135deg] hover:rotate-[135deg]',
		size: {
			xs: 'size-8',
			sm: 'size-10',
			md: 'size-12',
			lg: 'size-14',
			xl: 'size-16'
		},
		mode: {
			filled: 'i-fluent-target-arrow-16-filled',
			regular: 'i-fluent-target-arrow-16-regular'
		}
	};
	$: logoCSS = twMerge(
		twJoin(css.base, css.size[size], css.color, move ? css.hover : ''),
		classProp
	);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span class="{css.mode[mode]} {logoCSS}" on:click on:dblclick on:mouseenter on:mouseleave />
