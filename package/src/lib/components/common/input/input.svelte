<script lang="ts">
	/** Imports */
	import { input } from './input.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Input');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let size = props.size;
	export let value = props.value;
	export let ss: any;
	/** Logic */

	/** UI */
	const { css, classer: cls } = useUI(input, _class, override);
	$: ui = {
		input: merge(stringify(css.input, css.opt.size[size]), cls)
	};
</script>

<div class={stringify(css.root)}>
	<input {...$$restProps} use:ss bind:value class={ui.input} />
	{#if $$slots.west}
		<span class={stringify(css.west)}>
			<slot name="west" />
		</span>
	{/if}
	{#if $$slots.east}
		<span class={stringify(css.east)}>
			<slot name="east" />
		</span>
	{/if}
</div>
