import type { ComponentProps, Snippet } from 'svelte';
import SuperDebug from 'sveltekit-superforms';

const styles = {};
export const form = styles;

type Props = ComponentProps<SuperDebug>;

export interface XFormDebug extends Props {
	children?: Snippet;
}
