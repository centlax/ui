<script lang="ts">
	import { UButton, UIcon, UColorMode, ULink, ULogo, USheet, UCard } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';
	export let title: string = 'Centlax';
	let full: boolean = false;
	let scroll: number;

	const css = {
		base: 'mx-auto text-gray-900 dark:text-white',
		fixed: 'sticky top-0 z-100 backdrop-blur-md',
		sleep: 'bg-white dark:bg-gray-800',
		wake: 'bg-white/50 dark:bg-gray-800/50 rounded px-2'
	};
	// if scroll takes place, active wake for 500
	$: headerCSS = twJoin(css.base, css.fixed);
</script>

<svelte:window bind:scrollY={scroll} />

<header class={headerCSS}>
	<nav class=" flex items-center justify-between gap-x-6 py-2" aria-label="Global">
		<div class="flex lg:flex-1">
			<slot name="east">
				<ULink href="/" class="group -ml-1 flex items-center gap-1">
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
			<div class="block sm:hidden">
				<slot name="action">
					<UButton square variant="ghost" color="gray" on:click={() => (full = !full)}>
						<UIcon name="i-fluent-navigation-24-regular" />
					</UButton>
				</slot>
			</div>
		</div>
	</nav>
	<USheet state={full} from="north">
		<UCard class="group h-full" northUI="py-1 flex justify-between">
			<svelte:fragment slot="north">
				<ULogo move />
				<UButton class="my-1" square variant="ghost" on:click={() => (full = false)}>
					<UIcon name="i-fluent-dismiss-24-regular size-5" />
				</UButton>
			</svelte:fragment>
		</UCard>
	</USheet>
</header>
