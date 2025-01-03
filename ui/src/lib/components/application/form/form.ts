import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
import Debug from './elements/debug.svelte';

type FormType = typeof Root & {
	Debug: SubComponent<typeof Debug>;
};

const Form = Root as FormType;
Form.Debug = Debug as FormType['Debug'];

export default Form;
