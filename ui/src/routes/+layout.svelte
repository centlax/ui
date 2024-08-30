<script lang="ts">
	import { UDashboard, ULayout, USidebar } from '$lib/index.js';
	import '$lib/theme/styles/tailwind.css';
</script>

<ULayout>
	<UDashboard>
		<USidebar slot="sidebar">
			<div slot="header" class="flex gap-2 items-center">
				<div class="border-2 rounded-full border-primary-400">
					<span class="i-fluent-home-garage-24-filled block bg-primary-400" />
				</div>
				<span class="font-medium"> Depot </span>
			</div>
		</USidebar>
		<slot />
	</UDashboard>
</ULayout>
