<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { markHeader, type MarkHeaderProps } from './header.js';

	/** Props */
	let { children, ...props }: MarkHeaderProps = $props();

	/** Styles  */
	const ui = useUI(markHeader, props.class, props.override);
</script>

<header>
	{@render children?.()}
</header>
