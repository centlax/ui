<script lang="ts">
	import { createPopover, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import type { FloatingConfig } from '@melt-ui/svelte/internal/actions/floating';
	import { overUI } from '$lib/theme/overlay.js';
	export let state: boolean = false;
	export let preventScroll: boolean = true;
	export let arrowSize: number = 8;
	export let outerClose: boolean = true;
	export let hover: boolean = false;
	export let portal: string | HTMLElement | null = 'body';
	//export let placement = 'top'

	const {
		elements: { trigger, content, overlay, arrow, close },
		states: { open }
	} = createPopover({
		forceVisible: true,
		preventScroll: preventScroll,
		arrowSize: arrowSize,
		closeOnOutsideClick: outerClose,
		portal: portal,
		//positioning: 'right',
		onOpenChange: ({ next }) => {
			return (state = next);
		}
	});
	$: $open = state;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:mouseenter={() => {
		$open = hover && true;
	}}
	class="trigger"
	use:melt={$trigger}
>
	<slot />
</div>

{#if $open}
	<div use:melt={$overlay} transition:fade={{ duration: 150 }} class={overUI.base} />
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:mouseleave={() => {
			$open = hover && false;
		}}
		use:melt={$content}
		transition:fade={{ duration: 100 }}
		class="content"
	>
		<div class="arrow" use:melt={$arrow} />
		<slot name="popper" />
		<div use:melt={$close}>
			<slot name="close" />
		</div>
	</div>
{/if}

<style lang="postcss">
	.trigger {
		@apply inline-flex  items-center justify-center rounded-full bg-white p-0;
		@apply text-sm font-medium text-primary-900 transition-colors hover:bg-white/90;
		@apply focus-visible:ring focus-visible:ring-primary-400 focus-visible:ring-offset-2;
	}

	.content {
		@apply outline-none shadow-sm z-[99]   bg-white dark:bg-gray-900;
	}
</style>
