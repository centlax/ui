<script lang="ts">
	import { flyAndScale } from '$lib/utils/transations.js';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	export let state: boolean = false;

	const {
		elements: { portalled, overlay, content },
		states: { open }
	} = createDialog({
		onOpenChange: ({ next }) => {
			return (state = next);
		}
	});
	$: $open = state;

	const css = {
		portalled: 'fixed inset-0 z-50 bg-black/50',
		content: `fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-lg`
	};
</script>

{#if $open}
	<div use:melt={$portalled}>
		<div use:melt={$overlay} class={css.portalled} transition:fade={{ duration: 150 }} />
		<div
			use:melt={$content}
			class={css.content}
			transition:flyAndScale={{
				duration: 200,
				y: 8,
				start: 0.96
			}}
		>
			<slot />
		</div>
	</div>
{/if}
