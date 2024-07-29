<script lang="ts">
	/** Imports */
	import { createSync, createTooltip, melt } from '@melt-ui/svelte';
	import { tooltip } from './tooltip.config.js';
	import { strify, stringify, twJoin } from '$lib/utils/index.js';
	import { useProps, useUI } from '$lib/import.js';
	import { flyAndScale } from '$lib/theme/motion/fly-scale.js';

	/** Props */
	const props = useProps('Tooltip');
	let _class = props.class;
	export { _class as class };
	export let value = props.value;
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
		value = !value;
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
	$: sync.open(value, (v) => (value = v));
</script>

<slot name="trigger" trigger={$trigger} />
<slot name="open" open={toggle} />

{#if value}
	<div
		use:melt={$content}
		transition:flyAndScale={transition}
		class={twJoin(strify(css.root), classer)}
	>
		{#if arrow > 0}
			<span class={stringify(css.arrow)} use:melt={$_arrow} />
		{/if}
		<slot close={toggle} />
	</div>
{/if}
