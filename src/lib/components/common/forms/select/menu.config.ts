import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';
import type { CreateSelectProps } from '@melt-ui/svelte';

export const props = {
	class: {} as string | DeepStyles<typeof selectMenu>,
	override: false,
	options: {} as { [key: string]: any[] },
	placeholder: '',
	multiple: false,
	visible: false,
	selected: undefined as CreateSelectProps['selected'],
	float: {
		placement: 'bottom',
		fitViewport: true,
		sameWidth: true
	} as CreateSelectProps['positioning'],
	required: false,
	disabled: false,
	arrow: 0,
	scroll: false /** Whether or not to prevent scrolling of the document when the select is open. */,
	loop: false,
	outside: true /** Whether or not to close the select when the user clicks outside of it. */,
	overflow:
		true /** Whether to prevent text selection overflowing the select when it is the top layer. */,
	portal: null as CreateSelectProps['portal'],
	hover:
		true /** When true, hovering an option will update the highlightedItem store, and when the cursor leaves an option the store will be set to null */,
	open: false
} satisfies Props;
/**
 * flex h-10 min-w-[220px] items-center justify-between rounded-lg bg-white px-3 py-2
    text-primary-700 shadow transition-opacity hover:opacity-90
 */
const styles = {
	root: {
		flex: 'flex flex-col gap-1'
	},
	trigger: {
		layout: 'group relative',
		flex: 'flex justify-between items-center',
		sizing: 'w-full',
		spacing: 'py-1.5 px-2.5',
		interactive: 'cursor-default',
		border: `rounded-md ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600`,
		background: 'bg-white',
		typography: 'text-left text-gray-900 sm:text-sm sm:leading-',
		effect: 'shadow-sm',
		chevron: {
			svg: 'i-fluent-chevron-down-20-regular',
			sizing: 'size-5',
			motion: 'data-[open=true]:-rotate-90 duration-200'
		}
	},
	menu: {
		layout: 'z-10',
		flex: 'flex flex-col overflow-y-auto',
		background: 'bg-white dark:bg-gray-900',
		sizing: ' max-h-[300px]',
		spacing: 'py-1.5 px-1.5',
		border: 'rounded focus:!ring-0',
		effect: 'shadow',
		group: {
			typography: 'text-sm font-semibold capitalize text-gray-900 dark:text-white'
		},
		option: {
			layout: 'relative focus:z-10',
			interactive: 'cursor-pointer',
			border: 'rounded',
			spacing: 'py-1 pl-8 pr-4',
			typography: 'text-sm text-gray-900 focus:text-white',
			background: `hover:bg-primary-100  data-[highlighted]:bg-primary-500 data-[highlighted]:text-white`,
			effect: 'data-[disabled]:opacity-50',
			selected: {
				layout: `absolute top-1/2 z-20 left-2 -translate-y-1/2 data-[selected=true]:block data-[selected=false]:hidden`,
				typography: 'text-primary-500',
				checkmark: {
					flex: 'size-4 i-fluent-checkmark-20-regular'
				}
			}
		}
	}
} satisfies Styles;
export const selectMenu = styles;
