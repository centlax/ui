<script lang="ts">
	import { twMerge, twJoin } from 'tailwind-merge';
	let className: string | string[] = '';
	export { className as class };

	const css = {
		base: 'animate-pulse',
		background: 'bg-gray-100 dark:bg-gray-800',
		rounded: 'rounded-md'
	};

	$: skeletonCSS = twMerge(twJoin(css.base, css.background, css.rounded), className);
</script>

<div class={skeletonCSS} />
