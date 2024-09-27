/** Imports */
import type { Styles } from '$lib/pkgs/utian/type.js';
import type { BaseProps } from '$lib/types/props.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const styles = {
	root: {}
} satisfies Styles;
export const sheet = styles;

type Props = HTMLAttributes<HTMLDivElement> & BaseProps;
export interface SheetProps extends Props {
	children?: Snippet;
	trigger?: Snippet;
	override?: boolean;
	value?: boolean;
	scroll?: boolean;
	outside?: boolean;
}
