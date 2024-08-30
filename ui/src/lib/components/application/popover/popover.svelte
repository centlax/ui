<script lang="ts">
	/** Imports */
	import { createPopover, createSync, melt } from '@melt-ui/svelte';
	import { popover } from './popover.config.js';
	import { stringify, twJoin } from '$lib/utils/index.js';
	import { useProps, useUI } from '$lib/import.js';
	import { flyAndScale } from '$lib/theme/transition/fly-scale.js';

	/** Props */
	const props = useProps('Popover');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let value = props.value;
	export let float = props.float;
	export let scroll = props.scroll;
	export let overlay = props.overlay;
	export let portal = props.portal;
	export let transition = props.transition;
	export function toggle() {
		value = !value;
	}
	/** --arrow-size: 8px */

	/** Config */
	const {
		elements: { trigger, content, overlay: _overlay, arrow },
		states
	} = createPopover({
		preventScroll: scroll,
		positioning: float,
		portal
	});
	const sync = createSync(states);
	$: sync.open(value, (v) => (value = v));

	/** UI */
	const { css, classer } = useUI(popover, _class, override);
</script>

<slot name="trigger" trigger={$trigger} />
<slot name="open" open={toggle} />
{#if value}
	{#if overlay}
		<div use:melt={$_overlay} class={stringify(css.overlay)} />
	{/if}
	<div
		{...$$restProps}
		use:melt={$content}
		transition:flyAndScale={transition}
		class={twJoin(stringify(css.root), classer)}
	>
		<slot name="arrow" arrow={$arrow} />
		<slot close={toggle} />
	</div>
{/if}
