import type { Config } from 'tailwindcss';
import utica from './src/lib/config/plugins/tailwind/preset';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [utica()]
} satisfies Config;
