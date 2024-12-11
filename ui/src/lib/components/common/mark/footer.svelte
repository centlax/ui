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
	<div class="mb-3 flex items-center font-semibold text-neutral-700 dark:text-neutral-200">
		<a
			class="group flex items-center hover:text-neutral-900 dark:hover:text-white"
			href="/docs/installation"
			><svg
				viewBox="0 0 3 6"
				class="mr-3 h-1.5 w-auto overflow-visible text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
				><path
					d="M3 0L0 3L3 6"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path></svg
			>Installation</a
		><a
			class="group ml-auto flex items-center hover:text-neutral-900 dark:hover:text-white"
			href="/docs/using-with-preprocessors"
			>Using with Preprocessors<svg
				viewBox="0 0 3 6"
				class="ml-3 h-1.5 w-auto overflow-visible text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
				><path
					d="M0 0L3 3L0 6"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path></svg
			></a
		>
	</div>
	<div
		class="justify-between border-t border-neutral-200 pb-10 pt-10 text-neutral-500 sm:flex dark:border-neutral-200/5"
	>
		<div class="mb-6 sm:mb-0 sm:flex">
			<p>Copyright © 2024 Tailwind Labs Inc.</p>
			<p class="sm:ml-4 sm:border-l sm:border-neutral-200 sm:pl-4 dark:sm:border-neutral-200/5">
				<a class="hover:text-neutral-900 dark:hover:text-neutral-400" href="/brand"
					>Trademark Policy</a
				>
			</p>
		</div>
		<a
			class="hover:text-neutral-900 dark:hover:text-neutral-400"
			href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/editor-setup.mdx"
			>Edit this page on GitHub</a
		>
	</div>
</footer>
