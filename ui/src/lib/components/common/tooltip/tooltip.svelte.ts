import type { CreateReturn } from '$lib/types/create.js';
import { createTooltip as create } from '@melt-ui/svelte';
import type { TooltipContentProps } from './elements/content.js';
import type { ToCamel } from '$lib/types/utils.js';
import type { TooltipContentProps as _T } from 'bits-ui';
import { getContext, hasContext, setContext } from 'svelte';

export function createTooltip() {
	return create({
		positioning: {
			placement: 'top'
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true
	});
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
