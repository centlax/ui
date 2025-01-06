<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { markAside, type MarkAsideProps } from './aside.js';
	import { USheet } from '$lib/index.js';

	/** Props */
	let { children, ...props }: MarkAsideProps = $props();

	/** Styles */
	const ui = useUI(markAside, props.class, props.override);
</script>

<USheet.Content
	class="w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
>
	{@render children?.()}
</USheet.Content>
