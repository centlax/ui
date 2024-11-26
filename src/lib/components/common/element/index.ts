import { setContext, getContext, hasContext } from 'svelte';
import type { Action } from 'svelte/action';
import type { TransitionConfig } from 'svelte/transition';

type ElementContext = {
	attrs: Record<string, unknown>;
	action: Action<HTMLElement>;
	state?: boolean;
	transition?: {
		in?: (node: Element, params?: unknown) => TransitionConfig;
		out?: (node: Element, params?: unknown) => TransitionConfig;
	};
};

export function ctxElement() {
	// Store the context for the element
	function set(key: string, context: ElementContext) {
		setContext(key, context);
	}

	// Retrieve the context by key
	function get(key: string): ElementContext {
		return getContext<ElementContext>(key);
	}

	// Check if context exists
	function has(key: string) {
		return hasContext(key);
	}

	return {
		set,
		get,
		has
	};
}
