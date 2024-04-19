<script lang="ts">
	// imports
	import { UButton, UFlow, UIcon, ULogo } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';
	import { browser } from '$app/environment';
	const items = [
		{ label: 'Home', href: '/', icon: 'i-fluent-home-24-regular' },
		{ label: 'Deployments', href: '/', icon: 'i-fluent-drawer-24-regular' },
		{ label: 'Activity', href: '/', icon: 'i-fluent-archive-24-regular' },
		{ label: 'Domains', href: '/', icon: 'i-fluent-globe-24-regular' },
		{ label: 'Usage', href: '/', icon: 'i-fluent-data-usage-24-regular' },
		{ label: 'Add', href: '/', icon: 'i-fluent-add-square-24-regular' }
	];

	const second_items = [
		{ label: 'Planetaria', href: '/', icon: 'P' },
		{ label: 'Protocol', href: '/', icon: 'P' },
		{ label: 'Centlax Labs', href: '/', icon: 'C' }
	];

	// congig

	// reactive
	$: min = false;

	const css = {
		wrapper: `h-full flex grow flex-col  overflow-y-auto bg-white dark:bg-gray-950  ring-1 ring-black/5 dark:ring-white/5 transition-all duration-300`,
		logo: 'flex h-16 shrink-0 items-center',
		nav: {
			base: 'relative py-5 h-full flex justify-between flex-col gap-y-6 ',
			ul: '-mx-2',
			li: {
				base: 'rounded-md text-gray-500 dark:text-gray-400 p-2',
				min: 'hover:text-primary-600 dark:hover:text-primary-500',
				max: 'dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-900'
			},
			link: `group flex gap-x-3 text-sm leading-6 font-semibold`
		},
		icon: {
			min: 'hover:bg-primary-500 transition-all size-8 hover:scale-110 pb-[2rem] mx-auto ',
			max: 'size-7 '
		},
		second: {
			title: 'text-xs font-semibold leading-6 text-gray-400',
			li: '',
			ancor: `text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`,
			icon: `flex shrink-0 items-center justify-center rounded-md border border-gray-700 bg-gray-200 dark:bg-gray-800 text-sm font-medium text-gray-400 group-hover:text-white`,
			label: 'truncate'
		}
	};
</script>

<div id="slider" class="{css.wrapper} {min ? 'px-3' : 'pr-[5rem] px-6'}">
	<div class="{css.logo} ">
		<ULogo on:dblclick={() => (min = !min)} class="-ml-1 {min && 'mx-auto'}" />
	</div>
	<nav class={css.nav.base}>
		<div class="space-y-6">
			<ul role="list" class={css.nav.ul}>
				{#each items as item}
					<li class="{css.nav.li.base} {min ? css.nav.li.min : css.nav.li.max}">
						<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
						<a href={item.href} class={css.nav.link}>
							<UIcon name="{item.icon} {min ? css.icon.min : css.icon.max}" />
							<span class={min ? 'hidden' : 'select-none my-auto'}>
								{item.label}
							</span>
						</a>
					</li>
				{/each}
			</ul>

			<div>
				<div class="{css.second.title} {min && 'hidden'}">Your teams</div>
				<ul role="list" class="-mx-2 space-y-1">
					{#each second_items as item}
						<li>
							<a href={item.href} class={css.second.ancor}>
								<span class="{css.second.icon} {min ? 'size-7 mx-auto' : 'size-6'}">
									{item.icon}
								</span>
								<span class="{css.second.label} {min && ' hidden'}">{item.label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class=" -mx-2">
			<ul role="list" class="space-y-3">
				<li class="{css.nav.li.base} {min ? css.nav.li.min : css.nav.li.max}">
					<a href="/" class={css.nav.link}>
						<UIcon name="i-fluent-settings-24-regular {min ? css.icon.min : css.icon.max}" />
						<span class={min ? 'hidden' : 'select-none my-auto'}> Settings </span>
					</a>
				</li>
				<li class="{css.nav.li.base} {min ? css.nav.li.min : css.nav.li.max}">
					<a href="/" class={css.nav.link} on:click={() => (min = !min)}>
						<UIcon
							name="i-fluent-chevron-double-left-20-filled {min
								? twJoin(css.icon.min, 'rotate-[180deg] duration-300')
								: css.icon.max}"
						/>
						<span class={min ? 'hidden' : 'select-none my-auto'}> Minimize </span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</div>
