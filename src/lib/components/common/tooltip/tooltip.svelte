<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: {
			placement: 'top'
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true
	});
</script>

<button type="button" class="trigger" use:melt={$trigger} aria-label="Add"> Plus </button>

{#if $open}
	<div
		use:melt={$content}
		transition:fade={{ duration: 100 }}
		class=" z-10 rounded-lg bg-white shadow"
	>
		<div use:melt={$arrow}></div>
		<p class="px-4 py-1 text-sky-700">Add item to library</p>
	</div>
{/if}

<style lang="postcss">
	.trigger {
		@apply inline-flex h-9 w-9 items-center justify-center rounded-full bg-white;
		@apply text-sky-900 transition-colors hover:bg-white/90;
		@apply focus-visible:ring focus-visible:ring-sky-400 focus-visible:ring-offset-2;
		@apply p-0 text-sm font-medium;
	}
</style>
