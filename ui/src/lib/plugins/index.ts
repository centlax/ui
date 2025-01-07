import { defaultConfig, type DefaultConfig, type UserConfig } from '$lib/plugins/default.js';
import { getContext, setContext } from 'svelte';

export const key = Symbol('config');

/**
 * Initializes or retrieves the app configuration within a Svelte component.
 * Must be used inside a Svelte component.
 * @param opts - Optional user configuration to override default settings.
 * @returns The application configuration.
 */
export function setApp(opts?: UserConfig): DefaultConfig {
	const appConfig = { ...defaultConfig, ...opts } as DefaultConfig;
	setContext(key, appConfig);
	return appConfig;
}

/**
 * Retrieves the app configuration from the Svelte context.
 * Must be used inside a Svelte component.
 * @returns The application configuration.
 */
export function useApp(): DefaultConfig {
	return getContext<DefaultConfig>(key) ?? defaultConfig;
}
