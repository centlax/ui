import type { Item } from '$lib/types/item.js';

const heads: Item[] = [
	{
		title: 'Product',
		items: [
			{
				text: 'Marketing',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			},
			{
				text: 'Analytics',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			},
			{
				text: 'Automation',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			},
			{
				text: 'Commerce',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			},
			{
				text: 'Insights',
				href: '/',
				icon: 'i-fluent-building-retail-toolbox-24-regular',
				description: 'Get a better understanding of your traffic'
			}
		]
	},
	{ text: 'Features' },
	{ text: 'Marketplace' },
	{ text: 'Centlax' }
];
const foots: Item[] = [
	{
		title: 'Solutions',
		items: [
			{ text: 'Marketing', href: '/' },
			{ text: 'Analytics', href: '/' },
			{ text: 'Automation', href: '/' },
			{ text: 'Commerce', href: '/' },
			{ text: 'Insights', href: '/' }
		]
	},
	{
		title: 'Support',
		items: [
			{ text: 'Submit ticket', href: '/' },
			{ text: 'Documentation', href: '/' },
			{ text: 'Guides', href: '/' }
		]
	},
	{
		title: 'Company',
		items: [
			{ text: 'About', href: '/' },
			{ text: 'Blog', href: '/' },
			{ text: 'Jobs', href: '/' },
			{ text: 'Press', href: '/' }
		]
	},
	{
		title: 'Legal',
		items: [
			{ text: 'Terms of service', href: '/' },
			{ text: 'Privacy policy', href: '/' },
			{ text: 'License', href: '/' }
		]
	}
];

export const data = {
	heads,
	foots
};
