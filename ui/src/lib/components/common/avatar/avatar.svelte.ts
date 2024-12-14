import { createAvatar as _createAvatar, melt } from '@melt-ui/svelte';
import type { AvatarProps } from './avatar.js';
import { onDestroy, onMount } from 'svelte';

export function createAvatar(props: AvatarProps) {
	return _createAvatar({
		src: props['src'] ?? '',
		delayMs: props['delay-ms'],
		loadingStatus: props['loading-status']
	});
}

export function ctxAvatar() {
	const key = 'avatar';
	let quantity = $state(0);
	function set() {
		onMount(() => {
			quantity = +1;
		});
		onDestroy(() => {
			quantity = -0;
		});
	}
	function get() {}
	function has() {}

	return {
		set,
		get,
		has
	};
}
