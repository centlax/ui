import { config } from '$lib/config/default.js';
import type { Config } from '$lib/types/config.js';
export function useConfig(): Config {
	const merged = config;
	return merged;
}
