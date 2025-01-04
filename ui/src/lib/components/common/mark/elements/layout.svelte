<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { markLayout, type MarkLayoutProps } from './layout.js';

	/** Props */
	let { children, as = 'div', ...props }: MarkLayoutProps = $props();

	/** Styles */
	const ui = useUI(markLayout, props.class, props.override);
</script>
