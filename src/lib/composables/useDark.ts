import {
	toggleMode as toggle,
	mode,
	setMode as set,
	systemPrefersMode as system,
	userPrefersMode as user
} from 'mode-watcher';
import { config } from '$lib/ui.config.js';

export function useDark() {
	const icon = `${config.icon.light} ${config.icon.dark}`;
	return {
		system,
		mode,
		icon,
		user,
		toggle,
		set
	};
}
