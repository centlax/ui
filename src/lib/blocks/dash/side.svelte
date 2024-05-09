<script lang="ts">
	import { twJoin } from 'tailwind-merge';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	// Props
	export let links: any[] = [];
	const css = {
		icon: {
			base: 'size-7 shrink-0',
			maxi: '',
			mini: 'data-[maxi=false]:hidden'
		},
		ul: {
			base: 'mx-auto w-full flex flex-col'
		},
		pill: {
			base: 'hover:bg-gray-200/80 dark:hover:bg-gray-800/80 flex items-center gap-x-3 rounded-md',
			text: 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group',
			size: 'w-full px-2 py-0.5 my-2 text-sm leading-6 font-medium',
			exact: 'bg-gray-200/90 dark:bg-gray-800/90 text-gray-900 dark:text-white',
			indicator: ''
		}
	};

	let maxi: boolean = true;

	$: pillCSS = twJoin(css.pill.base, css.pill.text, css.pill.size, maxi ? '' : 'w-fit');
</script>

<!-- Static sidebar for desktop -->
<div
	transition:slide
	class="{maxi
		? 'min-w-[15rem]'
		: 'w-fit'} max-w-lg z-10 h-full transition duration-1000 bg-white/50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800/80"
>
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<div class="px-2 flex justify-between h-full grow flex-col gap-y-3 overflow-y-auto">
		<div class="flex h-16 p-2 shrink-0 items-center">
			<div
				class="ring-2 ring-inset p-[0.25px] rounded-full ring-green-600 dark:ring-green-400 flex items-center"
			>
				<span class="text-green-600 dark:text-green-400 size-8 i-fluent-home-garage-20-filled" />
			</div>
		</div>
		<nav class="w-full flex-grow">
			<ul role="list" class={css.ul.base}>
				{#each links as link}
					<li>
						<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
						<a
							href={link.href}
							class="{pillCSS} {link.href === $page.url.pathname && css.pill.exact}"
						>
							<span
								data-maxi={maxi}
								class="{link.icon} {link.href === $page.url.pathname &&
									'i-fluent-home-20-filled'} size-8 shrink-0"
							/>
							<span data-maxi={maxi} class="data-[maxi=false]:hidden">{link.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div class={css.ul.base}>
			<button class={pillCSS}>
				<span data-maxi={maxi} class="i-fluent-settings-20-regular size-8 shrink-0" />
				<span data-maxi={maxi} class="data-[maxi=false]:hidden">Settings</span>
			</button>
			<button class={pillCSS} on:click={() => (maxi = !maxi)}>
				<span
					data-maxi={maxi}
					class={twJoin(
						'size-8 shrink-0',
						maxi && 'i-fluent-panel-left-contract-20-regular',
						!maxi && 'i-fluent-panel-left-expand-20-regular'
					)}
				/>
				<span data-maxi={maxi} class="data-[maxi=false]:hidden">Minimaze</span>
			</button>
		</div>
	</div>
</div>
