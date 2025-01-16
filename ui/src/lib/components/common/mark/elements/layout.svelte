<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { markLayout, type MarkLayoutProps } from './layout.js';

	/** Props */
	let { children, as = 'div', ...props }: MarkLayoutProps = $props();

	/** Styles */
	const ui = useUI(markLayout, props.class, props.override);
</script>

<div class="relative h-screen bg-white text-neutral-500 antialiased dark:bg-neutral-900 dark:text-neutral-400">
	{@render children?.()}
</div>
