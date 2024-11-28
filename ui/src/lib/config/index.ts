import { defaultConfig, type DefaultConfig } from '$lib/config/default.js';
//import merge from 'deepmerge';

//import app from '../../app.js';

export function useApp() {
	return defaultConfig as DefaultConfig;
}
