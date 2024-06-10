import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors.js';
export default function (): Partial<Config> {
	return {
		darkMode: 'class',
		content: [
			'./src/**/*.{html,js,svelte,ts}',
			'./node_modules/@centlax/ui/**/*.{html,js,svelte,ts}'
		],
		theme: {
			container: {
				center: true,
				padding: '2rem',
				screens: {
					'2xl': '1536px'
				}
			},
			extend: {
				colors: {
					primary: colors.sky,
					gray: colors.neutral,
					color: colors.sky,
					success: colors.green,
					warning: colors.yellow,
					danger: colors.red
				}
			}
		},
		plugins: [
			// eslint-disable-next-line @typescript-eslint/no-require-imports
			require('@tailwindcss/forms'),
			iconsPlugin({
				collections: getIconCollections(['fluent']),
				scale: 1.5
			})
		]
	};
}
