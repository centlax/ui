/** @type {import('tailwindcss').Config} */
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import { colors } from './src/lib/theme/colors';
import forms from '@tailwindcss/forms';
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: colors
	},
	plugins: [
		forms({
			strategy: 'class'
		}),
		iconsPlugin({
			collections: getIconCollections(['fluent']),
			scale: 1.5
		})
	]
};
