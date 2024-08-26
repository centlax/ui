import { type UserConfig, userConfig } from '$lib/composables/define/config.js';

export function useConfig(): UserConfig {
	// Load the configuration from an external source

	// Merge the loaded configuration with the userConfig
	const mergedConfig: UserConfig = {
		...userConfig,
	};

	// Return the merged configuration
	return mergedConfig;
}
