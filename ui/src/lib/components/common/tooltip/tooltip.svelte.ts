import { createTooltip as create } from '@melt-ui/svelte';
import type { TooltipProps } from './tooltip.js';

export function createTooltip(props: TooltipProps) {
	return create({
		positioning: props['float'] ?? { placement: 'top' },
		arrowSize: props['arrow-size'],
		escapeBehavior: props['escape-behavior'] ?? 'close',
		forceVisible: props['force-visible'] ?? false,
		portal: props['portal'] ?? 'body',
		closeOnPointerDown: props['close-on-pointer-down'] ?? true,
		openDelay: props['open-delay'],
		closeDelay: props['close-delay'],
		disableHoverableContent: props['disable-hoverable-content'] ?? false,
		group: props['group'],
		defaultOpen: props['default-open'] ?? false,
		open: props['open'],
		onOpenChange: props['on-open-change'],
		ids: props['ids']
	});
}
//
