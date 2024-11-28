/** src/app.ts */
/** NOT IN USE YET. */
import type { UserConfig as UI } from '$lib/config/plugins/app/default.js';
export const primary = 'teal';

export default defineApp({
	modules: ['@centlax/ui'],
	ui: {
		colors: {
			primary: 'sky',
			neutral: 'warm'
		}
	}
});

function defineApp(config: { modules: string[]; ui: UI }) {
	return config;
}
