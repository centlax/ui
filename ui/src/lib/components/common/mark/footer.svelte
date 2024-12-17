<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { markFooter, type MarkFooterProps } from './footer.js';

	/** Props */
	let { ...props }: MarkFooterProps = $props();

	/** Styles */
	const ui = useUI(markFooter, props.class, props.override);
</script>

<footer class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</footer>
