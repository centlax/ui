<script lang="ts">
	import { createPinInput, melt } from '@melt-ui/svelte';
	const {
		elements: { root, input },
		states: { value }
	} = createPinInput({
		defaultValue: ['1', '2', '3', '4', '5']
	});
</script>

<div use:melt={$root} class="m-10 flex items-center gap-2">
	{#each Array.from({ length: 5 }) as _}
		<input use:melt={$input()} class="size-12 text-center uppercase sm:text-2xl" />
	{/each}
</div>
