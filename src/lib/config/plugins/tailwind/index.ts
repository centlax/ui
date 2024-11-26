import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import type { Config } from 'tailwindcss';
import { defaultColors } from './colors.js';
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colorize from './colorize.js';

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
			colors: defaultColors,
			extend: {
				colors: {
					primary: {
						50: 'rgb(var(--color-primary-50) / <alpha-value>)',
						100: 'rgb(var(--color-primary-100) / <alpha-value>)',
						200: 'rgb(var(--color-primary-200) / <alpha-value>)',
						300: 'rgb(var(--color-primary-300) / <alpha-value>)',
						400: 'rgb(var(--color-primary-400) / <alpha-value>)',
						500: 'rgb(var(--color-primary-500) / <alpha-value>)',
						600: 'rgb(var(--color-primary-600) / <alpha-value>)',
						700: 'rgb(var(--color-primary-700) / <alpha-value>)',
						800: 'rgb(var(--color-primary-800) / <alpha-value>)',
						900: 'rgb(var(--color-primary-900) / <alpha-value>)',
						950: 'rgb(var(--color-primary-950) / <alpha-value>)'
					},
					neutral: {
						50: 'rgb(var(--color-neutral-50) / <alpha-value>)',
						100: 'rgb(var(--color-neutral-100) / <alpha-value>)',
						200: 'rgb(var(--color-neutral-200) / <alpha-value>)',
						300: 'rgb(var(--color-neutral-300) / <alpha-value>)',
						400: 'rgb(var(--color-neutral-400) / <alpha-value>)',
						500: 'rgb(var(--color-neutral-500) / <alpha-value>)',
						600: 'rgb(var(--color-neutral-600) / <alpha-value>)',
						700: 'rgb(var(--color-neutral-700) / <alpha-value>)',
						800: 'rgb(var(--color-neutral-800) / <alpha-value>)',
						900: 'rgb(var(--color-neutral-900) / <alpha-value>)',
						950: 'rgb(var(--color-neutral-950) / <alpha-value>)'
					},
					success: {
						50: 'rgb(var(--color-success-50) / <alpha-value>)',
						100: 'rgb(var(--color-success-100) / <alpha-value>)',
						200: 'rgb(var(--color-success-200) / <alpha-value>)',
						300: 'rgb(var(--color-success-300) / <alpha-value>)',
						400: 'rgb(var(--color-success-400) / <alpha-value>)',
						500: 'rgb(var(--color-success-500) / <alpha-value>)',
						600: 'rgb(var(--color-success-600) / <alpha-value>)',
						700: 'rgb(var(--color-success-700) / <alpha-value>)',
						800: 'rgb(var(--color-success-800) / <alpha-value>)',
						900: 'rgb(var(--color-success-900) / <alpha-value>)',
						950: 'rgb(var(--color-success-950) / <alpha-value>)'
					},
					warning: {
						50: 'rgb(var(--color-warning-50) / <alpha-value>)',
						100: 'rgb(var(--color-warning-100) / <alpha-value>)',
						200: 'rgb(var(--color-warning-200) / <alpha-value>)',
						300: 'rgb(var(--color-warning-300) / <alpha-value>)',
						400: 'rgb(var(--color-warning-400) / <alpha-value>)',
						500: 'rgb(var(--color-warning-500) / <alpha-value>)',
						600: 'rgb(var(--color-warning-600) / <alpha-value>)',
						700: 'rgb(var(--color-warning-700) / <alpha-value>)',
						800: 'rgb(var(--color-warning-800) / <alpha-value>)',
						900: 'rgb(var(--color-warning-900) / <alpha-value>)',
						950: 'rgb(var(--color-warning-950) / <alpha-value>)'
					},
					danger: {
						50: 'rgb(var(--color-danger-50) / <alpha-value>)',
						100: 'rgb(var(--color-danger-100) / <alpha-value>)',
						200: 'rgb(var(--color-danger-200) / <alpha-value>)',
						300: 'rgb(var(--color-danger-300) / <alpha-value>)',
						400: 'rgb(var(--color-danger-400) / <alpha-value>)',
						500: 'rgb(var(--color-danger-500) / <alpha-value>)',
						600: 'rgb(var(--color-danger-600) / <alpha-value>)',
						700: 'rgb(var(--color-danger-700) / <alpha-value>)',
						800: 'rgb(var(--color-danger-800) / <alpha-value>)',
						900: 'rgb(var(--color-danger-900) / <alpha-value>)',
						950: 'rgb(var(--color-danger-950) / <alpha-value>)'
					},
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
