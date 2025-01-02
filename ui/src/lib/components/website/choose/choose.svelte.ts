import { createSelect, type CreateSelectProps } from '@melt-ui/svelte';

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

export function useChoose<T>() {
	return createSelect<T>();
}
