<script lang="ts">
	// imports
	import { UDashFoot, UDashHead, UDashSide, UFlow, USlideover } from '$lib/index.js';
	// props
	let toggle: boolean;

	// width xl:72
</script>

<section class="flex h-lvh max-h-[1200px] overflow-hidden">
	<style>
		html {
			overflow: hidden;
			height: 100%;
		}
		body {
			overflow: auto;
			height: 100%;
		}
	</style>
	<div class="hidden sticky top-0 xl:flex xl:z-50 xl:flex-col xl:w-wull">
		<USlideover bind:state={toggle} from="west">
			<UDashSide />
		</USlideover>
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<UDashSide />
	</div>

	<div class="relative overflow-auto flex-grow h-[100%]">
		<!-- Sticky search header -->
		<UDashHead bind:toggle />
		<main class="overflow-hidden px-4 h-full sm:px-6 lg:px-8">
			<slot />
		</main>
		<div class="sticky bottom-0 right-0 left-0 {$$slots.foot ? '' : 'hidden'}">
			<slot name="foot" />
		</div>
	</div>
</section>
