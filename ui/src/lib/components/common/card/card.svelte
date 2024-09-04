<script lang="ts">
	/** Imports */
	import { card } from './card.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Card');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let as = props.as;

	/** UI */
	const { css, classer } = useUI(card, _class, override);
</script>

<svelte:element this={as} {...$$restProps} class={merge(stringify(css.root), classer)}>
	{#if $$slots.north}
		<div class={stringify(css.north)}>
			<slot name="north" />
		</div>
	{/if}
	{#if $$slots.default}
		<div class={stringify(css.center)}>
			<slot />
		</div>
	{/if}
	{#if $$slots.south}
		<div class={stringify(css.south)}>
			<slot name="south" />
		</div>
	{/if}
</svelte:element>
