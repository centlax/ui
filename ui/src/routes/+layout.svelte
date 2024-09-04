<script lang="ts">
	import { type AccordionLink, UDashboard, ULayout, USidebar } from '$lib/index.js';
	import '$lib/theme/styles/tailwind.css';
	const links: AccordionLink[] = [
		{
			title: 'one',
			id: 'df',
			links: [
				{ label: 'Home', id: 'home', icon: 'i-fluent-home-24-regular' },
				{ label: 'Dashboard', id: 'home', icon: 'i-fluent-notepad-sparkle-24-regular' },
				{ label: 'Projects', id: 'home', icon: 'i-fluent-layer-24-regular' },
				{ label: 'Tasks', id: 'home', icon: 'i-fluent-position-backward-24-regular' },
				{ label: 'Reporting', id: 'home', icon: 'i-fluent-color-background-24-regular' },
				{ label: 'Users', id: 'home', icon: 'i-fluent-people-team-24-regular' }
			]
		},
		{
			title: 'two',
			id: 'df',
			links: [
				{ label: 'Support', id: 'support', icon: 'i-fluent-person-support-24-regular' },
				{ label: 'Setting', id: 'setting', icon: 'i-fluent-settings-24-regular' }
			]
		}
	];
</script>

<ULayout>
	<UDashboard>
		<USidebar {links} slot="sidebar"/>
		<slot />
	</UDashboard>
</ULayout>
