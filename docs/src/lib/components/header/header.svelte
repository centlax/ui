<script lang="ts">
	import { UContainer, useDark } from '@centlax/ui';
	import Category from './category.svelte';
	import { page } from '$app/stores';
	import { twJoin } from 'tailwind-merge';

	const dark = useDark();

	$: is = {
		home: $page.url.pathname === '/'
	};
	$: ui = {
		border: {
			outer: twJoin(
				!is.home && 'lg:border-b lg:border-gray-900/10 dark:border-gray-50/[0.06] bg-white/95'
			),
			inner: twJoin(!is.home && 'border-b border-gray-900/10 lg:border-0 dark:border-gray-300/10')
		}
	};

	const links = [{ label: 'Docs', href: '/start' }];
</script>

<div
	class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 supports-backdrop-blur:bg-white/60 dark:bg-transparent {ui
		.border.outer}"
>
	<UContainer>
		<div class="py-4 relative flex justify-center items-center {ui.border.inner}">
			<div class="flex items-center">
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
			</div>

			<div class="relative hidden lg:flex items-center ml-auto">
				{#if !is.home}
					<Category />
				{/if}
			</div>

			<div class="relative hidden lg:flex items-center ml-auto">
				<nav class="text-sm leading-6 font-semibold text-gray-700 dark:text-gray-200">
					<ul class="flex space-x-8">
						{#each links as link}
							<li>
								<a class="hover:text-sky-500 dark:hover:text-sky-400" href={link.href}
									>{link.label}</a
								>
							</li>
						{/each}
					</ul>
				</nav>

				<div class="flex items-center border-l border-gray-200 ml-6 pl-6 dark:border-gray-800">
					<label
						class="sr-only"
						for="headlessui-listbox-button-:R2lkcr6:"
						id="headlessui-label-:R1lkcr6:"
						data-headlessui-state="">Theme</label
					>
					<button class="flex items-center" on:click={dark.toggle} type="button">
						<span class="i-fluent-weather-sunny-16-filled dark:i-fluent-weather-moon-16-filled" />
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
		</div>
	</UContainer>
</div>
