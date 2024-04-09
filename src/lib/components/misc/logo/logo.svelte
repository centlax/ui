<script lang="ts">
	import { twJoin, twMerge } from 'tailwind-merge';
	import type { Size } from '$lib/types/index.js';
	import { ui } from '$lib/ui.config.js';
	export let mode: 'filled' | 'regular' = 'filled';
	export let size: Size = ui.size;
	let classProp = '';
	export { classProp as class };
	let now = new Date();
	const css = {
		base: 'rotate-[45deg] transform-gpu',
		color: 'text-primary-600 dark:text-primary-500',
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
	$: logoCSS = twMerge(twJoin(css.base, css.size[size], css.color), classProp);
</script>

<span class="{css.mode[mode]} {logoCSS}" />
