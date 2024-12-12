import { createSelect, type CreateSelectProps } from '@melt-ui/svelte';
import type { ChooseProps } from './choose.js';

const defaults: CreateSelectProps = {
	positioning: {
		placement: 'bottom',
		fitViewport: true,
		sameWidth: true
	},
	scrollAlignment: 'nearest',
	loop: true,
	defaultOpen: false,
	closeOnOutsideClick: true,
	preventScroll: true,
	escapeBehavior: 'close',
	forceVisible: false,
	portal: 'body',
	disabled: false,
	required: false,
	name: undefined,
	typeahead: true,
	highlightOnHover: true,
	onOutsideClick: undefined,
	preventTextSelectionOverflow: true,
	rootElement: undefined
};
export function createChoose<T>(props: ChooseProps) {
	return createSelect<T>({
		forceVisible: props['force-visible'] ?? defaults['forceVisible'],
		positioning: props['float'] ?? defaults['positioning'],
		arrowSize: props['arrow-size'] ?? defaults['arrowSize'],
		scrollAlignment: props['scroll-alignment'] ?? defaults['scrollAlignment'],
		loop: props['loop'] ?? defaults['loop'],
		disabled: props['disabled'] ?? defaults['disabled'],
		required: props['required'] ?? defaults['required'],
		name: props['name'] ?? defaults['name'],
		defaultOpen: props['default-open'] ?? defaults['defaultOpen'],
		onOpenChange: props['on-open-change'] ?? defaults['onOpenChange']
	});
}
