import { createTooltip as create, type CreateTooltipProps } from '@melt-ui/svelte';
import type { TooltipContentProps as _T } from 'bits-ui';
import { getContext, hasContext, setContext } from 'svelte';

export function createTooltip() {
	return create;
}

const key = Symbol('tooltip');
export function ctxTooltip() {
	function set(tooltip: ReturnType<typeof createTooltip>) {
		setContext(key, tooltip);
	}

	function get(): ReturnType<typeof createTooltip> {
		return getContext(key);
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

export function useTooltip(root: boolean = false) {}
