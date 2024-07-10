<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { colorize, merge, stringify } from '$lib/utils/index.js';
	import { badge } from './badge.config.js';

	/** Props */
	const props = useProps('Badge');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let color = props.color;
	export let dot = props.dot;

	/** UI */
	const { css, classer } = useUI(badge, _class, override);
	$: ui = {
		root: merge(stringify(css.root), classer)
	};
</script>

<span style={colorize(color)} class={ui.root}>
	{#if dot}
		<i class={stringify(css.dot)} />
	{/if}
	<slot />
</span>
