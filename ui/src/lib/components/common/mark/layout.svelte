<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { markLayout, type MarkLayoutProps } from './layout.js';

	/** Props */
	let { as = 'div', ...props }: MarkLayoutProps = $props();

	/** Styles */
	const ui = useUI(markLayout, props.class, props.override);
</script>

<svelte:element this={as} class={cn(st(ui.root), ui.class)}>
	<div
		class="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden"
	>
		<div class="flex w-[100rem] flex-none justify-end">
			<picture
				><source
					srcset="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
					type="image/avif"
				/><img
					src="https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png"
					alt=""
					class="w-[71.75rem] max-w-none flex-none dark:hidden"
					decoding="async"
				/></picture
			><picture
				><source
					srcset="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
					type="image/avif"
				/><img
					src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
					alt=""
					class="hidden w-[90rem] max-w-none flex-none dark:block"
					decoding="async"
				/></picture
			>
		</div>
	</div>
	{@render props.children?.()}
</svelte:element>
