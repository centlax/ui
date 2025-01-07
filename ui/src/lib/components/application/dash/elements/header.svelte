<script lang="ts">
	/** Imports */
	import { type XDashHeader, dashHeader$ } from './header.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { UIcon } from '$lib/components/export.js';
	import type { ToKebab } from '$lib/types/utils.js';

	/** Props */
	let { children, ...props }: ToKebab<XDashHeader> = $props();

	/** styles */
	const ui = useUI(dashHeader$, props.class, props.override);
</script>

<header
	class="shadow-xs sticky top-0 z-40 flex h-[--ui-dash-header-height] shrink-0 items-center gap-x-6 border-b border-[--ui-border] bg-[--ui-bg] px-4 sm:px-6 lg:px-8"
>
	<button onclick={props['on-open-aside']} class="-m-2.5 p-2.5 text-neutral-700 lg:hidden">
		<UIcon
			class="size-6 text-neutral-900 dark:text-white"
			name="i-fluent-text-align-justify-24-regular"
		/>
	</button>
	{@render children?.()}
</header>

<style>
	:root {
		--ui-dash-header-height: 3.5rem;
	}
</style>
