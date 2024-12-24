import { uify, type ToStrClass } from '$lib/utils/ui.js';
import { resizeHandle, type ResizeHandleProps } from './elements/handle.js';
import { resizeLayout, type ResizeLayoutProps } from './elements/layout.js';
import { resizePanelGroup, type ResizePanelGroupProps } from './elements/p-group.js';
import { resizePanel, type ResizePanelProps } from './elements/panel.js';

export function createResize() {
	function layout(props: ResizeLayoutProps): ToStrClass<ResizeLayoutProps> {
		return {
			...props,
			class: uify(resizeLayout, props.class, props.override)
		};
	}

	function panel<T extends ResizePanelProps>(props: T): ToStrClass<T> {
		return {
			...props,
			class: uify(resizePanel, props.class, props.override)
		};
	}

	function groupPanel<T extends ResizePanelGroupProps>(props: T): ToStrClass<T> {
		return {
			...props,
			class: uify(resizePanelGroup, props.class, props.override)
		};
	}

	function handle<T extends ResizeHandleProps>(props: T): ToStrClass<T> {
		return {
			...props,
			class: uify(resizeHandle, props.class, props.override)
		};
	}

	return {
		contexts: {},
		elements: {
			layout,
			panel,
			groupPanel,
			handle
		},
		states: {},
		options: {},
		helpers: {}
	};
}
