<script lang="ts" context="module">
	export const styles = {
		root: {
			base: 'w-fit p-1 flex gap-1 data-[orientation=horizontal]:flex-row',
			ring: 'rounded-full ring-1 ring-inset ring-gray-200 dark:ring-gray-800',
			font: 'font-semibold leading-5',
			text: 'text-center text-xs'
		},
		option: {
			base: 'cursor-pointer rounded-full px-2.5 py-1',
			checked: 'bg-primary-500 text-white'
		}
	};
</script>

<script lang="ts">
	// Imports
	import { stringfy, twJoin } from '$lib/utils/index.js';
	import { createRadioGroup, melt } from '@melt-ui/svelte';
	import { useUI } from '$lib/composables/useUI.js';
	import type { DeepPartial } from '$lib/types/index.js';

	// Props
	let _class: string | DeepPartial<typeof styles> = '';
	export { _class as class };
	export let legend: string = '';
	export let options: string[] = [];
	export let value: string = options[0];

	// Config
	const { css, classer } = useUI(styles, _class);
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

<fieldset use:melt={$root} class={twJoin(stringfy(css.root), classer)} aria-label="View density">
	<legend class="sr-only">{legend}</legend>
	{#each options as option}
		<label class="sr-only" for={option} id="{option}-label" />
		<button
			use:melt={$item(option)}
			class="{$isChecked(option) && css.option.checked} {css.option.base}"
			id={option}
			aria-labelledby="{option}-label"
		>
			{option}
		</button>
	{/each}
	<input hidden name="line-height" use:melt={$hiddenInput} />
</fieldset>
