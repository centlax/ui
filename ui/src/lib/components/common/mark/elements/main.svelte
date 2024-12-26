<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { markMain, type MarkMainProps } from './main.js';

	/** Props */
	let { ...props }: MarkMainProps = $props();

	/** Styles */
	const ui = useUI(markMain, props.class, props.override);
</script>

{@render props.children?.()}
