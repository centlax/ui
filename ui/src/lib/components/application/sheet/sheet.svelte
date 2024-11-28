<script lang="ts">
	/** Imports */
	import { createDialog, melt, createSync } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { useToggle } from '$lib/composables/toggle.js';
	import { fromTransition, sheet, type SheetProps } from './sheet.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { as = 'div', value = $bindable(false), from = 'east', ...props }: SheetProps = $props();

	const {
		elements: { overlay, content, portalled, trigger, close },
		states
	} = createDialog({
		role: props['role'] ?? 'dialog',
		preventScroll: props['prevent-scroll'] ?? true,
		escapeBehavior: props['escape-behavior'] ?? 'close',
		closeOnOutsideClick: props['close-on-outside-click'] ?? true,
		portal: props['portal'] ?? 'body',
		forceVisible: props['force-visible'] ?? false,
		openFocus: props['open-focus'],
		closeFocus: props['close-focus'],
		defaultOpen: props['default-open'] ?? false
	});
	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});

	const toogle = useToggle();
	toogle.set(states.open, $trigger, $close);

	/** Styles */
	const ui = useUI(sheet, props.class, props.override);
	const css = $state({
		content: cn(st(ui.content, ui.content.opt.from[from]), ui.class)
	});

	const transition = useTransition();
	const txn = $state({
		overlay: transition.set(props['overlay-transition'], { duration: 150 }),
		content: transition.set(props['transition'], fromTransition(from))
	});
</script>

{@render props.children?.()}

{#if props.trigger}
	<svelte:element this={as}>
		{@render props.trigger?.()}
	</svelte:element>
{/if}

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
			class={css.content}
			in:fly={txn.content.in}
			out:fly={txn.content.out}
			use:melt={$content}
		>
			{@render props.content?.()}
		</div>
	</div>
{/if}
