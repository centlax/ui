<!-- Link.svelte -->
<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twJoin, twMerge } from 'tailwind-merge';
	type $$restProps = HTMLAnchorAttributes & {
		label: string;
	};
	export let label: string = '';
	const css = {
		base: 'cursor-pointer'
	};
	$: linkCSS = twMerge(twJoin(css.base), $$restProps.class);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$restProps} class={linkCSS} on:click on:mouseenter on:mouseleave>
	<slot><span>{label}</span></slot>
</a>
