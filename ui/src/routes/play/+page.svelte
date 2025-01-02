<script lang="ts">
	import { UDash } from '$lib/index.js';
</script>

<UDash.Layout>
	<UDash.Aside>
		<UDash.ANorth />
		<UDash.AItems
			data={[
				{
					title: 'GENERAL',
					items: [
						{ text: 'Dashboard', icon: 'i-fluent-data-pie-24-regular', badge: '5' },
						{ text: 'Team', icon: 'i-fluent-data-pie-24-regular' },
						{ text: 'Projects', icon: 'i-fluent-data-pie-24-regular', badge: '12' },
						{ text: 'Calendar', icon: 'i-fluent-data-pie-24-regular', badge: '+25' },
						{ text: 'Documents', icon: 'i-fluent-data-pie-24-regular' },
						{ text: 'Reports', icon: 'i-fluent-data-pie-24-regular' }
					]
				},
				{
					title: 'CONFIGURATION',
					items: [
						{ text: 'Settings', icon: 'i-fluent-data-pie-24-regular' },
						{ text: 'Support', icon: 'i-fluent-data-pie-24-regular' }
					]
				}
			]}
		/>
		<UDash.ASouth />
	</UDash.Aside>
	<UDash.Header>
		<UDash.HWest />
	</UDash.Header>
	<UDash.Main />
	<UDash.Footer>
		<UDash.FDock />
		<UDash.FTask />
	</UDash.Footer>
</UDash.Layout>
