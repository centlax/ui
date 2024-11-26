/** Imports */
import type { CreatePinInputProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex items-center gap-2'
	}
};
export const inputPin = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface InputPinProps extends Props {
	children: Snippet;
	default?: CreatePinInputProps['defaultValue'];
	placeholder?: CreatePinInputProps['placeholder'];
	value?: string[];
	name?: CreatePinInputProps['name'];
	disabled?: CreatePinInputProps['disabled'];
	length?: number;
	type?: CreatePinInputProps['type'];
	ids?: CreatePinInputProps['ids'];
}
