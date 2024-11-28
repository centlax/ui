/* import { getContext, hasContext, setContext } from 'svelte';
import {
	superForm,
	type FormFieldProxy,
	type FormOptions,
	type FormPathLeaves,
	type FormPathType,
	type SuperForm,
	type SuperValidated
} from 'sveltekit-superforms';

type OForm = Record<string, unknown>;

export function useForm<T extends OForm, M = unknown, In extends Record<string, unknown> = T>(
	schema: SuperValidated<T, M, In>,
	options?: FormOptions<T, M, In>
) {
	return superForm(schema, options);
}

export function ctxForm<T extends OForm, M = any, In extends Record<string, unknown> = T>() {
	type Form = SuperForm<T, M>;

	function set(form?: any) {
		setContext('form', form);
	}

	function get() {
		return getContext<Form>('form');
	}

	return {
		set,
		get
	};
}
export function ctxField<T extends OForm, M = any, In extends Record<string, unknown> = T>() {
	type Proxy = FormFieldProxy<FormPathType<T, FormPathLeaves<T>>, FormPathLeaves<T>>;

	function set(proxy: Proxy, name: string) {
		setContext('proxy', proxy);
		setContext('name', name);
	}

	function get() {
		return {
			proxy: getContext<Proxy>('proxy'),
			name: getContext<string>('name')
		};
	}

	function has() {
		return {
			proxy: hasContext('proxy'),
			name: hasContext('name')
		};
	}

	return {
		set,
		get,
		has
	};
}
 */
