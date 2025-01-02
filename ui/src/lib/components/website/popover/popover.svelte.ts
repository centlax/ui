import type { PopoverProps } from './elements/root.js';
import { createPopover as _createPopover, type CreatePopoverProps } from '@melt-ui/svelte';

const defaults: CreatePopoverProps = {
	positioning: {
		placement: 'bottom'
	},
	arrowSize: 8,
	defaultOpen: false,
	disableFocusTrap: false,
	escapeBehavior: 'close',
	preventScroll: false,
	onOpenChange: undefined,
	closeOnOutsideClick: true,
	portal: 'body',
	forceVisible: false,
	openFocus: undefined,
	closeFocus: undefined,
	onOutsideClick: undefined,
	preventTextSelectionOverflow: true
};

export function createPopover(props: PopoverProps) {
	const { elements, states, options } = _createPopover();

	return {
		elements,
		options,
		states
	};
}
