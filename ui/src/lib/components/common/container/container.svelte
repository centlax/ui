<script lang="ts">
	/** Imports */
	import { container } from './container.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { stringify, twJoin } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Container');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let as = props.as;

	/** UI */
	const { css, classer } = useUI(container, _class, override);
</script>

<svelte:element this={as} {...$$restProps} class={twJoin(stringify(css.root), classer)}>
	<slot />
</svelte:element>
