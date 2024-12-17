<script lang="ts">
	/** Imports  */
	import { melt, createSync } from '@melt-ui/svelte';
	import { flyAndScale } from '$lib/theme/transition/fly-scale.js';
	import { modal, type ModalProps } from './modal.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';
	import { fade } from 'svelte/transition';
	import { createModal } from './modal.svelte.js';

	/** props */
	let { as = 'div', value = $bindable(false), ...props }: ModalProps = $props();
	const {
		elements: { overlay, content, portalled, trigger, close },
		states
	} = createModal(props);
	const sync = createSync(states);
	$effect(() => sync.open(value, (v) => (value = v)));

	/** Styles */
	const ui = useUI(modal, props.class, props.override);
	const transition = useTransition();
	const txn = $state({
		overlay: transition.set(props['overlay-transition'], { duration: 150 }),
		content: transition.set(props.transition, { duration: 150, y: 8, start: 0.96 })
	});
</script>

{@render props.children?.()}

{#if value}
	<div class={st(ui.root)} use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class={st(ui.overlay)}
			in:fade={txn.overlay.in}
			out:fade={txn.overlay.out}
			aria-hidden="true"
		></div>

		<div
			{...props}
			class={cn(st(ui.content), ui.class)}
			in:flyAndScale={txn.content.in}
			out:flyAndScale={txn.content.out}
			use:melt={$content}
		>
			{@render props.content?.()}
		</div>
	</div>
{/if}
