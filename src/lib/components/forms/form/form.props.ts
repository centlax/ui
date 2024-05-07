import type { HTMLFormAttributes } from 'svelte/elements';
import type { SuperValidated } from 'sveltekit-superforms';

type T = Record<string, unknown>;

export interface FormProps extends HTMLFormAttributes {
	data: SuperValidated<T>;
	type?: 'form' | 'json';
	invalidate: boolean;
	debug?: boolean;
}
