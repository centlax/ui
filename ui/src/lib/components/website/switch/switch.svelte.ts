import { createSwitch as _createSwitch, type CreateSwitchProps } from '@melt-ui/svelte';
import type { SwitchProps } from './switch.js';
import type { CreateReturn } from '$lib/types/create.js';

const defaults: CreateSwitchProps = {
	defaultChecked: false,
	disabled: false,
	required: false,
	name: '',
	value: ''
};

export function bitSwitch(props: SwitchProps) {
	return {
		elements: {},
		contents: {},
		options: {},
		states: {},
		helpers: {}
	};
}
