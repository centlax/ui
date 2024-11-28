<script lang="ts">
	/** Imports  */
	import { ctxForm, ctxField } from '$lib/composables/form.js';
	import { formFieldProxy } from 'sveltekit-superforms';
	import { field, type FieldProps } from './field.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { fade } from 'svelte/transition';

	/** Props  */
	let { name, ...props }: FieldProps = $props();

	const _form = ctxForm();
	const form = _form.get();

	const proxy = formFieldProxy(form, name);
	const ctx = ctxField();
	ctx.set(proxy, name);

	const { errors } = proxy;

	/** Styles  */
	const ui = useUI(field, props.class, props.override);
</script>

{#snippet _error()}
	<p transition:fade class={st(ui.error)}>
		{#if typeof props.error === 'string' || $errors}
			{props.error || $errors?.[0]}
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
	{#if props.error || $errors}
		{@render _error()}
	{:else}
		{@render _help()}
	{/if}
</div>
