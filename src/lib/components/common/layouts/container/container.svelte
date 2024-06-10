<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { container } from './container.config.js';

	/** Props */
	const props = useProps('Container');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let as = props.as;

	/** UI */
	const { css, classer } = useUI(container, _class, override);
</script>

<svelte:element this={as} {...$$restProps} class={twJoin(strify(css.root), classer)}>
	<slot />
</svelte:element>
