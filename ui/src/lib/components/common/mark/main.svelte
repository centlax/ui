<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { markMain, type MarkMainProps } from './main.js';

	/** Props */
	let { ...props }: MarkMainProps = $props();

	/** Styles */
	const ui = useUI(markMain, props.class, props.override);
</script>

<main class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</main>
