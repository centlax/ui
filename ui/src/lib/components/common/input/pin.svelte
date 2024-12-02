<script lang="ts">
	import { createPinInput, melt } from '@melt-ui/svelte';
	import type { InputPinProps } from './pin.js';
	import { UInput } from '$lib/components/export.js';
	import { setContext } from 'svelte';
	const values = ['1', '2', '3', '4'];

	let { ...props }: InputPinProps = $props();
	const {
		elements: { root, input },
		states: { value }
	} = createPinInput({
		defaultValue: values
	});
	
</script>

<div use:melt={$root}>
	{#each values as _, i}
		<input
			data-index={i}
			{...$input()}
			use:$input.action
		/>
	{/each}
</div>
