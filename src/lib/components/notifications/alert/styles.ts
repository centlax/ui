export const css = {
	base: 'w-full relative overflow-hidden',
	inner: 'w-0 flex-1',
	title: 'text-sm font-medium',
	description: 'text-sm leading-4 opacity-90',
	actions: 'flex items-center gap-2 mt-3 flex-shrink-0',
	shadow: '',
	rounded: 'rounded-lg',
	padding: 'p-4',
	gap: 'gap-3',
	icon: {
		base: 'flex-shrink-0 w-5 h-5'
	},
	avatar: {
		base: 'flex-shrink-0 self-center',
		size: 'md' as const
	},
	variant: {
		base: {
			solid: `text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800`
		},
		mask: {
			solid: `text-white dark:text-gray-900`,
			outline: `ring-1 ring-inset`,
			soft: `bg-{color}-50 dark:bg-{color}-500 dark:bg-opacity-10 text-{color}-600 dark:text-{color}-500`,
			subtle: `bg-{color}-50 dark:bg-{color}-500 dark:bg-opacity-10 text-{color}-600 dark:text-{color}-500 ring-1 ring-inset ring-{color}-600 dark:ring-{color}-500 ring-opacity-25 dark:ring-opacity-25`
		}
	},
	mask: {
		solid: {
			primary: 'bg-primary-600 dark:bg-primary-500',
			success: 'bg-success-600 dark:bg-success-500',
			warning: 'bg-warning-600 dark:bg-warning-500',
			danger: 'bg-danger-600 dark:bg-danger-500',
			get white() {
				return this.primary;
			}
		},
		outline: {
			primary: 'text-primary-600 dark:text-primary-500 ring-primary-600 dark:ring-primary-500',
			success: 'text-success-600 dark:text-success-500 ring-success-600 dark:ring-success-500',
			warning: 'text-warning-600 dark:text-warning-500 ring-warning-600 dark:ring-warning-500',
			danger: 'text-danger-600 dark:text-danger-500 ring-danger-600 dark:ring-danger-500',
			get white() {
				return this.primary;
			}
		},
		soft: {
			primary: `bg-primary-50 dark:bg-primary-500 text-primary-600 dark:text-primary-500`,
			success: `bg-success-50 dark:bg-success-500 text-success-600 dark:text-success-500`,
			warning: `bg-warning-50 dark:bg-warning-500 text-warning-600 dark:text-warning-500`,
			danger: `bg-danger-50 dark:bg-danger-500 text-danger-600 dark:text-danger-500`,
			get white() {
				return this.primary;
			}
		},
		subtle: {
			primary: `bg-primary-50 dark:bg-primary-500 text-primary-600 dark:text-primary-500 ring-primary-600 dark:ring-primary-500`,
			success: `bg-success-50 dark:bg-success-500 text-success-600 dark:text-success-500 ring-success-600 dark:ring-success-500`,
			warning: `bg-warning-50 dark:bg-warning-500 text-warning-600 dark:text-warning-500 ring-warning-600 dark:ring-warning-500`,
			danger: `bg-danger-50 dark:bg-danger-500 text-danger-600 dark:text-danger-500 ring-danger-600 dark:ring-danger-500`,
			get white() {
				return this.primary;
			}
		}
	},
	default: {
		icon: null,
		closeButton: null,
		actionButton: {
			size: 'xs' as const,
			color: 'primary' as const,
			variant: 'link' as const
		}
	}
};
