import { uify, type ToStrClass } from '$lib/utils/ui.js';
import { cn, st } from '$lib/utils/wind.js';
import { overlay$, type OverlayProps } from './overlay.js';

export function useOverlay(props: OverlayProps) {
	return {
		elements: {
			root: {
				...props,
				class: uify(overlay$, props.class, props.override)
			} as ToStrClass<OverlayProps>
		}
	};
}
