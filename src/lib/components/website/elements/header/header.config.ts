import type { Styles, Props, DeepStyles } from '$lib/types/utility.js';
import { drawer } from '$lib/components/common/overlays/drawer/drawer.config.js';

export const props = {
	class: {} as string | DeepStyles<typeof header>,
	override: false,
	open: false,
	name: '',
	href: '',
	links: [] as any[]
} as Props;

const styles = {
	drawer: {
		content: {
			background: 'bg-white dark:bg-gray-900',
			border: 'ring-1 sm:ring-gray-900/10',
			spacing: 'py-4 space-y-6',
			sizing: 'h-full w-full sm:max-w-sm'
		}
	} as DeepStyles<typeof drawer>,

	root: {
		layout: '[&_*[data-state=show]]:lg:flex [&_*[data-state=hide]]:flex',
		flex: ' [&_*[data-state=show]]:hidden [&_*[data-state=hide]]:lg:hidden'
	},
	nav: {
		flex: ' flex justify-between items-center gap-x-3',
		west: {
			flex: 'flex items-center ',
			typography: 'font-semibold text-lg'
		},
		center: {},
		east: {
			flex: 'flex items-center gap-x-6'
		}
	},
	mobile: {
		container: {
			spacing: 'space-y-4'
		},
		north: {
			flex: 'flex justify-between items-center'
		},
		center: {},
		south: {
			flex: 'flex justify-center items-center gap-x-5',
			spacing: 'mx-auto '
		}
	}
} satisfies Styles;
export const header = styles;
