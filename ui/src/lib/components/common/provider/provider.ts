/** Imports */
import type { UserConfig } from '$lib/plugins/default.js';
import type { Snippet } from 'svelte';

/** Props */
export interface ProviderProps {
	children: Snippet;
	opts?: UserConfig
}
