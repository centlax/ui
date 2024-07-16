import { loadConfig } from 'unconfig';

export const { config, sources } = await loadConfig({
	sources: [
		// load from `my.config.xx`
		{
			files: 'ui.config',
			// default extensions
			extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', '']
		},
		// load `my` field in `package.json` if no above config files found
		{
			files: 'package.json',
			extensions: [],
			rewrite(config) {
				// @ts-ignore
				return config?.ui;
			}
		},
		// load inline config from `vite.config`
		{
			files: 'vite.config',
			async rewrite(config) {
				const resolved = await (typeof config === 'function' ? config() : config);
				return resolved?.my;
			}
		}
		// ...
	],
	// if false, the only the first matched will be loaded
	// if true, all matched will be loaded and deep merged
	merge: false
});
