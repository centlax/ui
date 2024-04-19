<script lang="ts">
	// imports
	import {
		UAsideLinks,
		UButton,
		UColorMode,
		UContainer,
		UHeaderLinks,
		ULink,
		ULogo
	} from '$lib/index.js';

	import type { HeaderLink, Link } from '$lib/types/link.js';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	import { ui } from '$lib/ui.config.js';
	// props

	export let links: HeaderLink[] = [];
	export let title: string = '';
	let children: HeaderLink['children'];
	export let shadow: boolean = false;
	export let height: string = ui.header.height;

	// config
	const {
		elements: { trigger, overlay, content, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});

	const css = {
		overlay: 'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
		content: `group/logo fixed left-0 right-0 top-0 z-50 w-full bg-white dark:bg-gray-900 focus:outline-none`,
		shadow: 'shadow-sm',
		nav: {
			base: 'mx-auto flex items-center justify-between ',
			east: 'flex lg:flex-1',
			center: 'hidden lg:flex lg:gap-x-12',
			west: 'hidden lg:flex lg:flex-1 lg:justify-end gap-x-2',
			panel: 'flex lg:hidden',
			link: 'text-sm font-semibold leading-6 text-gray-900 dark:text-white'
		},
		icon: {
			add: 'i-fluent-add-24-regular',
			minus: 'i-fluent-subtract-24-regular'
		},
		section: {
			base: '',
			content: 'pb-0'
		},
		full: {
			base: 'hidden lg:flex gap-x-4 pb-4 justify-center',
			link: 'hover:font-medium dark:text-gray-200 dark:hover:text-white py-1  rounded'
		},
		half: {
			base: 'flex lg:hidden flex-col gap-y-2 py-4',
			link: 'hover:font-medium dark:text-gray-200 dark:hover:text-white py-1  rounded'
		}
	};
	// reactive
	$: children;
	$: outerWidth = 0;
	$: full = false;
	$: half = false;
</script>

<svelte:window bind:outerWidth />
<header>
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		on:click={() => (half = full = false)}
		role="dialog"
		use:melt={$overlay}
		class={twJoin((full || half) && css.overlay, half && `lg:hidden`)}
	/>
	<div use:melt={$content} class="{css.content} {shadow && css.shadow}" aria-label="Global">
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
				<div class={css.nav.center}>
					<slot>
						<UHeaderLinks {links} />
					</slot>
				</div>
				<div class={css.nav.west}>
					<slot name="west" />
					<slot name="color">
						<UColorMode />
					</slot>
				</div>
				<div class={css.nav.panel}>
					<UButton
						label={half ? 'Close' : 'Open'}
						on:click={() => (half = !half) && (full = half ? false : true)}
					/>
				</div>
			</nav>
			{#if full}
				<section class={css.section.base} transition:slide={{ duration: 300, axis: 'y' }}>
					<nav class={css.full.base} transition:fade>
						{#if children}
							{#each children as child}
								<a href="/">{child.label}</a>
							{/each}
						{/if}
					</nav>
				</section>
			{:else if half}
				<section class={css.section.base} transition:slide={{ duration: 200, axis: 'y' }}>
					<nav class={css.half.base} transition:fade={{ delay: 200 }}>
						<UAsideLinks {links} />
					</nav>
				</section>
			{/if}
		</UContainer>
	</div>
</header>
