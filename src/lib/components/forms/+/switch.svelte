<script lang="ts" context="module">
	export const css = {
		root: {
			base: 'flex rounded-full gap-1 data-[orientation=horizontal]:flex-row',
			border:
				'rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-gray-800'
		}
	};
</script>

<script lang="ts">
	// Imports
	import { stringfy } from '$lib/utils/index.js';
	import { createRadioGroup, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	// Props
	export let legend: string = '';
	export let options: string[] = [];
	export let value: string = options[0];

	// Config
	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked },
		states: { value: _value }
	} = createRadioGroup({
		onValueChange: ({ next }) => {
			return (value = next);
		}
	});

	// Reactive
	$: $_value = value;
</script>

<fieldset use:melt={$root} class={stringfy(css.root)} aria-label="View density">
	<legend class="sr-only">{legend}</legend>
	{#each options as option}
		<label class="sr-only" for={option} id="{option}-label" />
		<button
			use:melt={$item(option)}
			class="{$isChecked(option) &&
				'bg-primary-500 text-white'} cursor-pointer rounded-full px-2.5 py-1"
			id={option}
			aria-labelledby="{option}-label"
		>
			{option}
		</button>
	{/each}
	<input hidden name="line-height" use:melt={$hiddenInput} />
</fieldset>
