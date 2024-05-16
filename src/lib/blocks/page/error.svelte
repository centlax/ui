<script lang="ts">
	// imports
	import { UButton } from '$lib/index.js';

	// props
	export let app_name: string = 'Centlax';
	export let status_code: number = 404;
	export let status_message: string = 'Not Found';
	export let description: string = 'Sorry, the page you are looking for could not be found.';
	export let back_home: string = 'Go back home';
</script>

<svelte:head>
	<title>{status_code} - {status_message} | {app_name}</title>
</svelte:head>

<div
	class="font-sans antialiased bg-white dark:bg-gray-950 text-gray-950 dark:text-white grid min-h-screen place-content-center overflow-hidden"
>
	<div class="fixed left-0 right-0 spotlight z-10"></div>
	<div class=" text-center z-20">
		<h1 class="text-8xl sm:text-10xl font-medium mb-8">
			{status_code}
		</h1>
		<p class="text-xl px-8 sm:px-0 max-w-xl sm:text-4xl font-light mb-16 leading-tight">
			{description}
		</p>
		<div class="w-full flex items-center justify-center">
			<UButton href="/" label={back_home} />
		</div>
	</div>
</div>
