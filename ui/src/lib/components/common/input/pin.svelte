<script lang="ts">
	import { createPinInput, createSync, melt, name } from '@melt-ui/svelte';
	import type { InputPinProps } from './pin.js';
	import { writable } from 'svelte/store';

	let { ...props }: InputPinProps = $props();
	let _value = writable(props['value']);
	const {
		elements: { root, input },
		states
	} = createPinInput({
		defaultValue: props['default-value'],
		value: _value,
		name: props['name'],
		disabled: props['disabled'],
		type: props['type'],
		onValueChange: props['on-value-change'],
		ids: props['ids']
	});
	const { value } = states;
</script>

<div use:melt={$root}>
	{#each $value as _, i}
		<input
			data-index={i}
			{...props}
			{...$input()}
			use:$input.action
			class="text-primary-900 size-12 rounded-md bg-white text-center text-lg shadow-sm dark:bg-neutral-900"
		/>
	{/each}
</div>
