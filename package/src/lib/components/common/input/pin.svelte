<script lang="ts">
	/** Imports */
	import { createPinInput, melt } from '@melt-ui/svelte';

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
		<slot input={$input}/>
	{/each}
</div>
