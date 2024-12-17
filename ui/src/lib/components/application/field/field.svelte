<script lang="ts">
	/** Imports  */
	import { field, type FieldProps } from './field.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { fade } from 'svelte/transition';

	/** Props  */
	let { name, ...props }: FieldProps = $props();

	/** Styles  */
	const ui = useUI(field, props.class, props.override);
</script>

{#snippet _error()}
	<p transition:fade class={st(ui.error)}>
		{#if typeof props.error === 'string'}
			{props.error}
		{:else}
			{@render props.error?.()}
		{/if}
	</p>
{/snippet}

{#snippet _help()}
	<p class={st(ui.help)}>
		{#if typeof props.help === 'string'}
			{props.help}
		{:else}
			{@render props.help?.()}
		{/if}
	</p>
{/snippet}

<div {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
	{#if props.error}
		{@render _error()}
	{:else}
		{@render _help()}
	{/if}
</div>
