<script lang="ts">
	import { twMerge, twJoin } from 'tailwind-merge';

	const css = {
		base: 'animate-pulse',
		background: 'bg-gray-100 dark:bg-gray-800',
		rounded: 'rounded-md'
	};

	$: skeletonClass = twMerge(twJoin(css.base, css.background, css.rounded), $$props.class);
</script>

<div class={skeletonClass} {...$$restProps} />
