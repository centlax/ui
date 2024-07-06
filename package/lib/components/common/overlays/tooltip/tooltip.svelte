<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { createSync, createTooltip, melt } from '@melt-ui/svelte';
	import { stringify, strify, twJoin } from '$lib/utils/index.js';
	import { fade } from 'svelte/transition';
	import { tooltip } from './tooltip.config.js';

	/** Props */
	const props = useProps('Tooltip');
	let _class = props.class;
	export { _class as class };
	export let open = props.open;
	export let override = props.override;
	export let float = props.float;
	export let arrow = props.arrow;
	export let pointer = props.pointer;
	export let transition = props.transition;
	export let visible = props.visible;
	export let portal = props.portal;
	export let delay = props.delay;
	export let hover = props.hover;
	export let group = props.hover;
	export function toggle() {
		open = !open;
	}

	/** Config */
	const {
		elements: { trigger, content, arrow: _arrow },
		states
	} = createTooltip({
		positioning: float,
		openDelay: delay.open,
		closeDelay: delay.close,
		closeOnPointerDown: pointer,
		forceVisible: visible,
		disableHoverableContent: hover,
		portal,
		group
	});

	const sync = createSync(states);
	const { css, classer } = useUI(tooltip, _class, override);
	/** Reactive */
	$: sync.open(open, (v) => (open = v));
</script>

{#if $$slots.trigger}
	<div use:melt={$trigger} class={stringify(css.trigger)}>
		<slot name="trigger" {open} />
	</div>
{/if}

<slot name="open" {open} />

{#if open}
	<div
		use:melt={$content}
		transition:fade={transition}
		class={twJoin(strify(css.content), classer)}
	>
		{#if arrow > 0}
			<span class={stringify(css.arrow)} use:melt={$_arrow} />
		{/if}
		<slot />
	</div>
{/if}
