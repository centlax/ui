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

	/** UI */
	const { css, classer } = useUI(input, _class, override);
	$: ui = {
		input: merge(stringify(css.input, css.opt.size[size]), classer)
	};
	$: attrs = {
		west: { class: stringify(css.west), 'data-west': 'true' },
		east: { class: stringify(css.east), 'data-east': 'true' }
	};
</script>

<div class={stringify(css.root)}>
	<input {...$$restProps} bind:value class={ui.input} />
	<slot {attrs} />
</div>
