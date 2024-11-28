import { defaultConfig, type DefaultConfig } from '$lib/config/default.js';

export function useApp() {
	return defaultConfig as DefaultConfig;
}
