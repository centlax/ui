<script lang="ts">
	import Accordion from '$lib/components/elements/accordion/accordion.svelte';
	import { UIcon } from '$lib/index.js';
	const links = [
		{
			label: 'Dashboard',
			icon: 'i-fluent-home-24-regular',
			badge: 5,
			now: true
		},
		{
			label: 'Team',
			icon: 'i-fluent-people-team-24-regular',
			now: false
		},
		{
			label: 'Projects',
			icon: 'i-fluent-document-folder-24-regular',
			badge: 12,
			now: false
		},
		{
			label: 'Calendar',
			icon: 'i-fluent-calendar-24-regular',
			badge: '20+',
			now: false
		},
		
	];
	const teams = [
		{
			kbd: 'H',
			label: 'Heroicons'
		},
		{
			kbd: 'T',
			label: 'Tailwind Labs'
		},		{
			kbd: 'W',
			label: 'Workcation'
		}

	]
	const css = {
		badge:
			'ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700',
		inactive:
			'text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
		active:
			'bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
			kbd: 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'
	};
</script>

<nav class="flex flex-1 flex-col">
	<ul role="list" class="flex flex-1 flex-col gap-y-7">
		<li>
			<ul role="list" class="-mx-2 space-y-1">
				{#each links as link}
					<li>
						<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
						<a href="/" class={link.now ? css.active : css.inactive}>
							<UIcon name={link.icon} class="size-7" />
							{link.label}
							<span class={link.badge ? css.badge : 'hidden'} aria-hidden="true">{link.badge}</span>
						</a>
					</li>
				{/each}
			</ul>
		</li>
		<li>
			<div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
			<ul role="list" class="-mx-2 mt-2 space-y-1">
				{#each teams as team}
				<li>
					<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
					<a
						href="/"
						class={css.inactive}
					>
						<span
							class={css.kbd}
							>{team.kbd}</span
						>
						<span class="truncate">{team.label}</span>
					</a>
				</li>
				{/each}
			</ul>
		</li>
	</ul>
</nav>
