<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { markAside, type MarkAsideProps } from './aside.js';
	import { UMarkAsideItem } from '$lib/index.js';

	/** Props */
	let { items, ...props }: MarkAsideProps = $props();

	/** Styles */
	const ui = useUI(markAside, props.class, props.override);
</script>

<aside class={cn(st(ui.root), ui.class)}>
	<nav id="nav" class="relative pb-20 lg:text-sm lg:leading-6">
		<div class="pointer-events-none sticky top-0 -ml-0.5">
			<div class="h-10 bg-white dark:bg-neutral-900"></div>
			<div class="pointer-events-auto relative bg-white dark:bg-neutral-900">
				<button
					type="button"
					class="dark:highlight-white/5 hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-neutral-400 shadow-sm ring-1 ring-neutral-900/10 hover:ring-neutral-300 lg:flex dark:bg-neutral-800 dark:hover:bg-neutral-700"
					><svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none"
						><path
							d="m19 19-3.5-3.5"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path><circle
							cx="11"
							cy="11"
							r="6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></circle></svg
					>Quick search...<span class="ml-auto flex-none pl-3 text-xs font-semibold">⌘K</span
					></button
				>
			</div>
			<div class="h-8 bg-gradient-to-b from-white dark:from-neutral-900"></div>
		</div>
		<ul>
			<li>
				<a
					class="group mb-4 flex items-center font-semibold text-sky-500 lg:text-sm lg:leading-6 dark:text-sky-400"
					href="/"
					><div
						class="dark:group-hover:highlight-white/10 dark:highlight-white/10 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-sky-200 group-hover:ring-neutral-900/10 dark:bg-sky-500 dark:shadow-none dark:ring-0 dark:group-hover:bg-sky-500 dark:group-hover:shadow-none"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
								class="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"
							></path><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
								class="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"
							></path></svg
						>
					</div>
					Documentation</a
				>
			</li>
			<li>
				<a
					class="group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 lg:text-sm lg:leading-6 dark:text-neutral-400 dark:hover:text-neutral-300"
					href="https://tailwindui.com/components?ref=sidebar"
					><div
						class="dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-indigo-200 group-hover:ring-neutral-900/10 dark:bg-neutral-800 dark:shadow-none dark:ring-0 dark:group-hover:bg-indigo-500 dark:group-hover:shadow-none"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
								class="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-neutral-400"
							></path><path
								d="m6 9 6 3v7l-6-3V9Z"
								class="fill-indigo-300 group-hover:fill-indigo-400 dark:fill-neutral-500 dark:group-hover:fill-indigo-300"
							></path><path
								d="m18 9-6 3v7l6-3V9Z"
								class="fill-indigo-400 group-hover:fill-indigo-500 dark:fill-neutral-600 dark:group-hover:fill-indigo-400"
							></path></svg
						>
					</div>
					Components</a
				>
			</li>
			<li>
				<a
					class="group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 lg:text-sm lg:leading-6 dark:text-neutral-400 dark:hover:text-neutral-300"
					href="https://tailwindui.com/templates?ref=sidebar"
					><div
						class="dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-fuchsia-200 group-hover:ring-neutral-900/10 dark:bg-neutral-800 dark:shadow-none dark:ring-0 dark:group-hover:bg-fuchsia-600 dark:group-hover:shadow-none"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z"
								fill="#E879F9"
								class="fill-fuchsia-400 group-hover:fill-fuchsia-500 dark:fill-neutral-400 dark:group-hover:fill-fuchsia-300"
							></path><path
								d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z"
								fill="#F0ABFC"
								class="fill-fuchsia-300 group-hover:fill-fuchsia-400 dark:fill-neutral-500"
							></path></svg
						>
					</div>
					Templates</a
				>
			</li>
			<li>
				<a
					class="group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 lg:text-sm lg:leading-6 dark:text-neutral-400 dark:hover:text-neutral-300"
					href="https://www.youtube.com/tailwindlabs"
					><div
						class="dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-pink-200 group-hover:ring-neutral-900/10 dark:bg-neutral-800 dark:shadow-none dark:ring-0 dark:group-hover:bg-pink-500 dark:group-hover:shadow-none"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
								class="fill-pink-400 group-hover:fill-pink-500 dark:fill-neutral-600 dark:group-hover:fill-pink-300"
							></path><path
								d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z"
								class="fill-pink-50 group-hover:fill-pink-100 dark:fill-neutral-400 dark:group-hover:fill-white"
							></path></svg
						>
					</div>
					Screencasts</a
				>
			</li>
			<li>
				<a
					class="group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 lg:text-sm lg:leading-6 dark:text-neutral-400 dark:hover:text-neutral-300"
					href="https://play.tailwindcss.com"
					><div
						class="dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-blue-200 group-hover:ring-neutral-900/10 dark:bg-neutral-800 dark:shadow-none dark:ring-0 dark:group-hover:bg-blue-500 dark:group-hover:shadow-none"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								d="M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z"
								class="fill-blue-400 group-hover:fill-blue-500 dark:fill-neutral-600 dark:group-hover:fill-blue-400"
							></path><path
								d="M10.25 9.75 7.75 12l2.5 2.25"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="stroke-blue-50 dark:stroke-neutral-400 dark:group-hover:stroke-white"
							></path><path
								d="m13.75 9.75 2.5 2.25-2.5 2.25"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="stroke-blue-200 dark:stroke-neutral-400 dark:group-hover:stroke-white"
							></path></svg
						>
					</div>
					Playground</a
				>
			</li>
			<li>
				<a
					class="group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 lg:text-sm lg:leading-6 dark:text-neutral-400 dark:hover:text-neutral-300"
					href="/resources"
					><div
						class="dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-purple-200 group-hover:ring-neutral-900/10 dark:bg-neutral-800 dark:shadow-none dark:ring-0 dark:group-hover:bg-purple-400 dark:group-hover:shadow-none"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
								class="fill-purple-400 group-hover:fill-purple-500 dark:fill-neutral-600 dark:group-hover:fill-purple-300"
							></path><path
								d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
								class="fill-purple-200 group-hover:fill-purple-300 dark:fill-neutral-400 dark:group-hover:fill-white"
							></path><path
								d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
								class="fill-purple-400 group-hover:fill-purple-500 dark:fill-neutral-600 dark:group-hover:fill-purple-300"
							></path></svg
						>
					</div>
					<span class="">Resources</span></a
				>
			</li>
			<li>
				<a
					class="group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 lg:text-sm lg:leading-6 dark:text-neutral-400 dark:hover:text-neutral-300"
					href="https://github.com/tailwindlabs/tailwindcss/discussions"
					><div
						class="dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-violet-200 group-hover:ring-neutral-900/10 dark:bg-neutral-800 dark:shadow-none dark:ring-0 dark:group-hover:bg-violet-500 dark:group-hover:shadow-none"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z"
								class="fill-violet-400 group-hover:fill-violet-500 dark:fill-neutral-600 dark:group-hover:fill-violet-300"
							></path><circle
								cx="12"
								cy="11"
								r="1"
								class="fill-white dark:fill-neutral-400 dark:group-hover:fill-white"
							></circle><circle
								cx="9"
								cy="11"
								r="1"
								class="fill-violet-200 dark:fill-neutral-400 dark:group-hover:fill-white"
							></circle><circle
								cx="15"
								cy="11"
								r="1"
								class="fill-violet-200 dark:fill-neutral-400 dark:group-hover:fill-white"
							></circle></svg
						>
					</div>
					Community</a
				>
			</li>
			{#each items as it}
				<UMarkAsideItem item={it} />
			{/each}
		</ul>
	</nav>
</aside>
