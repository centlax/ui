<script lang="ts">
	/** Imports */
	import { card } from './card.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { strify, twJoin } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Card');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let as = props.as;

	/** Logic */
	$: is = {
		north: $$slots.north,
		center: $$slots.default,
		south: $$slots.south
	};

	/** UI */
	const { css, classer } = useUI(card, _class, override);
</script>

<svelte:element this={as} {...$$restProps} class={twJoin(strify(css.root), classer)}>
	{#if is.north}
		<div class={strify(css.north)}>
			<slot name="north" />
		</div>
	{/if}

	{#if is.center}
		<div class={strify(css.center)}>
			<slot />
		</div>
	{/if}

	{#if is.south}
		<div class={strify(css.south)}>
			<slot name="south" />
		</div>
	{/if}
</svelte:element>
