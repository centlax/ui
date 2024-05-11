<script lang="ts">
	import { UBadge, UButton, UColorMode } from '$lib/index.js';
	import { useToast } from '$lib/index.js';
	const toast = useToast();
</script>

<UColorMode />
<div class="flex justify-center items-center h-full">
	<UButton
		label="Show toast"
		on:click={() =>
			toast.add({
				title: 'Hello world'
			})}
	/>

	<UButton label="Click me!" />
	<UBadge remove indicator variant="soft" label="Delete" color="green" size="lg" />
</div>
