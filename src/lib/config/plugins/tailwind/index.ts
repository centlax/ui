import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colorize from './colorize.js';
import { _default } from './colors.js';

export default function (): Partial<Config> {
	return {
		darkMode: 'class',
		content: [
			'./src/**/*.{html,js,svelte,ts}',
			'./node_modules/@centlax/utica/**/*.{html,js,svelte,ts}'
		],
		theme: {
			container: {
				center: true,
				padding: '2rem',
				screens: {
					'2xl': '1536px'
				}
			},
			colors: _default,
			extend: {
				colors: {
					primary: {
						50: 'rgb(var(--color-primary-50, 240 249 255) / <alpha-value>)',
						100: 'rgb(var(--color-primary-100, 224 242 254) / <alpha-value>)',
						200: 'rgb(var(--color-primary-200, 186 230 253) / <alpha-value>)',
						300: 'rgb(var(--color-primary-300, 125 211 252) / <alpha-value>)',
						400: 'rgb(var(--color-primary-400, 56 189 248) / <alpha-value>)',
						500: 'rgb(var(--color-primary-500, 14 165 233) / <alpha-value>)',
						600: 'rgb(var(--color-primary-600, 2 132 199) / <alpha-value>)',
						700: 'rgb(var(--color-primary-700, 3 105 161) / <alpha-value>)',
						800: 'rgb(var(--color-primary-800, 7 89 133) / <alpha-value>)',
						900: 'rgb(var(--color-primary-900, 12 74 110) / <alpha-value>)',
						950: 'rgb(var(--color-primary-950, 8 47 73) / <alpha-value>)'
					},
					neutral: {
						50: 'rgb(var(--color-neutral-50, 250 250 250) / <alpha-value>)',
						100: 'rgb(var(--color-neutral-100, 245 245 245) / <alpha-value>)',
						200: 'rgb(var(--color-neutral-200, 229 229 229) / <alpha-value>)',
						300: 'rgb(var(--color-neutral-300, 212 212 212) / <alpha-value>)',
						400: 'rgb(var(--color-neutral-400, 163 163 163) / <alpha-value>)',
						500: 'rgb(var(--color-neutral-500, 115 115 115) / <alpha-value>)',
						600: 'rgb(var(--color-neutral-600, 82 82 82) / <alpha-value>)',
						700: 'rgb(var(--color-neutral-700, 64 64 64) / <alpha-value>)',
						800: 'rgb(var(--color-neutral-800, 38 38 38) / <alpha-value>)',
						900: 'rgb(var(--color-neutral-900, 23 23 23) / <alpha-value>)',
						950: 'rgb(var(--color-neutral-950, 10 10 10) / <alpha-value>)'
					},
					success: {
						50: 'rgb(var(--color-success-50,  240 253 244) / <alpha-value>)',
						100: 'rgb(var(--color-success-100, 220 252 231) / <alpha-value>)',
						200: 'rgb(var(--color-success-200, 187 247 208) / <alpha-value>)',
						300: 'rgb(var(--color-success-300, 134 239 172) / <alpha-value>)',
						400: 'rgb(var(--color-success-400, 74 222 128) / <alpha-value>)',
						500: 'rgb(var(--color-success-500, 34 197 94) / <alpha-value>)',
						600: 'rgb(var(--color-success-600, 22 163 74) / <alpha-value>)',
						700: 'rgb(var(--color-success-700, 21 128 61) / <alpha-value>)',
						800: 'rgb(var(--color-success-800, 22 101 52) / <alpha-value>)',
						900: 'rgb(var(--color-success-900, 20 83 45) / <alpha-value>)',
						950: 'rgb(var(--color-success-950,  5 46 22) / <alpha-value>)'
					},
					warning: {
						50: 'rgb(var(--color-warning-50, 255 251 235) / <alpha-value>)',
						100: 'rgb(var(--color-warning-100, 254 243 199) / <alpha-value>)',
						200: 'rgb(var(--color-warning-200, 253 230 138) / <alpha-value>)',
						300: 'rgb(var(--color-warning-300, 252 211 77) / <alpha-value>)',
						400: 'rgb(var(--color-warning-400, 251 191 36) / <alpha-value>)',
						500: 'rgb(var(--color-warning-500, 245 158 11) / <alpha-value>)',
						600: 'rgb(var(--color-warning-600, 217 119 6) / <alpha-value>)',
						700: 'rgb(var(--color-warning-700, 180 83 9) / <alpha-value>)',
						800: 'rgb(var(--color-warning-800, 146 64 14) / <alpha-value>)',
						900: 'rgb(var(--color-warning-900, 120 53 15) / <alpha-value>)',
						950: 'rgb(var(--color-warning-950, 69 26 3) / <alpha-value>)'
					},
					danger: {
						50: 'rgb(var(--color-danger-50, 254 242 242) / <alpha-value>)',
						100: 'rgb(var(--color-danger-100, 254 226 226) / <alpha-value>)',
						200: 'rgb(var(--color-danger-200, 254 202 202) / <alpha-value>)',
						300: 'rgb(var(--color-danger-300, 252 165 165) / <alpha-value>)',
						400: 'rgb(var(--color-danger-400, 248 113 113) / <alpha-value>)',
						500: 'rgb(var(--color-danger-500, 239 68 68) / <alpha-value>)',
						600: 'rgb(var(--color-danger-600, 220 38 38) / <alpha-value>)',
						700: 'rgb(var(--color-danger-700, 185 28 28) / <alpha-value>)',
						800: 'rgb(var(--color-danger-800, 153 27 27) / <alpha-value>)',
						900: 'rgb(var(--color-danger-900, 127 29 29) / <alpha-value>)',
						950: 'rgb(var(--color-danger-950, 69 10 10) / <alpha-value>)'
					},
					color: {
						50: 'rgb(var(--color-50, 240 249 255) / <alpha-value>)',
						100: 'rgb(var(--color-100, 224 242 254) / <alpha-value>)',
						200: 'rgb(var(--color-200, 186 230 253) / <alpha-value>)',
						300: 'rgb(var(--color-300, 125 211 252) / <alpha-value>)',
						400: 'rgb(var(--color-400, 56 189 248) / <alpha-value>)',
						500: 'rgb(var(--color-500, 14 165 233) / <alpha-value>)',
						600: 'rgb(var(--color-600, 2 132 199) / <alpha-value>)',
						700: 'rgb(var(--color-700, 3 105 161) / <alpha-value>)',
						800: 'rgb(var(--color-800, 7 89 133) / <alpha-value>)',
						900: 'rgb(var(--color-900, 12 74 110) / <alpha-value>)',
						950: 'rgb(var(--color-950, 8 47 73) / <alpha-value>)'
					}
				}
			}
		},
		plugins: [
			forms,
			typography,
			containerQueries,
			aspectRatio,
			colorize,
			iconsPlugin({
				collections: getIconCollections(['fluent']),
				scale: 1.5
			})
		]
	};
}
