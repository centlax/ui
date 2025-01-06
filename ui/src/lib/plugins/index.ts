import { defaultConfig, type DefaultConfig, type UserConfig } from '$lib/plugins/default.js';
import { getContext, hasContext, setContext } from 'svelte';

const key = Symbol('config');
export function useApp(opts?: UserConfig, ctx: boolean = false) {
	function set(): DefaultConfig {
		if (ctx && opts) {
			const app = { ...defaultConfig, ...opts } as DefaultConfig;
			setContext(key, app);
			return app;
		} else {
			return defaultConfig;
		}
	}
	function get(): DefaultConfig {
		if (hasContext(key)) {
			return getContext<DefaultConfig>(key);
		} else {
			return defaultConfig;
		}
	}

	return ctx ? set() : get();
}
