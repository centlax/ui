import type { IconProps } from '$lib/components/website/icon/icon.js';
import type { SheetContentProps } from '../sheet/elements/content.js';
import type { DashAsideProps } from './elements/aside.js';

export function useDash() {
	/* ################################# */
	function aside(props: DashAsideProps) {
		return {
			core: {},
			fixed: {},
			sheet: {
				content: {
					from: 'west'
				} as SheetContentProps,
				close: {
					overlay: {},
					button: {},
					icon: {} as IconProps
				}
			}
		};
	}

	/* ################################# */
	return {
		elements: {
			aside
		}
	};
}
