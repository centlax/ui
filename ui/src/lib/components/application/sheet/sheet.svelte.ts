import { createDialog, type CreateDialogProps } from '@melt-ui/svelte';
import type { SheetRootProps } from './elements/root.js';
import { getContext, setContext } from 'svelte';
import type { SheetCloseProps } from './elements/close.js';

const key = Symbol('sheet');
export function useSheet(ctx: boolean = false) {
	const params = $state<CreateDialogProps>({});

	function set() {
		const accordion = createDialog(params);
		setContext(key, accordion);
		return createDialog();
	}

	function get() {
		return getContext<ReturnType<typeof createDialog>>(key);
	}

	function root(props: SheetRootProps) {
		params.onOpenChange = props['on-open-change'];
	}

	const sheet = ctx ? set() : get();

	return {
		elements: {
			...sheet.elements
		},
		states: {
			...sheet.states
		}
	};
}
