import { createSwitch as _createSwitch, type CreateSwitchProps } from '@melt-ui/svelte';
import type { SwitchProps } from './switch.js';

const defaults: CreateSwitchProps = {
	defaultChecked: false,
	disabled: false,
	required: false,
	name: '',
	value: ''
};

export function createSwitch(props: SwitchProps) {
	return _createSwitch({
		defaultChecked: props['default-checked'] ?? defaults['defaultChecked'],
		onCheckedChange: props['on-checked-change'] ?? defaults['onCheckedChange'],
		disabled: props['disabled'] ?? defaults['disabled'],
		required: props['required'] ?? defaults['required'],
		name: props['name'] ?? defaults['name'],
		value: props['value'] ?? defaults['value']
	});
}
