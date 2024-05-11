/** @type {import('tailwindcss').Config} */
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import { colors } from '@centlax/ui/theme/colors';
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts,md}',
		'./node_modules/@centlax/ui/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: colors
	},
	plugins: [
		require('@tailwindcss/forms'),
		iconsPlugin({
			collections: getIconCollections(['fluent', 'heroicons']),
			scale: 1.5
		})
	]
};
