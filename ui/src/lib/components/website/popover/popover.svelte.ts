import type { PopoverProps } from './popover.js';
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
	return _createPopover({
		positioning: props['float'] ?? defaults['positioning'],
		disableFocusTrap: props['disable-focus-trap'],
		arrowSize: props['arrow-size'],
		escapeBehavior: props['escape-behavior'],
		closeOnOutsideClick: props['close-on-outside-click'] ?? defaults['closeOnOutsideClick'],
		preventScroll: props['prevent-scroll'],
		preventTextSelectionOverflow: props['prevent-text-selection-overflow'],
		portal: props['portal'] ?? 'body',
		forceVisible: props['force-visible'],
		openFocus: props['open-focus'],
		closeFocus: props['close-focus'],
		defaultOpen: props['default-open'],
		onOpenChange: props['on-open-change'],
		ids: props['ids']
	});
}
