<script lang="ts">
	/** Imports */
	import { fade } from 'svelte/transition';
	import { fieldset } from './fieldset.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Fieldset');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let label = props.label;
	export let name = props.name;
	export let help = props.help;
	export let error = props.error;
	export let hint = props.help;
	export let href = props.href;

	/** UI */
	const { css, classer } = useUI(fieldset, _class, override);

	$: attrs = {
		name
	};
</script>

<fieldset {...$$restProps} class={merge(stringify(css.root), classer)}>
	<div class={stringify(css.north)}>
		<label for={name} class={stringify(css.label)}><slot name="label">{label}</slot></label>
		{#if hint}
			<slot name="hint" {hint}>
				<svelte:element
					this={href ? 'a' : 'span'}
					data-this={href ? 'ancor' : 'span'}
					{href}
					class={stringify(css.hint)}
				>
					{hint}
				</svelte:element>
			</slot>
		{/if}
	</div>

	<slot {attrs} />

	{#if error}
		<slot name="error" {error}>
			<p class={stringify(css.error)} transition:fade>{error}</p>
		</slot>
	{:else}
		<slot name="help" {help}>
			<p class={stringify(css.help)}>{help}</p>
		</slot>
	{/if}
</fieldset>
