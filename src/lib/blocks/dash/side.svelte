<script lang="ts">
	import { UIcon, ULogo } from '$lib/index.js';
	import { slide } from 'svelte/transition';
	$: min = false;
	const items = [
		{ label: 'Home', href: '/', icon: 'i-fluent-home-24-regular' },
		{ label: 'Deployments', href: '/', icon: 'i-fluent-drawer-24-regular' },
		{ label: 'Activity', href: '/', icon: 'i-fluent-archive-24-regular' },
		{ label: 'Domains', href: '/', icon: 'i-fluent-globe-24-regular' },
		{ label: 'Usage', href: '/', icon: 'i-fluent-data-usage-24-regular' },
		{ label: 'Settings', href: '/', icon: 'i-fluent-settings-24-regular' }
	];

	const css = {
		wrapper: `flex grow h-full flex-col gap-y-5 overflow-y-auto bg-gray-50 dark:bg-gray-950 ring-1 ring-black/5 dark:ring-white/5 transition-all duration-300`,
		logo: 'flex h-16 shrink-0 items-center',
		nav: {
			base: 'flex flex-1 flex-col',
			ul: 'flex flex-1 flex-col gap-y-7',
			li: {
				base: 'rounded-md text-gray-600 dark:text-gray-500 p-2',
				min: 'hover:text-primary-600 dark:hover:text-primary-500',
				max: 'dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-900'
			},
			link: `group flex gap-x-3 text-sm leading-6 font-semibold`
		},
		icon: {
			min: 'hover:bg-primary-500 transition-all size-8 hover:scale-110 pb-[2rem] mx-auto fill-red-600',
			max: 'size-7 '
		}
	};
</script>

<div class="{css.wrapper} {min ? 'px-3' : 'pr-[5rem] px-6'}">
	<div class={css.logo}>
		<ULogo on:dblclick={() => (min = !min)} class="-ml-1" />
	</div>
	<nav class={css.nav.base}>
		<ul role="list" class={css.nav.ul}>
			<li>
				<ul role="list" class="-mx-2 space-y-1">
					{#each items as item}
						<li class="{css.nav.li.base} {min ? css.nav.li.min : css.nav.li.max}">
							<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
							<a href={item.href} class="{css.nav.link}">
								<UIcon name="{item.icon} {min ? css.icon.min : css.icon.max}" />
								<span class={min ? 'hidden' : 'select-none my-auto'}>
									{item.label}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</li>
			{#if !min}
				<li>
					<div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
					<ul role="list" class="-mx-2 mt-2 space-y-1">
						<li>
							<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
							<a
								href="/"
								class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
							>
								<span
									class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
									>P</span
								>
								<span class="truncate">Planetaria</span>
							</a>
						</li>
						<li>
							<a
								href="/"
								class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
							>
								<span
									class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
									>P</span
								>
								<span class="truncate">Protocol</span>
							</a>
						</li>
						<li>
							<a
								href="/"
								class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
							>
								<span
									class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
									>T</span
								>
								<span class="truncate">Tailwind Labs</span>
							</a>
						</li>
					</ul>
				</li>
				<li class="-mx-6 mt-auto">
					<a
						href="/"
						class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
					>
						<img
							class="h-8 w-8 rounded-full bg-gray-800"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<span class="sr-only">Your profile</span>
						<span aria-hidden="true">Tom Cook</span>
					</a>
				</li>
			{/if}
		</ul>
	</nav>
</div>
