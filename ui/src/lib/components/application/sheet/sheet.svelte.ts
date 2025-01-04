import { createDialog, type CreateDialogProps } from '@melt-ui/svelte';
import type { SheetRootProps } from './elements/root.js';
import { getContext, setContext } from 'svelte';
import type { SheetCloseProps } from './elements/close.js';

const key = Symbol('sheet');
export function useSheet(ctx: boolean = false) {
	const params = $state<CreateDialogProps>({});

	function set() {
		const sheet = createDialog(params);
		setContext(key, sheet);
		return sheet;
	}

	function get() {
		return getContext<ReturnType<typeof createDialog>>(key);
	}

	const sheet = ctx ? set() : get();

	return sheet;
}
