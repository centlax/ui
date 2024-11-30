import type { Link } from '@centlax/ui';

const asides: Link[] = [
	{
		title: 'General',
		items: [
			{ label: 'Overview', icon: 'i-fluent-data-pie-24-regular' },
			{ label: 'Profile', icon: 'i-fluent-person-ribbon-24-regular' },

			{
				label: 'Applications',
				icon: 'i-fluent-apps-24-regular'
			},
			{
				label: 'Activities',
				icon: 'i-fluent-data-usage-24-regular'
			},
			{
				label: 'Members',
				icon: 'i-fluent-people-community-24-regular'
			},
			{
				label: 'Units',
				icon: 'i-fluent-layer-diagonal-24-regular'
			},
			{
				label: 'Privacy',
				icon: 'i-fluent-fingerprint-24-regular'
			},
			{
				label: 'Security',
				icon: 'i-fluent-shield-keyhole-24-regular'
			},
			{
				label: 'Billing',
				icon: 'i-fluent-wallet-credit-card-24-regular'
			}
		]
	},
	{
		title: 'CONFIGURATION',
		items: [
			{
				label: 'Settings',
				icon: 'i-fluent-settings-24-regular'
			}
		]
	}
];
const foots: Link[] = [
	{
		title: 'Solutions',
		items: [
			{ label: 'Marketing', href: '/' },
			{ label: 'Analytics', href: '/' },
			{ label: 'Automation', href: '/' },
			{ label: 'Commerce', href: '/' },
			{ label: 'Insights', href: '/' }
		]
	},
	{
		title: 'Support',
		items: [
			{ label: 'Submit ticket', href: '/' },
			{ label: 'Documentation', href: '/' },
			{ label: 'Guides', href: '/' }
		]
	},
	{
		title: 'Company',
		items: [
			{ label: 'About', href: '/' },
			{ label: 'Blog', href: '/' },
			{ label: 'Jobs', href: '/' },
			{ label: 'Press', href: '/' }
		]
	},
	{
		title: 'Legal',
		items: [
			{ label: 'Terms of service', href: '/' },
			{ label: 'Privacy policy', href: '/' },
			{ label: 'License', href: '/' }
		]
	}
];

export function load() {
	return {
		asides,
		foots
	};
}
