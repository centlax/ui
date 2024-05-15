export const styles = {
	root: 'w-full flex flex-col',
	item: {
		base: 'w-full flex flex-col',
		icon: 'ms-auto transform transition-transform duration-200',
		header: 'flex',
		panel: {
			size: 'text-sm',
			color: 'text-gray-600 dark:text-gray-400',
			padding: 'pt-1.5 pb-3'
		}
	},
	default: {
		icon: {
			open: 'i-heroicons-chevron-down-20-solid',
			close: ''
		},
		class: 'mb-1.5 w-full',
		variant: 'soft' as const
	}
};
