export const css = {
	wrapper: 'w-full pointer-events-auto',
	content: 'relative overflow-hidden rounded-lg bg-neutral-800 text-white shadow-md',
	container:
		'relative flex w-[24rem] max-w-[calc(100vw-2rem)] items-center justify-between gap-4 p-5 pt-6',
	inner: 'w-0 flex-1',
	title: 'text-sm font-medium text-gray-900 dark:text-white',
	description: 'mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400',
	actions: 'flex items-center gap-2 mt-3 flex-shrink-0',
	background: 'bg-white dark:bg-gray-900',
	shadow: 'shadow-lg',
	rounded: 'rounded-lg',
	padding: 'p-4',
	gap: 'gap-3',
	ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
	icon: {
		base: 'flex-shrink-0 w-5 h-5',
		color: 'text-{color}-500 dark:text-{color}-400'
	},
	avatar: {
		base: 'flex-shrink-0 self-center',
		size: 'md' as const
	},
	progress: {
		base: 'absolute bottom-0 end-0 start-0 h-1',
		background: 'bg-{color}-500 dark:bg-{color}-400'
	},

	button:
		'absolute right-4 top-4 grid size-6 place-items-center rounded-full text-magnum-500 hover:bg-magnum-900/50',

	default: {
		color: 'primary',
		icon: null,
		closeButton: {
			icon: 'i-heroicons-x-mark-20-solid',
			color: 'gray' as const,
			variant: 'link' as const,
			padded: false
		},
		actionButton: {
			size: 'xs' as const,
			color: 'white' as const
		}
	}
};
