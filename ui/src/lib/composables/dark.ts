import {
	mode,
	setMode as set,
	systemPrefersMode as system,
	toggleMode as toggle,
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
