<script lang="ts">
	/** Imports */
	import { createPinInput, melt, createSync } from '@melt-ui/svelte';
	import type { InputPinProps } from './pin.js';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	/** Props */
	let { value = $bindable([]), ...props }: InputPinProps = $props();

	const {
		elements: { root, input },
		states
	} = createPinInput({
		defaultValue: props['default'] ?? ['3', '4'],
		placeholder: props['placeholder'],
		name: props['name'],
		value: writable(value),
		disabled: props['disabled'] ?? false,
		type: props['type'] ?? 'text',
		ids: props['ids']
	});
	setContext('melt', input);

	/** Styles */
	setContext('input', input);
</script>

<div use:melt={$root} class="flex items-center gap-2 {props.class}" {...props}>
	{#if props.length}
		{#each Array.from({ length: props.length }) as _}
			{@render props.children()}
		{/each}
	{:else}
		{@render props.children()}
	{/if}
</div>
