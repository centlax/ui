import { createTooltip as create, type CreateTooltipProps } from '@melt-ui/svelte';

export function createTooltip() {
	return create;
}

const key = Symbol('tooltip');
export function useTooltip(opts: {}, ctx: boolean = false) {}
