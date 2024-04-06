<script lang="ts">
	import type { ColorPallet, Size } from '$lib/types/index.js';
	import { ui } from '$lib/ui.config.js';
	import { setContext } from 'svelte';
	import type { FieldSetContext } from './index.js';
	import { shareUI } from '$lib/theme/share.js';
	import { twJoin } from 'tailwind-merge';
	export let size: Size = ui.size;
	export let color: keyof ColorPallet = 'primary';
	export let label: string = '';
	export let hint: string = '';
	export let error: string = '';
	export let help: string = '';
	export let required: boolean = false;
	export let href: string = '';

	let context: FieldSetContext = {
		size: size,
		color: color
	};
	setContext('FieldSet', context);
	const css = {
		wrapper: '',
		north: 'flex content-center items-center justify-between',
		label: {
			base: 'block font-medium text-gray-700 dark:text-gray-200',
			required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
		},
		text: shareUI.text,
		container: 'mt-1 relative',
		hint: 'text-primary-600 dark:text-primary-500 font-medium',
		help: 'text-gray-600 dark:text-gray-500',
		error: 'text-red-600 dark:text-red-500'
	};
	const labelCSS = twJoin(css.label.base, required ? css.label.required : '');
</script>

<fieldset class="space-y-1 {css.text[size]}">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<div id="north" class={css.north}>
		<slot name="lable">
			<label class={labelCSS}>{label}</label>
		</slot>
		<slot name="hint">
			<a {href} class={css.hint}>{hint}</a>
		</slot>
	</div>
	<slot />
	<div id="south">
		<slot name="help">
			<p class={css.help}>{help}</p>
		</slot>
		<slot name="error">
			<p class={css.error}>{error}</p>
		</slot>
	</div>
</fieldset>
