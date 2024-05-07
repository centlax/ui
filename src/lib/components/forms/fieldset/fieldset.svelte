<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts">
	// Imports
	import { css } from './fieldset.styles.js';
	import { ui } from '$lib/ui.config.js';
	import { setContext } from 'svelte';
	import { twJoin } from 'tailwind-merge';
	import type { FieldsetProps, FieldsetContext } from './fieldset.props.js';
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import { UInput } from '$lib/index.js';

	// Props
	export let size: FieldsetProps['size'] = ui.size;
	export let color: FieldsetProps['color'] = 'white';
	export let label: FieldsetProps['label'] = '';
	export let hint: FieldsetProps['hint'] = '';
	export let error: FieldsetProps['error'] = '';
	export let help: FieldsetProps['help'] = '';
	export let required: FieldsetProps['required'] = false;
	export let id: FieldsetProps['id'] = '';
	export let name: FormPathLeaves<T>;
	export let superform: SuperForm<T>;

	// Config
	const { value, errors, constraints } = formFieldProxy(superform, name);
	let context: FieldsetContext = {
		size,
		color,
		id,
		name,
		value: $value
	};
	setContext('Fieldset', context);
	const labelCSS = twJoin(css.label.base, required ? css.label.required : '');
	// Reactive
	$: isError = $$slots.error || $errors || error;
</script>

<fieldset class="space-y-1 {css.text[size || ui.size]}">
	<div id="north" class={css.north}>
		<slot name="label">
			<label for={id} class={labelCSS}>{label}</label>
		</slot>
		{#if $$slots.hint || hint}
			<slot name="hint">
				{#if typeof hint === 'object'}
					<a href={hint.href} class={css.hint}>{hint.message}</a>
				{:else}
					<span>{hint}</span>
				{/if}
			</slot>
		{/if}
	</div>
	<slot />
	<div id="south">
		{#if ($$slots.help || help) && !isError}
			<slot name="help">
				<p class={css.help}>{help}</p>
			</slot>
		{/if}
		{#if isError}
			<slot name="error">
				<p class={css.error}>{$errors || error}</p>
			</slot>
		{/if}
	</div>
</fieldset>
