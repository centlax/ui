<script lang="ts">
	/** Imports */
	import type { Snippet } from 'svelte';
	import { createCheckbox, melt } from '@melt-ui/svelte';

	/** Props */
	let { children }: { children: Snippet } = $props();

	/** Melt UI */
	const {
		elements: { root, input },
		helpers: { isChecked, isIndeterminate }
	} = createCheckbox({
		defaultChecked: 'indeterminate'
	});
</script>

{@render children()}

<div class="flex items-center justify-center">
	<button
		use:melt={$root}
		class="flex size-7 appearance-none items-center justify-center
              rounded-lg bg-white text-sky-600 shadow hover:opacity-75"
		id="checkbox"
	>
		{#if $isIndeterminate}
			M
		{:else if $isChecked}
			C
		{/if}
		<input use:melt={$input} />
	</button>
	<label class="pl-4 font-medium text-sky-900" for="checkbox"> Accept terms and conditions. </label>
</div>
