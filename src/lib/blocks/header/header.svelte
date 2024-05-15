<script lang="ts">
	// Imports
	import {
		UAsideLinks,
		UButton,
		UColorToggle,
		UContainer,
		UHeaderLinks,
		ULink,
		ULogo
	} from '$lib/index.js';
	import type { Link } from '$lib/types/link.js';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, slide } from 'svelte/transition';
	import { config } from '$lib/ui.config.js';
	import type { Size } from '$lib/types/index.js';
	import { twJoin } from 'tailwind-merge';

	// Props
	export let links: Link[] = [];
	export let title: string = '';
	export let shadow: boolean = false;
	export let height: string = config.header.height;
	export let open: boolean = false;
	export let size: Size = 'md';
	export let border: boolean = false;

	// Config
	const {
		elements: { overlay, content, portalled },
		states: { open: _open }
	} = createDialog({
		forceVisible: true,
		onOpenChange: ({ next }) => {
			return (open = next);
		},
		preventScroll: false
	});

	const css = {
		overlay: 'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
		content: `group/logo fixed left-0 right-0 top-0 z-50 bg-white dark:bg-gray-900 focus:outline-none`,
		shadow: 'shadow-sm',
		/** Force tailwind to generate these classes used in showCSS and hideCSS */
		hide: 'xs:hidden sm:hidden md:hidden lg:hidden xl:hidden',
		show: 'xs:flex sm:flex md:flex lg:flex xl:flex',
		nav: {
			base: 'mx-auto flex items-center justify-between gap-x-4',
			east: 'flex',
			center: 'justify-center flex-1 lg:gap-x-12',
			west: 'flex gap-x-3 md:gap-x-4'
		},
		side: {
			open: 'flex-col gap-y-2 py-4'
		}
	};

	let showCSS = `flex ${size}:hidden`;
	let hideCSS = `hidden ${size}:flex`;
	// reactive
	$: $_open = open;
	$: contentCSS = twJoin(
		css.content,
		border && 'border-b border-gray-300/20 dark:border-gray-600/20',
		shadow && css.shadow
	);
	$: isSider = links?.length;
</script>

<header style="margin-bottom: {height};">
	{#if open}
		<div
			role="dialog"
			transition:fade={{ delay: 200, duration: 200 }}
			use:melt={$overlay}
			class="{css.overlay} {showCSS}"
		/>
	{/if}
	<div class={contentCSS} use:melt={$content} aria-label="Global">
		<UContainer>
			<nav style="height: {height};" class={css.nav.base}>
				<div class={css.nav.east}>
					<ULink href="/" class="flex items-center gap-x-2 -ml-[0.35rem]">
						<slot name="logo">
							<ULogo move />
						</slot>
						<slot name="title">
							<span class="text-lg font-semibold">
								{title}
							</span>
						</slot>
					</ULink>
				</div>
				<div class="{css.nav.center} {hideCSS}">
					<slot>
						<UHeaderLinks {links} />
					</slot>
				</div>
				<div class={css.nav.west}>
					<slot name="west" />
					<UColorToggle let:toggleMode let:icon>
						<UButton
							color="gray"
							rounded
							on:click={() => toggleMode()}
							icon={`${icon.light} ${icon.dark}`}
						/>
					</UColorToggle>
					{#if isSider}
						<UButton
							color="gray"
							rounded
							class={showCSS}
							icon={open ? config.icon.close : config.icon.open}
							square
							on:click={() => (open = !open)}
						/>
					{/if}
				</div>
			</nav>

			{#if open && isSider}
				<nav transition:slide={{ duration: 200, axis: 'y' }}>
					<div class="{css.side.open} {showCSS}" transition:fade={{ delay: 50 }}>
						<UAsideLinks bind:clicked={open} {links} />
					</div>
				</nav>
			{/if}
		</UContainer>
	</div>
</header>
