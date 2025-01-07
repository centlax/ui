<script lang="ts">
	/** Imports */
	import { USheet } from '$lib/components/export.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { landAside$, type XLandAside } from './aside.js';

	/** Props */
	let { open = $bindable(false), children, ...props }: XLandAside = $props();

	/** Styles */
	const ui = useUI(landAside$, props.class, props.override);
</script>

<USheet bind:open>
	<USheet.Content class="w-full bg-[--ui-bg] px-6 sm:max-w-sm sm:border-l sm:border-[--ui-border]">
		{@render children?.()}
	</USheet.Content>
</USheet>
