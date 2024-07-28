<script lang="ts">
	/** Imports */
	import { createPinInput, melt } from '@melt-ui/svelte';
	import { UInput } from '$lib/config/imports/components.js';

	/** Props */

	/** Melt */
	const {
		elements: { root, input }
	} = createPinInput({
		defaultValue: ['1', '2', '3', '4', '5']
	});

	/** UI */
</script>

<div use:melt={$root} class="flex items-center gap-2">
	{#each Array.from({ length: 5 }) as _}
		<UInput let:ui class="size-12 rounded-md bg-white text-center text-lg">
			<input use:melt={$input()} class={ui.input} />
		</UInput>
	{/each}
</div>
