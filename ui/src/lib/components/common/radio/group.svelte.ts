import { createRadioGroup as _createRadioGroup, type RadioGroup } from '@melt-ui/svelte';
import type { RadioGroupProps } from './group.js';
import { getContext, hasContext, setContext } from 'svelte';

export function createRadioGroup(props: RadioGroupProps) {
	return _createRadioGroup({
		defaultValue: 'one'
	});
}

export function ctxRadioGroup() {
	const key = 'radio-group';

	function set(input: RadioGroup) {
		setContext(key, input);
	}

	function get(): RadioGroup {
		return getContext<RadioGroup>(key);
	}
	function has(): boolean {
		return hasContext(key);
	}

	return {
		set,
		get,
		has
	};
}
