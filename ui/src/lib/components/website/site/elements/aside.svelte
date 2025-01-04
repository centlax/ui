<script lang="ts">
	import { USheet } from '$lib/components/export.js';
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteAside, type SiteAsideProps } from './aside.js';

	/** Props */
	let { open = $bindable(false), children, ...props }: SiteAsideProps = $props();

	/** Styles */
	const ui = useUI(siteAside, props.class, props.override);
</script>

<USheet bind:open>
	<USheet.Content
		class="w-full overflow-y-auto bg-[--ui-bg] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
	>
		{@render children?.()}
	</USheet.Content>
</USheet>
