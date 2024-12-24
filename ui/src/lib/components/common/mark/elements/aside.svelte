<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { markAside, type MarkAsideProps } from './aside.js';

	/** Props */
	let { items, ...props }: MarkAsideProps = $props();

	/** Styles */
	const ui = useUI(markAside, props.class, props.override);
</script>

{@render props.children?.()}
