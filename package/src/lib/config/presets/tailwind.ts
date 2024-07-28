import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors.js';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colorize from '../../config/plugins/tailwind.js';

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
					success: colors.green,
					warning: colors.yellow,
					danger: colors.red,
					color: {
						50: 'rgb(var(--color-50) / <alpha-value>)',
						100: 'rgb(var(--color-100) / <alpha-value>)',
						200: 'rgb(var(--color-200) / <alpha-value>)',
						300: 'rgb(var(--color-300) / <alpha-value>)',
						400: 'rgb(var(--color-400) / <alpha-value>)',
						500: 'rgb(var(--color-500) / <alpha-value>)',
						600: 'rgb(var(--color-600) / <alpha-value>)',
						700: 'rgb(var(--color-700) / <alpha-value>)',
						800: 'rgb(var(--color-800) / <alpha-value>)',
						900: 'rgb(var(--color-900) / <alpha-value>)',
						950: 'rgb(var(--color-950) / <alpha-value>)'
					}
				}
			}
		},
		plugins: [
			forms(),
			typography,
			colorize,
			iconsPlugin({
				collections: getIconCollections(['fluent']),
				scale: 1.5
			})
		]
	};
}
