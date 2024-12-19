import type { TransformKeysToKebab as ToKebab } from '$lib/types/utils.js';
import type { DialogRootProps } from 'bits-ui';
import type { Snippet } from 'svelte';

export type ModalRootProps = ToKebab<DialogRootProps> & {
	content?: Snippet;
};

export function createModal() {
	function root(props: ModalRootProps): DialogRootProps {
		return {
			open: props['open'],
			onOpenChange: props['on-open-change'],
			controlledOpen: props['controlled-open']
		};
	}

	return {
		elements: {
			root
		}
	};
}
