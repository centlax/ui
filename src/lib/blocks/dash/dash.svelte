<script lang="ts">
	import { UDashHead, UDashSide, USheet } from '$lib/index.js';
	let toggle: boolean;
	// width xl:72
</script>

<section class="flex min-h-lvh">
	<div class="hidden xl:inset-y-0 xl:z-50 xl:flex xl:w-wull xl:flex-col">
		<USheet bind:state={toggle} from="west">
			<UDashSide />
		</USheet>
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<UDashSide />
	</div>

	<div class="flex-grow">
		<!-- Sticky search header -->
		<UDashHead bind:toggle />
		<main><slot /></main>
	</div>
</section>
