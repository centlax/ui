import { omit } from '@melt-ui/svelte/internal/helpers';
import type { Action } from 'svelte/action';

type MeltElement = {
	action: Action;
	[key: string]: any;
};

export function nodate(node: HTMLElement | null, melt: MeltElement) {
	if (node) {
		// Apply the action to the node
		melt.action(node);

		// Use `omit` correctly to remove 'action' from melt properties
		const attributes = omit(melt, 'action');

		// Set the merged attributes on the node
		Object.entries(attributes).forEach(([key, value]) => {
			node.setAttribute(key, String(value)); // Ensure value is a string
		});
	}
}
