<script lang="ts">
	// Imports
	import { UDashSide, UDashHead } from '$lib/index.js';
	// Props
</script>

<svelte:head>
	<title>Depot</title>
</svelte:head>

<section class="flex h-lvh w-full max-w-screen-2xl mx-auto">
	<!-- Static sidebar for desktop -->
	<slot name="side-bar" />

	<div class="flex-grow overflow-auto">
		<!-- Sticky search header -->
		<slot name="head-bar" />
		<div class=" flex-grow h-[100%]">
			<main class="py-4 px-6">
				<slot />
			</main>
		</div>
	</div>
</section>
