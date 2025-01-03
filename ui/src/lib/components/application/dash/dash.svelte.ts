import type { IconProps } from '$lib/components/website/icon/icon.js';
import type { SheetContentProps } from '../sheet/elements/content.js';
import type { DashAsideProps } from './elements/aside.js';

export function useDash() {
	/* ################################# */
	function layout() {}
	/* ################################# */
	function aside(props: DashAsideProps) {
		return {
			core: {},
			fixed: {
				class: ''
			},
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
	function header() {}

	function main() {}

	function footer() {}
	return {
		elements: {
			aside
		}
	};
}
