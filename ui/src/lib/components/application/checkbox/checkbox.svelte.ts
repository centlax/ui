import { createCheckbox as _createCheckbox, type CreateCheckboxProps } from '@melt-ui/svelte';
import type { CheckboxProps } from './checkbox.js';

const defaults: CreateCheckboxProps = {
	disabled: false,
	required: false,
	name: undefined,
	value: 'on',
	defaultChecked: false
};

export function createCheckbox(props: CheckboxProps) {
	return _createCheckbox({
		disabled: props['disabled'] ?? defaults['disabled'],
		required: props['required'] ?? defaults['required'],
		name: props['name'] ?? defaults['name'],
		value: props['value'] ?? defaults['value'],
		defaultChecked: props['default-checked'] ?? defaults['defaultChecked'],
		onCheckedChange: props['on-checked-change']
	});
}
