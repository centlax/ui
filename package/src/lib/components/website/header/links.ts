import type { Link } from '$lib/types/link.js';
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

const styles = {
	root: {},
	opt: {
		mode: {
			horizontal: {
				flex: 'flex items-center gap-x-6'
			},
			vertical: {
				flex: 'flex-col space-y-2'
			}
		}
	},
	list: {
		interactive: 'cursor-pointer',
		ancor: {
			typography: 'text-gray-900 dark:text-white text-sm font-semibold'
		}
	}
} satisfies Styles;
export const headerLinks = styles;

export const props = {
	class: {} as string | DeepStyles<typeof headerLinks>,
	override: false,
	vertical: false,
	links: [] as Link[]
} satisfies Props;
