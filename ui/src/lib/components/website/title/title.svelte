<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { heading, type HeadingProps } from './title.js';

	/** Imports */

	/** Props */
	let { title, ...props }: HeadingProps = $props();
	const level: HeadingProps['level'] = props.sub ? 3 : props.level || 1;

	/** Styles */
	const ui = useUI(heading, props.class, props.override);
	const css = $state({
		heading: cn(st(ui.root, ui.opt.level[level]), ui.class)
	});
</script>

<svelte:element this={`h${level}`} {...props} class={css.heading}>
	{#if props.children}
		{@render props.children?.()}
	{:else}
		{title}
	{/if}
</svelte:element>
