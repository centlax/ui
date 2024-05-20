import { stylify } from '$lib/utils/index.js';

const flex = stylify({
	gap: {
		x: {
			xs: { flex: 'gap-x-1.5' },
			sm: { flex: 'gap-x-1.5' },
			md: { flex: 'gap-x-2' },
			lg: { flex: 'gap-x-2.5' },
			xl: { flex: 'gap-x-2.5' }
		}
	}
});

const grid = stylify({
	gap: {
		x: {
			xs: { grid: flex.gap.x.xs },
			sm: { grid: flex.gap.x.sm },
			md: { grid: flex.gap.x.md },
			lg: { grid: flex.gap.x.lg },
			xl: { grid: flex.gap.x.xl }
		}
	}
});

const typography = stylify({
	font: { typography: 'font-medium' },
	text: {
		xs: { typography: 'text-xs' },
		sm: { typography: 'text-sm' },
		md: { typography: 'text-sm' },
		lg: { typography: 'text-sm' },
		xl: { typography: 'text-base' }
	}
});

const border = stylify({
	rounded: { border: 'rounded-md' }
});

const spacing = stylify({
	padding: {
		rectangle: {
			xs: { spacing: 'px-2.5 py-1.5' },
			sm: { spacing: 'px-2.5 py-1.5' },
			md: { spacing: 'px-3 py-2' },
			lg: { spacing: 'px-3.5 py-2.5' },
			xl: { spacing: 'px-3.5 py-2.5' }
		},
		square: {
			xs: { spacing: 'p-1.5' },
			sm: { spacing: 'p-1.5' },
			md: { spacing: 'p-2' },
			lg: { spacing: 'p-2.5' },
			xl: { spacing: 'p-2.5' }
		}
	}
});

const sizing = stylify({
	icon: {
		xs: { sizing: 'size-4 dark:size-4' },
		sm: { sizing: 'size-4 dark:size-4' },
		md: { sizing: 'size-4 dark:size-4' },
		lg: { sizing: 'size-4 dark:size-4' },
		xl: { sizing: 'size-4 dark:size-4' }
	}
});

export const theme = {
	flex,
	grid,
	spacing,
	sizing,
	typography,
	border
};
