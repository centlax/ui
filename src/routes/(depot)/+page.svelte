<script lang="ts">
	import { UDash, UDashSide, UDashHead } from '$lib/index.js';

	const links = [
		{ label: 'Home', href: '/', icon: 'i-fluent-home-20-regular' },
		{ label: 'Team', href: '/add', icon: 'i-fluent-people-team-20-regular' },
		{ label: 'Storages', href: '/add', icon: 'i-fluent-drawer-20-regular' },
		{ label: 'Reports', href: '/add', icon: 'i-fluent-data-usage-20-regular' },
		{ label: 'Forms', href: '/add', icon: 'i-fluent-form-20-regular' },
		{ label: 'History', href: '/add', icon: 'i-fluent-shifts-activity-20-regular' },
		{ label: 'Receipts', href: '/add', icon: 'i-fluent-receipt-sparkles-20-regular' },
		{ label: 'Members', href: '/add', icon: 'i-fluent-people-queue-20-regular' }
	];
</script>

<UDash>
	<UDashHead slot="head-bar" />
	<UDashSide {links} slot="side-bar" />
</UDash>
