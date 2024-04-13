<script lang="ts">
	import { UButton, UIcon, UColorMode, ULink, ULogo, UContainer } from '$lib/index.js';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { quintOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	export let title: string = 'Centlax';

	$: open = false;
	$: data = open ? 'open' : 'close';
	const {
		elements: { overlay }
	} = createDialog({
		forceVisible: true
	});

	const css = {
		overlay:
			'fixed inset-0 z-50 bg-black/50 lg:bg-transparent backdrop-blur  lg:backdrop-blur-none',
		base: 'absolute left-0 right-0 z-50 group/logo mx-auto text-gray-900 dark:text-white',
		nav: 'flex items-center justify-between gap-x-6 py-2',
		panel: {
			height: 'h-[200px] lg:h-0'
		},
		background: 'bg-white dark:bg-gray-900',
		hr: 'dark:border-gray-800 lg:hidden',
		icon: {
			open: 'i-fluent-dismiss-24-regular',
			close: 'i-fluent-navigation-24-regular '
		}
	};
	$: headerCSS = twJoin(css.base, css.background);
	$: panelCSS = twJoin(open && css.panel.height, 'shadow-sm');
</script>

<div class="relative">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:click={() => (open = false)}
		use:melt={$overlay}
		class={open ? css.overlay : ''}
		transition:fade={{ duration: 500 }}
	/>
	<header
		data-state={data}
		transition:slide={{ delay: 50, duration: 500, easing: quintOut, axis: 'y' }}
		class="{headerCSS} "
	>
		<UContainer>
			<nav class={css.nav} aria-label="Global">
				<div class="flex lg:flex-1">
					<slot name="east">
						<ULink href="/" class="group/logo -ml-1 flex items-center gap-1">
							<span class="sr-only">Centlax</span>
							<slot name="logo">
								<ULogo move />
							</slot>
							<slot name="title">
								<span class="font-medium text-xl">{title}</span>
							</slot>
						</ULink>
					</slot>
				</div>
				<div class="hidden lg:flex lg:gap-x-12">
					<slot />
				</div>
				<div class="flex flex-1 items-center justify-end gap-x-6">
					<slot name="west">
						<UButton variant="ghost" color="white" label="Log in" href="/" />
						<UButton label="Sign up" href="/" />
						<UColorMode />
					</slot>
					<div class="block lg:hidden">
						<slot name="action">
							<UButton slot="open" square color="gray" on:click={() => (open = !open)}>
								<UIcon name={open ? css.icon.open : css.icon.close} />
							</UButton>
						</slot>
					</div>
				</div>
			</nav>
		</UContainer>

		<hr class={twJoin(open ? css.hr : 'hidden')} />
		<UContainer id="header-panel" class={panelCSS}>
			<slot name="panel" />
		</UContainer>
		<hr class={twJoin(open ? css.hr : 'hidden')} />
	</header>
</div>
