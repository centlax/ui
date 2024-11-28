import type { Link } from '$lib/types/item.js';

const heads: Link[] = [
	{
		title: 'Product',
		items: [
			{
				label: 'Marketing',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			},
			{
				label: 'Analytics',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			},
			{
				label: 'Automation',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			},
			{
				label: 'Commerce',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			},
			{
				label: 'Insights',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			}
		]
	},
	{ label: 'Features' },
	{ label: 'Marketplace' },
	{ label: 'Centlax' }
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

export const data = {
	heads,
	foots
};
