<script lang="ts">
	import { UButton, UColorMode, ULogo } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';
	export let title: string = 'Centlax';

	const css = {
		base: 'mx-auto text-gray-900 dark:text-white bg-white dark:bg-gray-900',
		fixed: 'sticky top-0 z-100 backdrop-blur-md',
	};
	$:headerCSS = twJoin(css.base, css.fixed);
</script>
<header class={headerCSS}>
	<nav class="flex items-center justify-between gap-x-6 py-2" aria-label="Global">
		<div class="flex lg:flex-1">
			<slot name="east">
				<a href="/" class="-ml-1 flex items-center gap-1">
					<span class="sr-only">Centlax</span>
					<slot name="logo">
						<ULogo />
					</slot>
					<span class="font-medium text-xl">{title}</span>
				</a>
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
		</div>
	</nav>
</header>
