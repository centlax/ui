<script lang="ts">
	/**  Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { createPopover, createSync, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { popover } from './popover.config.js';

	/** Props */
	const props = useProps('Popover');
	let _class = props.class;
	export { _class as class };
	export let open = props.open;
	export let override = props.override;
	export let float = props.float;
	export let scroll = props.scroll;
	export let overlay = props.overlay;
	export let visible = props.visible;
	export let trap = props.trap;
	export let arrow = props.arrow;
	export let pointer = props.pointer;
	export let portal = props.portal;
	export let transition = props.transition;
	export function toggle() {
		open = !open;
	}

	/** Config */
	const { css, classer } = useUI(popover, _class, override);
	const {
		elements: { trigger, content, overlay: _overlay, arrow: _arrow },
		states
	} = createPopover({
		forceVisible: visible,
		preventScroll: scroll,
		arrowSize: arrow,
		disableFocusTrap: trap,
		closeOnOutsideClick: pointer,
		positioning: float,
		portal
	});
	const sync = createSync(states);

	/** React */
	$: sync.open(open, (v) => (open = v));
</script>

{#if $$slots.trigger}
	<div use:melt={$trigger} class={strify(css.trigger)}>
		<slot name="trigger" />
	</div>
{/if}

<slot name="open" />

{#if open}
	{#if overlay}
		<div use:melt={$_overlay} class={strify(css.overlay)} />
	{/if}
	<div
		use:melt={$content}
		transition:fade={transition}
		class={twJoin(strify(css.content), classer)}
	>
		{#if arrow > 0}
			<span class={strify(css.arrow)} use:melt={$_arrow} />
		{/if}
		<slot />
	</div>
{/if}
