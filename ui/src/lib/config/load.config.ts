import { loadConfig as _loadConfig } from 'unconfig';

export async function loadUIConfig() {
	const { config, sources } = await _loadConfig({
		sources: [
			// Load from `ui.config.xx`
			{
				files: ['ui.config'],
				extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json']
			},
			// Load the `my` field from `package.json`
			{
				files: 'package.json',
				extensions: [],
				rewrite(config) {
					// eslint-disable-next-line ts/ban-ts-comment
					// @ts-expect-error
					return config?.ui;
				}
			},
			// Load inline config from `vite.config`
			{
				files: 'vite.config',
				async rewrite(config) {
					const resolved = await (typeof config === 'function' ? config() : config);
					return resolved?.ui;
				}
			}
		],
		// Merge configurations if multiple sources are found
		merge: true
	});

	console.info('Loaded Config:', config);
	console.info('Sources:', sources);
}
