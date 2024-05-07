import type { HTMLFieldsetAttributes } from 'svelte/elements';
import type { InputProps } from '../input/input.props.js';
import type { FormPathLeaves } from 'sveltekit-superforms';
type T = Record<string, unknown>;

export interface FieldsetProps extends HTMLFieldsetAttributes {
	id?: InputProps['id'];
	color?: InputProps['color'];
	size?: InputProps['size'];
	label?: string;
	hint?: string | { message?: string; href?: string };
	errors?: string[];
	help?: string;
	required?: boolean;
	name?: FormPathLeaves<T>;
	value?: InputProps['value'];
}

export interface FieldsetContext {
	size?: FieldsetProps['size'];
	color?: FieldsetProps['color'];
	id?: FieldsetProps['id'];
	name?: FieldsetProps['name'];
	value?: FieldsetProps['value'];
}
