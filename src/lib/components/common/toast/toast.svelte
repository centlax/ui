<script lang="ts" module>
	const {
		elements: { content },
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<Snippet>();

	export const helper = helpers;
</script>

<script lang="ts">
	/** Imports */
	import { createToaster, melt } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import type { ToastProps } from './toast.js';
	import type { Snippet } from 'svelte';

	/** Props */
	let { ...props }: ToastProps = $props();
</script>

<div
	data-ui="notification"
	use:portal
	class="fixed right-0 top-0 z-50 m-4 flex w-[20rem] flex-col items-end gap-2 md:bottom-0 md:top-auto"
>
	{#each $toasts as { id, data, closeDelay } (id)}
		<div
			use:melt={$content(id)}
			{...props}
			class="w-full"
			animate:flip={{ duration: 500 }}
			in:fly={{ duration: 150, x: '100%' }}
			out:fly={{ duration: 150, x: '100%' }}
		>
			{@render data?.()}

			{@render props.children?.()}
		</div>
	{/each}
</div>
