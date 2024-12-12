<script lang="ts">
	/** Imports */

	import Logo from '$lib/blocks/logo.svelte';
	import { UIcon, USwitch } from '$lib/components/export.js';
	import { useDark } from '$lib/composables/dark.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { markHeader, type MarkHeaderProps } from './header.js';

	/** Props */
	let { items, ...props }: MarkHeaderProps = $props();
	const dark = useDark();

	/** Styles */
	const ui = useUI(markHeader, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
	<div class="max-w-8xl mx-auto">
		<div
			class="mx-4 border-b border-neutral-900/10 py-3 lg:mx-0 lg:border-0 lg:px-8 dark:border-neutral-300/10"
		>
			<div class="relative flex items-center">
				<a class="mr-3 w-[2.0625rem] flex-none overflow-hidden md:w-auto" href="/"
					><span class="sr-only">Tailwind CSS home page</span>
					<div class="flex items-center gap-1">
						<Logo />
						<span class="text-xl font-bold text-neutral-900 dark:text-white">UI</span>
					</div>
				</a>
				<div class="relative" data-headlessui-state="">
					<button
						class="dark:highlight-white/5 flex items-center space-x-2 rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-semibold leading-5 hover:bg-neutral-400/20"
						id="headlessui-menu-button-:r7:"
						type="button"
						aria-haspopup="menu"
						aria-expanded="false"
						data-headlessui-state=""
						>v3.4.13<svg width="6" height="3" class="ml-2 overflow-visible" aria-hidden="true"
							><path
								d="M0 0L3 3L6 0"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
							></path></svg
						></button
					>
				</div>
				<a
					href="/"
					class="ml-3 hidden items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-600 hover:bg-sky-400/20 xl:flex dark:text-sky-400"
					><strong class="font-semibold">Introducing Catalyst</strong><svg
						width="2"
						height="2"
						fill="currentColor"
						aria-hidden="true"
						class="ml-2 text-sky-600 dark:text-sky-400/70"
						><circle cx="1" cy="1" r="1"></circle></svg
					><span class="ml-2">A modern application UI kit for React</span><svg
						width="3"
						height="6"
						class="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
						aria-hidden="true"
						><path
							d="M0 0L3 3L0 6"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path></svg
					></a
				>
				<div class="relative ml-auto hidden items-center lg:flex">
					<nav class="text-sm font-semibold leading-6 text-neutral-700 dark:text-neutral-200">
						<ul class="flex space-x-8">
							{#if items}
								{#each items as it}
									<li>
										<a class="hover:text-sky-500 dark:hover:text-sky-400" href="/">{it.text}</a>
									</li>
								{/each}
							{/if}
						</ul>
					</nav>
					<div
						class="ml-6 flex items-center border-l border-neutral-200 pl-6 dark:border-neutral-800"
					>
						<label
							class="sr-only"
							for="headlessui-listbox-button-:rb:"
							id="headlessui-label-:ra:"
							data-headlessui-state="">Theme</label
						>
						<USwitch onclick={dark.toggle} --size="1.18rem">
							<UIcon
								class="text-primary-500 size-5 dark:size-5"
								name="i-fluent-weather-moon-16-filled dark:i-fluent-weather-sunny-16-filled"
							/>
						</USwitch>

						<a
							href="/"
							class="ml-6 block text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300"
							><span class="sr-only">Tailwind CSS on GitHub</span><svg
								viewBox="0 0 16 16"
								class="h-5 w-5"
								fill="currentColor"
								aria-hidden="true"
								><path
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
								></path></svg
							></a
						>
					</div>
				</div>
				<button
					type="button"
					class="-my-1 ml-auto flex h-8 w-8 items-center justify-center text-neutral-500 hover:text-neutral-600 lg:hidden dark:text-neutral-400 dark:hover:text-neutral-300"
					><span class="sr-only">Search</span><svg
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
						><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg
					></button
				>
				<div class="-my-1 ml-2 lg:hidden">
					<button
						type="button"
						class="flex h-8 w-8 items-center justify-center text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
						><span class="sr-only">Navigation</span><svg
							width="24"
							height="24"
							fill="none"
							aria-hidden="true"
							><path
								d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path></svg
						></button
					>
					<div
						hidden=""
						style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
					></div>
				</div>
			</div>
		</div>
		<div
			class="flex items-center border-b border-neutral-900/10 p-4 lg:hidden dark:border-neutral-50/[0.06]"
		>
			<button
				type="button"
				class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
				><span class="sr-only">Navigation</span><svg width="24" height="24"
					><path
						d="M5 6h14M5 12h14M5 18h14"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					></path></svg
				></button
			>
			<ol class="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
				<li class="flex items-center">
					Getting Started<svg
						width="3"
						height="6"
						aria-hidden="true"
						class="mx-3 overflow-visible text-neutral-400"
						><path
							d="M0 0L3 3L0 6"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						></path></svg
					>
				</li>
				<li class="truncate font-semibold text-neutral-900 dark:text-neutral-200">Editor Setup</li>
			</ol>
		</div>
	</div>
</header>
