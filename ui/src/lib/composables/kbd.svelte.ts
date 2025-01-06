type KbdKeysSpecificMap = {
	meta: string;
	alt: string;
	ctrl: string;
};

export const kbdKeysMap = {
	meta: '',
	ctrl: '',
	alt: '',
	win: '⊞',
	command: '⌘',
	shift: '⇧',
	option: '⌥',
	enter: '↵',
	delete: '⌦',
	backspace: '⌫',
	escape: '⎋',
	tab: '⇥',
	capslock: '⇪',
	arrowup: '↑',
	arrowright: '→',
	arrowdown: '↓',
	arrowleft: '←',
	pageup: '⇞',
	pagedown: '⇟',
	home: '↖',
	end: '↘'
};
export type KbdKey = keyof typeof kbdKeysMap;
export type KbdKeySpecific = keyof KbdKeysSpecificMap;

export function useKbd() {}
