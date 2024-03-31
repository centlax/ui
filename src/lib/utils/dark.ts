import { browser } from '$app/environment';

type CMode = 'dark' | 'light';

export class UseDark {
	private colorMode: CMode;

	constructor() {
		this.colorMode = this.getInitialColorMode();
	}

	private getInitialColorMode(): CMode {
		if (browser) {
			const storedColorMode = window.localStorage.getItem('color-mode');

			if (storedColorMode === 'dark' || storedColorMode === 'light') {
				return storedColorMode;
			} else {
				const userPreference = this.getSystemPreference();
				window.localStorage.setItem('color-mode', userPreference);
				return userPreference;
			}
		} else {
			return 'light';
		}
	}

	private getSystemPreference(): CMode {
		if (window.matchMedia) {
			const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			return prefersDarkMode ? 'dark' : 'light';
		} else {
			return 'light';
		}
	}

	getMode(): CMode {
		return this.colorMode;
	}

	toggle() {
		this.colorMode = this.colorMode === 'light' ? 'dark' : 'light';
		window.localStorage.setItem('color-mode', this.colorMode);
		document.documentElement.classList.toggle('dark', this.colorMode === 'dark');
	}
}
