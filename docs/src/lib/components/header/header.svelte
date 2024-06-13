<script lang="ts">
	import { UContainer, useDark } from '@centlax/ui';
	import Category from './category.svelte';

	const dark = useDark();
</script>

<div
	class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 dark:border-gray-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
>
	<UContainer>
		<div class="max-w-8xl mx-auto">
			<div class="py-4 border-b border-gray-900/10 lg:border-0 dark:border-gray-300/10">
				<div class="relative flex items-center">
					<a
						class="flex items-center font-semibold gap-x-0.5 text-lg overflow-hidden md:w-auto"
						href="/"
						><span class="sr-only">Centlax UI</span>
						<span class="i-fluent-target-arrow-16-filled rotate-45 size-10" />
						<span>UI</span>
					</a>
					<div class="relative ml-4">
						<button
							class="text-xs leading-5 font-semibold bg-gray-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-400/20 dark:highlight-white/5"
							id="headlessui-menu-button-:Rqcr6:"
							type="button"
							aria-haspopup="menu"
							aria-expanded="false"
							>v0.1.0<svg width="6" height="3" class="ml-2 overflow-visible" aria-hidden="true"
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
						href="/components/button"
						class="ml-3 text-xs leading-5 font-medium text-primary-600 dark:text-primary-400 bg-primary-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-primary-400/20"
						><strong class="font-semibold">Introducing Centlax UI</strong><svg
							width="2"
							height="2"
							fill="currentColor"
							aria-hidden="true"
							class="ml-2 text-primary-600 dark:text-primary-400/70"
							><circle cx="1" cy="1" r="1"></circle></svg
						><span class="ml-2">A modern UI Library for Svelte kit</span><svg
							width="3"
							height="6"
							class="ml-3 overflow-visible text-primary-300 dark:text-primary-400"
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
					<div class="relative hidden lg:flex items-center ml-auto">
						<nav class="text-sm leading-6 font-semibold text-gray-700 dark:text-gray-200">
							<Category />
						</nav>
						<div class="flex items-center border-l border-gray-200 ml-6 pl-6 dark:border-gray-800">
							<label
								class="sr-only"
								for="headlessui-listbox-button-:R2lkcr6:"
								id="headlessui-label-:R1lkcr6:"
								data-headlessui-state="">Theme</label
							>
							<button class="flex items-center" on:click={dark.toggle} type="button">
								<span
									class="i-fluent-weather-sunny-16-filled dark:i-fluent-weather-moon-16-filled"
								/>
							</button><a href="https://github.com/centlax/ui" class="ml-6 block"
								><span class="sr-only">Tailwind CSS on GitHub</span><svg
									viewBox="0 0 16 16"
									class="w-5 h-5"
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
						class="ml-auto text-gray-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-gray-600 lg:hidden dark:text-gray-400 dark:hover:text-gray-300"
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
					<div class="ml-2 -my-1 lg:hidden">
						<button
							type="button"
							class="text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
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
							style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"
						></div>
					</div>
				</div>
			</div>
			<div
				class="flex items-center p-4 border-b border-gray-900/10 lg:hidden dark:border-gray-50/[0.06]"
			>
				<button
					type="button"
					class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
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
				<ol class="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
					<li class="flex items-center">
						Getting Started<svg
							width="3"
							height="6"
							aria-hidden="true"
							class="mx-3 overflow-visible text-gray-400"
							><path
								d="M0 0L3 3L0 6"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
							></path></svg
						>
					</li>
					<li class="font-semibold text-gray-900 truncate dark:text-gray-200">Installation</li>
				</ol>
			</div>
		</div>
	</UContainer>
</div>
