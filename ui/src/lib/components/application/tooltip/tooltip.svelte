<script lang="ts">
	/** Imports */
	import { createSync, createTooltip, melt } from '@melt-ui/svelte';
	import { tooltip } from './tooltip.config.js';
	import { stringify, twJoin } from '$lib/utils/index.js';
	import { useProps, useUI } from '$lib/import.js';
	import { flyAndScale } from '$lib/theme/transition/fly-scale.js';

	/** Props */
	const props = useProps('Tooltip');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let value = props.value;
	export let float = props.float;
	export let transition = props.transition;
	export let portal = props.portal;
	export let delay = props.delay;
	export function toggle() {
		value = !value;
	}
	/** arrow-size: 8px */

	/** Config */
	const {
		elements: { trigger, content, arrow },
		states
	} = createTooltip({
		positioning: float,
		openDelay: delay.open,
		closeDelay: delay.close,
		portal
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
		{...$$restProps}
		use:melt={$content}
		transition:flyAndScale={transition}
		class={twJoin(stringify(css.root), classer)}
	>
		<slot name="arrow" arrow={$arrow} />
		<slot close={toggle} />
	</div>
{/if}
