import centlax from './lib/config/plugins/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [centlax()],
	content: ['./lib/**/*.{html,js,svelte,ts}']
};
