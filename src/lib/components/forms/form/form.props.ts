import type { HTMLFormAttributes } from 'svelte/elements';
import type { SuperValidated, SuperForm } from 'sveltekit-superforms';

export interface FormProps extends HTMLFormAttributes {
	data?: any;
	debug?: boolean;
	use?: Function;
	form?: any;
}
