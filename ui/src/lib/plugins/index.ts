import { defaultConfig, type DefaultConfig } from '$lib/plugins/default.js';

export function useApp() {
	return defaultConfig as DefaultConfig;
}
