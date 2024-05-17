import { ui } from '$lib/ui.config.js';

export const css = {
	wrapper: 'w-full flex flex-col gap-2',
	indicator: {
		container: 'min-w-fit transition-all',
		text: {
			base: 'text-gray-400 dark:text-gray-600 text-end',
			size: ui.share.text
		}
	},
	meter: {
		base: 'appearance-none block w-full bg-none overflow-y-hidden',
		background: 'bg-gray-200 dark:bg-gray-800',
		color: 'text-color-500',
		ring: '',
		rounded: 'rounded-full',
		shadow: '',
		size: {
			xs: 'h-0.5',
			sm: 'h-1',
			md: 'h-2',
			lg: 'h-3',
			xl: 'h-4'
		},
		appearance: {
			inner:
				'[&::-webkit-meter-inner-element]:block [&::-webkit-meter-inner-element]:relative [&::-webkit-meter-inner-element]:border-none [&::-webkit-meter-inner-element]:bg-none [&::-webkit-meter-inner-element]:bg-transparent',
			meter:
				'[&::-webkit-meter-bar]:border-none [&::-webkit-meter-bar]:bg-none [&::-webkit-meter-bar]:bg-transparent',
			bar: '[&::-webkit-meter-optimum-value]:border-none [&::-webkit-meter-optimum-value]:bg-none [&::-webkit-meter-optimum-value]:bg-current',
			value:
				'[&::-moz-meter-bar]:border-none [&::-moz-meter-bar]:bg-none [&::-moz-meter-bar]:bg-current'
		},
		bar: {
			transition:
				'[&::-webkit-meter-optimum-value]:transition-all [&::-moz-meter-bar]:transition-all',
			ring: '',
			rounded: '[&::-webkit-meter-optimum-value]:rounded-full [&::-moz-meter-bar]:rounded-full',
			size: {
				xs: '[&::-webkit-meter-optimum-value]:h-0.5 [&::-moz-meter-bar]:h-0.5',
				sm: '[&::-webkit-meter-optimum-value]:h-1 [&::-moz-meter-bar]:h-1',
				md: '[&::-webkit-meter-optimum-value]:h-2 [&::-moz-meter-bar]:h-2',
				lg: '[&::-webkit-meter-optimum-value]:h-3 [&::-moz-meter-bar]:h-3',
				xl: '[&::-webkit-meter-optimum-value]:h-4 [&::-moz-meter-bar]:h-4'
			}
		}
	},
	label: {
		base: 'flex gap-2 items-center',
		truncate: 'truncate',
		color: 'text-color-500',
		text: ui.share.text
	},
	color: {
		white: 'text-white dark:text-black',
		black: 'text-black dark:text-white',
		gray: 'text-gray-600 dark:text-gray-400'
	}
};
