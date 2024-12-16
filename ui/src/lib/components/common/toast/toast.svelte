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
	import { toast, type ToastProps } from './toast.js';
	import type { Snippet } from 'svelte';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/internal/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';

	/** Props */
	let { ...props }: ToastProps = $props();

	/** Styles */
	const ui = useUI(toast, props.class, props.override);
	const transition = useTransition();
	const txn = $state(
		transition.set(props.transition, {
			duration: 150,
			x: '100%'
		})
	);
</script>

<div data-ui="notification" use:portal class={st(ui.root)}>
	{#each $toasts as { id, data } (id)}
		<div
			use:melt={$content(id)}
			{...props}
			class={cn(st(ui.content), ui.class)}
			animate:flip={props.animate ?? { duration: 500 }}
			in:fly={txn.in}
			out:fly={txn.out}
		>
			{@render data?.()}

			{@render props.children?.()}
		</div>
	{/each}
</div>
