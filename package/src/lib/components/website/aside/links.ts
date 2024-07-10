import type { UAccordion } from '$lib/config/imports/components.js';
import type { DeepStyles, Props, Styles } from '$lib/types/index.js';
import type { ComponentProps } from 'svelte';

export const props = {
	/** Accordion Props */
	links: [] as ComponentProps<UAccordion>['links'],
	value: '' as ComponentProps<UAccordion>['value'],
	multiple: false,
	disabled: false,
	visible: false,

	/** Extended Props */
	class: {} as string | DeepStyles<typeof styles>,
	override: false
} satisfies Props;

const styles = {
	/** Accordion Styles */
	accordion: {
		root: {
			sizing: 'w-fit',
			spacing: 'space-y-2 *:space-y-2'
		},
		item: {
			flex: 'flex-col',
			trigger: {
				layout: 'group',
				flex: 'flex items-center gap-1.5 group',
				typography: 'text-sm/6 font-semibold truncate',
				sizing: 'w-full',
				border: 'focus-visible:outline-primary border-l border-transparent',
				spacing: '-ml-px ',
				first: {}
			},
			content: {
				typography: 'text-sm text-inherit dark:text-inherit'
			}
		}
	},
	/** Extended Styles */
	trigger: {
		icon: {
			sizing: 'size-5'
		},
		chevron: {
			sizing: 'size-5',
			spacing: 'ms-auto',
			typography: 'text-gray-800 dark:text-gray-200',
			svg: 'i-fluent-chevron-down-20-regular',
			motion: 'data-[open="true"]:-rotate-90 transform transition-transform duration-300'
		}
	},
	content: {
		nav: {
			spacing: 'space-y-1.5 ml-6',
			border: 'border-l border-gray-200 dark:border-gray-800',
			ancor: {
				flex: 'flex items-center gap-1.5 group  -ml-px pl-4  hover:border-gray-500 dark:hover:border-gray-400',
				typography: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200',
				border: 'border-l border-transparent hover:border-gray-600 dark:hover:border-gray-400'
			}
		}
	}
} satisfies Styles;

export const asideLinks = styles;
