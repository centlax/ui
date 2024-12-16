import type {
	DrawerContentProps as Content,
	DrawerHandleProps as Handel,
	DrawerOverlayProps as Overlay,
	DrawerPortalProps as Portal,
	DrawerRootProps as Root,
	DrawerTriggerProps as Trigger
} from 'vaul-svelte';
import type { DrawerProps } from './drawer.js';

interface CreateDrawer {
	elements: {
		root: Root;
		trigger: Trigger;
		portal: Portal;
		overlay: Overlay;
		content: Content;
		handel: Handel;
	};
}

function dir(d: DrawerProps['from']): Root['direction'] {
	switch (d) {
		case 'east':
			return 'left';
		case 'west':
			return 'right';
		case 'north':
			return 'top';
		default:
			return 'bottom';
	}
}
export function createDrawer(props: DrawerProps): CreateDrawer {
	return {
		elements: {
			root: {
				direction: dir(props['from'])
			},
			trigger: {},
			portal: {},
			overlay: {},
			handel: {},
			content: {}
		}
	};
}
