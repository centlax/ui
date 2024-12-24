import { uify, type ToStrClass } from '$lib/utils/ui.js';
import { drawerHandle, type DrawerHandleProps } from './elements/handle.js';
import { type DrawerRootProps } from './elements/root.js';
import {
	type DrawerContentProps,
	type DrawerOverlayProps,
	type DrawerPortalProps
} from './elements/content.js';
import { drawerTrigger, type DrawerTriggerProps } from './elements/trigger.js';
import type { DrawerCloseProps } from './elements/close.js';

export function createDrawer() {
	function root(props: DrawerRootProps): DrawerRootProps {
		return {
			...props
		};
	}

	function portal<T extends DrawerPortalProps>(props: T): T {
		return props;
	}

	function overlay<T extends DrawerOverlayProps>(): T {
		return {} as T;
	}

	function content<T extends DrawerContentProps>(props: T): T {
		return props;
	}

	function trigger<T extends DrawerTriggerProps>(props: T): ToStrClass<T> {
		return {
			...props,
			class: uify(drawerTrigger, props.class, props.override)
		};
	}

	function close<T extends DrawerCloseProps>(props: T): ToStrClass<T> {
		return {
			...props,
			class: uify(drawerTrigger, props.class, props.override)
		};
	}

	function handle<T extends DrawerHandleProps>(props: T): ToStrClass<T> {
		return {
			...props,
			class: uify(drawerHandle, props.class, props.override)
		};
	}

	return {
		contexts: {},
		elements: {
			root,
			content,
			trigger,
			handle,
			portal,
			close,
			overlay: overlay()
		},
		states: {},
		options: {},
		helpers: {}
	};
}
