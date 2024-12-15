/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import { statify } from '$lib/utils/wind.js';
import type { CreateSwitchProps } from '@melt-ui/svelte';
import clsx from 'clsx';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

const styles = {
	root: {
		layout: 'group relative touch-none',
		background: statify({
			default: 'bg-neutral-200 dark:bg-neutral-800 ',
			checked: 'data-[state=checked]:bg-color-500 dark:data-[state=checked]:bg-color-500'
		}),
		border: clsx(
			'data-[state=checked]:ring-color-400 dark:data-[state=checked]:ring-color-400',
			'rounded-full ring-1 ring-black/10 dark:ring-white/10',
			'data-[state=checked]:transition-colors',
			'data-[state=checked]:ring-inset dark:data-[state=checked]:ring-inset',
			'focus:outline-none'
		),
		interactive: 'disabled:pointer-events-none',
		sizing: ' h-[--heigth] w-[--width]',
		transition: 'transition-colors duration-200'
	},
	thumb: {
		sizing: 'size-[--thumb]',
		transition: clsx(
			'transition translate-x-[--padding] duration-200 ease-in-out',
			'data-[checked=true]:translate-x-[calc(var(--width)-var(--thumb)-var(--padding))]'
		),
		layout: 'flex justify-center items-center',
		border: 'rounded-full',
		background: 'bg-white',
		effect: 'shadow-sm'
	}
} satisfies Styles;
export const _switch = styles;

/** Props */
type Props = Omit<HTMLButtonAttributes, 'class'> &
	TransformKeysToKebab<Omit<CreateSwitchProps, 'checked'>>;
export interface SwitchProps extends BaseProps<typeof _switch>, Props {
	children?: Snippet;
	checked?: boolean;
	color?: string;
}
