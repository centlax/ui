<script lang="ts">
	import { flyAndScale as flyscale } from '$lib/theme/transition/fly-scale.js';
	import { createDialog, melt } from '@melt-ui/svelte';
	/** Internal helpers */

	import { fade } from 'svelte/transition';
	let { children, trigg = $bindable() } = $props();

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});
	$effect(() => {
		trigg = $trigger;
	});
</script>

<button
	use:melt={$trigger}
	class="text-magnum-700 inline-flex items-center justify-center rounded-xl bg-white px-4
	py-3 font-medium leading-none shadow hover:opacity-75"
>
	Open Dialog
</button>
<button
	use:melt={$trigger}
	class="text-magnum-700 inline-flex items-center justify-center rounded-xl bg-white px-4
	py-3 font-medium leading-none shadow hover:opacity-75"
>
	TWO
</button>

{#if $open}
	<div class="" use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50"
			transition:fade={{ duration: 150 }}
		></div>
		<div
			class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw]
			  max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white
			  p-6 shadow-lg"
			transition:flyscale={{
				duration: 150,
				y: 8,
				start: 0.96
			}}
			use:melt={$content}
		>
			{@render children()}
		</div>
	</div>
{/if}
