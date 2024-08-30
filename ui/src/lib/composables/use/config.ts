import { config } from '$lib/config/ui.config.js';
export function useConfig(): typeof config {
	return config;
}
