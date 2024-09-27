<script lang="ts">
	import { UAccordion, UContextMenu, UInputTag, UMenubar, UModal, USwitch } from '$lib/index.js';
	let value = false;
</script>

<svelte:head>
	<title>Playground</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex justify-center items-center h-screen">
	<UAccordion />
</section>
