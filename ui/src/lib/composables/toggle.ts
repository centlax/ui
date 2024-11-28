import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';
import type { Action } from 'svelte/action';

/**
 * Defines a builder type with an action property.
 */
type SomeBuilder<Element, Param, Attributes extends Record<string, unknown>> = {
	action: Action<Element, Param, Attributes>;
};

/**
 * Provides utilities for managing toggleable states with context.
 */
export function useToggle<
	Builder extends SomeBuilder<Element, Param, A>,
	Element extends HTMLElement,
	A extends Record<string, unknown>,
	Param = never
>() {
	/**
	 * Sets the toggle context with the value and `on`/`off` builders.
	 */
	function set(value: Writable<boolean>, on: Builder, off: Builder) {
		setContext('value', value);
		setContext('on', on);
		setContext('off', off);
	}

	/**
	 * Retrieves the toggle context.
	 */
	function get() {
		const value = getContext<Writable<boolean>>('value');
		const on = getContext('on');
		const off = getContext('off');

		return {
			value,
			on,
			off
		};
	}

	return {
		set,
		get
	};
}
