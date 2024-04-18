<script lang="ts">
	import { UDashHead, UDashSide, USheet } from '$lib/index.js';
	let toggle:boolean;
</script>

<section>
	<div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
		<USheet bind:state={toggle} from='west'>
			<UDashSide/>
		</USheet>
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<UDashSide />
	</div>

	<div class="xl:pl-72">
		<!-- Sticky search header -->
		<UDashHead bind:toggle />
		<main><slot /></main>
	</div>
</section>
