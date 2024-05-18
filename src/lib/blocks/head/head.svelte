<script lang="ts" context="module">
	export const css = {
		root: { base: 'z-50 py-4' },
		hide: 'flex md:hidden',
		show: 'hidden md:flex',
		menu: {
			open: config.icon.menu,
			close: config.icon.close
		},
		north: {
			base: 'flex flex-nowrap justify-between',
			west: { base: 'font-semibold text-lg', flex: 'flex items-center gap-x-1', order: 'order-1' },
			center: { base: '', flex: 'flex items-center gap-x-3', order: 'order-3' },
			east: { base: '', flex: 'flex items-center gap-x-3', order: 'order-3' }
		},
		aside: {
			buttons: {
				base: 'w-full',
				flex: 'flex justify-center items-center gap-x-3'
			},
			panel: {}
		}
	};
</script>

<script lang="ts">
	// Imports
	import { UButton, ULogo, config } from '$lib/index.js';
	import { stringfy, twJoin } from '$lib/utils/index.js';
	import type { ComponentProps } from 'svelte';
	import { useDark } from '$lib/composables/useDark.js';

	// Props
	export let href: string = '/';
	export let title: string = '';
	export let buttons: ComponentProps<UButton>[] = [];
	export let mode: ComponentProps<UButton> = {};
	export let menu: ComponentProps<UButton> = {};

	// Config
	const dark = useDark();

	function asideToggle() {
		return (asider = !asider);
	}

	// Reactive
	$: asider = false;
	$: menuIcon = asider ? css.menu.close : css.menu.open;
</script>

<header class={stringfy(css.root)}>
	<div id="north" class={stringfy(css.north)}>
		<a {href} class={stringfy(css.north.west)}>
			<slot name="west">
				<ULogo class="-ml-1" />
				{title}
			</slot>
		</a>
		<nav class={twJoin(stringfy(css.north.center), css.show)}>
			<slot>Center</slot>
		</nav>
		<nav class={stringfy(css.north.east)}>
			<slot name="east">
				<div class={twJoin(css.north.east.flex, css.show)}>
					{#each buttons as button}
						<UButton {...button} />
					{/each}
				</div>
				<slot name="action-button">
					<UButton on:click={dark.toggle} {...{ square: true, icon: dark.icon, ...mode }} />
					<span class={css.hide}>
						<UButton on:click={asideToggle} {...{ square: true, icon: menuIcon, ...menu }} />
					</span>
				</slot>
			</slot>
		</nav>
	</div>
	{#if asider}
		<div id="aside" class={css.hide}>
			<div class={stringfy(css.aside.buttons)}>
				<slot name="aside-buttons">
					{#each buttons as button}
						<UButton {...button} />
					{/each}
				</slot>
			</div>
			<nav class={stringfy(css.aside.panel)}>
				<slot name="aside-panel" />
			</nav>
		</div>
	{/if}
</header>
