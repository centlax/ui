<script lang="ts">
	import { createPinInput, melt } from '@melt-ui/svelte';
	import { UInput } from '$lib/import.js';
	const {
		elements: { root, input }
	} = createPinInput({});
</script>

<div use:melt={$root} class="flex items-center gap-2">
	{#each Array.from({ length: 5 }) as _}
		<UInput
			class="size-12 rounded-md bg-white text-center text-lg text-sky-900 shadow-sm"
			melt={$input()}
		/>
	{/each}
</div>
