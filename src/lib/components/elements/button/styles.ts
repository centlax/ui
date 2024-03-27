import { share } from '../../../theme/share.js';
const ui = {
	va: {
		so: {
			pswd: (color: string): string => {
				return `bg-${color}-600 dark:bg-${color}-500 text-white
						focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2
						hover:bg-${color}-700 hover:dark:bg-${color}-600 
						outline-${color}-600 dark:outline-${color}-500`;
			}
		}
	}
};
export const style = {
	base: 'font-semibold  flex-shrink-0',
	rounded: share.rounded,
	truncate: 'text-left break-all line-clamp-1',
	block: 'w-full flex justify-center items-center',
	inline: 'inline-flex items-center',
	size: share.size,
	text: share.text,
	gap: share.gap,
	padding: share.padding,
	square: share.square,
	variant: {
		solid: {
			primary: ui.va.so.pswd('primary'),
			success: ui.va.so.pswd('success'),
			warning: ui.va.so.pswd('warning'),
			danger: ui.va.so.pswd('danger'),
			white: `shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400`,
			gray: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
		},
		outline: {
			primary: `bg-primary-600 dark:bg-primary-500 ${ui.va.so.pswd} hover:bg-primary-700 hover:dark:bg-primary-600 outline-primary-600/80`,
			success: `bg-success-600 dark:bg-success-500 ${ui.va.so.pswd} hover:bg-success-700 hover:dark:bg-success-600 outline-success-600/80`,
			warning: `bg-warning-600 dark:bg-warning-500 ${ui.va.so.pswd} hover:bg-warning-700 hover:dark:bg-warning-600 outline-warning-600/80`,
			danger: `bg-danger-600 dark:bg-danger-500 ${ui.va.so.pswd} hover:bg-danger-700 hover:dark:bg-danger-600 outline-danger-600/80`,
			white: '',
			gray: ''
		},
		soft: {
			primary: `bg-primary-600 dark:bg-primary-500 ${ui.va.so.pswd} hover:bg-primary-700 hover:dark:bg-primary-600 outline-primary-600/80`,
			success: `bg-success-600 dark:bg-success-500 ${ui.va.so.pswd} hover:bg-success-700 hover:dark:bg-success-600 outline-success-600/80`,
			warning: `bg-warning-600 dark:bg-warning-500 ${ui.va.so.pswd} hover:bg-warning-700 hover:dark:bg-warning-600 outline-warning-600/80`,
			danger: `bg-danger-600 dark:bg-danger-500 ${ui.va.so.pswd} hover:bg-danger-700 hover:dark:bg-danger-600 outline-danger-600/80`,
			white: '',
			gray: ''
		},
		ghost: {
			primary: `bg-primary-600 dark:bg-primary-500 ${ui.va.so.pswd} hover:bg-primary-700 hover:dark:bg-primary-600 outline-primary-600/80`,
			success: `bg-success-600 dark:bg-success-500 ${ui.va.so.pswd} hover:bg-success-700 hover:dark:bg-success-600 outline-success-600/80`,
			warning: `bg-warning-600 dark:bg-warning-500 ${ui.va.so.pswd} hover:bg-warning-700 hover:dark:bg-warning-600 outline-warning-600/80`,
			danger: `bg-danger-600 dark:bg-danger-500 ${ui.va.so.pswd} hover:bg-danger-700 hover:dark:bg-danger-600 outline-danger-600/80`,
			white: '',
			gray: ''
		}
	},
	icon: {
		base: 'flex-shrink-0',
		loading: 'animate-spin',
		color: 'ui:text-primary',
		size: share.icon.size
	}
};
