/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import forms from '@tailwindcss/forms';
import { colors } from './src/lib/theme/colors';

export default <Partial<Config>>{
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: colors
	},
	plugins: [
		forms({ strategy: 'class' }),
		iconsPlugin({
			collections: getIconCollections(['fluent', 'heroicons', 'simple-icons']),
			scale: 1.5
		})
	]
};
