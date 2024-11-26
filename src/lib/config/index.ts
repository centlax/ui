import { defaultConfig, type DefaultConfig } from '$lib/config/plugins/app/default.js';
import merge from 'deepmerge';

import app from '../../app.js';

export function useApp() {
	return merge(defaultConfig, app.ui) as DefaultConfig;
}
