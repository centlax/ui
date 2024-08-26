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
	$: ui = {
		root: merge(stringify(css.root), classer)
	};

	/** Attrs */
	$: attrs = {
		north: { class: stringify(css.north) },
		center: { class: stringify(css.center) },
		south: { class: stringify(css.south) }
	};
</script>

<svelte:element this={as} {...$$restProps} class={ui.root}>
	<slot {attrs} />
</svelte:element>
