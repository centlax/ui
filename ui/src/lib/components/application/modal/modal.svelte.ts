import { createDialog } from '@melt-ui/svelte';
import type { ModalProps } from './modal.js';

export function createModal(props: ModalProps) {
	return createDialog({
		role: props['role'] ?? 'dialog',
		preventScroll: props['prevent-scroll'] ?? true,
		escapeBehavior: props['escape-behavior'] ?? 'close',
		closeOnOutsideClick: props['close-on-outside-click'] ?? true,
		portal: props['portal'] ?? 'body',
		forceVisible: props['force-visible'] ?? false,
		openFocus: props['open-focus'],
		closeFocus: props['close-focus'],
		defaultOpen: props['default-open'] ?? false
	});
}
