<script lang="ts">
	/** Imports */
	import { badge } from './badge.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { colorize, merge, stringify } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Badge');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let color = props.color;
	export let dot = props.dot;

	/** UI */
	const { css, classer } = useUI(badge, _class, override);
</script>

<span style={colorize(color)} class={merge(stringify(css.root), classer)}>
	{#if dot}
		<i class={stringify(css.dot)} />
	{/if}
	<slot />
</span>
