import { melt, type Select } from '@melt-ui/svelte';
import { getContext, hasContext, setContext } from 'svelte';

type Option = Select['elements']['option'];
type Group = Select['elements']['group'];
type Title = Select['elements']['groupLabel'];

function ctx<T>(key: string) {
	function set(input: T) {
		setContext(key, input);
	}

	function get(): T {
		return getContext<T>(key);
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

export function ctxOption() {
	return {
		option: ctx<Option>('option'),
		group: ctx<Group>('option-group'),
		title: ctx<Title>('option-group-label')
	};
}
