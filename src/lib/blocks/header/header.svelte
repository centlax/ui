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
	import { ui } from '$lib/ui.config.js';
	import type { Size } from '$lib/types/index.js';
	import { twJoin } from 'tailwind-merge';

	// Props
	export let links: Link[] = [];
	export let title: string = '';
	export let shadow: boolean = false;
	export let height: string = ui.header.height;
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
		preventScroll: !open
	});

	const css = {
		overlay: 'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
		content: `group/logo fixed left-0 right-0 top-0 z-50 w-wideOpen bg-white dark:bg-gray-900 focus:outline-none`,
		shadow: 'shadow-sm',
		flex: {
			hide: {
				xs: 'hidden xs:flex',
				sm: 'hidden sm:flex',
				md: 'hidden md:flex',
				lg: 'hidden lg:flex',
				xl: 'hidden xl:flex'
			},
			show: {
				xs: 'flex xs:hidden',
				sm: 'flex sm:hidden',
				md: 'flex md:hidden',
				lg: 'flex lg:hidden',
				xl: 'flex xl:hidden'
			}
		},
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

	// reactive
	$: $_open = open;
	$: contentCSS = twJoin(
		css.content,
		border && 'border-b border-gray-300/20 dark:border-gray-600/20',
		shadow && css.shadow
	);
</script>

<header >
	{#if open}
		<div
			role="dialog"
			transition:fade={{ delay: 200, duration: 200 }}
			use:melt={$overlay}
			class="{css.overlay} {css.flex.show[size]}"
		/>
	{/if}
	<div class={contentCSS} aria-label="Global">
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
				<div class="{css.nav.center} {css.flex.hide[size]}">
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
					<UButton
						color="gray"
						rounded
						class={css.flex.show[size]}
						icon={open ? ui.icon.close : ui.icon.open}
						square
						on:click={() => (open = !open)}
					/>
				</div>
			</nav>

			{#if open}
				<nav use:melt={$content}  transition:slide={{ duration: 200, axis: 'y' }}>
					<div class="{css.side.open} {css.flex.show[size]}" transition:fade={{ delay: 50 }}>
						<UAsideLinks bind:clicked={open} {links} />
					</div>
				</nav>
			{/if}
		</UContainer>
	</div>
</header>
