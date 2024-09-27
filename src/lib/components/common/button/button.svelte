<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
	type Props = {
		children?: Snippet;
		href?: string;
		label?: string;
	} & (HTMLButtonAttributes | HTMLAnchorAttributes);

	let { ...props }: Props = $props();
</script>

<svelte:element this={props.href ? 'a' : 'button'} {...props}>
	{#if props.children}
		{@render props.children()}
	{:else if props.label}
		{props.label}
	{/if}
</svelte:element>
