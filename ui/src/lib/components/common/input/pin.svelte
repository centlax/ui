<script lang="ts">
	import { createPinInput, melt } from '@melt-ui/svelte';
	import type { InputPinProps } from './pin.js';
	import { UInput } from '$lib/components/export.js';
	const values = ['1', '2', '3', '4'];

	let { ...props }: InputPinProps = $props();
	const {
		elements: { root, input },
		states: { value }
	} = createPinInput({
		defaultValue: values
	});
</script>

<div use:melt={$root} class="flex items-center gap-2">
	{#each values as _, i}
		<input
			data-index={i}
			{...$input()}
			use:$input.action
			class="size-12 rounded-md bg-white text-center text-lg text-white shadow-sm dark:bg-neutral-900"
		/>
	{/each}
</div>
