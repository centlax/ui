import { omit } from '@melt-ui/svelte/internal/helpers';
import type { Action } from 'svelte/action';

type MeltElement = {
	action: Action;
	[key: string]: any;
};

export function eleTrigger(trigger: HTMLElement | null | undefined, melt: MeltElement) {
	let node: HTMLElement | null | undefined;

	if (trigger?.firstChild && trigger.firstChild instanceof HTMLElement) {
		node = trigger.firstChild;
	}

	if (node) {
		melt.action(node);
		Object.entries({ ...melt }).forEach(([key, value]) => node.setAttribute(key, value));
	}
}
