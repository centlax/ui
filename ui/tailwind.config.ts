import type { Config } from 'tailwindcss';
import ui from './src/lib/config/plugins/tailwind';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [ui()]
} satisfies Config;
