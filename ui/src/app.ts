/** src/app.ts */
/** NOT IN USE YET. */
import type { UserConfig as UI } from '$lib/config/default.js';
export const primary = 'teal';

export default defineApp({
	modules: ['@centlax/ui'],
	ui: {
		colors: {
			primary: 'fuchsia',
			neutral: 'warm'
		}
	}
});

function defineApp(config: { modules: string[]; ui: UI }) {
	return config;
}
