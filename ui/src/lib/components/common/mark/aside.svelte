<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { markAside, type MarkAsideProps } from './aside.js';

	/** Props */
	let { items, ...props }: MarkAsideProps = $props();

	/** Styles */
	const ui = useUI(markAside, props.class, props.override);
</script>

<aside class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</aside>
