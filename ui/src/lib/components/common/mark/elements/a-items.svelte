<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { markAsideItem, type MarkAsideItemProps } from './a-items.js';

	/** Props */
	let { children, mode = 'pine', ...props }: MarkAsideItemProps = $props();

	/** Styles */
	const ui = useUI(markAsideItem, props.class, props.override);
</script>

<li class="mt-12 lg:mt-8">
	<h5 class="mb-8 font-semibold text-slate-900 lg:mb-3 dark:text-slate-200">
		Getting Started
	</h5>
	<ul class="space-y-6 border-l border-slate-100 lg:space-y-2 dark:border-slate-800">
		<li data-active="true">
			<a
				class="-ml-px block border-l border-current pl-4 font-semibold text-sky-500 dark:text-sky-400"
				href="/docs/installation">Installation</a
			>
		</li>
		<li>
			<a
				class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
				href="/docs/editor-setup">Editor Setup</a
			>
		</li>
		<li>
			<a
				class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
				href="/docs/using-with-preprocessors">Using with Preprocessors</a
			>
		</li>
		<li>
			<a
				class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
				href="/docs/optimizing-for-production">Optimizing for Production</a
			>
		</li>
		<li>
			<a
				class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
				href="/docs/browser-support">Browser Support</a
			>
		</li>
		<li>
			<a
				class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
				href="/docs/upgrade-guide">Upgrade Guide</a
			>
		</li>
	</ul>
</li>