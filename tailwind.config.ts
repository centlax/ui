/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import forms from '@tailwindcss/forms';
import { generateSafelist, safelistColors } from './src/lib/theme/safelist';
import { colors } from './src/lib/theme/colors';

export default <Partial<Config>>{
	darkMode: 'class',
	safelist: [...generateSafelist(safelistColors)],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: colors
	},
	plugins: [
		forms({ strategy: 'class' }),
		iconsPlugin({
			collections: getIconCollections(['fluent', 'heroicons']),
			scale: 1.5
		})
	]
};
