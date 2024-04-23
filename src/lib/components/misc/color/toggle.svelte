<script lang="ts">
	import { toggleMode, mode as _mode } from 'mode-watcher';
	import { ui } from '$lib/ui.config.js';
	let icon = {
		dark: ui.icon.dark,
		light: ui.icon.light
	};
	let mode: 'dark' | 'light';
	$: mode = $_mode === 'dark' ? 'dark' : 'light';
</script>

<slot {toggleMode} {icon} {mode} />
