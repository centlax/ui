import type { Snippet } from 'svelte';
import type { HTMLFormAttributes } from 'svelte/elements';
import type { SuperForm } from 'sveltekit-superforms';

const styles = {};
export const form = styles;

export type OForm = Record<string, unknown>;

export interface FormProps<T extends OForm, M = unknown> extends HTMLFormAttributes {
	children?: Snippet;
	form?: Omit<SuperForm<T, M>, 'form'>;
}
