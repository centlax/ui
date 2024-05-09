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
	import { Field, Control, Label, Fieldset, Description, FieldErrors } from 'formsnap';
	import { fade } from 'svelte/transition';

	// Props
	export let size: FieldsetProps['size'] = ui.size;
	export let color: FieldsetProps['color'] = 'white';
	export let label: FieldsetProps['label'] = '';
	export let hint: FieldsetProps['hint'] = '';
	export let help: FieldsetProps['help'] = '';
	export let required: FieldsetProps['required'] = false;
	export let id: FieldsetProps['id'] = '';
	export let name: string;
	export let form: any;

	// Config
	let context: FieldsetContext = {
		size,
		color,
		id
	};
	setContext('Fieldset', context);
	const labelCSS = twJoin(css.label.base, required ? css.label.required : '');
	// Reactive
</script>

<Field {form} let:constraints let:errors {name}>
	<Control let:attrs>
		<fieldset class="space-y-1 {css.text[size || ui.size]}">
			<div id="north" class={css.north}>
				<slot name="label">
					<Label class={labelCSS}>{label || name}</Label>
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
			<slot {constraints} {attrs} />
			<div id="south">
				<Description asChild let:descriptionAttrs>
					{#if ($$slots.help || help) && !errors?.length}
						<slot name="help">
							<p class={css.help} {...descriptionAttrs}>{help}</p>
						</slot>
					{/if}
				</Description>

				<FieldErrors asChild let:errors let:errorAttrs>
					<slot name="error">
						{#each errors as error}
							<p in:fade class={css.error} {...errorAttrs}>{error}</p>
						{/each}
					</slot>
				</FieldErrors>
			</div>
		</fieldset>
	</Control>
</Field>
