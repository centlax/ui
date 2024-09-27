/** Imports */
import type { BaseProps } from '$lib/types/props.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const styles = {};
export const modal = styles;

type Props = HTMLAttributes<HTMLDivElement> & BaseProps;
export interface ModalProps extends Props {
	children?: Snippet;
	trigger?: Snippet;
	override?: boolean;
	value?: boolean;
	scroll?: boolean;
	outside?: boolean;
}
