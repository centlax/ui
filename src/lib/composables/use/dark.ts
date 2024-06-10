import {
	toggleMode as toggle,
	mode,
	setMode as set,
	systemPrefersMode as system,
	userPrefersMode as user
} from 'mode-watcher';

export function useDark() {
	return {
		system,
		mode,
		user,
		toggle,
		set
	};
}
