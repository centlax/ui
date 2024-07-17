<script lang="ts">
	/** Imports */
	import { useProps } from '$lib/composables/use/props.js';
	import { useUI } from '$lib/composables/use/ui.js';
	import { merge, stringify } from '$lib/utils/helpers.js';
	import { checkbox } from './checkbox.config.js';

	/** Props */
	const props = useProps('Checkbox');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
    export let checked = props.checked;

	/** UI */
	const { css, classer } = useUI(checkbox, _class, override);
</script>

<input {...$$restProps} bind:checked type="checkbox" class={merge(stringify(css.root), classer)} />
