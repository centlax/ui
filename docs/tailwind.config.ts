import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import centlax from '@centlax/ui/tailwind';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@centlax/ui/dist/**/*.{html,js,svelte,ts}'
	],
	presets: [centlax()],
	plugins: [typography, forms, containerQueries]
} satisfies Config;
