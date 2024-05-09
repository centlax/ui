<script lang="ts">
	import { UInput, UButton, UColorMode } from '$lib/index.js';
	let hideSideBar = false;
</script>

<header
	class="sticky top-0 z-50 bg-white dark:bg-gray-900 px-6 lg:divide-y border-b border-gray-200/80 dark:border-gray-800/80"
>
	<div class="relative h-14 flex gap-x-4 items-center justify-between">
		<div class="relative w-full sm:max-w-xs">
			{#if hideSideBar}
				<div class="flex flex-shrink-0 items-center">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
				</div>
			{/if}
			<label for="search" class="sr-only">Search serialized items</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						class="size-4 text-gray-600 dark:text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<UInput placeholder="Search for serialized items" icon="i-fluent-search-20-regular" />
			</div>
		</div>

		<div class="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
			<button
				type="button"
				class="relative flex items-center rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500"
			>
				<span class="size-8 flex-shrink-0 i-fluent-sparkle-circle-20-regular text-white" />
			</button>
		</div>

		<div class="flex items-center gap-x-3">
			<UColorMode />
			<button
				type="button"
				class="relative flex items-center rounded-full ring-inset text-gray-600 dark:text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
			>
				<span class="size-8 flex-shrink-0 i-fluent-alert-20-regular"> </span>
			</button>

			<button
				class="relative flex items-center rounded-full ring-inset focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
			>
				<img
					class="size-[2rem] rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</button>
		</div>
	</div>
</header>
