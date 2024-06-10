<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { card } from './card.config.js';

	/** Props */
	const props = useProps('Card');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let as = props.as;

	/** UI */
	const { css, classer } = useUI(card, _class, override);
</script>

<svelte:element this={as} {...$$restProps} class={twJoin(strify(css.root), classer)}>
	<div class={strify(css.north)}>
		<slot name="north" />
	</div>
	<div class={strify(css.center)}>
		<slot />
	</div>
	<div class={strify(css.south)}>
		<slot name="south" />
	</div>
</svelte:element>
