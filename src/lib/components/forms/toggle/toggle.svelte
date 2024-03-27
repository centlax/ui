<script lang="ts">
	import { createSwitch, melt } from '@melt-ui/svelte';

	const {
		elements: { root, input }
	} = createSwitch();
</script>

<form class="flex items-center">
	<label class="pr-4 leading-none text-magnum-900" for="airplane-mode" id="airplane-mode-label">
		Airplane mode
	</label>
	<button
		use:melt={$root}
		class="relative h-6 cursor-default rounded-full bg-gray-200 transition-colors data-[state=checked]:bg-magnum-950"
		id="airplane-mode"
		aria-labelledby="airplane-mode-label"
	>
		<span class="thumb block rounded-full bg-red-600 transition" />
	</button>
	<input use:melt={$input} />
</form>

<style>
	button {
		--w: 2.75rem;
		--padding: 0.125rem;
		width: var(--w);
	}

	.thumb {
		--size: 1.25rem;
		width: var(--size);
		height: var(--size);
		transform: translateX(var(--padding));
	}

	:global([data-state='checked']) .thumb {
		transform: translateX(calc(var(--w) - var(--size) - var(--padding)));
	}
</style>
