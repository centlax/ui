/** Imports */
import type { Styles } from '$lib/types/ui.js';

/** Styles */
const styles = {
	overlay: {
		flex: 'fixed inset-0  z-50 transition-colors bg-black/50 backdrop-blur-sm'
	}
} satisfies Styles;
export const shared = styles;
